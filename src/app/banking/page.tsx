import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ServicePage, type ServicePageData } from "@/components/ServicePage";
import { serviceLinks as l } from "@/content/service-links";
import { whatsappMessages } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "BANKING - Dubai Business Bank Account | Easy Setup & Support" },
  description:
    "Open a Dubai business bank account with expert support. We simplify documentation, approvals, and banking setup for a smooth process.",
  alternates: { canonical: "/banking/" },
};

const banks = [
  { name: "FAB Islamic", src: "/images/banks/fab-islamic.png", width: 195, height: 60 },
  { name: "ADCB", src: "/images/banks/adcb.png", width: 217, height: 71 },
  { name: "Dubai Islamic Bank", src: "/images/banks/dubai-islamic-bank.png", width: 195, height: 51 },
  { name: "Emirates NBD", src: "/images/banks/emirates-nbd.png", width: 186, height: 58 },
];

const media = (
  <section className="bg-white py-20 sm:py-24">
    <div className="container-luxe">
      <Reveal className="text-center">
        <h2 className="eyebrow justify-center">Banks we work with</h2>
      </Reveal>
      <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {banks.map((bank, i) => (
          <Reveal
            as="li"
            key={bank.name}
            delay={i * 90}
            className="flex h-28 items-center justify-center border border-olive-deep/10 bg-white px-6 py-5 shadow-[0_1px_2px_rgba(42,50,31,0.05),0_14px_30px_-18px_rgba(42,50,31,0.22)] transition-colors hover:border-champagne sm:h-32 sm:px-8"
          >
            <Image
              src={bank.src}
              alt={bank.name}
              width={bank.width}
              height={bank.height}
              className="h-auto max-h-12 w-auto max-w-full object-contain sm:max-h-14"
            />
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

const page: ServicePageData = {
  crumbs: [{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "Banking assistance" }],
  eyebrow: "Banking assistance",
  h1: "Business bank account opening in Dubai",
  intro:
    "UAE banks look closely at new companies, and an incomplete or unclear file is the most common reason for delays. We help you prepare a complete, well-presented application and approach the banks most likely to suit your activity and profile.",
  heroImage: "/images/dubai-downtown-night.jpg",
  heroImageAlt: "Downtown Dubai financial district at night",
  whatsappMessage: whatsappMessages.banking,
  facts: [
    { k: "Banks", v: "Local and international UAE banks" },
    { k: "For", v: "Mainland, free zone and offshore companies" },
    { k: "Typical timeline", v: "Confirmed after profile review" },
  ],
  forTitle: "For new companies that need an account without the back-and-forth",
  forItems: [
    {
      t: "Newly licensed companies",
      d: "Open your first corporate account as soon as your licence and visa are issued.",
    },
    {
      t: "Non-resident founders",
      d: "Understand which banks work with your profile and what they will ask for.",
    },
    {
      t: "Companies that were declined",
      d: "We review what went wrong and rebuild a stronger application.",
    },
  ],
  incTitle: "How we support your application",
  included: [
    "Profile review: activity, shareholders and expected transactions",
    "Bank shortlist matched to your business",
    "Document checklist for each bank",
    "Business profile and company overview preparation",
    "Source-of-funds and KYC guidance",
    "Introduction to the bank’s relationship manager",
    "Interview preparation",
    "Follow-up until a decision is made",
  ],
  image: "/images/banking.jpg",
  imageAlt: "An executive team reviewing banking documents",
  media,
  stepsTitle: "From file to account",
  steps: [
    { n: "01", t: "Profile review", d: "We look at your activity, shareholders and expected turnover." },
    { n: "02", t: "Bank shortlist", d: "We recommend the banks most likely to suit your profile." },
    { n: "03", t: "Prepare the file", d: "We assemble and review every document before submission." },
    { n: "04", t: "Meeting & KYC", d: "You meet the bank; we prepare you for the questions." },
    { n: "05", t: "Account opened", d: "Once approved, your account and online banking are activated." },
  ],
  docsTitle: "Documents banks usually ask for",
  docsNote: "Each bank sets its own requirements. We give you a tailored checklist.",
  docs: [
    "Trade licence and incorporation documents (MOA, share certificate)",
    "Passport, UAE visa and Emirates ID of shareholders and signatories",
    "Proof of residential address",
    "Company profile or business plan",
    "Source of funds and personal bank statements",
    "Contracts, invoices or proof of business activity, if available",
  ],
  costs: [
    { k: "Banking assistance fee", v: "Quoted after profile review" },
    { k: "Minimum balance", v: "Set by each bank" },
    { k: "Typical timeline", v: "Confirmed after profile review" },
  ],
  costNote:
    "Account approval is at the bank’s discretion. We cannot guarantee approval, but a strong file makes a real difference.",
  faqs: [
    {
      q: "Can you guarantee my account will be opened?",
      a: "No one can. Approval is always the bank’s decision. What we do is make sure your application is complete, consistent and sent to banks that suit your profile.",
    },
    {
      q: "Do I need to be in the UAE to open an account?",
      a: "Most banks require shareholders and signatories to attend in person or by video call, and many prefer a UAE residence visa first.",
    },
    {
      q: "How long does it take?",
      a: "It depends on the bank and the complexity of your shareholding. We give you a realistic timeline once we have reviewed your profile.",
    },
  ],
  related: [l.formation, l.accounting, l.visa],
  ctaTitle: "Get your bank file ready the right way",
  ctaImage: "/images/dubai-aerial-night.jpg",
};

export default function BankingPage() {
  return <ServicePage page={page} />;
}
