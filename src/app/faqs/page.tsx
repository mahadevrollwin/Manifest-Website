import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { FaqTabs } from "@/components/FaqTabs";
import { faqGroups } from "@/content/faqs";

export const metadata: Metadata = {
  title: { absolute: "Dubai Business Setup FAQs Expert Answers UAE Company Setup" },
  description:
    "Find answers to Dubai business setup FAQs including how to start a company in Dubai, costs, visa process, PRO services, and accounting.",
  alternates: { canonical: "/faqs/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Expert answers"
        title="Dubai business setup FAQs"
        intro="Straight answers to the questions founders ask us most. Don't see yours? Ask an adviser; it's free."
        image="/images/dubai-burj-night.jpg"
        imageAlt="The Burj Khalifa illuminated at night"
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <section className="bg-ivory py-20 sm:py-24">
        <FaqTabs groups={faqGroups} />
      </section>

      <CtaBand title="Get answers for your exact business" image="/images/dubai-skyline-night.jpg" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
