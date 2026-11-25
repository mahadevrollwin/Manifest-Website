import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/Accordion";
import { CTASection } from "@/components/CTASection";
import { faqCategories, faqToPlainText, type FaqBlock } from "@/content/faqs";

export const metadata: Metadata = {
  title: { absolute: "Dubai Business Setup FAQs Expert Answers UAE Company Setup" },
  description:
    "Find answers to Dubai business setup FAQs including how to start a company in Dubai, costs, visa process, PRO services, and accounting.",
  alternates: { canonical: "/faqs/" },
};

function Answer({ blocks }: { blocks: FaqBlock[] }) {
  return blocks.map((block, i) =>
    typeof block === "string" ? (
      <p key={i}>{block}</p>
    ) : (
      <ul key={i} className="space-y-2 pl-1">
        {block.list.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-[0.7em] h-px w-3 shrink-0 bg-champagne-deep" />
            {item}
          </li>
        ))}
      </ul>
    ),
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((c) =>
    c.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: faqToPlainText(item.a) },
    })),
  ),
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Expert answers"
        title={
          <>
            Frequently Asked <em className="text-champagne">Questions</em>
          </>
        }
        intro="Find answers to common Dubai business setup questions, including company formation, visa services, PRO support, and accounting in the UAE."
        image="/images/dubai-burj-night.jpg"
        imageAlt="The Burj Khalifa illuminated at night"
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-20">
          <aside className="min-w-0 lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">Categories</p>
              <nav aria-label="FAQ categories" className="mt-6">
                <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l lg:border-olive-deep/10 lg:pb-0">
                  {faqCategories.map((c) => (
                    <li key={c.id} className="shrink-0">
                      <a
                        href={`#${c.id}`}
                        className="block border border-olive-deep/10 px-4 py-2.5 text-sm whitespace-nowrap text-ink-soft transition-colors hover:border-olive hover:text-olive-deep lg:-ml-px lg:border-0 lg:border-l lg:border-transparent lg:px-6 lg:py-3 lg:text-base lg:hover:border-champagne"
                      >
                        {c.title}
                        <span className="ml-2 text-xs text-champagne-deep">{c.items.length}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-10 hidden bg-olive-deep p-8 text-ivory lg:block">
                <p className="font-display text-2xl leading-snug">Still have questions?</p>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                  Our Dubai business setup experts are a message away.
                </p>
                <Link href="/contact-us/" className="btn btn-champagne mt-6 w-full">
                  Contact Us <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-20 lg:col-span-8">
            {faqCategories.map((category, i) => (
              <Reveal key={category.id} delay={i === 0 ? 120 : 0}>
                <section id={category.id} className="scroll-mt-32">
                  <div className="mb-6 flex items-baseline gap-4">
                    <span className="font-display text-2xl text-champagne-deep">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="text-3xl text-olive-deep sm:text-4xl">{category.title}</h2>
                  </div>
                  <Accordion
                    name={category.id}
                    items={category.items.map((item) => ({ question: item.q, answer: <Answer blocks={item.a} /> }))}
                  />
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Get answers specific to <em className="text-champagne">your business</em>
          </>
        }
        text="Book a free consultation and our experts will walk you through costs, timelines, and the right setup for you."
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
