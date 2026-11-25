import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  ChartLine,
  Check,
  Coins,
  CreditCard,
  Gem,
  Globe,
  Landmark,
  Lock,
  MonitorSmartphone,
  Scale,
  Settings2,
  Wallet,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SplitSection } from "@/components/SplitSection";
import { CTASection } from "@/components/CTASection";
import { WhatsappIcon } from "@/components/SocialIcons";
import { whatsappLink, whatsappMessages } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "BANKING - Dubai Business Bank Account | Easy Setup & Support" },
  description:
    "Open a Dubai business bank account with expert support. We simplify documentation, approvals, and banking setup for a smooth process.",
  alternates: { canonical: "/banking/" },
};

const advantages = [
  { icon: Scale, label: "Better Financial Control & Transparency" },
  { icon: Globe, label: "Global Transactions & Multi-Currency Access" },
  { icon: BadgeCheck, label: "Stronger Credibility & Professional Image" },
  { icon: Coins, label: "Access to Financing, Investment & Preferential Banking" },
  { icon: MonitorSmartphone, label: "Advanced Banking Features & Digital Tools" },
  { icon: Landmark, label: "Tax Efficiency & Financial Structuring" },
  { icon: Lock, label: "Enhanced Security, Privacy & Asset Protection" },
  { icon: Wallet, label: "Seamless Payments & Payroll Solutions" },
  { icon: Gem, label: "Premium Lifestyle & Networking Opportunities" },
  { icon: ChartLine, label: "Financial Insights & Reporting Tools" },
  { icon: Settings2, label: "Tailored Banking Solutions" },
];

const role = [
  "Choosing the Right Bank in the UAE",
  "Complete management of all bank-required documentation",
  "Seamless and hassle-free account setup (corporate & personal)",
  "Expert guidance to select the right bank for your needs",
];

export default function BankingPage() {
  return (
    <>
      <PageHero
        eyebrow="Banking assistance"
        title={
          <>
            Dubai Bank <em className="text-champagne">Account</em>
          </>
        }
        intro="Open your Dubai Business Bank Account the easy way—expert support, zero stress, and a smooth path from paperwork to approval."
        image="/images/dubai-downtown-night.jpg"
        imageAlt="Downtown Dubai financial district at night"
        crumbs={[{ label: "Home", href: "/" }, { label: "Banking" }]}
      >
        <a
          href={whatsappLink(whatsappMessages.banking)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-champagne"
        >
          Book free consultation <ArrowUpRight className="size-4" />
        </a>
      </PageHero>

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe grid gap-6 lg:grid-cols-2">
          <Reveal className="card-luxe p-9 sm:p-12">
            <span className="flex size-14 items-center justify-center bg-olive-deep text-champagne">
              <Landmark className="size-6" strokeWidth={1.2} />
            </span>
            <h2 className="mt-8 text-4xl text-olive-deep sm:text-[2.6rem]">Corporate Bank Account in the UAE</h2>
            <p className="mt-6 text-[0.98rem] leading-[1.9] text-ink-soft/85">
              A corporate bank account is essential for managing company finances, handling daily transactions, and
              maintaining clear financial records. With business account opening in UAE, companies can streamline
              operations through services like payroll processing, transaction tracking, and access to funding. Our Dubai
              Banking Assistance ensures a smooth process by guiding you through bank selection and compliance
              requirements. Understanding the Documents required for UAE corporate bank account is crucial, especially for
              smooth approvals and faster setup. A Business bank account UAE for foreigners also provides international
              entrepreneurs with a secure and reliable way to operate, ensuring a clear separation between personal and
              business finances while enhancing credibility and professionalism in the market.
            </p>
          </Reveal>
          <Reveal delay={150} className="card-luxe p-9 sm:p-12">
            <span className="flex size-14 items-center justify-center bg-olive-deep text-champagne">
              <CreditCard className="size-6" strokeWidth={1.2} />
            </span>
            <h2 className="mt-8 text-4xl text-olive-deep sm:text-[2.6rem]">Private Bank Account in Dubai</h2>
            <p className="mt-6 text-[0.98rem] leading-[1.9] text-ink-soft/85">
              With UAE banking requirements, opening a bank account is one of the first and most important steps when
              starting or settling in Dubai. Whether you need business account opening in UAE or personal banking, having a
              secure account makes managing daily transactions simple and smooth. With Dubai Banking Assistance, the
              process becomes much easier for accounting bookkeeping as well. UAE banks follow strict rules set by the
              Central Bank, which means you need to meet proper verification and submit the right documents required for
              UAE corporate bank account. This can feel complicated if you&apos;re new—but with the right guidance, it
              becomes quick, clear, and hassle-free.
            </p>
          </Reveal>
        </div>
      </section>

      <SplitSection
        eyebrow="Where Manifest Makes It Easy"
        title={
          <>
            From paperwork to approval, <em className="text-olive">completely stress free</em>
          </>
        }
        image="/images/banking.jpg"
        imageAlt="Executive team reviewing banking documents"
        className="bg-white"
      >
        <p>
          Our experts handle everything from paperwork to approvals, so your UAE bank account setup is smooth, fast, and
          completely stress free. With deep knowledge of banking regulations, we make the process simple and reliable from
          start to finish. So you can focus on company formation not stress.
        </p>
        <div className="mt-4 border border-olive-deep/10 bg-ivory p-7">
          <p className="text-[0.65rem] font-medium tracking-[0.3em] text-olive uppercase">Our Role as a Banking Consultant</p>
          <ul className="mt-5 space-y-3.5">
            {role.map((item) => (
              <li key={item} className="flex gap-3.5 text-[0.95rem] text-ink-soft/90">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-olive-deep text-champagne">
                  <Check className="size-3" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-2">
          <a
            href={whatsappLink(whatsappMessages.banking)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-olive"
          >
            <WhatsappIcon className="size-4" /> Book free consultation
          </a>
        </div>
      </SplitSection>

      <section className="grain relative isolate overflow-hidden bg-olive-night py-24 text-ivory sm:py-32">
        <Image src="/images/dubai-aerial-night.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-olive-night via-olive-night/85 to-olive-night" />
        <div className="container-luxe">
          <SectionHeading
            tone="dark"
            eyebrow="Eleven advantages"
            title={
              <>
                Advantages of a Dubai Business Bank Account <em className="text-champagne">with Manifest</em>
              </>
            }
          />
          <div className="mt-16 grid gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, label }, i) => (
              <Reveal
                key={label}
                delay={(i % 4) * 80}
                className="group bg-olive-night p-8 transition-colors duration-700 hover:bg-olive-deep"
              >
                <Icon className="size-7 text-champagne" strokeWidth={1.1} />
                <p className="mt-8 font-display text-[1.45rem] leading-snug">{label}</p>
              </Reveal>
            ))}
            <Reveal delay={240} className="flex flex-col justify-between bg-champagne p-8 text-ink">
              <p className="font-display text-[1.45rem] leading-snug">Ready to open your account?</p>
              <a
                href={whatsappLink(whatsappMessages.banking)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.24em] uppercase"
              >
                Talk to an expert <ArrowUpRight className="size-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Reveal className="container-luxe flex flex-col items-center gap-6 text-center">
          <p className="eyebrow">Connected Banks</p>
          <Image
            src="/images/connected-banks.png"
            alt="Connected banks: FAB Islamic, ADCB, Dubai Islamic Bank, Emirates NBD"
            width={1000}
            height={170}
            className="h-auto w-full max-w-2xl"
          />
        </Reveal>
      </section>

      <CTASection
        eyebrow="Cost estimate"
        title={
          <>
            Ready to launch your <em className="text-champagne">Business?</em>
          </>
        }
        text="No more guesswork - Get a clear and accurate cost estimate to start your Business in Dubai, UAE with our Exclusive Cost Calculator."
        primaryLabel="Get started today!"
        whatsappMessage={whatsappMessages.banking}
      />
    </>
  );
}
