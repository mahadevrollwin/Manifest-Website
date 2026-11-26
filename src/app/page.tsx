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
import { Counter } from "@/components/Counter";
import { Accordion } from "@/components/Accordion";
import { ConsultationForm } from "@/components/ConsultationForm";
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

const googleReviewsUrl = "https://www.google.com/search?q=Manifest+Business+Services+Dubai+reviews";

// Placeholder copy from the reference design: replace with real Google reviews.
const testimonials = [
  {
    quote: "[Real Google review from Manifest, trimmed to 2–3 lines.]",
    name: "[Client name]",
    detail: "[Nationality] · Free Zone setup",
  },
  {
    quote: "[Real Google review from Manifest, trimmed to 2–3 lines.]",
    name: "[Client name]",
    detail: "[Business] · Mainland setup",
  },
  {
    quote: "[Real Google review from Manifest, trimmed to 2–3 lines.]",
    name: "[Client name]",
    detail: "[Business] · Visa services",
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
        It depends on the jurisdiction and activity. The Dubai company registration process typically takes 3–7 working
        days once your documents are ready. Visas and bank accounts take additional time.
      </p>
    ),
  },
  {
    question: "How much does it cost to set up a company in Dubai?",
    answer: (
      <p>
        Costs depend on the jurisdiction, licence type, office option and number of visas. We give you an itemised
        quote before you commit.
      </p>
    ),
  },
  {
    question: "Can I own 100% of a mainland company?",
    answer: (
      <p>
        Yes, for most commercial and professional activities. A small number of activities still have ownership
        conditions, and we check yours in the consultation.
      </p>
    ),
  },
  {
    question: "Do I need to be in the UAE to set up my company?",
    answer: (
      <p>
        Much of the process can start remotely. You will usually need to be in the UAE for the visa medical test and
        Emirates ID biometrics.
      </p>
    ),
  },
  {
    question: "Mainland or free zone: which is better for my business?",
    answer: (
      <p>
        If most of your customers are in the UAE, mainland is usually the better fit. If you sell internationally or
        online, a free zone is often simpler. We compare both for your plan.
      </p>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-olive-night text-ivory">
        <HeroVideo />
        <div className="absolute inset-0 bg-[url('/images/hero-poster.jpg')] bg-cover bg-center opacity-0 motion-reduce:opacity-100" />
        <div className="absolute inset-0 bg-olive-deep/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-olive-night via-olive-night/80 to-olive-night/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-night via-olive-night/20 to-olive-night/60" />

        <div className="container-luxe relative flex flex-1 flex-col justify-center pt-36 pb-20">
          <p className="eyebrow eyebrow-light animate-fade-up">Business setup in Dubai</p>
          <h1 className="mt-6 max-w-3xl animate-fade-up text-[clamp(2.4rem,6vw,4rem)] leading-[1.05] [animation-delay:150ms]">
            Your Dubai company, set up properly from day one
          </h1>
          <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-ivory/85 [animation-delay:300ms] sm:text-xl">
            Mainland, free zone or offshore. We help you choose the right licence, then handle the paperwork, visas and
            bank account so you can start trading sooner.
          </p>
          <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:450ms]">
            <Link href="#form" className="btn btn-champagne">
              Book free consultation <ArrowRight className="size-4" />
            </Link>
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light"
            >
              <WhatsappIcon className="size-4" /> Chat on WhatsApp
            </a>
          </div>
          <ul className="mt-14 grid max-w-4xl animate-fade-up gap-x-8 gap-y-4 [animation-delay:600ms] sm:grid-cols-2 lg:grid-cols-4">
            {heroPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-[0.95rem] leading-snug text-ivory/85">
                <Check className="mt-0.5 size-4 shrink-0 text-champagne" strokeWidth={2.2} />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-b border-olive-deep/10 bg-white">
        <div className="container-luxe flex items-center justify-center gap-3 py-5 text-[0.95rem] font-semibold text-olive-night">
          <span className="flex gap-0.5 text-champagne-deep" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </span>
          <p>Rated 4.9 on Google</p>
        </div>
      </section>

      {/* About */}
      <section className="overflow-hidden bg-ivory py-24 sm:py-28">
        <div className="container-luxe grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="relative mb-10 sm:mb-14 lg:col-span-6 lg:mb-0">
            <div className="relative ml-auto aspect-[4/5] w-[78%] overflow-hidden">
              <Image
                src="/images/home-meeting.jpg"
                alt="Two businessmen discussing a Manifest business consultation for Dubai Company Formation"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[-8%] left-0 aspect-square w-[48%] overflow-hidden border-[10px] border-ivory shadow-[0_40px_80px_-40px_rgba(20,22,16,0.6)]">
              <Image
                src="/images/home-team.jpg"
                alt="Three business people working together and looking at a laptop"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-10 left-[6%] bg-olive-deep px-6 py-5 text-ivory shadow-2xl">
              <div className="flex items-center gap-1 text-champagne">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-4xl leading-none font-bold">4.9</p>
              <p className="mt-1.5 text-xs text-ivory/70">Google rating</p>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6">
            <p className="eyebrow">About Manifest</p>
            <h2 className="mt-5 text-[2rem] leading-[1.12] text-olive-night sm:text-4xl lg:text-[2.75rem]">
              A business partner in Dubai, not just a paperwork agent
            </h2>
            <p className="mt-7 text-[1.05rem] leading-[1.7] text-ink-soft/90">
              Manifest Business Services helps founders, freelancers and growing companies set up in Dubai without the
              guesswork. We start with your plan: what you&apos;ll sell, who you&apos;ll sell to, and how many visas you
              need. Then we recommend the jurisdiction and licence that fit.
            </p>
            <p className="mt-4 text-[1.05rem] leading-[1.7] text-ink-soft/90">
              After that, we handle the rest: trade name, approvals, documents, government submissions, visas, Emirates
              ID and bank account. One team and one point of contact, from your first call to your first invoice.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link href="/about-manifest-business-setup-experts/" className="btn btn-ghost-dark">
                About Manifest
              </Link>
              <a href={site.phoneHref} className="flex items-center gap-2.5 text-[0.95rem] font-semibold text-olive-deep hover:text-olive">
                <Phone className="size-4 text-champagne-deep" />
                Talk to an expert: {site.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-olive-wash py-24 sm:py-28">
        <div className="container-luxe">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Our services"
              title="Everything you need to start and run a company in Dubai"
            />
            <Reveal>
              <Link href="/services/" className="btn btn-olive">
                View all services
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, i) => {
              const Icon = serviceIcons[service.key];
              return (
                <Reveal key={service.key} delay={(i % 3) * 100} className="h-full">
                  <Link
                    href={service.href}
                    className="group relative flex h-full flex-col border border-olive-deep/10 bg-white p-8 transition-colors duration-500 ease-luxe hover:border-champagne hover:shadow-[0_30px_60px_-35px_rgba(42,50,31,0.4)]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex size-12 items-center justify-center border border-olive-deep/10 text-olive transition-colors duration-500 group-hover:border-champagne group-hover:text-champagne-deep">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <span className="text-sm font-semibold text-champagne-deep">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-8 text-2xl leading-tight text-olive-night">{service.title}</h3>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-ink-soft/85">{service.text}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-champagne-deep transition-colors group-hover:text-olive-deep">
                      {service.key === "attestation" ? "Enquire now" : "Learn more"}
                      <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-ivory py-24 sm:py-28">
        <div className="container-luxe">
          <SectionHeading eyebrow="How it works" title="From first call to trade licence in four steps" />
          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 100} className="border-t-2 border-olive-deep pt-6">
                <span className="text-[2.5rem] leading-none font-bold text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl text-olive-night">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft/85">{step.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-14">
            <Link href="#form" className="btn btn-olive">
              Book free consultation <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

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
                <article className="flex h-full flex-col gap-4 bg-olive-deep p-8">
                  <h3 className="text-2xl text-ivory">{zone.title}</h3>
                  <p className="flex-1 text-base leading-relaxed">{zone.text}</p>
                  <p className="text-sm text-champagne">
                    <strong className="font-semibold">Best for:</strong> {zone.bestFor}
                  </p>
                  <Link
                    href={zone.href}
                    className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-champagne hover:text-champagne-light"
                  >
                    Learn more <ArrowRight className="size-4" />
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
              <Reveal key={stat.label} delay={i * 100} className="flex flex-col-reverse border-l border-olive-deep/15 pl-6">
                <dt className="mt-2 text-[0.95rem] font-medium text-ink-soft/85">{stat.label}</dt>
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
                className="flex gap-6 border-b border-olive-deep/15 py-6 first:pt-0"
              >
                <span className="min-w-8 text-[0.95rem] font-bold text-champagne-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl text-olive-night">{item.title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-ink-soft/85">{item.text}</p>
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
                Read all reviews on Google <ArrowRight className="size-4" aria-hidden />
              </a>
            </Reveal>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                as="li"
                key={i}
                delay={i * 100}
                className="flex flex-col bg-white p-7 shadow-[0_1px_2px_rgba(42,50,31,0.06),0_12px_32px_-16px_rgba(42,50,31,0.18)] sm:p-8"
              >
                <div className="flex gap-0.5 text-champagne-deep" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[1.05rem] leading-relaxed font-medium text-olive-night">
                  <span className="rounded-sm bg-champagne-light/50 px-1.5 py-0.5 [box-decoration-break:clone]">
                    {t.quote}
                  </span>
                </blockquote>
                <div className="mt-6 border-t border-olive-deep/10 pt-4">
                  <p className="text-sm font-bold text-olive-night">{t.name}</p>
                  <p className="mt-0.5 text-sm text-ink-soft/80">{t.detail}</p>
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
            <p className="eyebrow justify-center">We work with</p>
            <h2 className="mt-4 text-3xl text-olive-night">UAE government authorities</h2>
            <p className="mt-3 text-base text-ink-soft/85">
              We prepare and submit your applications through the official channels.
            </p>
          </Reveal>
          <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6">
            {authorities.map((a, i) => (
              <Reveal as="li" key={a.name} delay={i * 90} className="group flex flex-col items-center gap-4">
                <span className="flex h-24 w-full items-center justify-center border border-olive-deep/10 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(42,50,31,0.04)] transition-[translate,border-color,box-shadow] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-champagne group-hover:shadow-[0_2px_4px_rgba(42,50,31,0.05),0_18px_32px_-14px_rgba(42,50,31,0.28)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 sm:h-28">
                  <Image
                    src={a.src}
                    alt=""
                    width={a.width}
                    height={a.height}
                    className="h-auto max-h-11 w-auto max-w-[7.5rem] object-contain opacity-70 grayscale transition-[scale,opacity,filter] duration-500 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:max-h-12"
                  />
                </span>
                <span className="text-sm font-semibold text-olive-night transition-colors duration-300 group-hover:text-olive">
                  {a.name}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory py-24 sm:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-5 text-[2rem] leading-[1.12] text-olive-night sm:text-4xl lg:text-[2.75rem]">
              Questions founders ask us
            </h2>
            <Link href="/faqs/" className="btn btn-ghost-dark mt-8">
              See all FAQs
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
            <p className="eyebrow eyebrow-light">Free consultation</p>
            <h2 className="mt-5 text-[2rem] leading-[1.12] text-ivory sm:text-4xl lg:text-[2.75rem]">
              Get your free setup plan
            </h2>
            <p className="mt-5 text-lg leading-relaxed">
              Tell us what you plan to do. An adviser will reply within one working day with the setup options and costs
              that fit.
            </p>
            <div className="mt-12 flex flex-col gap-4 text-base">
              <h3 className="text-xl text-ivory">Visit us in Bur Dubai</h3>
              <address className="leading-relaxed not-italic">
                {site.addressLines.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </address>
              <p>
                <a href={site.phoneHref} className="hover:text-champagne">
                  {site.phoneDisplay}
                </a>{" "}
                ·{" "}
                <a href={`mailto:${site.email}`} className="hover:text-champagne">
                  {site.email}
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
