import { site } from "@/content/site";
import { curated, knowledge, links, starterPrompts, type KbEntry } from "./knowledge";

export type ChatMessage = { role: "user" | "assistant"; content: string };

export type EngineReply = {
  text: string;
  followUps: string[];
  entryId?: string;
};

const STOP = new Set([
  "a", "an", "the", "is", "are", "do", "does", "i", "my", "me", "we", "you", "to", "of", "in", "on", "for", "and", "or",
  "it", "can", "how", "what", "who", "when", "which", "with", "your", "be", "will", "need", "get", "that", "this", "at",
  "as", "if", "please", "about", "tell", "want", "would", "like", "any", "have", "has", "there",
]);

const curatedIds = new Set(curated.map((e) => e.id));

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9%\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function contentTokens(text: string) {
  return normalize(text)
    .split(" ")
    .filter((t) => t && !STOP.has(t));
}

function scoreEntry(entry: KbEntry, text: string) {
  const padded = ` ${normalize(text)} `;
  const tokens = new Set(contentTokens(text));
  let score = 0;
  for (const keyword of entry.keywords) {
    const k = normalize(keyword);
    if (!k) continue;
    if (padded.includes(` ${k} `)) score += 2 + k.split(" ").length * 1.5;
  }
  for (const t of contentTokens(entry.question)) {
    if (tokens.has(t)) score += 1;
  }
  return score;
}

function rank(text: string, previous?: string) {
  const short = contentTokens(text).length <= 2;
  return knowledge
    .map((entry) => {
      let score = scoreEntry(entry, text);
      if (previous && short) score += scoreEntry(entry, previous) * 0.5;
      // Hand-written answers are more specific than the generic FAQ entries, so they win close calls.
      if (curatedIds.has(entry.id)) score *= 1.5;
      return { entry, score };
    })
    .sort((a, b) => b.score - a.score);
}

function related(entry: KbEntry) {
  if (!entry.links?.length) return "";
  return `\n\n**Related:** ${entry.links.map((l) => `[${l.label}](${l.href})`).join(" · ")}`;
}

const GREETING = /^(hi|hello|hey|hiya|salam|salaam|assalamu alaikum|good (morning|afternoon|evening)|greetings)\b/i;
const THANKS = /\b(thanks|thank you|thankyou|cheers|appreciate it|great help)\b/i;
const BYE = /^(bye|goodbye|see you|that'?s all|no thanks)\b/i;

function adviserLine() {
  return `If you would like a precise answer for your situation, an adviser replies within one working day: [book a free consultation](/contact-us/), [WhatsApp](https://wa.me/${site.whatsappNumber}) or call [${site.phoneDisplay}](${site.phoneHref}).`;
}

/** Built-in answering engine: matches the question against Manifest's knowledge base. Used when no AI API key is configured, and as the fallback if the AI API fails. */
export function answerLocally(messages: ChatMessage[]): EngineReply {
  const users = messages.filter((m) => m.role === "user");
  const last = users.at(-1)?.content.trim() ?? "";
  const previous = users.at(-2)?.content;
  const words = normalize(last).split(" ").filter(Boolean);

  if (!last) {
    return { text: "Ask me anything about setting up or running a business in Dubai.", followUps: starterPrompts };
  }

  if (words.length <= 5 && GREETING.test(last)) {
    return {
      text: "Hello, and welcome to Manifest. I can help you explore **company setup** (mainland, free zone, offshore), **visas**, **banking**, **PRO services**, **accounting and tax**, and **attestation**. What are you planning?",
      followUps: starterPrompts,
    };
  }
  if (words.length <= 8 && THANKS.test(last)) {
    return {
      text: "You are welcome! Is there anything else you would like to know?\n\n" + adviserLine(),
      followUps: ["How do I start a company in Dubai?", "How much does setup cost?"],
    };
  }
  if (words.length <= 5 && BYE.test(last)) {
    return { text: "Thank you for stopping by. Whenever you are ready, we are here to help.\n\n" + adviserLine(), followUps: [] };
  }

  const ranked = rank(last, previous);
  const best = ranked[0];
  if (!best || best.score < 3) {
    return {
      text:
        "I do not have a confident answer to that yet. I can help with **company formation** (mainland, free zone, offshore), **visas**, **banking**, **PRO services**, **accounting and tax**, and **attestation**. Try rephrasing your question.\n\n" +
        adviserLine(),
      followUps: starterPrompts,
    };
  }

  const followUps = (best.entry.followUps ?? []).filter((q) => normalize(q) !== normalize(last));
  const second = ranked[1];
  if (
    followUps.length < 3 &&
    second &&
    second.score >= best.score * 0.6 &&
    normalize(second.entry.question) !== normalize(last) &&
    !curatedIds.has(best.entry.id) === !curatedIds.has(second.entry.id)
  ) {
    followUps.push(second.entry.question);
  }
  return {
    text: best.entry.answer + related(best.entry),
    followUps: followUps.slice(0, 3),
    entryId: best.entry.id,
  };
}

/** Grounding text for the AI model. */
export function systemPrompt() {
  const facts = curated.map((e) => `## ${e.topic}\n${e.answer}`).join("\n\n");
  return [
    `You are "Manifest AI", the website assistant of ${site.name}, a Dubai business setup consultancy.`,
    "Help visitors with company formation (mainland, free zone, offshore), visas, banking, PRO services, accounting and tax, and attestation in the UAE.",
    "Rules:",
    "- Be warm, clear and concise (usually under 150 words). Use simple markdown: **bold**, short bullet lists, and [text](/path) links.",
    "- Ground your answers in the FACTS below. Do not invent prices, fees, timelines, laws or guarantees. Say that exact costs depend on jurisdiction, licence, office and visas, and offer an itemised quote.",
    "- Never guarantee bank account approval or visa approval.",
    "- If you are unsure, or the question needs a specific quote or legal advice, suggest speaking to an adviser.",
    `- Contact: phone/WhatsApp ${site.phoneDisplay}, email ${site.email}, contact page /contact-us/. Advisers reply within one working day.`,
    "- Only discuss topics related to business setup and living or working in the UAE. Politely decline unrelated requests.",
    "- Reply in the language the user writes in.",
    "",
    "FACTS:",
    facts,
    "",
    `Useful pages: ${Object.values(links)
      .map((l) => `${l.label} (${l.href})`)
      .join(", ")}`,
  ].join("\n");
}

export function followUpsFor(messages: ChatMessage[]) {
  const reply = answerLocally(messages);
  return reply.followUps;
}
