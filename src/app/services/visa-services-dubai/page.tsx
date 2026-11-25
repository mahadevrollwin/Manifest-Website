import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Crown, UserCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SplitSection } from "@/components/SplitSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Visa Services Dubai | Fast & Reliable UAE Visa Processing" },
  description:
    "Looking for visa services Dubai? Get expert visa services Dubai for employment, investor, and family visas. hassle-free approvals.",
  alternates: { canonical: "/services/visa-services-dubai/" },
};

const visas = [
  {
    title: "Visit Visa (Family & Friends)",
    duration: "30, 60, or 90 days, extendable.",
    eligible: "Sponsored by UAE residents for relatives or friends.",
    image: "/images/visa-couple.jpg",
  },
  {
    title: "Employment Visa / Work Permit",
    duration: "2 years (renewable).",
    eligible: "Sponsored by a UAE employer.",
    image: "/images/visa-agency.jpg",
  },
  {
    title: "Investor / Partner Visa",
    duration: "30, 60, or 90 days, extendable.",
    eligible: "Individuals investing in a UAE business or joining as a company partner.",
    image: "/images/home-handshake.jpg",
  },
  {
    title: "Dependent Visa (Family Sponsorship)",
    eligible: "Spouses, children, and sometimes parents of UAE residents.",
    image: "/images/visa-family.jpg",
  },
];

export default function VisaServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Visa Services <em className="text-champagne">Dubai</em>
          </>
        }
        intro="Manifest offers reliable Visa Services Dubai, providing seamless, hassle-free processing for Golden, employment, and family visas across the UAE, with expert guidance and quick approvals."
        image="/images/dubai-marina.jpg"
        imageAlt="Dubai Marina waterfront"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "Visa Services" }]}
      />

      <SplitSection
        eyebrow="Your move to the UAE"
        title={
          <>
            A powerful step toward <em className="text-olive">personal and professional success</em>
          </>
        }
        image="/images/visa-couple.jpg"
        imageAlt="Young couple with suitcases at the airport reading a tablet"
      >
        <p>
          Choosing Visa Services Dubai with Manifest opens the door to exceptional opportunities in a country known for
          professional growth, cultural diversity, and a high quality of life. Through our expert Dubai visa assistance
          services and reliable Visa processing services Dubai, we ensure a smooth and efficient journey for individuals
          and businesses looking to establish themselves in the UAE.
        </p>
        <p>
          With a fast-growing economy, world-class infrastructure, and a strategic location connecting Europe, Asia, and
          Africa, the UAE offers unmatched potential for career advancement and global exposure. Whether you&apos;re
          applying for a UAE employment visa or exploring other residency options, our Dubai Visa Services simplify the
          entire process with clarity and speed.
        </p>
        <p>
          Beyond business, the UAE&apos;s safety, modern lifestyle, tax-free income, and vibrant multicultural environment
          make it an ideal destination for both work and travel. With the right guidance and seamless support, your move to
          the UAE becomes not just easy—but a powerful step toward personal and professional success.
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
            eyebrow="Visa categories"
            title={
              <>
                The right visa for <em className="text-olive">every journey</em>
              </>
            }
          />

          <Reveal className="grain relative isolate mt-16 overflow-hidden bg-olive-night text-ivory">
            <Image src="/images/dubai-burj-night.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-45" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-night via-olive-night/85 to-transparent" />
            <div className="grid gap-10 p-10 sm:p-14 lg:grid-cols-2 lg:p-16">
              <div>
                <span className="inline-flex items-center gap-2 border border-champagne/40 px-4 py-2 text-[0.62rem] tracking-[0.3em] text-champagne uppercase">
                  <Crown className="size-3.5" /> Premium residency
                </span>
                <h3 className="mt-8 text-5xl sm:text-6xl">
                  Golden <em className="text-champagne">Visa</em>
                </h3>
              </div>
              <dl className="grid gap-8 self-end sm:grid-cols-2">
                <div>
                  <dt className="flex items-center gap-2 text-[0.65rem] tracking-[0.28em] text-champagne uppercase">
                    <Clock className="size-3.5" /> Duration
                  </dt>
                  <dd className="mt-3 font-display text-4xl">10 Years</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-[0.65rem] tracking-[0.28em] text-champagne uppercase">
                    <UserCheck className="size-3.5" /> Eligible
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-ivory/80">
                    Investors, entrepreneurs, scientists, highly skilled talents, and top-performing students.
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {visas.map((visa, i) => (
              <Reveal key={visa.title} delay={(i % 2) * 120} className="card-luxe group grid overflow-hidden sm:grid-rows-[15rem_1fr]">
                <div className="relative h-60 overflow-hidden sm:h-auto">
                  <Image
                    src={visa.image}
                    alt={visa.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[2s] ease-luxe group-hover:scale-105"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <h3 className="text-[1.9rem] leading-tight text-olive-deep">{visa.title}</h3>
                  <dl className="mt-6 space-y-4 border-t border-olive-deep/10 pt-6 text-[0.95rem]">
                    {visa.duration && (
                      <div className="flex gap-4">
                        <dt className="w-20 shrink-0 text-[0.62rem] leading-6 tracking-[0.26em] text-olive uppercase">Duration</dt>
                        <dd className="text-ink-soft/85">{visa.duration}</dd>
                      </div>
                    )}
                    <div className="flex gap-4">
                      <dt className="w-20 shrink-0 text-[0.62rem] leading-6 tracking-[0.26em] text-olive uppercase">Eligible</dt>
                      <dd className="text-ink-soft/85">{visa.eligible}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Secure the right visa, <em className="text-champagne">without the stress</em>
          </>
        }
        text="Our experts handle documentation, application, and follow-ups with precision—reducing delays and minimizing rejection risks."
      />
    </>
  );
}
