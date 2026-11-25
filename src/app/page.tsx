import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Banknote,
  Building2,
  Calculator,
  Compass,
  Globe,
  Landmark,
  Languages,
  Laptop,
  Mail,
  MapPin,
  Phone,
  Plane,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import { HeroVideo } from "@/components/HeroVideo";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Counter } from "@/components/Counter";
import { AuthoritiesStrip } from "@/components/AuthoritiesStrip";
import { ConsultationForm } from "@/components/ConsultationForm";
import { coreServices, site, whatsappLink, whatsappMessages } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Dubai Company Formation Services | Fast & Hassle-Free Setup" },
  alternates: { canonical: "/" },
};

const peaceOfMind: { icon: LucideIcon; label: string }[] = [
  { icon: Scale, label: "Expert legal advice" },
  { icon: Compass, label: "Personalized and strategic approach" },
  { icon: Award, label: "Excellent representation" },
  { icon: Users, label: "Knowledgeable and experienced team" },
];

const serviceIcons: Record<(typeof coreServices)[number]["key"], LucideIcon> = {
  formation: Building2,
  pro: Landmark,
  visa: Plane,
  banking: Banknote,
  accounting: Calculator,
  attestation: Languages,
};

const stats = [
  { value: 4.9, decimals: 1, suffix: "", label: "Google Rating" },
  { value: 98, decimals: 0, suffix: "%", label: "Client Satisfaction" },
  { value: 92, decimals: 0, suffix: "%", label: "Customer Retention Rate" },
  { value: 100, decimals: 0, suffix: "%", label: "Client Happiness" },
];

const whyChooseUs: { icon: LucideIcon; label: string }[] = [
  { icon: SlidersHorizontal, label: "Complete Business Control" },
  { icon: Globe, label: "Global Business Access" },
  { icon: ShieldCheck, label: "Confidentiality & Privacy Assured" },
  { icon: Laptop, label: "Remote-Friendly Process" },
  { icon: BadgeCheck, label: "Hassle-Free Setup" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex h-[100svh] min-h-[680px] flex-col overflow-hidden bg-olive-night text-ivory">
        <HeroVideo />
        <div className="absolute inset-0 bg-[url('/images/hero-poster.jpg')] bg-cover bg-center opacity-0 motion-reduce:opacity-100" />
        <div className="absolute inset-0 bg-olive-deep/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-olive-night/95 via-olive-night/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-olive-night via-olive-night/10 to-olive-night/50" />
        <div className="grain absolute inset-0" />

        <div className="container-luxe relative flex flex-1 flex-col justify-center pt-28">
          <p className="eyebrow eyebrow-light animate-fade-up">Dubai Company Formation</p>
          <h1 className="mt-6 max-w-5xl animate-fade-up text-[clamp(3.6rem,10vw,9rem)] leading-[0.92] font-normal [animation-delay:150ms]">
            Grow With <em className="bg-gradient-to-r from-champagne-light via-champagne to-champagne-deep bg-clip-text text-transparent">Manifest</em>
          </h1>
          <p className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-ivory/80 [animation-delay:300ms] sm:text-xl">
            Turn your idea into a real business—Dubai Company Formation made simple, clear, and stress-free.
          </p>
          <div className="mt-11 flex animate-fade-up flex-wrap gap-3 [animation-delay:450ms]">
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-champagne"
            >
              What We Do <ArrowUpRight className="size-4" />
            </a>
            <Link href="/contact-us/" className="btn btn-ghost-light">
              Book Free Consultation
            </Link>
          </div>
        </div>

        <div className="relative border-t border-ivory/10 bg-olive-night/40 backdrop-blur-md">
          <div className="container-luxe grid grid-cols-2 gap-x-6 gap-y-5 py-6 lg:grid-cols-[auto_repeat(4,1fr)] lg:items-center lg:gap-10 lg:py-7">
            <p className="col-span-2 font-display text-xl text-champagne italic lg:col-span-1 lg:max-w-[12rem] lg:leading-tight">
              Find peace of mind with Manifest
            </p>
            {peaceOfMind.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="size-5 shrink-0 text-champagne" strokeWidth={1.3} />
                <span className="text-[0.7rem] leading-snug tracking-[0.14em] text-ivory/85 uppercase sm:text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-8 bottom-36 hidden flex-col items-center gap-4 lg:flex">
          <span className="text-[0.6rem] tracking-[0.4em] text-ivory/60 uppercase [writing-mode:vertical-rl]">Scroll</span>
          <span className="relative h-16 w-px overflow-hidden bg-ivory/20">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-cue bg-champagne" />
          </span>
        </div>
      </section>

      {/* About intro */}
      <section className="overflow-hidden bg-ivory py-24 sm:py-32">
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
              <p className="mt-2 font-display text-4xl leading-none">4.9</p>
              <p className="mt-1 text-[0.6rem] tracking-[0.28em] text-ivory/70 uppercase">Google Rating</p>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6">
            <p className="eyebrow">About Manifest</p>
            <h2 className="mt-5 text-4xl leading-[1.06] text-olive-deep sm:text-5xl lg:text-[3.5rem]">
              Dubai Company Formation That Actually Make Sense—<em className="text-olive">And Make Money</em>
            </h2>
            <p className="mt-8 text-lg leading-[1.85] text-ink-soft/85">
              Manifest Business Services makes Dubai Company Formation and Company Setup in Dubai simple, smooth, and
              stress-free—helping you turn your idea into a future-ready business while we handle the setup, paperwork,
              and growth support, every step of the way.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="/about-manifest-business-setup-experts/" className="btn btn-olive">
                About Manifest <ArrowRight className="size-4" />
              </Link>
              <a href={site.phoneHref} className="flex items-center gap-3 text-sm text-olive-deep">
                <span className="flex size-11 items-center justify-center rounded-full border border-olive-deep/15">
                  <Phone className="size-4 text-olive" />
                </span>
                <span>
                  <span className="block text-[0.6rem] tracking-[0.26em] text-ink-soft/60 uppercase">Talk to an expert</span>
                  {site.phoneDisplay}
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-olive-wash py-24 sm:py-32">
        <div className="container-luxe">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Our <em className="text-olive">Services</em>
                </>
              }
              intro="From first license to lasting compliance—Manifest handles the setup, paperwork, and growth support, every step of the way."
            />
            <Reveal>
              <Link href="/services/" className="btn btn-ghost-dark">
                All services <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-olive-deep/10 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, i) => {
              const Icon = serviceIcons[service.key];
              return (
                <Reveal key={service.key} delay={(i % 3) * 100} className="bg-olive-wash">
                  <Link
                    href={service.href}
                    className="group relative flex h-full flex-col overflow-hidden bg-white p-9 transition-colors duration-700 ease-luxe hover:bg-olive-deep sm:p-11"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex size-14 items-center justify-center border border-olive-deep/10 text-olive transition-colors duration-700 group-hover:border-champagne/40 group-hover:text-champagne">
                        <Icon className="size-6" strokeWidth={1.2} />
                      </span>
                      <span className="font-display text-3xl text-olive-deep/15 transition-colors duration-700 group-hover:text-champagne/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-10 text-[1.85rem] leading-tight text-olive-deep transition-colors duration-700 group-hover:text-ivory">
                      {service.title}
                    </h3>
                    <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-soft/80 transition-colors duration-700 group-hover:text-ivory/70">
                      {service.text}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[0.68rem] font-medium tracking-[0.24em] text-olive uppercase transition-colors duration-700 group-hover:text-champagne">
                      {service.key === "attestation" ? "Enquire now" : "Explore"}
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="grain relative isolate overflow-hidden bg-olive-night py-24 text-ivory sm:py-32">
        <Image
          src="/images/dubai-aerial-night.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-olive-night via-olive-night/70 to-olive-night" />
        <div className="container-luxe">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Proven results"
            title={
              <>
                Our Track <em className="text-champagne">Record</em>
              </>
            }
            intro="Our results speak for themselves. Discover why businesses trust Manifest Business Services for reliable company formation and long-term support."
          />
          <div className="mt-20 grid grid-cols-2 gap-y-14 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 120}
                className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-ivory/10" : ""} ${i % 2 === 1 ? "border-l border-ivory/10 lg:border-l" : ""}`}
              >
                <p className="font-display text-6xl leading-none text-champagne-light sm:text-7xl lg:text-8xl">
                  <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </p>
                <p className="mt-5 text-[0.68rem] tracking-[0.28em] text-ivory/65 uppercase">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Setup options */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Business setup"
            title={
              <>
                Mainland or Free Zone—<em className="text-olive">the right foundation</em>
              </>
            }
            intro="Choose between Mainland, Free Zone, or Offshore based on your goals and market reach. We help you pick the right structure and license from day one."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Dubai Mainland",
                href: "/dubai-mainland/",
                image: "/images/dubai-skyline-dusk.jpg",
                text: "Operate freely across Dubai and the wider UAE, with direct access to local customers, government projects, and 100% foreign ownership for over 1,000 activities.",
              },
              {
                title: "Dubai Free Zone",
                href: "/dubai-free-zone-business-setup/",
                image: "/images/dubai-marina.jpg",
                text: "100% ownership, zero import-export duties, and easy paperwork—with Manifest guiding you across 46+ UAE jurisdictions to the zone built for your industry.",
              },
            ].map((option, i) => (
              <Reveal key={option.title} delay={i * 150}>
                <Link href={option.href} className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden p-8 text-ivory sm:aspect-[16/11] sm:p-12">
                  <Image
                    src={option.image}
                    alt={`${option.title} business setup`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="-z-20 object-cover transition-transform duration-[2.2s] ease-luxe group-hover:scale-110"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-olive-night via-olive-night/50 to-olive-night/10 transition-opacity duration-700" />
                  <p className="eyebrow eyebrow-light">0{i + 1}</p>
                  <h3 className="mt-4 text-4xl sm:text-5xl">{option.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/75 sm:text-base">{option.text}</p>
                  <span className="mt-8 inline-flex items-center gap-3 text-[0.68rem] font-medium tracking-[0.26em] text-champagne uppercase">
                    Discover <span className="h-px w-10 bg-champagne transition-all duration-700 group-hover:w-16" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why choose us"
              title={
                <>
                  Built for <em className="text-olive">future-ready</em> companies
                </>
              }
              intro="Discover why entrepreneurs and businesses trust us to build strong, future-ready companies."
            />
            <Reveal delay={150} className="relative mt-12 aspect-[5/4] overflow-hidden">
              <Image
                src="/images/home-handshake.jpg"
                alt="Business partners greeting one another with a handshake in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </Reveal>
          </div>
          <ul className="self-center lg:col-span-7">
            {whyChooseUs.map(({ icon: Icon, label }, i) => (
              <Reveal
                as="li"
                key={label}
                delay={i * 90}
                className="group flex items-center gap-6 border-t border-olive-deep/10 py-8 last:border-b sm:gap-10"
              >
                <span className="w-10 font-display text-xl text-champagne-deep">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-olive-wash text-olive transition-all duration-700 group-hover:bg-olive-deep group-hover:text-champagne">
                  <Icon className="size-6" strokeWidth={1.2} />
                </span>
                <span className="font-display text-2xl leading-tight text-olive-deep transition-transform duration-700 ease-luxe group-hover:translate-x-2 sm:text-[2.1rem]">
                  {label}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Founder quote */}
      <section className="grain relative isolate overflow-hidden bg-olive-deep py-28 text-ivory sm:py-36">
        <Image src="/images/dubai-burj-night.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-night via-olive-deep/85 to-olive-night" />
        <Reveal className="container-luxe max-w-4xl text-center">
          <p className="eyebrow eyebrow-light justify-center">Testimonials and reviews from thousands of clients</p>
          <blockquote className="mt-10 font-display text-3xl leading-[1.25] italic sm:text-5xl sm:leading-[1.2]">
            “Every business starts as a dream in someone&apos;s mind. Our purpose is to give that dream a real address in
            Dubai.”
          </blockquote>
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex items-center gap-1 text-champagne">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="text-[0.68rem] tracking-[0.3em] text-ivory/65 uppercase">Rated 4.9 on Google · Manifest Business Services</p>
          </div>
        </Reveal>
      </section>

      <AuthoritiesStrip />

      {/* Get in touch */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="relative isolate flex min-h-[28rem] flex-col justify-end overflow-hidden p-8 text-ivory sm:p-12 lg:col-span-5">
            <Image
              src="/images/home-contact.jpg"
              alt="Two colleagues discussing a business plan at a laptop"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="-z-20 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-olive-night via-olive-night/70 to-olive-night/10" />
            <p className="eyebrow eyebrow-light">Visit our office</p>
            <ul className="mt-6 space-y-4 text-sm text-ivory/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-champagne" />
                {site.address}
              </li>
              <li>
                <a href={site.phoneHref} className="flex gap-3 hover:text-champagne">
                  <Phone className="mt-0.5 size-4 shrink-0 text-champagne" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-champagne">
                  <Mail className="mt-0.5 size-4 shrink-0 text-champagne" />
                  {site.email}
                </a>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-7">
            <p className="eyebrow">Begin your consultation</p>
            <h2 className="mt-5 text-4xl leading-[1.08] text-olive-deep sm:text-5xl lg:text-6xl">
              Get in <em className="text-olive">touch</em>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft/80">
              Share a few details and our Dubai business setup experts will get back to you with clear, honest guidance.
            </p>
            <div className="mt-12">
              <ConsultationForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
