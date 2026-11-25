import type { Metadata } from "next";
import { ServicePage, type ServicePageData } from "@/components/ServicePage";
import { serviceLinks as l } from "@/content/service-links";

export const metadata: Metadata = {
  title: { absolute: "Visa Services Dubai | Fast & Reliable UAE Visa Processing" },
  description:
    "Looking for visa services Dubai? Get expert visa services Dubai for employment, investor, and family visas. hassle-free approvals.",
  alternates: { canonical: "/services/visa-services-dubai/" },
};

const page: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "Visa services" }],
  eyebrow: "Visa services",
  h1: "UAE visa services: investor, employee, family and Golden Visa",
  intro:
    "From your first entry permit to your Emirates ID, we prepare the documents, book the appointments and track every step, so you, your team and your family get settled without delays.",
  heroImage: "/images/dubai-marina.jpg",
  heroImageAlt: "Dubai Marina waterfront",
  facts: [
    { k: "Visa types", v: "Investor · Employee · Family · Golden" },
    { k: "Process", v: "Entry permit to Emirates ID" },
    { k: "Golden Visa", v: "10-year residence for eligible applicants" },
  ],
  forTitle: "A visa for every stage of your move",
  forItems: [
    {
      t: "Investor & partner visa",
      d: "For shareholders of a UAE company. Your company sponsors your residence.",
      image: "/images/home-handshake.jpg",
    },
    {
      t: "Employee visa",
      d: "For the people you hire, linked to their work permit and labour contract.",
      image: "/images/visa-agency.jpg",
    },
    {
      t: "Family visa",
      d: "Sponsor your spouse, children and, in some cases, parents once you meet the salary requirement.",
      image: "/images/visa-family.jpg",
    },
    {
      t: "Golden Visa",
      d: "Long-term 10-year residence for eligible investors, entrepreneurs and professionals. We check eligibility first.",
      image: "/images/dubai-burj-night.jpg",
    },
  ],
  incTitle: "Every step of the visa process, handled",
  included: [
    "Eligibility check and visa-type advice",
    "Entry permit application",
    "Change of status, if you are already in the UAE",
    "Medical fitness test booking",
    "Emirates ID biometrics appointment",
    "Residence visa issuance",
    "Visa renewal and cancellation",
    "Golden Visa eligibility review and application",
    "Document attestation and translation coordination",
  ],
  image: "/images/visa-couple.jpg",
  imageAlt: "A couple with suitcases at the airport reading a tablet",
  stepsTitle: "From entry permit to Emirates ID",
  steps: [
    { n: "01", t: "Eligibility check", d: "We confirm the right visa type and the documents you need." },
    {
      n: "02",
      t: "Entry permit",
      d: "We apply for your entry permit, or a change of status if you are in the UAE.",
    },
    { n: "03", t: "Medical test", d: "We book your medical fitness test and keep you on schedule." },
    { n: "04", t: "Emirates ID", d: "We book your biometrics appointment for your Emirates ID." },
    { n: "05", t: "Visa issued", d: "Your residence visa is issued and linked to your Emirates ID." },
  ],
  docsTitle: "Documents you will need",
  docsNote: "Requirements vary by visa type. Family and Golden Visas need extra documents.",
  docs: [
    "Passport copy (valid for at least 6 months)",
    "Passport-size photo on a white background",
    "Current UAE visa or entry stamp, if in the UAE",
    "Company trade licence and establishment card, for investor and employee visas",
    "Attested marriage and birth certificates, for family visas",
    "Salary certificate or tenancy contract, for family visas",
  ],
  costNote:
    "Government fees depend on the visa type and duration. We show them separately from our service fee, and you get an itemised quote before we start.",
  faqs: [
    {
      q: "How long does a UAE residence visa take?",
      a: "It depends on the visa type and how quickly documents are complete. The process includes the entry permit, medical test and Emirates ID biometrics, and we give you a clear timeline before you start.",
    },
    {
      q: "Who qualifies for the Golden Visa?",
      a: "Eligible investors, entrepreneurs, specialised professionals and some other categories can apply. The criteria change from time to time, so we check your eligibility before you apply.",
    },
    {
      q: "Can I sponsor my family?",
      a: "Yes, once you hold a residence visa and meet the minimum salary or income requirement. You will need attested marriage and birth certificates.",
    },
    {
      q: "Do I need to be in the UAE?",
      a: "The entry permit can be issued while you are abroad, but you need to be in the UAE for the medical test and Emirates ID biometrics.",
    },
  ],
  related: [l.pro, l.attestation, l.formation],
  ctaTitle: "Check which visa is right for you",
};

export default function VisaServicesPage() {
  return <ServicePage page={page} />;
}
