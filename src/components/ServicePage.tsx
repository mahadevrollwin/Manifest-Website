import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "./PageHero";
import { CtaBand } from "./CtaBand";
import { Reveal } from "./Reveal";
import { Accordion } from "./Accordion";
import { WhatsappIcon } from "./SocialIcons";
import { whatsappLink, whatsappMessages } from "@/content/site";

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

  costsTitle?: string;
  costs?: { k: string; v: string }[];
  costNote: string;

  faqs: { q: string; a: string }[];
  related: { t: string; href: string }[];

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
          Get my free setup plan <ArrowRight className="size-4" />
        </Link>
        <a href={whatsappLink(wa)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
          <WhatsappIcon className="size-4" /> Chat on WhatsApp
        </a>
      </PageHero>

      {/* Who it's for */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-luxe">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Who it&apos;s for</p>
            <h2 className="mt-5 text-3xl leading-[1.15] text-olive-deep sm:text-4xl">{page.forTitle}</h2>
          </Reveal>
          <div
            className={`mt-12 grid gap-6 sm:grid-cols-2 ${page.forItems.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
          >
            {page.forItems.map((item, i) => (
              <Reveal key={item.t} delay={(i % 4) * 90} className="flex flex-col overflow-hidden border border-olive-deep/10 bg-ivory">
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
                  <h3 className="text-xl leading-snug text-olive-deep">{item.t}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft/85">{item.d}</p>
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
              <p className="eyebrow">What&apos;s included</p>
              <h2 className="mt-5 max-w-3xl text-3xl leading-[1.15] text-olive-deep sm:text-4xl">{page.incTitle}</h2>
              <ul className={`mt-10 grid gap-x-10 gap-y-4 ${page.image ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                {page.included.map((item) => (
                  <li key={item} className="flex gap-3.5 text-[0.98rem] leading-snug text-ink-soft">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-olive-deep text-champagne">
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    {item}
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
              <h3 className="text-2xl text-olive-deep">{page.compare.title}</h3>
              <div className="mt-6 overflow-x-auto border border-olive-deep/10 bg-white">
                <table className="w-full min-w-[44rem] border-collapse text-left text-[0.95rem]">
                  <thead>
                    <tr className="bg-olive-deep text-ivory">
                      {page.compare.cols.map((col, i) => (
                        <th key={i} scope="col" className="px-5 py-4 text-sm font-semibold">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-olive-deep/10">
                    {page.compare.rows.map((row) => (
                      <tr key={row.label} className="align-top">
                        <th scope="row" className="w-40 px-5 py-4 font-semibold text-olive-deep">
                          {row.label}
                        </th>
                        {row.cells.map((cell, i) => (
                          <td key={i} className="px-5 py-4 leading-relaxed text-ink-soft/90">
                            {cell}
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
            <p className="eyebrow">How it works</p>
            <h2 className="mt-5 text-3xl leading-[1.15] text-olive-deep sm:text-4xl">{page.stepsTitle}</h2>
          </Reveal>
          <ol
            className={`mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 ${
              page.steps.length >= 5 ? "lg:grid-cols-5" : page.steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {page.steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 80} className="border-t-2 border-champagne pt-6">
                <span className="text-sm font-semibold tracking-[0.12em] text-champagne-deep">{step.n}</span>
                <h3 className="mt-3 text-xl leading-snug text-olive-deep">{step.t}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft/85">{step.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Documents + cost */}
      <section className="bg-ivory py-20 sm:py-24">
        <div className="container-luxe grid gap-6 lg:grid-cols-2">
          <Reveal className="border border-olive-deep/10 bg-white p-8 sm:p-10">
            <h2 className="text-2xl text-olive-deep sm:text-3xl">{page.docsTitle}</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft/80">{page.docsNote}</p>
            <ul className="mt-7 space-y-3.5">
              {page.docs.map((doc) => (
                <li key={doc} className="flex gap-3 text-[0.98rem] leading-snug text-ink-soft">
                  <span className="mt-[0.7em] h-px w-3 shrink-0 bg-champagne-deep" />
                  {doc}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="flex flex-col bg-olive-night p-8 text-ivory sm:p-10">
            <h2 className="text-2xl sm:text-3xl">{page.costsTitle ?? "Costs"}</h2>
            {page.costs && page.costs.length > 0 && (
              <dl className="mt-7 divide-y divide-ivory/15 border-y border-ivory/15">
                {page.costs.map((cost) => (
                  <div key={cost.k} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-4">
                    <dt className="text-ivory/70">{cost.k}</dt>
                    <dd className="font-semibold text-champagne">{cost.v}</dd>
                  </div>
                ))}
              </dl>
            )}
            <p className="mt-6 text-[0.95rem] leading-relaxed text-ivory/75">{page.costNote}</p>
            <Link href="/contact-us/" className="btn btn-champagne mt-auto self-start">
              Get an itemised quote <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-olive-wash py-20 sm:py-24">
        <div className="container-luxe grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-5 text-3xl leading-[1.15] text-olive-deep sm:text-4xl">Common questions</h2>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-soft/85">
              Not here? <Link href="/contact-us/" className="font-semibold text-olive underline decoration-champagne underline-offset-4">Ask an adviser</Link>{" "}
              or see <Link href="/faqs/" className="font-semibold text-olive underline decoration-champagne underline-offset-4">all FAQs</Link>.
            </p>
          </Reveal>
          <Reveal delay={120} className="min-w-0 lg:col-span-8">
            <Accordion
              name={`faq-${page.eyebrow}`}
              items={page.faqs.map((f) => ({ question: f.q, answer: <p>{f.a}</p> }))}
            />
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {page.related.length > 0 && (
        <section className="bg-white py-20 sm:py-24">
          <div className="container-luxe">
            <Reveal>
              <p className="eyebrow">Related services</p>
              <h2 className="mt-5 text-3xl leading-[1.15] text-olive-deep sm:text-4xl">You may also need</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {page.related.map((r, i) => (
                <Reveal key={r.href} delay={i * 80}>
                  <Link
                    href={r.href}
                    className="group flex items-center justify-between gap-4 border border-olive-deep/10 bg-ivory p-6 text-lg font-semibold text-olive-deep transition-colors hover:border-champagne hover:bg-olive-wash"
                  >
                    {r.t}
                    <ArrowUpRight className="size-5 shrink-0 text-champagne-deep transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={page.ctaTitle} whatsappMessage={wa} image={page.ctaImage} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
