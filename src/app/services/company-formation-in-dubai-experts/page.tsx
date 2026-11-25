import type { Metadata } from "next";
import { ServicePage, type ServicePageData } from "@/components/ServicePage";
import { serviceLinks as l } from "@/content/service-links";

export const metadata: Metadata = {
  title: { absolute: "Company Formation in Dubai | Trusted Business Experts" },
  description:
    "Looking for company formation in Dubai? Get complete support from planning to launch with expert guidance and long-term business assistance.",
  alternates: { canonical: "/services/company-formation-in-dubai-experts/" },
};

const page: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "Company formation" }],
  eyebrow: "Company formation in Dubai",
  h1: "Company formation in Dubai, from trade name to trade licence",
  intro:
    "Choosing the wrong licence or jurisdiction costs time and money later. We look at your activity, your customers and your visa needs, recommend the right setup, and handle every step until your licence is issued.",
  heroImage: "/images/dubai-skyline-night.jpg",
  heroImageAlt: "Dubai skyline at night",
  facts: [
    { k: "Jurisdictions", v: "Mainland · Free Zone · Offshore" },
    { k: "Ownership", v: "Up to 100% for most activities" },
    { k: "Registration time", v: "Typically 3–7 working days once documents are ready" },
  ],
  forTitle: "Built for founders at every stage",
  forItems: [
    {
      t: "First-time founders",
      d: "You have the idea and the budget. We turn it into a licensed company, with clear advice on every choice along the way.",
    },
    {
      t: "Freelancers & consultants",
      d: "Get a licence that matches your services, sponsor your own visa and invoice clients as a registered business.",
    },
    {
      t: "International companies",
      d: "Open a UAE subsidiary or branch to serve the region, with the right structure for tax, banking and hiring.",
    },
  ],
  incTitle: "Everything needed to get you licensed and trading",
  included: [
    "Business activity and licence-type advice",
    "Jurisdiction comparison for your plan",
    "Trade name reservation",
    "Initial approval application",
    "Memorandum of Association drafting and notarisation",
    "Office or flexi-desk options, including Ejari where required",
    "Trade licence issuance",
    "Establishment card and immigration file",
    "Investor and employee visa processing",
    "Corporate bank account introduction",
  ],
  image: "/images/home-team.jpg",
  imageAlt: "The Manifest team working with a client",
  compare: {
    title: "Mainland vs Free Zone vs Offshore",
    cols: ["", "Dubai Mainland", "Dubai Free Zone", "Offshore"],
    rows: [
      {
        label: "Ownership",
        cells: ["Up to 100% for most activities", "100% foreign ownership", "100% foreign ownership"],
      },
      {
        label: "Where you can trade",
        cells: [
          "Anywhere in the UAE and abroad",
          "Inside the free zone and abroad; the UAE mainland usually via a distributor or extra permit",
          "Outside the UAE only",
        ],
      },
      {
        label: "Office",
        cells: [
          "Physical office with Ejari required",
          "Flexi-desk to full office, depending on the free zone",
          "No office needed; registered agent address",
        ],
      },
      { label: "Residence visas", cells: ["Yes, based on office size", "Yes, based on the package", "No"] },
      {
        label: "Corporate tax",
        cells: [
          "0% up to AED 375,000 taxable income, 9% above",
          "0% on qualifying income for a Qualifying Free Zone Person; 9% on other income",
          "Depends on the structure and where income is earned",
        ],
      },
      {
        label: "Best for",
        cells: [
          "Retail, contracting, services to UAE customers",
          "Trading, e-commerce, consulting, startups",
          "Holding companies, international trading",
        ],
      },
    ],
  },
  stepsTitle: "Five steps to your trade licence",
  steps: [
    { n: "01", t: "Free consultation", d: "We understand your activity, customers, budget and visa needs." },
    {
      n: "02",
      t: "Setup plan & quote",
      d: "A written recommendation on jurisdiction, licence and office, with an itemised quote.",
    },
    { n: "03", t: "Name & approvals", d: "We reserve your trade name and apply for initial approval." },
    { n: "04", t: "Documents & licence", d: "We prepare and submit your documents, and your licence is issued." },
    { n: "05", t: "Visas & bank", d: "Establishment card, residence visas, Emirates ID and bank account." },
  ],
  docsTitle: "Documents you will need",
  docsNote:
    "Exact requirements depend on the jurisdiction and activity. We confirm the full list in your setup plan.",
  docs: [
    "Passport copy for every shareholder and manager",
    "Passport-size photo",
    "UAE visa or entry stamp, if you are in the UAE",
    "No-objection letter from your current sponsor, if you are employed in the UAE",
    "Business plan, for some activities and free zones",
    "For a corporate shareholder: certificate of incorporation, board resolution and constitutional documents, attested",
  ],
  costNote:
    "Your quote lists government fees and our service fee separately, so you know exactly what you are paying for. Tell us your activity and we will send an itemised quote.",
  faqs: [
    {
      q: "How long does company formation in Dubai take?",
      a: "Once your documents are ready, registration typically takes 3–7 working days. Visas and the bank account take additional time; we give you a full timeline in your setup plan.",
    },
    {
      q: "Can I own 100% of a mainland company?",
      a: "Yes, for most commercial, industrial and professional activities. A small number of strategic activities still carry ownership conditions, and we check yours before you apply.",
    },
    {
      q: "Do I need to be in the UAE to set up?",
      a: "Much of the process can start remotely. You will usually need to be in the UAE for the visa medical test and Emirates ID biometrics, and some banks ask to meet you in person.",
    },
    {
      q: "Which jurisdiction is right for me?",
      a: "If most of your customers are in the UAE, mainland is usually the better fit. If you sell internationally or online, a free zone is often simpler. An offshore company suits holding and international structures. We compare all three for your plan.",
    },
  ],
  related: [l.mainland, l.freeZone, l.visa, l.banking],
  ctaTitle: "Let's find the right setup for your business",
};

export default function CompanyFormationPage() {
  return <ServicePage page={page} />;
}
