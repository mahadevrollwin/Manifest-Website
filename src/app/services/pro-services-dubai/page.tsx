import type { Metadata } from "next";
import { ServicePage, type ServicePageData } from "@/components/ServicePage";
import { serviceLinks as l } from "@/content/service-links";
import { whatsappMessages } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "PRO Services UAE – Expert Business & Visa Support in Dubai" },
  description:
    "Expert PRO services in Dubai for business setup, visa processing, and compliance. Fast, reliable, and stress-free solutions for UAE businesses.",
  alternates: { canonical: "/services/pro-services-dubai/" },
};

const page: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "PRO services" }],
  eyebrow: "PRO services",
  h1: "PRO services in Dubai",
  intro:
    "Government processes in Dubai are detailed and time-sensitive. A missed renewal or a rejected form can hold up visas, fines can add up, and every visit to a service centre takes time. Our PRO team handles the queues, forms and follow-ups so you can focus on the business.",
  heroImage: "/images/dubai-aerial-night.jpg",
  heroImageAlt: "Aerial view of Dubai at night",
  whatsappMessage: whatsappMessages.pro,
  facts: [
    { k: "Plans", v: "Pay per task or monthly retainer" },
    { k: "Coverage", v: "Mainland and free zone companies" },
    { k: "Updates", v: "At every stage, by WhatsApp or email" },
  ],
  forTitle: "For companies that would rather not stand in queues",
  forItems: [
    { t: "New companies", d: "Get your immigration and labour files set up correctly from day one." },
    {
      t: "Growing teams",
      d: "Hire without delays: work permits, visas and Emirates IDs for every new joiner.",
    },
    {
      t: "Established businesses",
      d: "Never miss a renewal deadline for your licence, visas or establishment card.",
    },
  ],
  incTitle: "Government work we handle for you",
  included: [
    "Trade licence renewal and amendments",
    "Establishment / immigration card applications and renewals",
    "Work permits and labour contracts (MOHRE)",
    "Employment visa processing and cancellation",
    "Family and dependant visa processing",
    "Medical fitness tests and Emirates ID appointments",
    "Document clearing through Amer, Tasheel and other service centres",
    "Typing, translation and attestation coordination",
    "Renewal tracking and deadline reminders",
  ],
  image: "/images/mainland-team.jpg",
  imageAlt: "A PRO team member handling company documents",
  stepsTitle: "How our PRO service works",
  steps: [
    { n: "01", t: "Tell us the task", d: "Send the request by WhatsApp, email or your account manager." },
    { n: "02", t: "Checklist & quote", d: "We confirm the documents needed and the cost upfront." },
    { n: "03", t: "We submit", d: "Forms are typed, submitted and followed up with the authority." },
    {
      n: "04",
      t: "Done & delivered",
      d: "Approved documents are delivered, and the next deadline goes in your calendar.",
    },
  ],
  docsTitle: "What we usually need from you",
  docsNote: "The exact list depends on the transaction. We send a checklist for every task.",
  docs: [
    "Trade licence copy",
    "Establishment card copy",
    "Passport and visa copies of the employee or dependant",
    "Emirates ID copies",
    "Signed offer letter or labour contract, for new hires",
    "Company stamp or signatory authorisation, where needed",
  ],
  costNote:
    "Pay per task or on a monthly retainer. Government fees are passed through at cost and shown separately from our service fee.",
  faqs: [
    {
      q: "What does a PRO do in Dubai?",
      a: "A PRO (public relations officer) handles a company’s dealings with government departments: licence renewals, visas, labour files and document clearing. We act as your outsourced PRO.",
    },
    {
      q: "Do I need a monthly retainer?",
      a: "No. You can pay per task. Companies with regular hiring or several visas usually save time and money with a retainer.",
    },
    {
      q: "Can you take over from my current PRO?",
      a: "Yes. We review your licence, visa and labour files, list every upcoming deadline, and take it from there.",
    },
  ],
  related: [l.visa, l.formation, l.attestation],
  ctaTitle: "Hand over the government paperwork",
};

export default function ProServicesPage() {
  return <ServicePage page={page} />;
}
