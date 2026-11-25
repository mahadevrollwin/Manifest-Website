import type { Metadata } from "next";
import { ServicePage, type ServicePageData } from "@/components/ServicePage";
import { serviceLinks as l } from "@/content/service-links";

export const metadata: Metadata = {
  title: { absolute: "Accounting Services Dubai | Expert Bookkeeping & Tax Solutions" },
  description:
    "Get professional accounting services Dubai for bookkeeping, and financial compliance. Trusted experts for businesses across the UAE.",
  alternates: { canonical: "/services/accounting-bookkeeping/" },
};

const page: ServicePageData = {
  crumbs: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Accounting & bookkeeping" },
  ],
  eyebrow: "Accounting & bookkeeping",
  h1: "Accounting and bookkeeping in Dubai",
  intro:
    "Clean books make everything easier: VAT returns, corporate tax, bank reviews and investor conversations. We keep your records accurate and your filings on time, so compliance never gets in the way of growth.",
  heroImage: "/images/dubai-skyline-day.jpg",
  heroImageAlt: "Dubai skyline in daylight",
  facts: [
    { k: "Corporate tax", v: "0% up to AED 375,000, then 9%" },
    { k: "VAT", v: "Registration, returns and records" },
    { k: "Reporting", v: "Monthly or quarterly" },
  ],
  forTitle: "For companies that want compliance handled properly",
  forItems: [
    {
      t: "New companies",
      d: "Set up your books, chart of accounts and tax registrations correctly from day one.",
    },
    {
      t: "Growing SMEs",
      d: "Monthly bookkeeping and management reports, without hiring an in-house accountant.",
    },
    {
      t: "Free zone companies",
      d: "Keep the records you need to support Qualifying Free Zone Person status.",
    },
  ],
  incTitle: "Accounting services we offer",
  included: [
    "Monthly bookkeeping and bank reconciliations",
    "Corporate tax registration",
    "Corporate tax return preparation and filing",
    "VAT registration and deregistration",
    "Quarterly or monthly VAT returns",
    "Financial statements and management reports",
    "Payroll and WPS support",
    "Audit support with approved auditors",
    "Accounting software setup",
  ],
  image: "/images/banking.jpg",
  imageAlt: "A finance team reviewing company accounts",
  stepsTitle: "How we work with you",
  steps: [
    { n: "01", t: "Review", d: "We look at your current records, registrations and deadlines." },
    { n: "02", t: "Set up", d: "Chart of accounts, software and a simple document-sharing routine." },
    { n: "03", t: "Monthly books", d: "You send invoices and statements; we record and reconcile." },
    { n: "04", t: "File on time", d: "VAT and corporate tax returns prepared, reviewed and filed." },
    { n: "05", t: "Report", d: "Clear monthly or quarterly reports on how your business is doing." },
  ],
  docsTitle: "What we need from you",
  docsNote: "We set up a simple monthly routine so this takes you minutes, not days.",
  docs: [
    "Trade licence and incorporation documents",
    "Bank statements for all company accounts",
    "Sales invoices and purchase bills",
    "Expense receipts",
    "Payroll records, if you have employees",
    "Previous financial statements and tax registrations, if any",
  ],
  costs: [
    { k: "Bookkeeping", v: "Fixed monthly fee" },
    { k: "VAT return", v: "Quoted per return" },
    { k: "Corporate tax filing", v: "Quoted per year" },
  ],
  costNote:
    "Pricing depends on your monthly transaction volume. We quote a fixed monthly fee after reviewing your records.",
  faqs: [
    {
      q: "Do I need to register for corporate tax?",
      a: "Yes. Most UAE companies, including free zone companies, must register for corporate tax and file an annual return, even if their tax due is 0%. Taxable income up to AED 375,000 is taxed at 0%, and income above that at 9%.",
    },
    {
      q: "When do I need to register for VAT?",
      a: "VAT registration is mandatory once your taxable supplies exceed AED 375,000 in 12 months, and optional from AED 187,500. We monitor this for you.",
    },
    {
      q: "What is a Qualifying Free Zone Person?",
      a: "A free zone company that meets set conditions, including substance and record-keeping requirements, can pay 0% corporate tax on qualifying income. Proper books are essential to support this.",
    },
    {
      q: "Can you take over from my current accountant?",
      a: "Yes. We review your existing records, fix any gaps and take over from the next period.",
    },
  ],
  related: [l.formation, l.banking, l.freeZone],
  ctaTitle: "Keep your books clean and your filings on time",
};

export default function AccountingPage() {
  return <ServicePage page={page} />;
}
