import { faqGroups } from "@/content/faqs";
import { site } from "@/content/site";

export type KbLink = { label: string; href: string };

export type KbEntry = {
  id: string;
  /** Short label used for suggestions. */
  topic: string;
  /** Lower-case words or phrases. Phrases score higher than single words. */
  keywords: string[];
  /** Sample question, also used for matching. */
  question: string;
  /** Answer in simple markdown (bold, lists, links). */
  answer: string;
  links?: KbLink[];
  followUps?: string[];
};

const L = {
  formation: { label: "Company formation", href: "/services/company-formation-in-dubai-experts/" },
  mainland: { label: "Dubai Mainland", href: "/dubai-mainland/" },
  freeZone: { label: "Dubai Free Zone", href: "/dubai-free-zone-business-setup/" },
  offshore: { label: "Offshore company", href: "/dubai-offshore-company-formation/" },
  pro: { label: "PRO services", href: "/services/pro-services-dubai/" },
  visa: { label: "Visa services", href: "/services/visa-services-dubai/" },
  banking: { label: "Banking assistance", href: "/banking/" },
  accounting: { label: "Accounting & bookkeeping", href: "/services/accounting-bookkeeping/" },
  attestation: { label: "Attestation & translation", href: "/services/attestation-translation-dubai/" },
  contact: { label: "Book a free consultation", href: "/contact-us/" },
  faqs: { label: "All FAQs", href: "/faqs/" },
  blog: { label: "Read our guides", href: "/dubai-business-setup-blog/" },
  about: { label: "About Manifest", href: "/about-manifest-business-setup-experts/" },
} as const;

export const links = L;

export const curated: KbEntry[] = [
  {
    id: "overview",
    topic: "What Manifest does",
    keywords: [
      "what do you do",
      "what does manifest do",
      "services",
      "what can you help",
      "offer",
      "who are you",
      "about manifest",
      "what is manifest",
    ],
    question: "What services does Manifest offer?",
    answer:
      "Manifest Business Services helps founders, freelancers and growing companies set up and run a business in Dubai, with one team from first call to first invoice:\n\n- **Company formation**: mainland, free zone or offshore\n- **PRO services**: licence renewals, labour and immigration files, approvals\n- **Visa services**: investor, partner, employee, family and Golden Visa checks\n- **Banking assistance**: a complete file and bank introductions\n- **Accounting & bookkeeping**: VAT and corporate tax registration and filing\n- **Attestation & translation**: certified documents for UAE use",
    links: [L.formation, L.visa, L.banking, L.about],
    followUps: ["How do I start a company in Dubai?", "Mainland or free zone: which is better?", "How much does setup cost?"],
  },
  {
    id: "start",
    topic: "Starting a company",
    keywords: [
      "start a company",
      "start a business",
      "set up a company",
      "setup a company",
      "open a company",
      "company formation",
      "register a company",
      "business setup",
      "how do i start",
      "get started",
      "steps",
      "process",
      "how it works",
      "launch",
    ],
    question: "How do I start a company in Dubai?",
    answer:
      "It usually takes four steps:\n\n1. **Free consultation**: tell us about your business, budget and visa needs. No obligation.\n2. **Your setup plan**: we recommend the jurisdiction, licence and office option, with a full written quote.\n3. **We handle the approvals**: trade name, initial approval, documents and government submissions, with updates at every stage.\n4. **Visas, bank & launch**: residence visas, Emirates ID and your bank account, so you are ready to trade.\n\nTo begin you need a clear business activity and a passport copy for each shareholder. We help you choose between mainland, free zone and offshore.",
    links: [L.formation, L.contact],
    followUps: ["Mainland or free zone: which is better?", "How long does it take?", "What documents do I need?"],
  },
  {
    id: "mainland",
    topic: "Mainland company",
    keywords: ["mainland", "ded", "department of economy", "local market", "government clients", "government contracts", "office in dubai"],
    question: "What is a Dubai mainland company?",
    answer:
      "A **mainland** company can trade anywhere in the UAE, work directly with government and local clients, and open an office or shop anywhere in Dubai.\n\n- **Ownership**: 100% foreign ownership is available for most commercial and professional activities. A small number of strategic activities still carry conditions.\n- **Office**: a physical office address is generally required.\n- **Best for**: retail, services to UAE customers, contracting.\n\nWe check your activity first so there are no surprises on ownership or approvals.",
    links: [L.mainland],
    followUps: ["What is a free zone company?", "Mainland or free zone: which is better?", "How much does setup cost?"],
  },
  {
    id: "free-zone",
    topic: "Free zone company",
    keywords: [
      "free zone",
      "freezone",
      "fzco",
      "fze",
      "fz llc",
      "ifza",
      "dmcc",
      "adgm",
      "difc",
      "meydan",
      "rakez",
      "dafza",
      "jafza",
      "flexi desk",
      "flexi-desk",
    ],
    question: "What is a Dubai free zone company?",
    answer:
      "A **free zone** company gives you 100% ownership, quick setup and flexible office packages, from a flexi-desk to private offices.\n\n- **Trading**: free inside the zone and internationally. Selling directly on the UAE mainland usually needs a distributor, a branch or an extra permit.\n- **Structures**: FZE (one shareholder), FZCO and FZ LLC (several shareholders).\n- **Choice**: we work across 46+ UAE jurisdictions, including IFZA, DMCC, ADGM, DIFC, Meydan, SPC, RAKEZ, AFZ, SRTIP, DAFZA and JAFZA.\n- **Best for**: global-facing and online businesses.\n\nWe recommend a zone based on your activity, budget and visa needs, not on commission.",
    links: [L.freeZone],
    followUps: ["Can a free zone company trade in mainland Dubai?", "Do free zone companies pay corporate tax?", "How many visas can I get?"],
  },
  {
    id: "offshore",
    topic: "Offshore company",
    keywords: ["offshore", "holding company", "hold assets", "ras al khaimah offshore", "international business company"],
    question: "What is an offshore company in the UAE?",
    answer:
      "An **offshore** company is a structure for holding assets and running international business from the UAE. It **cannot trade inside the UAE** or sponsor residence visas, and it does not need a physical office.\n\nIt suits holding companies and international trading. If you need to sell in the UAE or hire residents, mainland or free zone is the better route.",
    links: [L.offshore],
    followUps: ["Mainland or free zone: which is better?", "How much does setup cost?"],
  },
  {
    id: "compare",
    topic: "Mainland vs free zone",
    keywords: [
      "mainland vs free zone",
      "mainland or free zone",
      "free zone or mainland",
      "difference between mainland and free zone",
      "which is better",
      "which is best",
      "which one",
      "compare",
      "versus",
      "vs",
    ],
    question: "Mainland or free zone: which is better for my business?",
    answer:
      "It depends on **who you sell to**:\n\n- **Choose mainland** if most customers are in the UAE, you want government or large local clients, or you need a shop or office anywhere in Dubai.\n- **Choose a free zone** if you sell internationally or online, want a fast, lean setup, or need a zone that suits your industry.\n\nBoth allow full ownership for most activities and both can sponsor visas. Free zone packages often have a lower starting cost, while mainland gives full access to the UAE market. Tell me what you plan to sell and where your customers are, and I can point you in the right direction.",
    links: [L.mainland, L.freeZone, { label: "Read the full comparison", href: "/blog/mainland-vs-free-zone-dubai-which-is-right-for-your-business/" }],
    followUps: ["How much does setup cost?", "How many visas can I get?", "Talk to an adviser"],
  },
  {
    id: "cost",
    topic: "Setup costs",
    keywords: [
      "cost",
      "price",
      "pricing",
      "how much",
      "fees",
      "fee",
      "budget",
      "quote",
      "charges",
      "cheap",
      "cheaper",
      "afford",
      "expensive",
      "aed",
    ],
    question: "How much does it cost to set up a company in Dubai?",
    answer:
      "It depends on the **jurisdiction, licence type, office option and number of visas**. Our current homepage packages start from **AED 5,999** for a zero-visa free zone licence (terms and conditions apply), and an all-inclusive free zone package with one visa is **AED 11,999**.\n\nYou always get an **itemised quote before you commit**, with every government fee and our service fee listed separately, so there are no hidden fees. Yearly costs after setup are licence renewal, office or flexi-desk renewal, visa renewals when due, and accounting and tax filing.\n\nShare your activity and how many visas you need and an adviser can quote precisely.",
    links: [L.contact, L.faqs],
    followUps: ["How long does it take?", "Mainland or free zone: which is better?", "Talk to an adviser"],
  },
  {
    id: "timeline",
    topic: "How long it takes",
    keywords: ["how long", "timeline", "time", "duration", "working days", "how fast", "quick", "quickly", "days", "weeks", "turnaround"],
    question: "How long does company setup take?",
    answer:
      "Once your documents are ready, registration typically takes **3–7 working days**. The exact time depends on the jurisdiction and activity. Visas and the bank account take additional time, and we give you a full timeline in your setup plan.",
    links: [L.formation],
    followUps: ["What documents do I need?", "How much does setup cost?", "Can I do it remotely?"],
  },
  {
    id: "documents",
    topic: "Documents needed",
    keywords: ["documents", "document", "papers", "paperwork", "requirements", "required", "what do i need", "passport", "checklist"],
    question: "What documents do I need to set up a company?",
    answer:
      "Typically:\n\n- A passport copy for every shareholder and manager\n- A passport-size photo\n- Your UAE visa or entry stamp, if you are in the UAE\n- Proof of residential address\n- A short business plan, for some free zones\n- A bank reference letter or CV, for some free zones\n\nEach jurisdiction has its own checklist. We prepare the exact list for you.",
    links: [L.formation],
    followUps: ["Can I do it remotely?", "How long does it take?"],
  },
  {
    id: "remote",
    topic: "Setting up remotely",
    keywords: ["remote", "remotely", "outside uae", "abroad", "overseas", "not in uae", "from india", "from uk", "non resident", "non-resident", "in person", "be in dubai", "be in the uae", "visit"],
    question: "Do I need to be in the UAE to set up?",
    answer:
      "Much of the process can **start remotely**: choosing the structure, documents, approvals and signing. You will usually need to be in the UAE for the **visa medical test and Emirates ID biometrics**, and some banks ask to meet you in person (in person or by video call).",
    links: [L.formation, L.contact],
    followUps: ["How do I start a company in Dubai?", "Can I open a bank account?"],
  },
  {
    id: "ownership",
    topic: "100% ownership",
    keywords: ["100%", "ownership", "own", "foreign ownership", "sponsor", "local partner", "51%", "emirati partner", "shareholder"],
    question: "Can I own 100% of my company?",
    answer:
      "Yes, for most commercial, industrial and professional activities. Since June 2021 a local partner is no longer required for most mainland activities, and free zones have always allowed 100% foreign ownership. A small number of strategic activities still carry ownership conditions, and we check yours first.",
    links: [L.mainland, L.freeZone],
    followUps: ["Mainland or free zone: which is better?", "How much does setup cost?"],
  },
  {
    id: "visas",
    topic: "Visas",
    keywords: ["visa", "visas", "residence", "residency", "residence visa", "employment visa", "investor visa", "partner visa", "emirates id", "medical", "work permit", "dependant", "family visa"],
    question: "What visa options are available?",
    answer:
      "We handle **investor, partner, employee and family visas**, plus Golden Visa eligibility checks and applications, along with the medical test and Emirates ID.\n\nHow many visas your company can sponsor depends on your jurisdiction, package and office size, so we match your setup to the number you need. Family sponsorship needs a residence visa, the minimum salary or income requirement, and attested marriage and birth certificates.",
    links: [L.visa],
    followUps: ["Who qualifies for the Golden Visa?", "Can I sponsor my family?", "How many visas can my company sponsor?"],
  },
  {
    id: "golden-visa",
    topic: "Golden Visa",
    keywords: ["golden visa", "golden", "10 year visa", "long term visa"],
    question: "Who qualifies for the Golden Visa?",
    answer:
      "Eligible investors, entrepreneurs, specialised professionals and some other categories can qualify. The criteria change from time to time, so we **check your eligibility first** and then prepare the application if you qualify.",
    links: [L.visa, L.contact],
    followUps: ["What visa options are available?", "Talk to an adviser"],
  },
  {
    id: "banking",
    topic: "Bank accounts",
    keywords: ["bank", "banking", "bank account", "corporate account", "account opening", "open an account", "kyc", "adcb", "emirates nbd", "fab", "dubai islamic"],
    question: "Can you help me open a business bank account?",
    answer:
      "Yes. We prepare a complete, consistent file and introduce you to UAE banks that suit your business profile. **No one can guarantee approval**, because that is the bank's decision, but a strong file makes a real difference.\n\n- Banks usually ask for your licence and incorporation documents, passports, visas and Emirates IDs, a company profile, proof of address and source of funds.\n- You can apply once your licence is issued, and many banks prefer that shareholders and signatories also hold a UAE residence visa.",
    links: [L.banking],
    followUps: ["What documents do banks ask for?", "How long does bank account opening take?", "Talk to an adviser"],
  },
  {
    id: "pro",
    topic: "PRO services",
    keywords: ["pro", "pro services", "public relations officer", "renewal", "renew", "licence renewal", "license renewal", "labour", "immigration", "amer", "tasheel", "typing", "mohre", "establishment card"],
    question: "What do your PRO services cover?",
    answer:
      "Our PRO team handles government work for you: **licence renewals and amendments, establishment cards, work permits and labour contracts, employment and family visas, medical and Emirates ID appointments, and document clearing** through Amer, Tasheel and other service centres. We also track renewals and remind you before deadlines.\n\nYou can pay per task, and companies with regular hiring often save with a retainer. Government fees are passed through at cost and shown separately.",
    links: [L.pro],
    followUps: ["Can you take over from my current PRO?", "Talk to an adviser"],
  },
  {
    id: "accounting",
    topic: "Accounting & VAT",
    keywords: ["accounting", "bookkeeping", "accountant", "books", "vat", "audit", "financial statements", "tax return", "tax registration"],
    question: "Do you offer accounting and bookkeeping?",
    answer:
      "Yes. We provide **monthly bookkeeping and VAT and corporate tax registration and filing**, so you stay compliant from year one. If your records are a mess, we review them, fix the gaps and take over from the next period. Pricing depends on your monthly transaction volume, and we quote a fixed monthly fee after reviewing your records.",
    links: [L.accounting],
    followUps: ["How is corporate tax charged?", "When do I need to register for VAT?"],
  },
  {
    id: "tax",
    topic: "Corporate tax",
    keywords: ["corporate tax", "tax", "9%", "0%", "taxable", "qualifying free zone", "qfzp", "income tax"],
    question: "How is corporate tax charged in the UAE?",
    answer:
      "UAE corporate tax is **0% on taxable income up to AED 375,000 and 9% above that**. Most companies must register and file a return even if no tax is due.\n\nA **Qualifying Free Zone Person** pays 0% on qualifying income and 9% on other taxable income, and every free zone company must still register and file. Whether you qualify depends on your activity and revenue, so it is worth confirming early.",
    links: [L.accounting],
    followUps: ["When do I need to register for VAT?", "Do you offer accounting and bookkeeping?"],
  },
  {
    id: "vat",
    topic: "VAT registration",
    keywords: ["vat registration", "register for vat", "vat threshold", "375,000", "187,500"],
    question: "When do I need to register for VAT?",
    answer:
      "VAT registration is **mandatory once taxable supplies exceed AED 375,000 in 12 months**, and optional from AED 187,500. We can register you and file your returns on time.",
    links: [L.accounting],
    followUps: ["How is corporate tax charged?", "Talk to an adviser"],
  },
  {
    id: "attestation",
    topic: "Attestation & translation",
    keywords: ["attestation", "attest", "translation", "translate", "legalise", "legalize", "certificate", "degree", "mofa", "apostille", "legal translation"],
    question: "Do you do attestation and legal translation?",
    answer:
      "Yes. We handle **certified legal translation and attestation** of degrees, certificates and company documents for use in the UAE. Send a clear scan for the first review and we confirm the exact route, timeline and cost.",
    links: [L.attestation],
    followUps: ["Talk to an adviser", "What documents do I need?"],
  },
  {
    id: "contact",
    topic: "Contact & office",
    keywords: [
      "contact",
      "phone",
      "call",
      "number",
      "email",
      "address",
      "location",
      "office",
      "where are you",
      "whatsapp",
      "visit",
      "map",
      "reach",
    ],
    question: "How can I contact Manifest?",
    answer: `You can reach us here:\n\n- **Phone / WhatsApp**: [${site.phoneDisplay}](${site.phoneHref})\n- **Email**: [${site.email}](mailto:${site.email})\n- **Office**: ${site.addressLines.join(" ")}\n\nAn adviser replies within one working day.`,
    links: [L.contact],
    followUps: ["Talk to an adviser", "How do I start a company in Dubai?"],
  },
  {
    id: "human",
    topic: "Talk to an adviser",
    keywords: [
      "talk to someone",
      "talk to a person",
      "talk to an adviser",
      "talk to an advisor",
      "speak to",
      "human",
      "real person",
      "agent",
      "adviser",
      "advisor",
      "consultant",
      "consultation",
      "book a call",
      "call me",
      "callback",
      "expert",
      "specialist",
    ],
    question: "I want to talk to an adviser",
    answer: `Of course. A Manifest adviser can look at your exact situation and send an itemised plan, free and with no obligation.\n\n- **WhatsApp**: [chat now](https://wa.me/${site.whatsappNumber}) \n- **Phone**: [${site.phoneDisplay}](${site.phoneHref})\n- **Form**: [book a free consultation](/contact-us/), and we reply within one working day.`,
    links: [],
    followUps: ["How much does setup cost?", "How do I start a company in Dubai?"],
  },
  {
    id: "trust",
    topic: "Why Manifest",
    keywords: ["why manifest", "why choose", "reviews", "rating", "trust", "reliable", "legit", "experience", "clients", "satisfaction", "google rating"],
    question: "Why should I choose Manifest?",
    answer:
      "Manifest is rated **4.9 on Google** and clients rate satisfaction at 98%. What founders tell us they value:\n\n- **One team, end to end**: licence, visas, PRO, banking and accounting under one roof\n- **Advice first, paperwork second**: we recommend the structure that suits your plan\n- **Clear, itemised quotes** with government fees and our fees separate\n- **Start before you land**: most of the process can be done remotely\n- **Still here after setup**: renewals, compliance reminders and support",
    links: [L.about],
    followUps: ["How do I start a company in Dubai?", "Talk to an adviser"],
  },
  {
    id: "employed",
    topic: "Starting while employed",
    keywords: ["employed", "employee", "current job", "no objection", "noc", "while working"],
    question: "Can I set up a company while employed in the UAE?",
    answer:
      "Often yes, but you may need a **no-objection letter from your current employer**, depending on your visa and the jurisdiction. We check this for you before you commit.",
    links: [L.contact],
    followUps: ["Do I need to be in the UAE to set up?", "Talk to an adviser"],
  },
  {
    id: "blog",
    topic: "Guides & articles",
    keywords: ["blog", "guide", "guides", "article", "articles", "read more", "learn more", "resources"],
    question: "Where can I read more guides?",
    answer:
      "Our blog has practical guides on licences, visas, banking and tax, for example how foreigners can start a business in Dubai, a step-by-step setup guide, and a comparison of mainland and free zone.",
    links: [L.blog],
    followUps: ["Mainland or free zone: which is better?", "How do I start a company in Dubai?"],
  },
];

function tokenize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9%\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

const STOP = new Set([
  "a", "an", "the", "is", "are", "do", "does", "i", "my", "me", "we", "you", "to", "of", "in", "on", "for", "and", "or", "it",
  "can", "how", "what", "who", "when", "which", "with", "your", "be", "will", "need", "get", "that", "this", "at", "as", "if",
]);

/** FAQ entries from the site's FAQ page are also searchable, so the assistant never contradicts the FAQs. */
const faqEntries: KbEntry[] = faqGroups.flatMap((group) =>
  group.items.map((item, i) => ({
    id: `faq-${group.id}-${i}`,
    topic: item.q,
    keywords: tokenize(item.q).filter((t) => !STOP.has(t) && t.length > 2),
    question: item.q,
    answer: item.a,
    links: [L.faqs],
  })),
);

export const knowledge: KbEntry[] = [...curated, ...faqEntries];

export { starterPrompts } from "./starters";
