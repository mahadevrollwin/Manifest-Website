import type { Metadata } from "next";
import { ServicePage, type ServicePageData } from "@/components/ServicePage";
import { serviceLinks as l } from "@/content/service-links";

export const metadata: Metadata = {
  title: { absolute: "Attestation & Legal Translation Dubai | Manifest Business Services" },
  description:
    "Document attestation and certified legal translation in Dubai. We coordinate the full chain so your documents are accepted by UAE authorities the first time.",
  alternates: { canonical: "/services/attestation-translation-dubai/" },
};

const page: ServicePageData = {
  crumbs: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Attestation & translation" },
  ],
  eyebrow: "Attestation & translation",
  h1: "Attestation and legal translation in Dubai",
  intro:
    "Many UAE processes, from family visas to company setup, need documents that are attested and legally translated into Arabic. We coordinate the full chain so your documents are accepted the first time.",
  heroImage: "/images/dubai-skyline-day.jpg",
  heroImageAlt: "Dubai skyline in daylight",
  facts: [
    { k: "Documents", v: "Educational, personal, commercial" },
    { k: "Translation", v: "Certified legal translation" },
    { k: "Timeline", v: "Confirmed per document before we start" },
  ],
  forTitle: "When you need documents recognised in the UAE",
  forItems: [
    {
      t: "Visa applicants",
      d: "Marriage and birth certificates for family visas; degrees for some employment and Golden Visas.",
    },
    {
      t: "Company founders",
      d: "Board resolutions, incorporation documents and powers of attorney for corporate shareholders.",
    },
    {
      t: "Professionals",
      d: "Degree and experience certificates for licensing and professional registration.",
    },
  ],
  incTitle: "What we handle",
  included: [
    "Educational certificate attestation",
    "Marriage and birth certificate attestation",
    "Commercial document attestation (MOA, board resolutions, POA)",
    "UAE Ministry of Foreign Affairs (MOFA) attestation",
    "Embassy and consulate attestation coordination",
    "Certified legal translation into Arabic and English",
    "Notarisation support",
    "Courier and document tracking",
  ],
  image: "/images/visa-agency.jpg",
  imageAlt: "An adviser reviewing documents with a client",
  stepsTitle: "How attestation works",
  steps: [
    {
      n: "01",
      t: "Document review",
      d: "We confirm which attestations your document needs and where it will be used.",
    },
    {
      n: "02",
      t: "Home-country steps",
      d: "Notary and foreign ministry attestation in the issuing country, as required.",
    },
    {
      n: "03",
      t: "UAE embassy",
      d: "Attestation by the UAE embassy or consulate in the issuing country.",
    },
    { n: "04", t: "MOFA UAE", d: "Final attestation by the UAE Ministry of Foreign Affairs." },
    {
      n: "05",
      t: "Legal translation",
      d: "Certified translation into Arabic, if the receiving authority needs it.",
    },
  ],
  docsTitle: "What to send us",
  docsNote: "Some steps need the original document; we confirm before you send anything.",
  docs: [
    "Original document, or a clear scan for the first review",
    "Passport copy of the document holder",
    "Where the document will be used (e.g. family visa, company setup)",
    "Previous attestations, if any",
  ],
  costs: [{ k: "Full attestation chain", v: "Quoted per document" }],
  costNote: "Costs depend on the issuing country and document type. We quote before we start.",
  faqs: [
    {
      q: "Which documents need attestation?",
      a: "Documents issued outside the UAE usually need attestation before UAE authorities will accept them, for example degrees, marriage and birth certificates, and corporate documents.",
    },
    {
      q: "Do you translate documents?",
      a: "Yes. We arrange certified legal translation between Arabic and English.",
    },
    {
      q: "How long does it take?",
      a: "A UAE-only step such as MOFA attestation can be quick; the full chain, including home-country steps, usually takes longer. We give you a timeline for each document.",
    },
  ],
  related: [l.visa, l.pro, l.formation],
  ctaTitle: "Get your documents ready for the UAE",
};

export default function AttestationPage() {
  return <ServicePage page={page} />;
}
