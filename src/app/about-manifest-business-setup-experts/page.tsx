import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Compass, Eye, Scale, Target, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { AuthoritiesStrip } from "@/components/AuthoritiesStrip";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Dubai Business Setup Experts Company Formation & Consulting" },
  description:
    "Trusted Dubai business setup experts offering end-to-end support for company formation, licensing, visa services, and business growth",
  alternates: { canonical: "/about-manifest-business-setup-experts/" },
};

const values = [
  { icon: Scale, label: "Expert legal advice" },
  { icon: Compass, label: "Personalized and strategic approach" },
  { icon: Award, label: "Excellent representation" },
  { icon: Users, label: "Knowledgeable and experienced team" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Manifest"
        title={
          <>
            About <em className="text-champagne">Manifest</em>
          </>
        }
        intro="Trusted Dubai business setup experts delivering seamless company formation, compliance support, and sustainable business growth across the UAE."
        image="/images/dubai-skyline-dusk.jpg"
        imageAlt="Downtown Dubai skyline with the Burj Khalifa at dusk"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Manifest" }]}
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-5 text-4xl leading-[1.08] text-olive-deep sm:text-5xl">
              Starting a business doesn&apos;t have to be <em className="text-olive">complicated</em>
            </h2>
            <div className="mt-8 space-y-6 text-[1.05rem] leading-[1.9] text-ink-soft/85">
              <p>
                With the right guidance for{" "}
                <Link href="/services/company-formation-in-dubai-experts/" className="text-olive underline decoration-champagne underline-offset-4">
                  company formation in Dubai
                </Link>
                , you can choose between Mainland, Free Zone, or Offshore based on your goals and market reach. Whether
                you&apos;re planning a complete UAE Business Setup or want to open company in Dubai without visiting,
                picking the right license—commercial, professional, or industrial—makes all the difference for a smooth
                start.
              </p>
              <p>
                Getting these basics right early makes everything smoother—less confusion, fewer delays, and faster
                business launch. With expert UAE company formation services in Dubai, Manifest ensures your setup is
                simple, compliant, and completely stress-free.
              </p>
            </div>
            <Link href="/contact-us/" className="btn btn-olive mt-10">
              Schedule your free consulting session <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <Reveal delay={150} className="relative lg:col-span-5">
            <div className="absolute -inset-2 translate-x-3 translate-y-3 border border-champagne/60 sm:-inset-4 sm:translate-x-5 sm:translate-y-5" />
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="“Every business starts as a dream in someone's mind. Our purpose is to give that dream a real address in Dubai.”"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-olive-wash py-24 sm:py-32">
        <div className="container-luxe">
          <SectionHeading
            align="center"
            eyebrow="Our purpose"
            title={
              <>
                Mission &amp; <em className="text-olive">Vision</em>
              </>
            }
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Mission",
                text: "To simplify the journey of starting and scaling a business in Dubai by delivering end-to-end consultation, strategic guidance, and seamless execution—so entrepreneurs can focus on building their vision while we handle the foundation, compliance, and growth roadmap.",
              },
              {
                icon: Eye,
                title: "Vision",
                text: "To make Dubai the most accessible global business hub by turning ambitious ideas into legally sound, scalable, and internationally competitive enterprises—without complexity, confusion, or delays.",
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 150} className="card-luxe p-10 sm:p-14">
                <span className="flex size-16 items-center justify-center rounded-full bg-olive-deep text-champagne">
                  <Icon className="size-7" strokeWidth={1.2} />
                </span>
                <h3 className="mt-8 text-4xl text-olive-deep">{title}</h3>
                <div className="mt-5 h-px w-14 bg-champagne" />
                <p className="mt-6 text-[1.05rem] leading-[1.85] text-ink-soft/85">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Find peace of mind with Manifest"
            title={
              <>
                What every client <em className="text-olive">can expect</em>
              </>
            }
          />
          <div className="mt-14 grid gap-px bg-olive-deep/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 90} className="bg-ivory p-8 sm:p-10">
                <Icon className="size-8 text-olive" strokeWidth={1.1} />
                <p className="mt-8 font-display text-2xl leading-snug text-olive-deep">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AuthoritiesStrip />

      <CTASection
        title={
          <>
            Let&apos;s give your dream a <em className="text-champagne">real address</em> in Dubai
          </>
        }
        text="Book a free consultation and get clear, expert guidance on the right structure, license, and next steps."
      />
    </>
  );
}
