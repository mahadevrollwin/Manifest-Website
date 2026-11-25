import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Landmark, Percent } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SplitSection } from "@/components/SplitSection";
import { Steps } from "@/components/Steps";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: { absolute: "Company Formation in Dubai | Trusted Business Experts" },
  description:
    "Looking for company formation in Dubai? Get complete support from planning to launch with expert guidance and long-term business assistance.",
  alternates: { canonical: "/services/company-formation-in-dubai-experts/" },
};

const reasons = [
  {
    icon: Percent,
    title: "Minimal taxes, full profits",
    text: "Support from the Best UAE business setup consultants makes company setup in Dubai a smart and rewarding move for entrepreneurs. The UAE offers a highly business-friendly environment with minimal taxes—no personal income tax, no capital gains tax, and added benefits in many freezones. You also get the freedom to repatriate 100% of your profits, giving you full control over your earnings and the confidence to grow your business without limitations.",
  },
  {
    icon: Globe,
    title: "A world business hub",
    text: "With Dubai Company Formation, you're not just getting tax benefits—you're stepping into one of the world's biggest business hubs. Perfectly located between Europe, Asia, and Africa, Dubai offers easy access to global markets, backed by world-class infrastructure, modern ports, fast airports, and seamless connectivity for smooth business operations.",
  },
  {
    icon: Landmark,
    title: "Industry-built free zones",
    text: "UAE free zones make starting a business super simple—100% ownership, zero import-export duties, and easy paperwork. Plus, each free zone is built for specific industries, so you get the right environment to grow faster.",
  },
];

const steps = [
  { title: "Choose your Activity & Jurisdiction" },
  { title: "Reserve your Trade Name" },
  { title: "Apply for Initial Approval" },
  { title: "Prepare & Submit Documents" },
  { title: "Finalize Location & Payments" },
  { title: "Receive Your Business License" },
  { title: "Complete Visas & Bank Setup" },
];

export default function CompanyFormationPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Company <em className="text-champagne">Formation</em>
          </>
        }
        intro="At Manifest, we simplify company formation in Dubai by guiding you through every step—from selecting the right business structure and securing the necessary approvals to obtaining your trade license and launching operations smoothly, efficiently, and hassle-free."
        image="/images/dubai-skyline-night.jpg"
        imageAlt="Dubai skyline at night"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "Company Formation" }]}
      />

      <SplitSection
        eyebrow="Company formation in Dubai"
        title={
          <>
            Starting a business doesn&apos;t have to be <em className="text-olive">complicated</em>
          </>
        }
        image="/images/home-team.jpg"
        imageAlt="Business setup consultants working with a client"
      >
        <p>
          With the right guidance for company formation in Dubai, you can choose between{" "}
          <Link href="/dubai-mainland/" className="text-olive underline decoration-champagne underline-offset-4">
            Mainland
          </Link>
          ,{" "}
          <Link href="/dubai-free-zone-business-setup/" className="text-olive underline decoration-champagne underline-offset-4">
            Free Zone
          </Link>
          , or Offshore based on your goals and market reach. Whether you&apos;re planning a complete UAE Business Setup or
          want to open company in Dubai without visiting, picking the right license—commercial, professional, or
          industrial—makes all the difference for a smooth start.
        </p>
        <p>
          Getting these basics right early makes everything smoother—less confusion, fewer delays, and faster business
          launch. With expert UAE company formation services in Dubai, Manifest ensures your setup is simple, compliant,
          and completely stress-free.
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
            eyebrow="The Dubai advantage"
            title={
              <>
                Why Company Formation <em className="text-olive">in Dubai?</em>
              </>
            }
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 120} className="card-luxe flex flex-col p-9 sm:p-11">
                <span className="flex size-14 items-center justify-center bg-olive-deep text-champagne">
                  <Icon className="size-6" strokeWidth={1.2} />
                </span>
                <h3 className="mt-8 text-[1.9rem] leading-tight text-olive-deep">{title}</h3>
                <p className="mt-5 text-[0.95rem] leading-[1.85] text-ink-soft/85">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Steps
        eyebrow="Step-by-step guide to open a company in Dubai"
        title={
          <>
            How to open a Company <em className="text-champagne">in the UAE?</em>
          </>
        }
        intro="Seven clear steps from idea to licensed, bank-ready business—with Manifest handling the details at every stage."
        steps={steps}
        aside={
          <Link href="/contact-us/" className="btn btn-champagne">
            Contact Us <ArrowRight className="size-4" />
          </Link>
        }
      />

      <CTASection
        title={
          <>
            To know more about how to <em className="text-champagne">Open a Company in UAE</em>
          </>
        }
        primaryLabel="Contact Us"
      />
    </>
  );
}
