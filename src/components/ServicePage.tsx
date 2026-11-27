import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Anchor,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  Calculator,
  Check,
  Globe2,
  Landmark,
  Languages,
  Plane,
  Store,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "./PageHero";
import { CtaBand } from "./CtaBand";
import { Reveal } from "./Reveal";
import { Accordion } from "./Accordion";
import { WhatsappIcon } from "./SocialIcons";
import { Rich, T } from "./T";
import { whatsappLink, whatsappMessages } from "@/content/site";

// Icons for the "Related services" cards. The first six match the homepage "Our services" cards.
const relatedIcons: Record<string, LucideIcon> = {
  "/services/company-formation-in-dubai-experts/": Building2,
  "/services/pro-services-dubai/": Landmark,
  "/services/visa-services-dubai/": Plane,
  "/banking/": Banknote,
  "/services/accounting-bookkeeping/": Calculator,
  "/services/attestation-translation-dubai/": Languages,
  "/dubai-mainland/": Store,
  "/dubai-free-zone-business-setup/": Globe2,
  "/dubai-offshore-company-formation/": Anchor,
};

export type ServicePageData = {
  crumbs: { label: string; href?: string }[];
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroImageAlt?: string;
  facts?: { k: string; v: string }[];
  whatsappMessage?: string;

  forTitle: string;
  forItems: { t: string; d: string; image?: string }[];

  incTitle: string;
  included: string[];
  /** Existing photo shown beside the "What's included" list. */
  image?: string;
  imageAlt?: string;
  compare?: { title: string; cols: string[]; rows: { label: string; cells: string[] }[] };

  /** Extra sections (existing imagery and supporting content) rendered before "How it works". */
  media?: ReactNode;

  stepsTitle: string;
  steps: { n: string; t: string; d: string }[];

  docsTitle: string;
  docsNote: string;
  docs: string[];

  costs?: { k: string; v: string }[];
  costNote: string;

  faqs: { q: string; a: string }[];
  related: { t: string; href: string; d?: string }[];

  ctaTitle: string;
  ctaImage?: string;
};

export function ServicePage({ page }: { page: ServicePageData }) {
  const wa = page.whatsappMessage ?? whatsappMessages.general;
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        intro={page.intro}
        image={page.heroImage}
        imageAlt={page.heroImageAlt}
        crumbs={page.crumbs}
        facts={page.facts}
      >
        <Link href="/contact-us/" className="btn btn-champagne">
          <T>Book free consultation</T> <ArrowRight className="size-4 rtl:-scale-x-100" />
        </Link>
        <a href={whatsappLink(wa)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
          <WhatsappIcon className="size-4" /> <T>Chat on WhatsApp</T>
        </a>
      </PageHero>

      {/* Who it's for */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-luxe">
          <Reveal className="max-w-3xl">
            <p className="eyebrow"><T>Who it&apos;s for</T></p>
            <h2 className="mt-5 text-3xl leading-[1.15] text-olive-deep sm:text-4xl"><T>{page.forTitle}</T></h2>
          </Reveal>
          <div
            className={`mt-12 grid gap-6 sm:grid-cols-2 ${page.forItems.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
          >
            {page.forItems.map((item, i) => (
              <Reveal key={item.t} delay={(i % 4) * 90} className="flex flex-col overflow-hidden border border-olive-deep/10 bg-ivory card-lift">
                {item.image && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-7">
                  <h3 className="text-xl leading-snug text-olive-deep"><T>{item.t}</T></h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft/85"><T>{item.d}</T></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-olive-wash py-20 sm:py-24">
        <div className="container-luxe">
          <div className={page.image ? "grid items-start gap-12 lg:grid-cols-12 lg:gap-16" : ""}>
            <Reveal className={page.image ? "min-w-0 lg:col-span-7" : "min-w-0"}>
              <p className="eyebrow"><T>What&apos;s included</T></p>
              <h2 className="mt-5 max-w-3xl text-3xl leading-[1.15] text-olive-deep sm:text-4xl"><T>{page.incTitle}</T></h2>
              <ul className={`mt-10 grid gap-x-10 gap-y-4 ${page.image ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                {page.included.map((item) => (
                  <li key={item} className="flex gap-3.5 text-[0.98rem] leading-snug text-ink-soft">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-olive-deep text-champagne">
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    <T>{item}</T>
                  </li>
                ))}
              </ul>
            </Reveal>
            {page.image && (
              <Reveal delay={120} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={page.image}
                    alt={page.imageAlt ?? ""}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            )}
          </div>

          {page.compare && (
            <Reveal className="mt-16 min-w-0">
              <h3 className="text-2xl text-olive-deep"><T>{page.compare.title}</T></h3>
              <div className="mt-6 overflow-x-auto border border-olive-deep/10 bg-white">
                <table className="w-full min-w-[44rem] border-collapse text-start text-[0.95rem]">
                  <thead>
                    <tr className="bg-olive-deep text-ivory">
                      {page.compare.cols.map((col, i) => (
                        <th key={i} scope="col" className="px-5 py-4 text-sm font-semibold">
                          <T>{col}</T>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-olive-deep/10">
                    {page.compare.rows.map((row) => (
                      <tr key={row.label} className="align-top">
                        <th scope="row" className="w-40 px-5 py-4 font-semibold text-olive-deep">
                          <T>{row.label}</T>
                        </th>
                        {row.cells.map((cell, i) => (
                          <td key={i} className="px-5 py-4 leading-relaxed text-ink-soft/90">
                            <T>{cell}</T>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {page.media}

      {/* How it works */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-luxe">
          <Reveal className="max-w-3xl">
            <p className="eyebrow"><T>How it works</T></p>
            <h2 className="mt-5 text-3xl leading-[1.15] text-olive-deep sm:text-4xl"><T>{page.stepsTitle}</T></h2>
          </Reveal>
          <ol
            className={`mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 ${
              page.steps.length >= 5 ? "lg:grid-cols-5" : page.steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {page.steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 80}>
                <div className="-mx-3 h-full border-t-2 border-champagne px-3 pt-6 pb-7 card-lift hover:bg-ivory">
                  <span className="text-sm font-semibold tracking-[0.12em] text-champagne-deep">{step.n}</span>
                  <h3 className="mt-3 text-xl leading-snug text-olive-deep"><T>{step.t}</T></h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft/85"><T>{step.d}</T></p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Documents + cost */}
      <section className="bg-ivory py-20 sm:py-24">
        <div className="container-luxe grid gap-6 lg:grid-cols-2">
          <Reveal className="border border-olive-deep/10 bg-white p-8 card-lift sm:p-10">
            <h2 className="text-2xl text-olive-deep sm:text-3xl"><T>{page.docsTitle}</T></h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft/80"><T>{page.docsNote}</T></p>
            <ul className="mt-7 space-y-3.5">
              {page.docs.map((doc) => (
                <li key={doc} className="flex gap-3 text-[0.98rem] leading-snug text-ink-soft">
                  <span className="mt-[0.7em] h-px w-3 shrink-0 bg-champagne-deep" />
                  <T>{doc}</T>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="flex flex-col border border-transparent bg-olive-night p-8 text-ivory card-lift card-lift-dark sm:p-10">
            <h2 className="text-2xl sm:text-3xl"><T>Timeline &amp; cost</T></h2>
            {page.costs && page.costs.length > 0 && (
              <dl className="mt-7 divide-y divide-ivory/15 border-y border-ivory/15">
                {page.costs.map((cost) => (
                  <div key={cost.k} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-4">
                    <dt className="text-ivory/70"><T>{cost.k}</T></dt>
                    <dd className="font-semibold text-champagne"><T>{cost.v}</T></dd>
                  </div>
                ))}
              </dl>
            )}
            <p className="mt-6 text-[0.95rem] leading-relaxed text-ivory/75"><T>{page.costNote}</T></p>
            {/* mt-auto keeps the button pinned to the card bottom; pt-6 guarantees breathing room above it. */}
            <div className="mt-auto pt-6">
              <Link href="/contact-us/" className="btn btn-champagne">
                <T>Get an itemised quote</T> <ArrowUpRight className="size-4 rtl:-scale-x-100" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-olive-wash py-20 sm:py-24">
        <div className="container-luxe grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow"><T>FAQs</T></p>
            <h2 className="mt-5 text-3xl leading-[1.15] text-olive-deep sm:text-4xl"><T>Common questions</T></h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-soft/85">
              <Rich
                slots={{
                  ask: (
                    <Link href="/contact-us/" className="font-semibold text-olive underline decoration-champagne underline-offset-4">
                      <T>Ask an adviser</T>
                    </Link>
                  ),
                  faqs: (
                    <Link href="/faqs/" className="font-semibold text-olive underline decoration-champagne underline-offset-4">
                      <T>all FAQs</T>
                    </Link>
                  ),
                }}
              >
                {"Can't find your answer? {ask} or see {faqs}."}
              </Rich>
            </p>
          </Reveal>
          <Reveal delay={120} className="min-w-0 lg:col-span-8">
            <Accordion
              name={`faq-${page.eyebrow}`}
              items={page.faqs.map((f, i) => ({ question: f.q, answer: <p><T>{f.a}</T></p>, defaultOpen: i === 0 }))}
            />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {page.related.length > 0 && (
        <section className="bg-ivory py-20 sm:py-24">
          <div className="container-luxe">
            <Reveal>
              <h2 className="text-2xl text-olive-deep"><T>Related services</T></h2>
            </Reveal>
            <div
              className={`mt-10 grid gap-5 sm:grid-cols-2 ${
                page.related.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
              }`}
            >
              {page.related.map((r, i) => {
                const Icon = relatedIcons[r.href] ?? Building2;
                return (
                  <Reveal key={r.href} delay={i * 80} className="h-full">
                    <Link
                      href={r.href}
                      className="group relative flex h-full flex-col border border-olive-deep/10 bg-white p-6 card-lift"
                    >
                      <span className="flex size-10 items-center justify-center border border-olive-deep/10 text-olive transition-colors duration-500 group-hover:border-champagne group-hover:text-champagne-deep">
                        <Icon className="size-[1.15rem]" strokeWidth={1.5} aria-hidden />
                      </span>
                      <h3 className="mt-5 text-xl leading-tight text-olive-night"><T>{r.t}</T></h3>
                      {r.d && <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-soft/85"><T>{r.d}</T></p>}
                      <span className="mt-4 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-champagne-deep transition-colors group-hover:text-olive-deep">
                        <T>Learn more</T>
                        <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={page.ctaTitle} whatsappMessage={wa} image={page.ctaImage} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
