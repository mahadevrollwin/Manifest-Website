import type { Metadata } from "next";
import Image from "next/image";
import { User } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Dubai Business Setup Experts Company Formation & Consulting" },
  description:
    "Trusted Dubai business setup experts offering end-to-end support for company formation, licensing, visa services, and business growth",
  alternates: { canonical: "/about-manifest-business-setup-experts/" },
};

const stats = [
  { v: "4.9", k: "Google rating" },
  { v: "98%", k: "Client satisfaction" },
  { v: "92%", k: "Customer retention rate" },
  { v: "100%", k: "Client happiness" },
];

const values = [
  {
    n: "01",
    t: "Advice first, paperwork second",
    d: "We recommend the structure that suits your plan, not the one that is easiest to sell.",
  },
  {
    n: "02",
    t: "Clear, itemised quotes",
    d: "Government fees and our service fees are listed separately before you start.",
  },
  {
    n: "03",
    t: "One point of contact",
    d: "One adviser follows your file from first call to licence, visas and bank.",
  },
  {
    n: "04",
    t: "Updates without chasing",
    d: "You hear from us at every stage, by WhatsApp or email.",
  },
  {
    n: "05",
    t: "Here after setup",
    d: "Renewals, compliance reminders and support as you hire and grow.",
  },
  {
    n: "06",
    t: "Confidential by default",
    d: "Your documents and business details are handled with care and shared only where required.",
  },
];

type TeamMember = { role: string; name?: string; languages?: string; photo?: string };

// Add `name`, `languages` and `photo` (a path in /public/images) to show them on the card.
const team: TeamMember[] = [
  { role: "Founder & Managing Director" },
  { role: "Senior Business Setup Adviser" },
  { role: "PRO & Visa Specialist" },
  { role: "Accounts & Tax Manager" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Manifest"
        title="We make setting up in Dubai feel straightforward"
        intro="Honest advice, clear costs, and one team that stays with you long after your licence is issued."
        image="/images/dubai-skyline-dusk.jpg"
        imageAlt="Dubai skyline at dusk"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-luxe grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-5 text-3xl leading-[1.12] text-olive-deep sm:text-4xl lg:text-[2.5rem]">
              Built in Bur Dubai for founders from everywhere
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.7] text-ink-soft">
              Today our team helps entrepreneurs, freelancers and international companies choose the right structure,
              get licensed and stay compliant, from our office in Fahidi Heights, Bur Dubai.
            </p>
            <p className="mt-4 text-[1.05rem] leading-[1.7] text-ink-soft">
              We work with the authorities every day, so we know what each process really needs, and we tell you
              upfront.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="“Every business starts as a dream in someone's mind. Our purpose is to give that dream a real address in Dubai.”"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-olive-mist py-20 text-olive-deep sm:py-24">
        <div className="container-luxe">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.k} delay={i * 90} className="flex flex-col-reverse border-l border-olive-deep/25 pl-6">
                <dt className="mt-2 text-[0.95rem] text-ink-soft">{s.k}</dt>
                <dd className="text-4xl font-bold text-olive-deep sm:text-5xl">{s.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-luxe">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-5 text-3xl leading-[1.12] text-olive-deep sm:text-4xl lg:text-[2.5rem]">
              What you can expect from us
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={(i % 3) * 90}>
                <article className="h-full border border-olive-deep/10 bg-ivory p-7 card-lift">
                  <span className="text-sm font-bold text-champagne-deep">{v.n}</span>
                  <h3 className="mt-3 text-xl leading-snug text-olive-deep">{v.t}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft/85">{v.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive-wash py-20 sm:py-28">
        <div className="container-luxe">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Our team</p>
            <h2 className="mt-5 text-3xl leading-[1.12] text-olive-deep sm:text-4xl lg:text-[2.5rem]">
              The people you&apos;ll work with
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.role} delay={(i % 4) * 90}>
                <article className="h-full overflow-hidden border border-transparent bg-white card-lift">
                  <div className="relative aspect-square bg-[#dcddd2]">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name ?? member.role}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    ) : (
                      <User className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-olive-deep/25" strokeWidth={1.1} aria-hidden="true" />
                    )}
                  </div>
                  <div className="p-5">
                    {member.name && <h3 className="text-lg leading-snug text-olive-deep">{member.name}</h3>}
                    <p className={`text-[0.95rem] text-ink-soft ${member.name ? "mt-1.5" : "font-semibold text-olive-deep"}`}>
                      {member.role}
                    </p>
                    {member.languages && <p className="mt-1.5 text-sm text-ink-soft/70">Speaks {member.languages}</p>}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Visit us in Bur Dubai or book a call" image="/images/dubai-skyline-dusk.jpg" />
    </>
  );
}
