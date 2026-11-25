import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ConsultationForm } from "@/components/ConsultationForm";
import { WhatsappIcon } from "@/components/SocialIcons";
import { site, whatsappLink, whatsappMessages } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Dubai Business Setup Consultation – Start Company with Experts" },
  description:
    "Book your Dubai business setup consultation today. Our experts guide you through company formation, licensing, and setup in the UAE.",
  alternates: { canonical: "/contact-us/" },
};

const interests = [
  "Company formation",
  "Dubai Mainland setup",
  "Dubai Free Zone setup",
  "Offshore company",
  "PRO services",
  "Visa services",
  "Banking assistance",
  "Accounting & bookkeeping",
  "Attestation & translation",
  "Other",
];

const steps = [
  { n: "01", t: "We call you", d: "An adviser contacts you within one working day to understand your plan." },
  {
    n: "02",
    t: "You get a setup plan",
    d: "A written recommendation with an itemised quote, so you can compare with confidence.",
  },
  { n: "03", t: "You decide", d: "No pressure. When you are ready, we start the process." },
];

const directions =
  "https://www.google.com/maps/search/?api=1&query=Fahidi+Heights+Sharaf+DG+Metro+Station+Bur+Dubai";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Talk to a business setup adviser"
        intro="Tell us what you plan to do. We'll reply within one working day with the setup options and costs that fit. No obligation."
        image="/images/dubai-skyline-night.jpg"
        imageAlt="Dubai skyline at night"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-ivory py-20 sm:py-24">
        <div className="container-luxe grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="border border-olive-deep/10 bg-white p-7 sm:p-10 lg:col-span-7">
            <h2 className="text-2xl text-olive-deep sm:text-[1.75rem]">Get your free setup plan</h2>
            <div className="mt-8">
              <ConsultationForm variant="plan" interests={interests} />
            </div>
          </Reveal>

          <div className="flex min-w-0 flex-col gap-6 lg:col-span-5">
            <Reveal delay={100} className="flex flex-col gap-5 bg-olive-deep p-7 text-ivory sm:p-8">
              <h2 className="text-xl sm:text-[1.4rem]">Reach us directly</h2>
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-champagne"
              >
                <WhatsappIcon className="size-4" /> Chat on WhatsApp
              </a>
              <p>
                <span className="block text-sm text-ivory/60">Phone</span>
                <a href={site.phoneHref} className="font-semibold hover:text-champagne">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="block text-sm text-ivory/60">Email</span>
                <a href={`mailto:${site.email}`} className="font-semibold break-all hover:text-champagne">
                  {site.email}
                </a>
              </p>
            </Reveal>

            <Reveal delay={180} className="border border-olive-deep/10 bg-white p-7 sm:p-8">
              <h2 className="text-xl text-olive-deep sm:text-[1.4rem]">Visit our office</h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft">
                Office 1502-A, 15th Floor, Fahidi Heights
                <br />
                Bur Dubai, Dubai, UAE
                <br />
                Sharaf DG Metro, Exit 4
              </p>
              <div className="relative mt-5 h-52 overflow-hidden bg-olive-mist">
                <iframe
                  title="Manifest Business Services office location — Fahidi Heights, Bur Dubai"
                  src={site.mapEmbed}
                  className="absolute inset-0 size-full border-0 grayscale-[60%] sepia-[15%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-semibold text-olive underline decoration-champagne underline-offset-4 hover:text-olive-deep"
              >
                Get directions →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-olive-wash py-20 sm:py-24">
        <div className="container-luxe">
          <Reveal>
            <h2 className="text-3xl text-olive-deep sm:text-4xl">What happens next</h2>
          </Reveal>
          <ol className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className="border-t-2 border-olive-deep pt-5">
                <span className="text-3xl font-bold text-champagne">{s.n}</span>
                <h3 className="mt-3 text-xl text-olive-deep">{s.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft/85">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
