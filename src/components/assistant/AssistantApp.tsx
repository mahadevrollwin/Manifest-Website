"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUp,
  BadgeCheck,
  Building2,
  CalendarCheck,
  Check,
  Coins,
  Copy,
  FileText,
  MessageCircle,
  Menu,
  Mic,
  Paperclip,
  Phone,
  Plus,
  RefreshCw,
  Scale,
  Sparkles,
  Square,
  Trash2,
  X,
} from "lucide-react";
import { Markdown } from "./Markdown";
import { ACCEPT, formatSize, readAttachment, type PendingAttachment } from "./files";
import { useSpeechInput } from "./useSpeechInput";
import { site } from "@/content/site";
import { starterPrompts } from "@/lib/assistant/starters";
import { ATTACHMENT_LIMITS, type Attachment } from "@/lib/assistant/types";

type Msg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  attachments?: Attachment[];
  followUps?: string[];
  error?: string;
};

/** Attachment contents are kept in memory only, never in localStorage. */
function stripFileData(convos: Convo[]): Convo[] {
  return convos.map((c) => ({
    ...c,
    messages: c.messages.map((m) =>
      m.attachments
        ? { ...m, attachments: m.attachments.map(({ name, kind, size }) => ({ name, kind, size })) }
        : m,
    ),
  }));
}

type Convo = { id: string; title: string; updatedAt: number; messages: Msg[] };

const STORAGE_KEY = "manifest-ai-chats-v1";
const MAX_LENGTH = 2000;
const MAX_CONVOS = 30;
const starterIcons = [Building2, Scale, Coins, BadgeCheck];

const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
const visibleText = (raw: string) => raw.split("<!--")[0].trimEnd();

function titleFrom(text: string) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > 42 ? `${clean.slice(0, 42)}…` : clean;
}

export function AssistantApp() {
  const [convos, setConvos] = useState<Convo[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [attachments, setAttachments] = useState<PendingAttachment[]>([]);
  const [reading, setReading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const speech = useSpeechInput();
  const { stop: stopSpeech } = speech;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const stickRef = useRef(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const active = convos.find((c) => c.id === activeId) ?? null;
  const messages = useMemo(() => active?.messages ?? [], [active]);

  // Load saved chats from this browser.
  useEffect(() => {
    // localStorage only exists in the browser, so it is read after mount.
    queueMicrotask(() => {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
        if (Array.isArray(saved)) setConvos(saved as Convo[]);
      } catch {
        // ignore corrupted storage
      }
      setReady(true);
    });
  }, []);

  // Persist chats (skipped while a reply is streaming).
  useEffect(() => {
    if (!ready || busy) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stripFileData(convos.slice(0, MAX_CONVOS))));
    } catch {
      // storage may be full or blocked
    }
  }, [convos, ready, busy]);

  // Keep the newest message in view unless the user scrolled up.
  useEffect(() => {
    const el = scrollRef.current;
    if (el && stickRef.current) el.scrollTop = el.scrollHeight;
  }, [messages]);

  // Grow the composer with its content.
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 180)}px`;
  }, [input]);

  const patchMessage = useCallback((convoId: string, msgId: string, patch: Partial<Msg>) => {
    setConvos((prev) =>
      prev.map((c) =>
        c.id === convoId
          ? { ...c, updatedAt: Date.now(), messages: c.messages.map((m) => (m.id === msgId ? { ...m, ...patch } : m)) }
          : c,
      ),
    );
  }, []);

  const stream = useCallback(
    async (convoId: string, history: Msg[], botId: string) => {
      const controller = new AbortController();
      abortRef.current = controller;
      setBusy(true);
      stickRef.current = true;
      let raw = "";
      try {
        const res = await fetch("/api/chat/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            messages: history
              .filter((m) => (m.content || m.attachments?.length) && !m.error)
              .map(({ role, content, attachments }, index, list) => ({
                role,
                content,
                // Only the newest message carries file contents; earlier ones keep just the file names.
                ...(attachments?.length
                  ? {
                      attachments: attachments.map((a) =>
                        index === list.length - 1 ? a : { name: a.name, kind: a.kind, size: a.size },
                      ),
                    }
                  : {}),
              })),
          }),
        });
        if (!res.ok || !res.body) {
          const data = await res.json().catch(() => null);
          throw new Error(data?.error ?? "Something went wrong. Please try again.");
        }
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          raw += decoder.decode(value, { stream: true });
          patchMessage(convoId, botId, { content: visibleText(raw) });
        }
        raw += decoder.decode();
        let followUps: string[] = [];
        const trailer = raw.match(/<!--followups:([\s\S]*?)-->/);
        if (trailer) {
          try {
            const parsed = JSON.parse(trailer[1]);
            if (Array.isArray(parsed)) followUps = parsed.filter((q): q is string => typeof q === "string").slice(0, 3);
          } catch {
            // ignore malformed trailer
          }
        }
        patchMessage(convoId, botId, { content: visibleText(raw), followUps });
      } catch (error) {
        const aborted = error instanceof DOMException && error.name === "AbortError";
        if (aborted) {
          patchMessage(convoId, botId, { content: visibleText(raw) || "Response stopped." });
        } else {
          patchMessage(convoId, botId, {
            content: visibleText(raw),
            error: error instanceof Error ? error.message : "Something went wrong. Please try again.",
          });
        }
      } finally {
        abortRef.current = null;
        setBusy(false);
      }
    },
    [patchMessage],
  );

  const send = useCallback(
    async (raw: string, withFiles = false) => {
      const text = raw.trim().slice(0, MAX_LENGTH);
      const files = withFiles ? attachments : [];
      if ((!text && files.length === 0) || busy || reading) return;
      stopSpeech();
      setInput("");
      setAttachments([]);
      setNotice(null);
      setSidebarOpen(false);

      const convoId = activeId ?? uid();
      const userMsg: Msg = {
        id: uid(),
        role: "user",
        content: text,
        ...(files.length ? { attachments: files.map(({ name, kind, size, dataUrl, text: fileText }) => ({ name, kind, size, dataUrl, text: fileText })) } : {}),
      };
      const botMsg: Msg = { id: uid(), role: "assistant", content: "" };
      const history = [...(active?.messages ?? []), userMsg];

      setConvos((prev) => {
        const existing = prev.find((c) => c.id === convoId);
        if (existing) {
          return prev.map((c) =>
            c.id === convoId ? { ...c, updatedAt: Date.now(), messages: [...history, botMsg] } : c,
          );
        }
        return [
          { id: convoId, title: titleFrom(text || files[0]?.name || "Attachment"), updatedAt: Date.now(), messages: [...history, botMsg] },
          ...prev,
        ];
      });
      setActiveId(convoId);
      await stream(convoId, history, botMsg.id);
    },
    [active, activeId, attachments, busy, reading, stopSpeech, stream],
  );

  const addFiles = async (list: FileList | null) => {
    if (!list || list.length === 0) return;
    const picked = Array.from(list);
    if (fileInputRef.current) fileInputRef.current.value = "";
    const room = ATTACHMENT_LIMITS.maxFiles - attachments.length;
    if (room <= 0) {
      setNotice(`You can attach up to ${ATTACHMENT_LIMITS.maxFiles} files per message.`);
      return;
    }
    setReading(true);
    setNotice(picked.length > room ? `Only ${ATTACHMENT_LIMITS.maxFiles} files can be attached per message.` : null);
    const added: PendingAttachment[] = [];
    const errors: string[] = [];
    for (const file of picked.slice(0, room)) {
      const result = await readAttachment(file);
      if (result.attachment) added.push(result.attachment);
      else if (result.error) errors.push(result.error);
    }
    setAttachments((prev) => [...prev, ...added]);
    if (errors.length) setNotice(errors.join(" "));
    setReading(false);
  };

  const removeAttachment = (id: string) => setAttachments((prev) => prev.filter((a) => a.id !== id));

  const toggleVoice = () => {
    if (speech.listening) {
      speech.stop();
      return;
    }
    setNotice(null);
    const base = input.trim();
    speech.start((transcript) => {
      setInput((base ? `${base} ${transcript}` : transcript).slice(0, MAX_LENGTH));
    });
  };

  const regenerate = useCallback(async () => {
    if (!active || busy) return;
    const lastUser = active.messages.map((m) => m.role).lastIndexOf("user");
    if (lastUser < 0) return;
    const history = active.messages.slice(0, lastUser + 1);
    const botMsg: Msg = { id: uid(), role: "assistant", content: "" };
    setConvos((prev) =>
      prev.map((c) => (c.id === active.id ? { ...c, updatedAt: Date.now(), messages: [...history, botMsg] } : c)),
    );
    await stream(active.id, history, botMsg.id);
  }, [active, busy, stream]);

  const stop = () => abortRef.current?.abort();

  const newChat = () => {
    if (busy) abortRef.current?.abort();
    stopSpeech();
    setActiveId(null);
    setInput("");
    setAttachments([]);
    setNotice(null);
    setSidebarOpen(false);
    textareaRef.current?.focus();
  };

  const openChat = (id: string) => {
    if (busy) abortRef.current?.abort();
    setActiveId(id);
    setSidebarOpen(false);
    stickRef.current = true;
  };

  const removeChat = (id: string) => {
    if (id === activeId && busy) abortRef.current?.abort();
    setConvos((prev) => prev.filter((c) => c.id !== id));
    if (id === activeId) setActiveId(null);
  };

  const copy = async (msg: Msg) => {
    try {
      await navigator.clipboard.writeText(msg.content);
      setCopiedId(msg.id);
      setTimeout(() => setCopiedId((current) => (current === msg.id ? null : current)), 1600);
    } catch {
      // clipboard unavailable
    }
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (el) stickRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 140;
  };

  const lastIndex = messages.length - 1;
  const sortedConvos = [...convos].sort((a, b) => b.updatedAt - a.updatedAt);

  return (
    <div className="flex h-dvh overflow-hidden bg-olive-night text-ivory">
      {/* Sidebar */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[19rem] max-w-[85vw] flex-col border-r border-white/10 bg-olive-deep transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <Link href="/" className="inline-flex flex-col leading-none text-ivory" aria-label="Manifest Business Services — website">
            <span className="text-[1.25rem] font-bold tracking-[0.18em]">MANIFEST</span>
            <span className="mt-1.5 text-[0.55rem] font-medium tracking-[0.3em] text-champagne">AI ASSISTANT</span>
          </Link>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="flex size-9 items-center justify-center text-ivory/70 hover:text-ivory lg:hidden"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="px-4">
          <button
            type="button"
            onClick={newChat}
            className="flex w-full items-center gap-2.5 border border-champagne/40 bg-champagne/10 px-4 py-3 text-[0.92rem] font-semibold text-champagne-light transition-colors hover:bg-champagne hover:text-ink"
          >
            <Plus className="size-4" aria-hidden />
            New chat
          </button>
        </div>

        <nav aria-label="Chat history" className="mt-5 min-h-0 flex-1 overflow-y-auto px-2 pb-4">
          <p className="px-3 pb-2 text-[0.68rem] font-semibold tracking-[0.2em] text-ivory/45 uppercase">Recent chats</p>
          {sortedConvos.length === 0 ? (
            <p className="px-3 text-sm text-ivory/45">Your conversations will appear here.</p>
          ) : (
            <ul className="space-y-0.5">
              {sortedConvos.map((c) => (
                <li key={c.id} className="group relative">
                  <button
                    type="button"
                    onClick={() => openChat(c.id)}
                    aria-current={c.id === activeId ? "true" : undefined}
                    className={`block w-full truncate py-2.5 pr-10 pl-3 text-left text-[0.9rem] transition-colors ${
                      c.id === activeId ? "bg-white/10 text-ivory" : "text-ivory/70 hover:bg-white/5 hover:text-ivory"
                    }`}
                  >
                    {c.title}
                  </button>
                  <button
                    type="button"
                    onClick={() => removeChat(c.id)}
                    aria-label={`Delete chat: ${c.title}`}
                    className="absolute top-1/2 right-1.5 flex size-8 -translate-y-1/2 items-center justify-center text-ivory/45 opacity-100 transition hover:text-champagne focus-visible:opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>

        <div className="space-y-2 border-t border-white/10 p-4">
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-ivory/45 uppercase">Speak to an adviser</p>
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 py-1.5 text-[0.9rem] text-ivory/80 hover:text-champagne"
          >
            <MessageCircle className="size-4 text-champagne" aria-hidden /> WhatsApp us
          </a>
          <a href={site.phoneHref} className="flex items-center gap-2.5 py-1.5 text-[0.9rem] text-ivory/80 hover:text-champagne">
            <Phone className="size-4 text-champagne" aria-hidden /> {site.phoneDisplay}
          </a>
          <a
            href="/contact-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 py-1.5 text-[0.9rem] text-ivory/80 hover:text-champagne"
          >
            <CalendarCheck className="size-4 text-champagne" aria-hidden /> Book free consultation
          </a>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              className="flex size-10 items-center justify-center text-ivory/80 hover:text-champagne lg:hidden"
            >
              <Menu className="size-5" />
            </button>
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center bg-champagne text-ink">
                <Sparkles className="size-4" aria-hidden />
              </span>
              <div className="leading-tight">
                <p className="text-[0.95rem] font-semibold">Manifest AI</p>
                <p className="flex items-center gap-1.5 text-[0.72rem] text-ivory/55">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden /> Online
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={newChat}
              className="hidden items-center gap-2 border border-white/15 px-3.5 py-2 text-[0.85rem] font-medium text-ivory/80 transition-colors hover:border-champagne hover:text-champagne sm:inline-flex"
            >
              <Plus className="size-4" aria-hidden /> New chat
            </button>
            <Link
              href="/"
              className="inline-flex items-center border border-white/15 px-3.5 py-2 text-[0.85rem] font-medium text-ivory/80 transition-colors hover:border-champagne hover:text-champagne"
            >
              Visit website
            </Link>
          </div>
        </header>

        <div ref={scrollRef} onScroll={onScroll} className="min-h-0 flex-1 overflow-y-auto scroll-smooth">
          {messages.length === 0 ? (
            <div className="mx-auto flex min-h-full max-w-3xl flex-col items-center justify-center px-5 py-10 text-center">
              <span className="flex size-14 items-center justify-center bg-champagne text-ink">
                <Sparkles className="size-7" aria-hidden />
              </span>
              <h1 className="mt-6 text-[1.9rem] leading-tight font-semibold tracking-tight sm:text-[2.4rem]">
                How can we help you set up in Dubai?
              </h1>
              <p className="mt-3 max-w-xl text-[1rem] leading-relaxed text-ivory/65">
                Ask about company formation, visas, banking, PRO services, tax and attestation. Get instant answers from the
                Manifest team&rsquo;s knowledge.
              </p>
              <div className="mt-9 grid w-full gap-3 text-left sm:grid-cols-2">
                {starterPrompts.map((prompt, i) => {
                  const Icon = starterIcons[i % starterIcons.length];
                  return (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => send(prompt)}
                      className="group flex items-start gap-3.5 border border-white/12 bg-white/[0.04] p-4 transition-colors hover:border-champagne/60 hover:bg-white/[0.08]"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center bg-champagne/15 text-champagne">
                        <Icon className="size-[1.1rem]" aria-hidden />
                      </span>
                      <span className="pt-1 text-left text-[0.95rem] leading-snug font-medium text-ivory/90 group-hover:text-ivory">
                        {prompt}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div role="log" aria-live="polite" aria-busy={busy} className="mx-auto w-full max-w-3xl space-y-7 px-4 py-8 sm:px-6">
              {messages.map((m, i) => {
                const isLast = i === lastIndex;
                if (m.role === "user") {
                  return (
                    <div key={m.id} className="flex flex-col items-end gap-2">
                      {m.attachments && m.attachments.length > 0 && (
                        <ul className="flex max-w-[85%] flex-wrap items-start justify-end gap-2">
                          {m.attachments.map((a, ai) => (
                            <li key={ai} className="overflow-hidden border border-champagne/40 bg-white/[0.06]">
                              {a.kind === "image" && a.dataUrl ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={a.dataUrl} alt={a.name} className="max-h-40 max-w-[14rem] object-cover" />
                              ) : (
                                <span className="flex items-center gap-2 px-3 py-2 text-[0.8rem] text-ivory/85">
                                  <FileText className="size-4 shrink-0 text-champagne" aria-hidden />
                                  <span className="max-w-[10rem] truncate">{a.name}</span>
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                      {m.content && (
                        <p className="max-w-[85%] bg-champagne px-4 py-3 text-[0.95rem] leading-relaxed whitespace-pre-wrap text-ink">
                          {m.content}
                        </p>
                      )}
                    </div>
                  );
                }
                const waiting = busy && isLast && !m.content && !m.error;
                return (
                  <div key={m.id} className="flex gap-3.5">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center border border-champagne/50 text-champagne">
                      <Sparkles className="size-4" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      {waiting ? (
                        <div className="flex h-8 items-center gap-1.5" aria-label="Manifest AI is typing">
                          {[0, 1, 2].map((d) => (
                            <span
                              key={d}
                              className="size-2 animate-bounce rounded-full bg-champagne/80"
                              style={{ animationDelay: `${d * 150}ms` }}
                            />
                          ))}
                        </div>
                      ) : (
                        m.content && <Markdown text={m.content} />
                      )}

                      {m.error && (
                        <div className="mt-2 flex flex-wrap items-center gap-3 border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                          <span>{m.error}</span>
                          {isLast && !busy && (
                            <button
                              type="button"
                              onClick={regenerate}
                              className="inline-flex items-center gap-1.5 font-semibold text-champagne hover:underline"
                            >
                              <RefreshCw className="size-3.5" aria-hidden /> Try again
                            </button>
                          )}
                        </div>
                      )}

                      {m.content && !m.error && !(busy && isLast) && (
                        <div className="mt-3 flex items-center gap-1 text-ivory/50">
                          <button
                            type="button"
                            onClick={() => copy(m)}
                            aria-label="Copy answer"
                            className="flex items-center gap-1.5 px-2 py-1.5 text-xs transition-colors hover:text-champagne"
                          >
                            {copiedId === m.id ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                            {copiedId === m.id ? "Copied" : "Copy"}
                          </button>
                          {isLast && (
                            <button
                              type="button"
                              onClick={regenerate}
                              aria-label="Regenerate answer"
                              className="flex items-center gap-1.5 px-2 py-1.5 text-xs transition-colors hover:text-champagne"
                            >
                              <RefreshCw className="size-3.5" /> Regenerate
                            </button>
                          )}
                        </div>
                      )}

                      {isLast && !busy && !m.error && m.followUps && m.followUps.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {m.followUps.map((q) => (
                            <button
                              key={q}
                              type="button"
                              onClick={() => send(q)}
                              className="border border-champagne/35 px-3.5 py-2 text-left text-[0.85rem] text-champagne-light transition-colors hover:bg-champagne hover:text-ink"
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="shrink-0 px-4 pt-2 pb-4 sm:px-6">
          {(notice || speech.error) && (
            <p
              role="status"
              className="mx-auto mb-2 flex max-w-3xl items-start justify-between gap-3 border border-champagne/40 bg-champagne/10 px-3.5 py-2 text-[0.82rem] text-champagne-light"
            >
              <span>{notice ?? speech.error}</span>
              <button
                type="button"
                aria-label="Dismiss message"
                onClick={() => {
                  setNotice(null);
                  speech.clearError();
                }}
                className="shrink-0 text-champagne-light/70 hover:text-champagne-light"
              >
                <X className="size-4" />
              </button>
            </p>
          )}
          <form
            className="mx-auto w-full max-w-3xl border border-white/20 bg-white/[0.06] p-2 transition-colors focus-within:border-champagne"
            onSubmit={(e) => {
              e.preventDefault();
              send(input, true);
            }}
          >
            {(attachments.length > 0 || reading) && (
              <ul className="flex flex-wrap gap-2 px-1 pt-1 pb-2" aria-label="Attached files">
                {attachments.map((a) => (
                  <li key={a.id} className="flex max-w-full items-center gap-2 border border-white/15 bg-white/[0.07] py-1 pr-1 pl-1">
                    {a.kind === "image" && a.dataUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={a.dataUrl} alt="" className="size-9 shrink-0 object-cover" />
                    ) : (
                      <span className="flex size-9 shrink-0 items-center justify-center bg-champagne/15 text-champagne">
                        <FileText className="size-4" aria-hidden />
                      </span>
                    )}
                    <span className="min-w-0 leading-tight">
                      <span className="block max-w-[10rem] truncate text-[0.8rem] font-medium text-ivory sm:max-w-[14rem]">{a.name}</span>
                      <span className="block text-[0.7rem] text-ivory/50">{formatSize(a.size)}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => removeAttachment(a.id)}
                      aria-label={`Remove ${a.name}`}
                      className="flex size-7 shrink-0 items-center justify-center text-ivory/60 hover:text-champagne"
                    >
                      <X className="size-4" />
                    </button>
                  </li>
                ))}
                {reading && <li className="self-center px-2 text-[0.8rem] text-ivory/55">Reading file…</li>}
              </ul>
            )}
            <div className="flex items-end gap-1.5">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept={ACCEPT}
              className="sr-only"
              tabIndex={-1}
              aria-hidden
              onChange={(e) => addFiles(e.target.files)}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={busy || attachments.length >= ATTACHMENT_LIMITS.maxFiles}
              aria-label="Attach a file"
              title="Attach images or documents"
              className="flex size-11 shrink-0 items-center justify-center text-ivory/65 transition-colors hover:text-champagne disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Paperclip className="size-5" />
            </button>
            <label htmlFor="assistant-input" className="sr-only">
              Message Manifest AI
            </label>
            <textarea
              id="assistant-input"
              ref={textareaRef}
              rows={1}
              value={input}
              maxLength={MAX_LENGTH}
              placeholder={speech.listening ? "Listening… speak now" : "Ask about setting up in Dubai…"}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  send(input, true);
                }
              }}
              className="max-h-[180px] min-h-11 min-w-0 flex-1 resize-none bg-transparent px-2 py-2.5 text-[16px] leading-relaxed text-ivory outline-none placeholder:text-ivory/40 sm:text-[0.95rem]"
            />
            <button
              type="button"
              onClick={toggleVoice}
              aria-label={speech.listening ? "Stop voice input" : "Start voice input"}
              aria-pressed={speech.listening}
              title={
                speech.supported
                  ? speech.listening
                    ? "Stop listening"
                    : "Dictate your message"
                  : "Voice input is not supported in this browser"
              }
              className={`relative flex size-11 shrink-0 items-center justify-center transition-colors ${
                speech.listening ? "bg-red-500 text-white" : "text-ivory/65 hover:text-champagne"
              } ${!speech.supported ? "opacity-50" : ""}`}
            >
              {speech.listening && <span className="absolute inset-0 animate-ping bg-red-500/50" aria-hidden />}
              <Mic className="relative size-5" />
            </button>
            {busy ? (
              <button
                type="button"
                onClick={stop}
                aria-label="Stop generating"
                className="flex size-11 shrink-0 items-center justify-center bg-ivory/90 text-ink transition-colors hover:bg-ivory"
              >
                <Square className="size-4 fill-current" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={(!input.trim() && attachments.length === 0) || reading}
                aria-label="Send message"
                className="flex size-11 shrink-0 items-center justify-center bg-champagne text-ink transition-colors hover:bg-champagne-light disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowUp className="size-5" />
              </button>
            )}
            </div>
          </form>
          <p className="mx-auto mt-2.5 max-w-3xl text-center text-[0.72rem] leading-snug text-ivory/45">
            Manifest AI can make mistakes. For quotes and legal advice, confirm details with an adviser.
          </p>
        </div>
      </div>
    </div>
  );
}
