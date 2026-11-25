import type { Metadata } from "next";
import { ServicePage, type ServicePageData } from "@/components/ServicePage";
import { serviceLinks as l } from "@/content/service-links";

export const metadata: Metadata = {
  title: { absolute: "Dubai Mainland Company Formation | Trusted Experts" },
  description:
    "Looking for Dubai Mainland Company Formation? Get complete support for setup, documents, and approvals to launch your business quickly.",
  alternates: { canonical: "/dubai-mainland/" },
};

const page: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Business setup" }, { label: "Dubai Mainland" }],
  eyebrow: "Dubai Mainland",
  h1: "Dubai mainland company formation",
  intro:
    "A mainland licence lets you trade anywhere in the UAE, work directly with government and private clients, and open an office wherever your customers are. Since 2021, most activities allow 100% foreign ownership, with no local partner needed.",
  heroImage: "/images/dubai-skyline-dusk.jpg",
  heroImageAlt: "Dubai skyline at dusk",
  facts: [
    { k: "Licensed by", v: "Dubai Department of Economy and Tourism (DET)" },
    { k: "Ownership", v: "Up to 100% for most activities" },
    { k: "Market access", v: "Entire UAE, plus international" },
  ],
  forTitle: "Mainland is the right fit when your customers are in the UAE",
  forItems: [
    {
      t: "Retail & hospitality",
      d: "Shops, restaurants, salons and showrooms that serve customers in Dubai directly.",
    },
    {
      t: "Contracting & services",
      d: "Construction, maintenance, IT, marketing and other services sold to UAE businesses.",
    },
    { t: "Government clients", d: "Mainland companies can bid for and work on government contracts." },
  ],
  incTitle: "Your mainland setup, handled end to end",
  included: [
    "Activity selection from the DET list",
    "Legal form advice: LLC, sole establishment or civil company",
    "Trade name reservation and initial approval",
    "Memorandum of Association drafting and notarisation",
    "Office search support and Ejari registration",
    "Trade licence issuance",
    "Establishment card and labour file",
    "Investor, employee and family visas",
    "Corporate bank account introduction",
    "Annual licence renewal reminders",
  ],
  image: "/images/mainland-license.jpg",
  imageAlt: "A Dubai mainland trade licence application",
  stepsTitle: "How mainland setup works",
  steps: [
    { n: "01", t: "Choose your activity", d: "We match what you do to the right DET activities and legal form." },
    { n: "02", t: "Trade name & approval", d: "We reserve your trade name and secure initial approval." },
    {
      n: "03",
      t: "MOA & office",
      d: "We draft your Memorandum of Association and register your office lease (Ejari).",
    },
    { n: "04", t: "Licence issued", d: "Fees are paid and your mainland trade licence is issued." },
    { n: "05", t: "Visas & bank", d: "Establishment card, visas, Emirates ID and your bank account." },
  ],
  docsTitle: "Documents you will need",
  docsNote: "Some activities need extra approvals from other authorities. We tell you upfront.",
  docs: [
    "Passport copy for every shareholder and manager",
    "Passport-size photo",
    "UAE visa or entry stamp, if you are in the UAE",
    "No-objection letter from your current sponsor, if applicable",
    "Tenancy contract for your office (we help you register Ejari)",
  ],
  costs: [
    { k: "Mainland licence", v: "Itemised in your quote" },
    { k: "Office / Ejari", v: "Depends on your office" },
    { k: "Typical time to licence", v: "Confirmed in your setup plan" },
  ],
  costNote:
    "Costs depend on your activity, legal form and office. Your quote shows every government fee separately.",
  faqs: [
    {
      q: "Do I need a local sponsor for a mainland company?",
      a: "Not for most activities. Since June 2021, foreign investors can own 100% of most mainland companies. A small number of strategic activities still have ownership conditions, which we check before you apply.",
    },
    {
      q: "Do I need a physical office?",
      a: "Yes. Mainland companies need a registered office with an Ejari-registered lease. The size of your office also affects how many visas you can sponsor.",
    },
    {
      q: "How is a mainland company taxed?",
      a: "UAE corporate tax applies at 0% on taxable income up to AED 375,000 and 9% above that. VAT registration is needed once taxable supplies pass the registration threshold. Our accounting team can handle both.",
    },
    {
      q: "Can I add activities later?",
      a: "Yes. You can add compatible activities to your licence at any time; extra approvals or fees may apply.",
    },
  ],
  related: [l.freeZone, l.formation, l.pro, l.accounting],
  ctaTitle: "Ready to trade across the UAE?",
  ctaImage: "/images/mainland-team.jpg",
};

export default function MainlandPage() {
  return <ServicePage page={page} />;
}
