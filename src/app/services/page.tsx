import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Banknote, Building2, Calculator, Landmark, Languages, Plane, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { coreServices } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Company formation, PRO services, visa services, banking assistance, accounting & bookkeeping and attestation—end-to-end business setup services in Dubai.",
  alternates: { canonical: "/services/" },
};

const icons: Record<(typeof coreServices)[number]["key"], LucideIcon> = {
  formation: Building2,
  pro: Landmark,
  visa: Plane,
  banking: Banknote,
  accounting: Calculator,
  attestation: Languages,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Our <em className="text-champagne">Services</em>
          </>
        }
        intro="Manifest Business Services makes Dubai Company Formation and Company Setup in Dubai simple, smooth, and stress-free—while we handle the setup, paperwork, and growth support, every step of the way."
        image="/images/dubai-downtown-night.jpg"
        imageAlt="Downtown Dubai at night"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="End-to-end support"
            title={
              <>
                Everything your business needs, <em className="text-olive">under one roof</em>
              </>
            }
          />
          <div className="mt-16 space-y-px bg-olive-deep/10">
            {coreServices.map((service, i) => {
              const Icon = icons[service.key];
              return (
                <Reveal key={service.key} delay={i * 60}>
                  <Link
                    href={service.href}
                    className="group grid items-center gap-6 bg-ivory py-10 transition-colors duration-700 hover:bg-white sm:grid-cols-[5rem_1fr_auto] sm:gap-10 sm:px-8 lg:grid-cols-[5rem_22rem_1fr_auto]"
                  >
                    <span className="font-display text-4xl text-champagne-deep/60">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="flex items-center gap-4 text-3xl text-olive-deep sm:text-[2.2rem]">
                      <Icon className="size-7 shrink-0 text-olive" strokeWidth={1.2} />
                      {service.title}
                    </h2>
                    <p className="text-[0.98rem] leading-relaxed text-ink-soft/80 sm:col-start-2 lg:col-start-auto">
                      {service.text}
                    </p>
                    <span className="flex size-14 items-center justify-center rounded-full border border-olive-deep/15 text-olive transition-all duration-700 group-hover:border-olive-deep group-hover:bg-olive-deep group-hover:text-champagne sm:row-start-1 sm:col-start-3 lg:col-start-4">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Not sure where to <em className="text-champagne">start?</em>
          </>
        }
        text="Tell us about your business and we will recommend the right jurisdiction, license, and services for your goals."
      />
    </>
  );
}
