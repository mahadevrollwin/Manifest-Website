import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Building2,
  Calculator,
  Check,
  Landmark,
  Languages,
  Phone,
  Plane,
  Star,
  type LucideIcon,
} from "lucide-react";
import { HeroVideo } from "@/components/HeroVideo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { LangScope, Rich, T } from "@/components/T";
import { Counter } from "@/components/Counter";
import { Accordion } from "@/components/Accordion";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FormationPackages } from "@/components/FormationPackages";
import { LatestInsights } from "@/components/LatestInsights";
import { WhatsappIcon } from "@/components/SocialIcons";
import { coreServices, site, whatsappLink, whatsappMessages } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Dubai Company Formation Services | Fast & Hassle-Free Setup" },
  alternates: { canonical: "/" },
};

const heroPoints = [
  "Mainland, free zone & offshore",
  "Licence, visas, PRO & banking under one roof",
  "Clear quote before you commit",
  "Office in Bur Dubai, meet us in person",
];

const serviceIcons: Record<(typeof coreServices)[number]["key"], LucideIcon> = {
  formation: Building2,
  pro: Landmark,
  visa: Plane,
  banking: Banknote,
  accounting: Calculator,
  attestation: Languages,
};

const steps = [
  { title: "Free consultation", text: "Tell us about your business, budget and visa needs. No obligation." },
  {
    title: "Your setup plan",
    text: "We recommend the jurisdiction, licence and office option, with a full written quote.",
  },
  {
    title: "We handle the approvals",
    text: "Trade name, initial approval, documents and government submissions, with updates at every stage.",
  },
  { title: "Visas, bank & launch", text: "Residence visas, Emirates ID and bank account, so you are ready to trade." },
];

const zones = [
  {
    title: "Dubai Mainland",
    href: "/dubai-mainland/",
    text: "Trade anywhere in the UAE, work directly with government clients and open an office anywhere in Dubai. 100% foreign ownership is available for most activities.",
    bestFor: "retail, services to UAE customers, contracting",
  },
  {
    title: "Dubai Free Zone",
    href: "/dubai-free-zone-business-setup/",
    text: "100% ownership, fast setup and flexible office packages. Trading directly with the UAE mainland usually needs a distributor or an extra permit.",
    bestFor: "global-facing and online businesses",
  },
  {
    title: "Offshore",
    href: "/contact-us/",
    text: "A structure for holding assets and running international business from the UAE. It cannot trade inside the UAE or sponsor residence visas.",
    bestFor: "holding companies, international trading",
  },
];

const stats = [
  { value: 4.9, decimals: 1, suffix: "", label: "Google rating" },
  { value: 98, decimals: 0, suffix: "%", label: "Client satisfaction" },
  { value: 92, decimals: 0, suffix: "%", label: "Customer retention rate" },
  { value: 100, decimals: 0, suffix: "%", label: "Client happiness" },
];

const googleReviewsUrl =
  "https://www.google.com/search?q=Manifest+Business+Services+Dubai+reviews&sei=nCcIa-LIN8HD5OUPiKCkwAw";

// Real 5-star reviews from Manifest's Google Business profile (quotes are verbatim; longer ones are trimmed).
const testimonials = [
  {
    quote:
      "Outstanding service from start to finish! The team is highly professional, knowledgeable, and always ready to provide the right guidance. They made the entire business setup process smooth, transparent, and hassle-free.",
    name: "Abdul Nafaay",
    detail: "Google review",
    rating: 5,
  },
  {
    quote:
      "We had a wonderful experience with Manifest Services from start to finish. The entire team was professional, helpful, responsive, and made the whole process incredibly smooth and stress-free for us.",
    name: "Aishwarya Kapoor",
    detail: "Google review · Local Guide",
    rating: 5,
  },
  {
    quote:
      "Really grateful to Manifest Business Services for making my business setup journey so much easier. Thank you for your support, guidance, and patience throughout the process. Truly appreciated!",
    name: "Seejan Dulal",
    detail: "Google review",
    rating: 5,
  },
];

const whyManifest = [
  {
    title: "One team, end to end",
    text: "Licence, visas, PRO, banking and accounting under one roof. No handoffs, no chasing three different agents.",
  },
  {
    title: "Advice first, paperwork second",
    text: "We recommend the structure that suits your plan, not the one that is easiest to sell.",
  },
  {
    title: "Clear, itemised quotes",
    text: "Government fees and our service fees are listed separately before you start.",
  },
  {
    title: "Start before you land",
    text: "Most of the process can be done remotely. Sign documents and track progress from anywhere.",
  },
  {
    title: "Still here after setup",
    text: "Renewals, compliance reminders and support as you hire and grow. Everything you share stays confidential.",
  },
];

const authorities = [
  { src: "/images/authorities/trimmed/auth-1.png", name: "Dubai Courts", width: 237, height: 64 },
  { src: "/images/authorities/trimmed/auth-2.png", name: "Salem", width: 183, height: 67 },
  { src: "/images/authorities/trimmed/auth-3.png", name: "Tasheel", width: 185, height: 81 },
  { src: "/images/authorities/trimmed/auth-4.png", name: "Amer", width: 158, height: 98 },
];

const faqs = [
  {
    question: "How long does company formation in Dubai take?",
    answer: (
      <p>
        <T>
          It depends on the jurisdiction and activity. The Dubai company registration process typically takes 3–7 working
          days once your documents are ready. Visas and bank accounts take additional time.
        </T>
      </p>
    ),
  },
  {
    question: "How much does it cost to set up a company in Dubai?",
    answer: (
      <p>
        <T>
          Costs depend on the jurisdiction, licence type, office option and number of visas. We give you an itemised
          quote before you commit.
        </T>
      </p>
    ),
  },
  {
    question: "Can I own 100% of a mainland company?",
    answer: (
      <p>
        <T>
          Yes, for most commercial and professional activities. A small number of activities still have ownership
          conditions, and we check yours in the consultation.
        </T>
      </p>
    ),
  },
  {
    question: "Do I need to be in the UAE to set up my company?",
    answer: (
      <p>
        <T>
          Much of the process can start remotely. You will usually need to be in the UAE for the visa medical test and
          Emirates ID biometrics.
        </T>
      </p>
    ),
  },
  {
    question: "Mainland or free zone: which is better for my business?",
    answer: (
      <p>
        <T>
          If most of your customers are in the UAE, mainland is usually the better fit. If you sell internationally or
          online, a free zone is often simpler. We compare both for your plan.
        </T>
      </p>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <LangScope
        as="section"
        className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-olive-night text-ivory"
      >
        <HeroVideo />
        <div className="absolute inset-0 bg-[url('/images/hero-poster.jpg')] bg-cover bg-center opacity-0 motion-reduce:opacity-100" />
        <div className="absolute inset-0 bg-olive-deep/15 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-olive-night/90 via-olive-night/55 to-olive-night/5 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-night via-olive-night/10 to-olive-night/30" />

        <div className="container-luxe relative flex flex-1 flex-col justify-center pt-36 pb-20">
          <p className="eyebrow eyebrow-light animate-fade-up">
            <T>Business setup in Dubai</T>
          </p>
          <h1 className="mt-6 max-w-3xl animate-fade-up text-[clamp(2.4rem,6vw,4rem)] leading-[1.05] [animation-delay:150ms]">
            <T>Your Dubai company,</T> <br />
            <T>set up properly from day one</T>
          </h1>
          <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-ivory/85 [animation-delay:300ms] sm:text-xl">
            <T>
              Mainland, free zone or offshore. We help you choose the right licence, then handle the paperwork, visas
              and bank account so you can start trading sooner.
            </T>
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:450ms]">
            <Link href="#form" className="btn btn-champagne">
              <T>Book free consultation</T> <ArrowRight className="size-4 rtl:-scale-x-100" />
            </Link>
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light"
            >
              <WhatsappIcon className="size-4" /> <T>Chat on WhatsApp</T>
            </a>
          </div>
          <ul className="mt-14 grid max-w-4xl animate-fade-up gap-x-8 gap-y-4 [animation-delay:600ms] sm:grid-cols-2 lg:grid-cols-4">
            {heroPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-[0.95rem] leading-snug text-ivory/85">
                <Check className="mt-0.5 size-4 shrink-0 text-champagne" strokeWidth={2.2} />
                <T>{point}</T>
              </li>
            ))}
          </ul>
        </div>
      </LangScope>

      {/* Proof strip */}
      <section className="border-b border-olive-deep/10 bg-white">
        <div className="container-luxe flex items-center justify-center gap-3 py-5 text-[0.95rem] font-semibold text-olive-night">
          <span className="flex gap-0.5 text-champagne-deep" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </span>
          <p>
            <T>Rated 4.9 on Google</T>
          </p>
        </div>
      </section>

      {/* About */}
      <section className="overflow-hidden bg-ivory py-24 sm:py-28">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="relative mb-10 sm:mb-14 lg:col-span-6 lg:mb-0">
            <div className="relative ms-auto aspect-[4/5] w-[78%] overflow-hidden">
              <Image
                src="/images/home-meeting.jpg"
                alt="Two businessmen discussing a Manifest business consultation for Dubai Company Formation"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[-8%] start-0 aspect-square w-[48%] overflow-hidden border-[10px] border-ivory shadow-[0_40px_80px_-40px_rgba(20,22,16,0.6)]">
              <Image
                src="/images/home-team.jpg"
                alt="Three business people working together and looking at a laptop"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-10 start-[6%] bg-olive-deep px-6 py-5 text-ivory shadow-2xl">
              <div className="flex items-center gap-1 text-champagne">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-4xl leading-none font-bold">4.9</p>
              <p className="mt-1.5 text-xs text-ivory/70">
                <T>Google rating</T>
              </p>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6">
            <p className="eyebrow">
              <T>About Manifest</T>
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.12] text-olive-night sm:text-4xl lg:text-[2.75rem]">
              <T>A business partner in Dubai, not just a paperwork agent</T>
            </h2>
            <p className="mt-7 text-[1.05rem] leading-[1.7] text-ink-soft/90">
              <T>
                Manifest Business Services helps founders, freelancers and growing companies set up in Dubai without the
                guesswork. We start with your plan: what you&apos;ll sell, who you&apos;ll sell to, and how many visas
                you need. Then we recommend the jurisdiction and licence that fit.
              </T>
            </p>
            <p className="mt-4 text-[1.05rem] leading-[1.7] text-ink-soft/90">
              <T>
                After that, we handle the rest: trade name, approvals, documents, government submissions, visas, Emirates
                ID and bank account. One team and one point of contact, from your first call to your first invoice.
              </T>
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link href="/about-manifest-business-setup-experts/" className="btn btn-ghost-dark">
                <T>About Manifest</T>
              </Link>
              <a href={site.phoneHref} className="flex items-center gap-2.5 text-[0.95rem] font-semibold text-olive-deep hover:text-olive">
                <Phone className="size-4 text-champagne-deep" />
                <span>
                  <Rich slots={{ phone: <bdi dir="ltr">{site.phoneDisplay}</bdi> }}>{"Talk to an expert: {phone}"}</Rich>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-olive-wash py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Our services"
            title="Everything you need to start and run a company in Dubai"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, i) => {
              const Icon = serviceIcons[service.key];
              return (
                <Reveal key={service.key} delay={(i % 3) * 100} className="h-full">
                  <Link
                    href={service.href}
                    className="group relative flex h-full flex-col border border-olive-deep/10 bg-white p-8 card-lift"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex size-12 items-center justify-center border border-olive-deep/10 text-olive transition-colors duration-500 group-hover:border-champagne group-hover:text-champagne-deep">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <span className="text-sm font-semibold text-champagne-deep">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-8 text-2xl leading-tight text-olive-night">
                      <T>{service.title}</T>
                    </h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-ink-soft/85">
                      <T>{service.text}</T>
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-champagne-deep transition-colors group-hover:text-olive-deep">
                      <T>{service.key === "attestation" ? "Enquire now" : "Learn more"}</T>
                      <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-14 flex justify-center">
            <Link href="/services/" className="btn btn-olive">
              <T>View all services</T>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ivory py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading eyebrow="How it works" title="From first call to trade licence in four steps" />
          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 100}>
                {/* The lift lives on an inner wrapper so it never fights Reveal's own transform. */}
                <div className="group -mx-3 h-full border-t-2 border-olive-deep px-3 pt-6 pb-7 card-lift hover:bg-white">
                  <span className="block text-[2.5rem] leading-none font-bold text-champagne transition-colors duration-500 group-hover:text-champagne-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl text-olive-night">
                    <T>{step.title}</T>
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-soft/85">
                    <T>{step.text}</T>
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-14 flex justify-center">
            <Link href="#form" className="btn btn-olive">
              <T>Book free consultation</T> <ArrowRight className="size-4 rtl:-scale-x-100" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FormationPackages />

      {/* Setup options */}
      <section className="bg-olive-night py-24 text-ivory/85 sm:py-28">
        <div className="container-luxe">
          <SectionHeading
            tone="dark"
            eyebrow="Business setup"
            title="Mainland, free zone or offshore: which is right for you?"
            intro="The right choice depends on where your customers are, what you'll sell and how many visas you need. We'll compare them for your exact business in the free consultation."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {zones.map((zone, i) => (
              <Reveal key={zone.title} delay={i * 100} className="h-full">
                <article className="group flex h-full flex-col gap-4 border border-ivory/5 bg-olive-deep p-8 card-lift card-lift-dark hover:bg-[#313a24]">
                  <h3 className="text-2xl text-ivory transition-colors duration-500 group-hover:text-champagne-light">
                    <T>{zone.title}</T>
                  </h3>
                  <p className="flex-1 text-base leading-relaxed">
                    <T>{zone.text}</T>
                  </p>
                  <p className="text-sm text-champagne">
                    <strong className="font-semibold">
                      <T>Best for:</T>
                    </strong>{" "}
                    <T>{zone.bestFor}</T>
                  </p>
                  <Link
                    href={zone.href}
                    className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-champagne hover:text-champagne-light"
                  >
                    <T>Learn more</T>{" "}
                    <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 rtl:-scale-x-100 rtl:group-hover:-translate-x-1 rtl:motion-reduce:group-hover:translate-x-0" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-24 sm:py-24">
        <div className="container-luxe">
          <SectionHeading eyebrow="In numbers" title="Trusted by founders from around the world" />
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-8">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100} className="flex flex-col-reverse border-s border-olive-deep/15 ps-6">
                <dt className="mt-2 text-[0.95rem] font-medium text-ink-soft/85">
                  <T>{stat.label}</T>
                </dt>
                <dd className="text-4xl leading-none font-bold tracking-tight text-olive-night sm:text-5xl">
                  <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Why Manifest */}
      <section className="bg-ivory py-24 sm:py-28">
        <div className="container-luxe grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Why Manifest" title="Why founders choose Manifest" />
            <Reveal delay={150} className="relative mt-10 aspect-[4/3] overflow-hidden">
              <Image
                src="/images/home-handshake.jpg"
                alt="Business partners greeting one another with a handshake in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </Reveal>
          </div>
          <ol className="self-center lg:col-span-7">
            {whyManifest.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 80}
                className="border-b border-olive-deep/15 py-6 first:pt-0"
              >
                {/* The nudge lives on an inner wrapper so it never fights Reveal's own transform. */}
                <div className="group relative flex gap-6 transition-transform duration-500 ease-out hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:translate-x-0 rtl:hover:-translate-x-2 rtl:motion-reduce:hover:translate-x-0">
                  <span
                    aria-hidden
                    className="absolute -start-4 inset-y-0 w-0.5 origin-top scale-y-0 bg-champagne transition-transform duration-500 ease-out group-hover:scale-y-100 motion-reduce:transition-none"
                  />
                  <span className="min-w-8 text-[0.95rem] font-bold text-champagne-deep transition-colors duration-500 group-hover:text-olive">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl text-olive-night transition-colors duration-500 group-hover:text-olive-rich">
                      <T>{item.title}</T>
                    </h3>
                    <p className="mt-1.5 text-base leading-relaxed text-ink-soft/85">
                      <T>{item.text}</T>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-olive-wash py-24 sm:py-28">
        <div className="container-luxe">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Testimonials" title="What our clients say" />
            <Reveal delay={100}>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-olive-deep underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-olive"
              >
                <T>Read all reviews on Google</T> <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden />
              </a>
            </Reveal>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={i} delay={i * 100}>
                {/* The lift lives on an inner wrapper so it never fights Reveal's own transform. */}
                <div className="group flex h-full flex-col border border-transparent bg-white p-7 shadow-[0_1px_2px_rgba(42,50,31,0.06),0_12px_32px_-16px_rgba(42,50,31,0.18)] card-lift sm:p-8">
                  <div
                    className="flex gap-0.5 text-champagne-deep transition-colors duration-500 group-hover:text-champagne"
                    role="img"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-[1.05rem] leading-relaxed font-medium text-olive-night">
                    <span className="rounded-sm bg-champagne-light/50 px-1.5 py-0.5 transition-colors duration-500 [box-decoration-break:clone] group-hover:bg-champagne-light/80">
                      <T>{t.quote}</T>
                    </span>
                  </blockquote>
                  <div className="mt-6 border-t border-olive-deep/10 pt-4">
                    <p className="text-sm font-bold text-olive-night">{t.name}</p>
                    <p className="mt-0.5 text-sm text-ink-soft/80">
                      <T>{t.detail}</T>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Authorities */}
      <section className="border-y border-olive-deep/10 bg-white py-20">
        <div className="container-luxe text-center">
          <Reveal>
            <p className="eyebrow justify-center">
              <T>We work with</T>
            </p>
            <h2 className="mt-4 text-3xl text-olive-night">
              <T>UAE government authorities</T>
            </h2>
            <p className="mt-3 text-base text-ink-soft/85">
              <T>We prepare and submit your applications through the official channels.</T>
            </p>
          </Reveal>
          <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6">
            {authorities.map((a, i) => (
              <Reveal as="li" key={a.name} delay={i * 90} className="group flex flex-col items-center gap-4">
                <span className="flex h-24 w-full items-center justify-center border border-olive-deep/10 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(42,50,31,0.04)] card-lift card-lift-g sm:h-28">
                  <Image
                    src={a.src}
                    alt=""
                    width={a.width}
                    height={a.height}
                    className="h-auto max-h-11 w-auto max-w-[7.5rem] object-contain opacity-70 grayscale transition-[scale,opacity,filter] duration-500 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:max-h-12"
                  />
                </span>
                <span className="text-sm font-semibold text-olive-night transition-colors duration-300 group-hover:text-olive">
                  <T>{a.name}</T>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Latest insights */}
      <LatestInsights />

      {/* FAQ */}
      <section className="bg-ivory py-24 sm:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">
              <T>FAQs</T>
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.12] text-olive-night sm:text-4xl lg:text-[2.75rem]">
              <T>Questions founders ask us</T>
            </h2>
            <Link href="/faqs/" className="btn btn-ghost-dark mt-8">
              <T>See all FAQs</T>
            </Link>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <Accordion name="home-faq" items={faqs} />
          </Reveal>
        </div>
      </section>

      {/* Office + form */}
      <section id="form" className="scroll-mt-20 bg-olive-night py-24 text-ivory/85 sm:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow eyebrow-light">
              <T>Free consultation</T>
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.12] text-ivory sm:text-4xl lg:text-[2.75rem]">
              <T>Get your free setup plan</T>
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              <T>
                Tell us what you plan to do. An adviser will reply within one working day with the setup options and
                costs that fit.
              </T>
            </p>
            <div className="mt-12 flex flex-col gap-4 text-base">
              <h3 className="text-xl text-ivory">
                <T>Visit us in Bur Dubai</T>
              </h3>
              <address className="leading-relaxed not-italic">
                {site.addressLines.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    <T>{line}</T>
                  </span>
                ))}
              </address>
              <p>
                <a href={site.phoneHref} className="hover:text-champagne">
                  <bdi dir="ltr">{site.phoneDisplay}</bdi>
                </a>{" "}
                ·{" "}
                <a href={`mailto:${site.email}`} className="hover:text-champagne">
                  <bdi dir="ltr">{site.email}</bdi>
                </a>
              </p>
              <div className="relative mt-2 h-56 overflow-hidden bg-olive-deep">
                <iframe
                  title="Manifest Business Services office location — Fahidi Heights, Bur Dubai"
                  src={site.mapEmbed}
                  className="absolute inset-0 size-full border-0 grayscale-[60%] sepia-[15%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={150} className="self-start lg:col-span-7">
            <div className="bg-ivory p-8 text-ink-soft sm:p-10">
              <ConsultationForm variant="plan" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
