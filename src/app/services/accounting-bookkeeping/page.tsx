import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftRight, ArrowRight, BookOpen, ChartColumn, Receipt, Wallet } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SplitSection } from "@/components/SplitSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Accounting Services Dubai | Expert Bookkeeping & Tax Solutions" },
  description:
    "Get professional accounting services Dubai for bookkeeping, and financial compliance. Trusted experts for businesses across the UAE.",
  alternates: { canonical: "/services/accounting-bookkeeping/" },
};

const supported = [
  { icon: BookOpen, label: "Bookkeeping" },
  { icon: Receipt, label: "Tax Preparation" },
  { icon: ChartColumn, label: "Financial Reporting" },
  { icon: Wallet, label: "Payroll Processing" },
  { icon: ArrowLeftRight, label: "Payable & Receivable" },
];

export default function AccountingPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Accounting &amp; <em className="text-champagne">Bookkeeping</em>
          </>
        }
        intro="Through professional Accounting Services Dubai, Manifest supports your business with precise bookkeeping, timely insights, and complete compliance, ensuring financial peace of mind."
        image="/images/dubai-skyline-day.jpg"
        imageAlt="Dubai skyline"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "Accounting & Bookkeeping" }]}
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Financial clarity</p>
            <h2 className="mt-5 text-4xl leading-[1.08] text-olive-deep sm:text-5xl">
              Bookkeeping made <em className="text-olive">effortless</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-[1.05rem] leading-[1.85] text-ink-soft/85 lg:col-span-7">
            <p className="font-display text-2xl leading-snug text-olive-deep sm:text-3xl">
              Manifest offers trusted Accounting Services Dubai designed to make bookkeeping effortless and efficient.
            </p>
            <p>
              Our team supports startups, small businesses, and growing enterprises with precise reporting and expert
              guidance for complete financial clarity.
            </p>
            <Link href="/contact-us/" className="btn btn-olive">
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <SplitSection
        eyebrow="Why it matters"
        title={
          <>
            Why Choose Bookkeeping &amp; Accounting <em className="text-olive">Services Dubai?</em>
          </>
        }
        image="/images/banking.jpg"
        imageAlt="Business executives reviewing financial documents"
        reverse
        className="bg-white"
      >
        <p>
          Accurate financial records are the foundation of every successful business. With professional Accounting
          Services Dubai, companies can efficiently monitor expenses, manage payroll, and stay fully prepared for tax
          requirements. A well-structured accounting system not only supports informed decision-making but also
          strengthens cash flow and ensures regulatory compliance.
        </p>
        <p>
          At Manifest, a trusted Accounting firm in Dubai, we deliver precise financial management tailored to your
          business needs. As a reliable Bookkeeping company UAE, our experienced professionals handle your accounts with
          accuracy and care—so you can focus on what truly matters: scaling, growing, and building a profitable business
          with confidence.
        </p>
      </SplitSection>

      <section className="bg-olive-wash py-24 sm:py-32">
        <div className="container-luxe">
          <SectionHeading
            align="center"
            eyebrow="Capabilities"
            title={
              <>
                Services We <em className="text-olive">Support</em>
              </>
            }
          />
          <div className="mt-16 grid grid-cols-2 gap-px bg-olive-deep/10 sm:grid-cols-3 lg:grid-cols-5">
            {supported.map(({ icon: Icon, label }, i) => (
              <Reveal
                key={label}
                delay={i * 90}
                className={`group flex flex-col items-center bg-olive-wash px-6 py-12 text-center transition-colors duration-700 hover:bg-olive-deep ${
                  i === supported.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <span className="flex size-16 items-center justify-center rounded-full border border-olive-deep/15 text-olive transition-colors duration-700 group-hover:border-champagne/40 group-hover:text-champagne">
                  <Icon className="size-7" strokeWidth={1.1} />
                </span>
                <p className="mt-7 font-display text-2xl text-olive-deep transition-colors duration-700 group-hover:text-ivory">
                  {label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Financial peace of mind, <em className="text-champagne">every month</em>
          </>
        }
        text="Accurate records, timely reporting, and full compliance—handled by experienced professionals."
        primaryLabel="Get in touch"
      />
    </>
  );
}
