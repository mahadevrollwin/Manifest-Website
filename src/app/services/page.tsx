import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { serviceLinks as l } from "@/content/service-links";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Company formation, PRO services, visa services, banking assistance, accounting & bookkeeping and attestation—end-to-end business setup services in Dubai.",
  alternates: { canonical: "/services/" },
};

const setup = [
  {
    ...l.formation,
    d: "Advice on licence and jurisdiction, then every step from trade name to trade licence.",
  },
  { ...l.mainland, d: "Trade anywhere in the UAE with up to 100% ownership for most activities." },
  { ...l.freeZone, d: "100% ownership, flexible offices and 0% corporate tax on qualifying income." },
  { ...l.offshore, t: "Offshore", d: "A structure for holding assets and international business." },
];

const run = [
  {
    ...l.pro,
    d: "Licence renewals, labour files, approvals and document clearing, handled for you.",
  },
  {
    ...l.visa,
    d: "Investor, employee, family and Golden Visas, from entry permit to Emirates ID.",
  },
  {
    ...l.banking,
    d: "A complete, well-presented file for the banks that suit your profile.",
  },
  { ...l.accounting, d: "Monthly books, VAT and corporate tax registration and filing." },
  {
    ...l.attestation,
    d: "Document attestation and certified legal translation for UAE use.",
  },
];

const steps = [
  { n: "01", t: "Free consultation", d: "Tell us about your business, budget and visa needs. No obligation." },
  {
    n: "02",
    t: "Your setup plan",
    d: "We recommend the jurisdiction, licence and office, with a full written quote.",
  },
  {
    n: "03",
    t: "We handle the approvals",
    d: "Trade name, approvals, documents and submissions, with updates at every stage.",
  },
  {
    n: "04",
    t: "Visas, bank & launch",
    d: "Residence visas, Emirates ID and bank account, so you are ready to trade.",
  },
];

function ServiceCards({ items, cols }: { items: { t: string; href: string; d: string }[]; cols: string }) {
  return (
    <div className={`mt-8 grid gap-5 sm:grid-cols-2 ${cols}`}>
      {items.map((s, i) => (
        <Reveal key={s.href} delay={(i % 3) * 90} className="flex">
          <Link
            href={s.href}
            className="card-luxe card-lift group flex w-full flex-col gap-3 p-7"
          >
            <h3 className="text-xl leading-snug text-olive-deep"><T>{s.t}</T></h3>
            <p className="flex-1 text-[0.95rem] leading-relaxed text-ink-soft/85"><T>{s.d}</T></p>
            <span className="text-[0.95rem] font-semibold text-champagne-deep transition-colors group-hover:text-olive-deep">
              <T>Learn more</T> <span aria-hidden className="inline-block rtl:-scale-x-100">→</span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Business setup services in Dubai"
        intro="Everything you need to start, run and grow a company in the UAE, handled by one team, with one point of contact."
        image="/images/dubai-downtown-night.jpg"
        imageAlt="Downtown Dubai financial district at night"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-ivory py-20 sm:py-24">
        <div className="container-luxe">
          <Reveal>
            <h2 className="text-3xl text-olive-deep sm:text-[2rem]"><T>Set up your company</T></h2>
            <p className="mt-2 text-[1.05rem] text-ink-soft/85"><T>Choose the right jurisdiction and get licensed.</T></p>
          </Reveal>
          <ServiceCards items={setup} cols="lg:grid-cols-4" />

          <Reveal className="mt-20">
            <h2 className="text-3xl text-olive-deep sm:text-[2rem]"><T>Run and grow</T></h2>
            <p className="mt-2 text-[1.05rem] text-ink-soft/85"><T>Ongoing support once your company is licensed.</T></p>
          </Reveal>
          <ServiceCards items={run} cols="lg:grid-cols-3" />
        </div>
      </section>

      <section className="bg-olive-wash py-20 sm:py-24">
        <div className="container-luxe">
          <Reveal className="max-w-3xl">
            <p className="eyebrow"><T>How it works</T></p>
            <h2 className="mt-5 text-3xl leading-[1.15] text-olive-deep sm:text-4xl">
              <T>From first call to trade licence in four steps</T>
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90}>
                <div className="-mx-3 h-full border-t-2 border-olive-deep px-3 pt-6 pb-7 card-lift hover:bg-white">
                  <span className="text-4xl font-bold text-champagne">{s.n}</span>
                  <h3 className="mt-3 text-xl leading-snug text-olive-deep"><T>{s.t}</T></h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft/85"><T>{s.d}</T></p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Not sure where to start? Talk to an adviser." image="/images/dubai-skyline-night.jpg" />
    </>
  );
}
