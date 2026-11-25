import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BookOpen,
  Calculator,
  Check,
  Copyright,
  FileBadge,
  Gavel,
  IdCard,
  Stamp,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SplitSection } from "@/components/SplitSection";
import { Steps } from "@/components/Steps";
import { AuthoritiesStrip } from "@/components/AuthoritiesStrip";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Dubai Free Zone Business Setup: Complete Guide for 2026" },
  description:
    "Dubai free zone business setup guide covering costs, benefits, documents, and registration process. Launch your UAE business the smart way.",
  alternates: { canonical: "/dubai-free-zone-business-setup/" },
};

const checklist = [
  "Company Formation & Business Setup",
  "Free Zone Trade Licensing",
  "Tax & Regulatory Advisory",
  "Corporate Bank Account Assistance",
  "Ongoing Compliance Management",
  "UAE Residence Visa Support",
];

const services = [
  { icon: FileBadge, label: "Business Licensing" },
  { icon: Banknote, label: "Corporate Bank Account Setup" },
  { icon: BookOpen, label: "Accounting & Bookkeeping" },
  { icon: Calculator, label: "Corporate Tax Services" },
  { icon: IdCard, label: "Residency & PRO Services" },
  { icon: Gavel, label: "Legal Services" },
  { icon: Stamp, label: "Attestation & Legalization" },
  { icon: Copyright, label: "Trademark & Copyright" },
];

const structures = [
  { title: "Free Zone Establishment", short: "FZE", image: "/images/fz-fze.jpg" },
  { title: "Free Zone Company", short: "FZCO", image: "/images/fz-fzco.jpg" },
  { title: "Free Zone Limited Liability Company", short: "FZ LLC", image: "/images/fz-fzllc.jpg" },
];

const freeZones = [
  { short: "IFZA", name: "International Free Zone Authority" },
  { short: "DMCC", name: "Dubai Multi Commodities Centre" },
  { short: "ADGM", name: "Abu Dhabi Global Market" },
  { short: "DIFC", name: "Dubai International Financial Centre" },
  { short: "Meydan", name: "Meydan Free Zone" },
  { short: "SPC", name: "Sharjah Publishing City" },
  { short: "RAKEZ", name: "Ras Al Khaimah Economic Zone" },
  { short: "AFZ", name: "Ajman Free Zone" },
  { short: "SRTIP", name: "Sharjah Research, Technology & Innovation Park" },
  { short: "DAFZA", name: "Dubai Airport Free Zone" },
  { short: "JAFZA", name: "Jebel Ali Free Zone" },
];

const steps = [
  {
    title: "Choose Your Free Zone & Activity",
    text: "We map your business activity and goals to the free zone best suited to your industry and budget.",
  },
  {
    title: "Select Your Company Structure & License",
    text: "FZE, FZCO, or FZ LLC—with the right commercial, service, or industrial license.",
  },
  {
    title: "Reserve Your Trade Name & Apply",
    text: "We prepare and file your application with the free zone authority.",
  },
  {
    title: "Submit Documents & Receive Approval",
    text: "Passport copies and supporting documents are reviewed and approved.",
  },
  {
    title: "Finalize Office Space & Payments",
    text: "Choose a flexi-desk or office package and settle the licensing fees.",
  },
  {
    title: "Receive Your License, Visas & Bank Account",
    text: "Your free zone license is issued, followed by residence visas and corporate banking.",
  },
];

export default function FreeZonePage() {
  return (
    <>
      <PageHero
        eyebrow="Dubai Free Zone"
        title={
          <>
            Business <em className="text-champagne">Setup</em>
          </>
        }
        intro="From idea to execution, Manifest Business Services leads your Dubai free zone business setup with clarity, strategy, and scalability."
        image="/images/dubai-marina.jpg"
        imageAlt="Dubai Marina with yachts and skyscrapers"
        crumbs={[{ label: "Home", href: "/" }, { label: "Dubai Free Zone" }]}
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">Free zone company formation UAE</p>
            <h2 className="mt-5 text-4xl leading-[1.08] text-olive-deep sm:text-5xl">
              Business Setup Services in <em className="text-olive">Dubai Free Zones, UAE</em>
            </h2>
            <p className="mt-8 text-[1.05rem] leading-[1.9] text-ink-soft/85">
              Set up your venture with confidence through Dubai free zone business setup services by Manifest. As your
              trusted partner for Free Zone Company Setup Dubai and Free zone company formation UAE, we provide end-to-end
              support—from licensing and documentation to visas and regulatory compliance. Our experienced consultants
              streamline every step, ensuring a smooth, efficient, and stress-free company formation for entrepreneurs and
              startups ready to scale.
            </p>
            <Link href="/contact-us/" className="btn btn-olive mt-10">
              Book free consultation <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <Reveal delay={150} className="self-center lg:col-span-6">
            <ul className="divide-y divide-olive-deep/10 border-y border-olive-deep/10">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-5 py-5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-olive-deep text-champagne">
                    <Check className="size-4" strokeWidth={2} />
                  </span>
                  <span className="font-display text-2xl text-olive-deep">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-olive-wash py-24 sm:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="End-to-end solutions"
            title={
              <>
                UAE Free Zone Business <em className="text-olive">Setup Services</em>
              </>
            }
            intro="At Manifest, we offer end-to-end business setup solutions in UAE Free Zones, making the process simple, seamless, and efficient—from initial setup to long-term growth."
          />
          <div className="mt-16 grid grid-cols-2 gap-px bg-olive-deep/10 lg:grid-cols-4">
            {services.map(({ icon: Icon, label }, i) => (
              <Reveal
                key={label}
                delay={(i % 4) * 90}
                className="group bg-olive-wash p-7 transition-colors duration-700 hover:bg-white sm:p-10"
              >
                <Icon className="size-8 text-olive transition-colors duration-700 group-hover:text-champagne-deep" strokeWidth={1.1} />
                <p className="mt-8 font-display text-[1.45rem] leading-snug text-olive-deep sm:text-2xl">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SplitSection
        eyebrow="46+ UAE jurisdictions"
        title={
          <>
            What Is a Free Zone <em className="text-olive">Company in Dubai?</em>
          </>
        }
        image="/images/dubai-skyline-night.jpg"
        imageAlt="Dubai skyline at night"
      >
        <p>
          The UAE offers a wide range of free zones, each designed to support specific industries such as trading,
          technology, design, finance, media, and more—making dubai free zone business setup a highly strategic choice for
          modern entrepreneurs. These zones provide industry-focused infrastructure, flexible regulations, and attractive
          benefits tailored for growth. At Manifest, we collaborate with 46+ UAE jurisdictions, guiding businesses through
          Free Zone Company Setup Dubai by helping them select the most suitable location aligned with their goals,
          operations, and long-term vision.
        </p>
        <p>
          Free zone company formation UAE is an ideal pathway for entrepreneurs and investors seeking an efficient,
          cost-effective, and globally competitive business environment. Manifest enables businesses to leverage
          Dubai&apos;s purpose-built free zones, which are designed to attract international companies through world-class
          infrastructure, advanced facilities, and seamless support services. The cost of dubai free zone business setup
          depends on key factors such as the chosen free zone, business activity, and license type—whether commercial,
          service-based, or industrial.
        </p>
        <p>
          With competitive setup costs, fast-track licensing procedures, and investor-friendly incentives, Free Zone
          Company Setup Dubai positions your business for rapid scalability. A free zone company formation UAE not only
          ensures 100% ownership and operational flexibility but also provides direct access to global markets while
          maintaining full compliance with UAE regulations—making it a powerful foundation for regional and international
          expansion.
        </p>
      </SplitSection>

      <section className="bg-white py-24 sm:py-32">
        <div className="container-luxe">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Dedicated Support"
              title={
                <>
                  Choose the Right Free Zone Company <em className="text-olive">Structure with Manifest</em>
                </>
              }
            />
            <Reveal>
              <Link href="/contact-us/" className="btn btn-ghost-dark">
                Book free consultation <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {structures.map((s, i) => (
              <Reveal key={s.short} delay={i * 130}>
                <div className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden p-8 text-ivory">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="-z-20 object-cover transition-transform duration-[2s] ease-luxe group-hover:scale-110"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-olive-night via-olive-night/40 to-transparent" />
                  <span className="font-display text-6xl leading-none text-champagne">{s.short}</span>
                  <span className="mt-4 h-px w-12 bg-champagne/70 transition-all duration-700 group-hover:w-20" />
                  <h3 className="mt-4 text-2xl leading-snug">{s.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe">
          <SectionHeading
            align="center"
            eyebrow="Jurisdictions"
            title={
              <>
                Free Zones <em className="text-olive">in the UAE</em>
              </>
            }
          />
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {freeZones.map((zone, i) => (
              <Reveal
                key={zone.short}
                delay={(i % 4) * 70}
                className="card-luxe flex min-h-44 flex-col justify-between p-6 sm:p-8"
              >
                <span className="font-display text-4xl text-olive-deep sm:text-5xl">{zone.short}</span>
                <span className="mt-6 text-xs leading-relaxed tracking-[0.08em] text-ink-soft/75 sm:text-sm">{zone.name}</span>
              </Reveal>
            ))}
            <Reveal delay={210} className="flex min-h-44 flex-col justify-between bg-olive-deep p-6 text-ivory sm:p-8">
              <span className="font-display text-4xl text-champagne sm:text-5xl">46+</span>
              <Link href="/contact-us/" className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase hover:text-champagne">
                Find your zone <ArrowRight className="size-3.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Steps
        eyebrow="General Timeline: 1 to 4 weeks"
        title={
          <>
            Get the Right Dubai Free Zone License with <em className="text-champagne">Manifest&apos;s Expert Guidance</em>
          </>
        }
        steps={steps}
        aside={
          <Link href="/contact-us/" className="btn btn-champagne">
            Book free consultation <ArrowRight className="size-4" />
          </Link>
        }
      />

      <AuthoritiesStrip />

      <CTASection
        title={
          <>
            Launch your UAE business <em className="text-champagne">the smart way</em>
          </>
        }
        text="Tell us about your activity and we will recommend the free zone, structure, and package that fits your goals."
      />
    </>
  );
}
