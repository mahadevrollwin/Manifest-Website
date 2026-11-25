import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SplitSection } from "@/components/SplitSection";
import { CTASection } from "@/components/CTASection";
import { whatsappMessages } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "PRO Services UAE – Expert Business & Visa Support in Dubai" },
  description:
    "Expert PRO services in Dubai for business setup, visa processing, and compliance. Fast, reliable, and stress-free solutions for UAE businesses.",
  alternates: { canonical: "/services/pro-services-dubai/" },
};

const reasons = [
  {
    title: "Time & Cost Savings",
    text: "Manifest manages all government documentation efficiently, helping you avoid delays, penalties, and unnecessary expenses.",
  },
  {
    title: "Complete Legal Compliance",
    text: "We ensure your business fully adheres to UAE regulations, including labor laws, visa processes, and licensing requirements.",
  },
  {
    title: "In-Depth Process Expertise",
    text: "Manifest's PRO specialists stay updated with current regulations and procedures, reducing the risk of errors in applications and filings.",
  },
  {
    title: "Quicker Approvals",
    text: "Our strong coordination with government authorities helps accelerate approvals for visas, licenses, permits, and renewals.",
  },
  {
    title: "Business-First Approach",
    text: "By outsourcing PRO responsibilities to Manifest, you can concentrate on growing your business without administrative distractions.",
  },
  {
    title: "Reduced Business Risks",
    text: "Accurate and timely submissions help protect your company from fines, rejections, and operational delays.",
  },
  {
    title: "End-to-End Visa Assistance",
    text: "Manifest supports your team with visa processing, Emirates ID services, and ongoing employee documentation needs.",
  },
];

export default function ProServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            PRO <em className="text-champagne">Services</em>
          </>
        }
        intro="Manifest's PRO (Public Relations Officer) Services help businesses efficiently manage all government-related procedures, including visa processing, labor approvals, trade license applications, and official document clearances."
        image="/images/dubai-aerial-night.jpg"
        imageAlt="Aerial view of Dubai at night"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "PRO Services" }]}
      />

      <SplitSection
        eyebrow="Government liaison"
        title={
          <>
            Compliance handled, so you can <em className="text-olive">focus on growth</em>
          </>
        }
        image="/images/mainland-team.jpg"
        imageAlt="Business team in Dubai"
      >
        <p>
          By ensuring full compliance with UAE laws and regulations, Manifest reduces administrative workload, saves
          valuable time, and minimizes the risk of penalties or processing delays.
        </p>
        <p>
          With expert PRO support, businesses stay informed about regulatory updates, improve operational efficiency, and
          can focus on their core operations while Manifest handles all official and procedural requirements.
        </p>
        <div className="pt-4">
          <Link href="/contact-us/" className="btn btn-olive">
            Schedule your free consulting session <ArrowRight className="size-4" />
          </Link>
        </div>
      </SplitSection>

      <section className="bg-olive-wash py-24 sm:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Seven reasons"
            title={
              <>
                Why Choose <em className="text-olive">PRO Services?</em>
              </>
            }
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <Reveal
                key={reason.title}
                delay={(i % 3) * 100}
                className={`card-luxe p-9 sm:p-10 ${i === reasons.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <span className="font-display text-5xl text-champagne-deep/50">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-[1.75rem] leading-tight text-olive-deep">{reason.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft/80">{reason.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Talk to a PRO specialist"
        title={
          <>
            Have Queries? <em className="text-champagne">Let&apos;s Talk on WhatsApp!</em>
          </>
        }
        whatsappMessage={whatsappMessages.pro}
        whatsappLabel="Let's talk on WhatsApp"
        primaryLabel="Book free consultation"
      />
    </>
  );
}
