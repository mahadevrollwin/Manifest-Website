import type { Metadata } from "next";
import { ServicePage, type ServicePageData } from "@/components/ServicePage";
import { serviceLinks as l } from "@/content/service-links";

export const metadata: Metadata = {
  title: { absolute: "Offshore Company Formation in the UAE | Manifest Business Services" },
  description:
    "Set up an offshore company in the UAE for holding assets and international business. Registered agent, incorporation, documents and bank introduction handled for you.",
  alternates: { canonical: "/dubai-offshore-company-formation/" },
};

const page: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Business setup" }, { label: "Offshore" }],
  eyebrow: "Offshore company",
  h1: "Offshore company formation in the UAE",
  intro:
    "An offshore company is a structure for holding assets and running international business from a stable, well-regarded jurisdiction. It cannot trade inside the UAE or sponsor residence visas, but for the right purpose it is simple, private and cost-efficient.",
  heroImage: "/images/dubai-aerial-night.jpg",
  heroImageAlt: "Aerial view of Dubai at night",
  facts: [
    { k: "Ownership", v: "100% foreign ownership" },
    { k: "Office", v: "Not required" },
    { k: "Residence visas", v: "Not available" },
  ],
  forTitle: "Offshore works for holding and international structures",
  forItems: [
    {
      t: "Holding companies",
      d: "Hold shares in other companies, including UAE mainland and free zone entities.",
    },
    {
      t: "Asset protection",
      d: "Hold investments, intellectual property and, with some registries, property in approved areas.",
    },
    {
      t: "International trading",
      d: "Invoice clients and trade outside the UAE through a UAE-registered entity.",
    },
  ],
  incTitle: "Your offshore setup, handled end to end",
  included: [
    "Advice on whether offshore fits your goals",
    "Choice of offshore registry",
    "Registered agent and registered office",
    "Name approval and incorporation",
    "Memorandum and Articles of Association",
    "Certificate of incorporation and share certificates",
    "Corporate bank account introduction",
    "Annual renewal and compliance reminders",
  ],
  image: "/images/dubai-downtown-night.jpg",
  imageAlt: "Downtown Dubai financial district at night",
  stepsTitle: "How offshore setup works",
  steps: [
    { n: "01", t: "Structure review", d: "We confirm offshore suits what you want to achieve." },
    { n: "02", t: "Choose a registry", d: "We recommend the registry that fits your use case." },
    { n: "03", t: "Documents & KYC", d: "We prepare your application and due-diligence documents." },
    { n: "04", t: "Incorporation", d: "Your company is registered and documents are issued." },
    { n: "05", t: "Bank account", d: "We introduce you to banks that work with offshore companies." },
  ],
  docsTitle: "Documents you will need",
  docsNote: "Registries run detailed due-diligence checks on every shareholder.",
  docs: [
    "Passport copy for every shareholder and director",
    "Proof of residential address (recent utility bill or bank statement)",
    "Bank reference letter",
    "CV or professional profile",
    "Short description of the business purpose and source of funds",
  ],
  costNote:
    "Offshore companies have no office or visa costs. Your quote lists registry fees and our service fee separately.",
  faqs: [
    {
      q: "Can an offshore company trade in the UAE?",
      a: "No. An offshore company cannot trade with customers inside the UAE. To do that, you would set up a mainland or free zone company, which the offshore company can own.",
    },
    {
      q: "Can I get a residence visa through an offshore company?",
      a: "No. Offshore companies cannot sponsor residence visas. If you need a visa, we can pair your offshore structure with a free zone or mainland company.",
    },
    {
      q: "Do I need to visit the UAE?",
      a: "Usually not for incorporation. Some banks ask to meet the shareholders in person before opening an account.",
    },
  ],
  related: [l.formation, l.freeZone, l.banking],
  ctaTitle: "Is offshore right for your structure? Let's check.",
};

export default function OffshorePage() {
  return <ServicePage page={page} />;
}
