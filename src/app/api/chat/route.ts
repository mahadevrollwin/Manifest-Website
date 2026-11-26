import { answerLocally, followUpsFor, systemPrompt } from "@/lib/assistant/engine";
import { ATTACHMENT_LIMITS, type Attachment, type ChatMessage } from "@/lib/assistant/types";

const MAX_BODY_BYTES = 4_000_000; // stays under the serverless request body limit

const MAX_MESSAGES = 20;
const MAX_CONTENT = 2000;
const RATE_LIMIT = 20; // requests per window, per client
const WINDOW_MS = 60_000;

// Best-effort, per-instance rate limiting. Put a shared limiter (for example Vercel KV or Upstash) in front for strict limits.
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return recent.length > RATE_LIMIT;
}

function parseAttachments(value: unknown): Attachment[] | null {
  if (value === undefined) return [];
  if (!Array.isArray(value) || value.length > ATTACHMENT_LIMITS.maxFiles) return null;
  const out: Attachment[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object") return null;
    const { name, kind, size, dataUrl, text } = item as Record<string, unknown>;
    if (typeof name !== "string" || (kind !== "image" && kind !== "text" && kind !== "file")) return null;
    const attachment: Attachment = { name: name.slice(0, 120), kind };
    if (typeof size === "number") attachment.size = size;
    if (kind === "image" && dataUrl !== undefined) {
      if (
        typeof dataUrl !== "string" ||
        dataUrl.length > ATTACHMENT_LIMITS.maxDataUrlChars ||
        !/^data:image\/(jpeg|png|webp|gif);base64,[A-Za-z0-9+/=]+$/.test(dataUrl)
      ) {
        return null;
      }
      attachment.dataUrl = dataUrl;
    }
    if (kind === "text" && typeof text === "string") attachment.text = text.slice(0, ATTACHMENT_LIMITS.maxTextChars);
    out.push(attachment);
  }
  return out;
}

function parseMessages(body: unknown): ChatMessage[] | null {
  if (!body || typeof body !== "object" || !("messages" in body) || !Array.isArray(body.messages)) return null;
  const messages: ChatMessage[] = [];
  for (const m of body.messages.slice(-MAX_MESSAGES)) {
    if (!m || typeof m !== "object") return null;
    const { role, content, attachments } = m as { role?: unknown; content?: unknown; attachments?: unknown };
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") return null;
    const parsed = role === "user" ? parseAttachments(attachments) : [];
    if (!parsed) return null;
    messages.push({ role, content: content.slice(0, MAX_CONTENT), ...(parsed.length ? { attachments: parsed } : {}) });
  }
  const last = messages.at(-1);
  if (!last || last.role !== "user" || (!last.content.trim() && !last.attachments?.length)) return null;
  return messages;
}

/** Converts a message into the OpenAI-compatible shape, adding images and text-file contents for the newest user message. */
function toModelMessage(m: ChatMessage, includeFiles: boolean) {
  if (m.role !== "user" || !m.attachments?.length) return { role: m.role, content: m.content };
  const notes: string[] = [];
  const images: { type: "image_url"; image_url: { url: string } }[] = [];
  for (const a of m.attachments) {
    if (a.kind === "image" && a.dataUrl && includeFiles) images.push({ type: "image_url", image_url: { url: a.dataUrl } });
    else if (a.kind === "text" && a.text && includeFiles) notes.push(`[Attached file "${a.name}"]\n${a.text}`);
    else notes.push(`[Attached file "${a.name}" — its contents are not available to you; say so if asked about it.]`);
  }
  const text = [m.content, ...notes].filter(Boolean).join("\n\n") || "(no message)";
  if (!images.length) return { role: m.role, content: text };
  return { role: m.role, content: [{ type: "text", text }, ...images] };
}

const encoder = new TextEncoder();

function followUpTrailer(followUps: string[]) {
  return followUps.length ? `\n<!--followups:${JSON.stringify(followUps)}-->` : "";
}

/** Streams a prepared answer word by word so the built-in engine feels as live as a model. */
function streamText(text: string, followUps: string[], engine: string) {
  const parts = text.match(/\S+\s*|\s+/g) ?? [text];
  let i = 0;
  const stream = new ReadableStream<Uint8Array>({
    async pull(controller) {
      if (i >= parts.length) {
        controller.enqueue(encoder.encode(followUpTrailer(followUps)));
        controller.close();
        return;
      }
      const chunk = parts.slice(i, i + 2).join("");
      i += 2;
      controller.enqueue(encoder.encode(chunk));
      await new Promise((r) => setTimeout(r, 18));
    },
  });
  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Chat-Engine": engine },
  });
}

/** Streams a reply from any OpenAI-compatible chat completions API. */
async function streamFromModel(messages: ChatMessage[], signal: AbortSignal) {
  const apiKey = process.env.AI_API_KEY ?? process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  const baseUrl = (process.env.AI_BASE_URL ?? "https://api.openai.com/v1").replace(/\/$/, "");
  const model = process.env.AI_MODEL ?? "gpt-4o-mini";

  const upstream = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model,
      stream: true,
      temperature: 0.3,
      max_tokens: 600,
      messages: [
        { role: "system", content: systemPrompt() },
        ...messages.map((m, i) => toModelMessage(m, i === messages.length - 1)),
      ],
    }),
    signal,
  });
  if (!upstream.ok || !upstream.body) throw new Error(`Upstream ${upstream.status}`);

  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  const followUps = followUpsFor(messages);

  const stream = new ReadableStream<Uint8Array>({
    async pull(controller) {
      try {
        for (;;) {
          const { done, value } = await reader.read();
          if (done) {
            controller.enqueue(encoder.encode(followUpTrailer(followUps)));
            controller.close();
            return;
          }
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          let out = "";
          for (const line of lines) {
            const data = line.replace(/^data:\s*/, "").trim();
            if (!data || data === "[DONE]" || !line.startsWith("data:")) continue;
            try {
              const delta = JSON.parse(data).choices?.[0]?.delta?.content;
              if (typeof delta === "string") out += delta;
            } catch {
              // ignore malformed keep-alive lines
            }
          }
          if (out) {
            controller.enqueue(encoder.encode(out));
            return;
          }
        }
      } catch (error) {
        controller.error(error);
      }
    },
    cancel() {
      reader.cancel().catch(() => {});
    },
  });
  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Chat-Engine": "model" },
  });
}

export async function POST(request: Request) {
  const client = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
  if (rateLimited(client)) {
    return Response.json({ error: "Too many messages. Please wait a moment and try again." }, { status: 429 });
  }

  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return Response.json({ error: "Those attachments are too large. Please attach smaller files." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  const messages = parseMessages(body);
  if (!messages) return Response.json({ error: "Invalid messages." }, { status: 400 });

  try {
    const modelResponse = await streamFromModel(messages, request.signal);
    if (modelResponse) return modelResponse;
  } catch {
    // Fall through to the built-in engine so the chat keeps working if the AI provider is down.
  }

  const reply = answerLocally(messages);
  return streamText(reply.text, reply.followUps, "local");
}
