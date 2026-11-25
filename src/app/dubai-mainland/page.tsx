import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building, Check, Factory, Handshake, Megaphone, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SplitSection } from "@/components/SplitSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Dubai Mainland Company Formation | Trusted Experts" },
  description:
    "Looking for Dubai Mainland Company Formation? Get complete support for setup, documents, and approvals to launch your business quickly.",
  alternates: { canonical: "/dubai-mainland/" },
};

const professional = [
  {
    title: "Sole Establishment",
    text: "Sole Establishment is a popular choice under Dubai mainland business formation for professionals, consultants, and service providers. If you're exploring How to start main land company in Dubai, this structure offers full control with 100% foreign ownership, making it ideal for independent business owners. It is a key option within business setup in dubai mainland for individuals looking to operate outside Free Zones.",
    points: [
      "100% foreign ownership under Dubai mainland business formation",
      "No minimum capital requirement",
      "No corporate or personal income tax",
      "UAE national required as a local service agent (no ownership rights)",
      "Single shareholder ownership structure",
      "Tax-efficient setup for professionals and consultants.",
    ],
  },
  {
    title: "Civil Company",
    text: "Civil Company is a popular option in Dubai mainland business formation, especially for professionals exploring How to start main land company in Dubai or planning a business setup in dubai mainland. It allows full foreign ownership while ensuring compliance with local regulations through a Local Service Agent (LSA).",
    points: [
      "100% foreign ownership with full business control",
      "Suitable for professional and service-based activities",
      "Requires a professional license",
      "Up to 3 shareholders allowed",
      "Local Service Agent (LSA) is mandatory but holds no ownership or profit share",
      "LSA handles government procedures without any management authority",
      "LSA is paid a fixed annual fee and may need relevant qualifications for certain activities",
    ],
  },
];

const industrialBenefits = [
  { icon: ShieldCheck, label: "Secure and fully compliant financial transactions." },
  { icon: Factory, label: "Advanced facilities for industrial and manufacturing operations." },
  { icon: TrendingUp, label: "Greater scope for business growth and new opportunities." },
];

const support = [
  { icon: Building, label: "Referral to commercial Real Estate Broker Agency." },
  { icon: Megaphone, label: "Introduction to the Web Developing & Advertising Agency." },
  { icon: Handshake, label: "Company bank account Set-up advice." },
];

export default function DubaiMainlandPage() {
  return (
    <>
      <PageHero
        eyebrow="Business setup"
        title={
          <>
            Dubai <em className="text-champagne">Mainland</em>
          </>
        }
        intro="Manifest Business Services simplifies Dubai Mainland Company Formation, helping entrepreneurs transform business ideas into scalable ventures with expert support, fast registration, and a hassle-free setup experience in the UAE."
        image="/images/dubai-skyline-dusk.jpg"
        imageAlt="Downtown Dubai skyline at dusk"
        crumbs={[{ label: "Home", href: "/" }, { label: "Dubai Mainland" }]}
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Department of Economic Development</p>
            <h2 className="mt-5 text-4xl leading-[1.08] text-olive-deep sm:text-5xl">
              Dubai Mainland <em className="text-olive">Company Formation</em>
            </h2>
            <div className="mt-10 border-l-2 border-champagne bg-olive-deep p-8 text-ivory">
              <p className="font-display text-6xl leading-none text-champagne-light">100%</p>
              <p className="mt-4 text-sm leading-relaxed text-ivory/80">
                The UAE now allows 100% foreign ownership for over 1,000 commercial and industrial activities, and many
                businesses no longer need an Emirati sponsor or local service agent.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-[1.05rem] leading-[1.9] text-ink-soft/85 lg:col-span-7">
            <p>
              Dubai Mainland business formation involves registering a company with the UAE Department of Economic
              Development (DED), enabling businesses to operate freely across Dubai and the wider UAE without geographical
              restrictions. This structure offers direct access to local customers, government projects, and a
              well-established business infrastructure.
            </p>
            <p>
              With a Dubai Mainland business formation, companies can engage in a wide range of activities, including
              professional, commercial, industrial, trading, and service-based operations. While most business activities
              are permitted, certain sectors may require additional approvals from relevant authorities.
            </p>
            <Link href="/contact-us/" className="btn btn-olive">
              Book free consultation <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <SplitSection
        eyebrow="Types of Licenses Issued in Dubai Mainland"
        title={
          <>
            Dubai Mainland <em className="text-olive">License</em>
          </>
        }
        image="/images/mainland-license.jpg"
        imageAlt="Official stamp being applied to a license document"
        className="bg-white"
      >
        <p>
          A Dubai Mainland License is one of the most popular options for entrepreneurs looking to establish a Dubai
          mainland business with complete operational freedom. It allows companies to trade across the UAE, import and
          export goods, and access local markets without restrictions. For those researching How to start mainland company
          in Dubai, a mainland license offers a flexible and scalable foundation for long-term growth.
        </p>
        <p>
          With a Dubai Mainland License, investors can enjoy 100% foreign ownership, choose from multiple business
          activities under a single license, and operate from locations across Dubai and the UAE. The recommended minimum
          share capital is AED 300,000, making it a strong choice for businesses planning expansion and market penetration.
        </p>
        <p>
          A Dubai mainland business also benefits from Dubai&apos;s business-friendly environment, including favorable tax
          regulations, no personal income tax, and unrestricted trading opportunities. If you&apos;re wondering How to start
          mainland company in Dubai, obtaining a mainland license is often the first step toward building a successful and
          sustainable presence in the UAE.
        </p>
      </SplitSection>

      <section className="bg-olive-wash py-24 sm:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Licence type"
            title={
              <>
                Professional <em className="text-olive">License</em>
              </>
            }
            intro="Discover why entrepreneurs and businesses trust us to build strong, future-ready companies."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {professional.map((option, i) => (
              <Reveal key={option.title} delay={i * 150} className="card-luxe flex flex-col p-9 sm:p-12">
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-5xl text-champagne-deep/50">{i + 1}.</span>
                  <h3 className="text-4xl text-olive-deep">{option.title}</h3>
                </div>
                <p className="mt-6 text-[0.98rem] leading-[1.85] text-ink-soft/85">{option.text}</p>
                <p className="mt-8 text-[0.65rem] font-medium tracking-[0.3em] text-olive uppercase">Key Highlights</p>
                <ul className="mt-5 space-y-3.5">
                  {option.points.map((point) => (
                    <li key={point} className="flex gap-3.5 text-[0.95rem] leading-relaxed text-ink-soft/90">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-olive-deep text-champagne">
                        <Check className="size-3" strokeWidth={2.5} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative isolate overflow-hidden bg-olive-night py-24 text-ivory sm:py-32">
        <Image src="/images/mainland-team.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-night via-olive-night/90 to-olive-night/70" />
        <div className="container-luxe grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow eyebrow-light">Manufacturing &amp; production</p>
            <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">
              Industrial <em className="text-champagne">License</em>
            </h2>
            <p className="mt-8 text-[1.05rem] leading-[1.9] text-ivory/75">
              A Dubai Mainland License, specifically a Dubai Mainland Business License for industrial activities, is
              required for businesses engaged in manufacturing or production within the UAE. This license allows companies
              to manufacture, assemble, or process goods using both locally sourced and imported raw materials. Issued by
              the Department of Economic Development (DED), a Dubai Mainland License ensures businesses can operate legally
              within the mainland. Depending on the nature of the activity, obtaining a Dubai Mainland Business License may
              also require additional approvals from relevant ministries, government departments, or municipal
              authorities.
            </p>
          </Reveal>
          <div className="space-y-4 self-center">
            {industrialBenefits.map(({ icon: Icon, label }, i) => (
              <Reveal
                key={label}
                delay={i * 120}
                className="flex items-center gap-6 border border-ivory/10 bg-ivory/[0.03] p-7 backdrop-blur-sm transition-colors duration-700 hover:border-champagne/50"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-champagne/15 text-champagne">
                  <Icon className="size-6" strokeWidth={1.2} />
                </span>
                <p className="font-display text-2xl leading-snug">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe grid gap-6 lg:grid-cols-2">
          <Reveal className="card-luxe p-9 sm:p-12">
            <span className="flex size-14 items-center justify-center bg-olive-deep text-champagne">
              <Zap className="size-6" strokeWidth={1.2} />
            </span>
            <h2 className="mt-8 text-4xl text-olive-deep">Instant License in Dubai</h2>
            <p className="mt-6 text-[0.98rem] leading-[1.85] text-ink-soft/85">
              Starting a business in Dubai is now faster than ever with the Instant Dubai Mainland License. Entrepreneurs
              can obtain a Dubai Mainland License in as little as 5–10 minutes, making it easier to launch a Dubai mainland
              business without lengthy paperwork or delays. The Instant Dubai Mainland License allows investors and
              startups to begin operations quickly, access the UAE local market, and enjoy a simplified registration
              process. During the first year, businesses can benefit from added flexibility, including no requirement for a
              trade name at the time of issuance and no mandatory physical office space. Whether you&apos;re a startup,
              freelancer, or established investor, this fast-track solution offers a hassle-free way to establish and grow
              your Dubai mainland business with minimal setup requirements.
            </p>
          </Reveal>
          <Reveal delay={150} className="card-luxe p-9 sm:p-12">
            <span className="flex size-14 items-center justify-center bg-olive-deep text-champagne">
              <Handshake className="size-6" strokeWidth={1.2} />
            </span>
            <h2 className="mt-8 text-4xl text-olive-deep">Establishment by GCC Citizen</h2>
            <div className="mt-6 space-y-5 text-[0.98rem] leading-[1.85] text-ink-soft/85">
              <p>
                The framework supporting a Dubai Mainland License is influenced by regional economic cooperation among Gulf
                countries. The member states of the Gulf Cooperation Council—UAE, Saudi Arabia, Oman, Qatar, Kuwait, and
                Bahrain—signed the United Economic Agreement on 7 June 1981 in Riyadh to unify economic, financial,
                commercial, and industrial regulations. The UAE adopted this agreement in 1982, strengthening cross-border
                business opportunities.
              </p>
              <p>
                Under Federal Law No. 2 of 1989, GCC nationals are allowed to establish and operate businesses in the UAE
                through a Dubai Mainland License, subject to certain conditions. The investor must be a UAE resident,
                personally carry out the licensed activity, and hold a valid license to practice the same activity in their
                home country. This framework makes obtaining a Dubai Mainland License more accessible for GCC entrepreneurs
                while ensuring regulatory consistency.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-luxe grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Beyond the license</p>
            <h2 className="mt-4 text-4xl text-olive-deep sm:text-5xl">
              Dedicated <em className="text-olive">Support</em>
            </h2>
          </Reveal>
          <div className="grid gap-px bg-olive-deep/10 sm:grid-cols-3 lg:col-span-8">
            {support.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 100} className="bg-white p-8">
                <Icon className="size-7 text-olive" strokeWidth={1.2} />
                <p className="mt-6 text-[0.98rem] leading-relaxed text-ink-soft/90">{label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Start your <em className="text-champagne">mainland company</em> with confidence
          </>
        }
        text="Get complete support for setup, documents, and approvals to launch your business quickly."
      />
    </>
  );
}
