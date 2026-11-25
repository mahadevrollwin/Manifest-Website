import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
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

const channels = [
  { icon: Mail, title: "E-mail", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, title: "Phone", value: site.phoneDisplay, href: site.phoneHref },
  { icon: MapPin, title: "Address", value: site.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free consultation"
        title={
          <>
            Contact <em className="text-champagne">Us</em>
          </>
        }
        intro="Get in touch for a Dubai Business Setup Consultation and receive clear, expert guidance to start your UAE company with confidence."
        image="/images/dubai-skyline-night.jpg"
        imageAlt="Dubai skyline at night"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="relative z-10 bg-ivory">
        <div className="container-luxe">
          <div className="grid gap-px bg-olive-deep/10 shadow-[0_40px_80px_-50px_rgba(20,22,16,0.5)] md:grid-cols-3 lg:-mt-16">
            {channels.map(({ icon: Icon, title, value, href }, i) => {
              const content = (
                <>
                  <span className="flex size-14 items-center justify-center rounded-full bg-olive-deep text-champagne">
                    <Icon className="size-5" strokeWidth={1.3} />
                  </span>
                  <h2 className="mt-7 font-sans text-[0.68rem] font-medium tracking-[0.3em] text-olive uppercase">{title}</h2>
                  <p className="mt-3 font-display text-2xl leading-snug text-olive-deep">{value}</p>
                </>
              );
              return (
                <Reveal key={title} delay={i * 120} className="bg-white">
                  {href ? (
                    <a href={href} className="block h-full p-9 transition-colors duration-500 hover:bg-olive-wash sm:p-11">
                      {content}
                    </a>
                  ) : (
                    <div className="h-full p-9 sm:p-11">{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Begin your consultation</p>
            <h2 className="mt-5 text-4xl leading-[1.08] text-olive-deep sm:text-5xl lg:text-6xl">
              Let&apos;s build your <em className="text-olive">UAE business</em>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft/80">
              Share a few details and our Dubai business setup experts will respond with clear guidance on licensing,
              costs, and next steps.
            </p>
            <div className="mt-12">
              <ConsultationForm />
            </div>
          </Reveal>
          <Reveal delay={150} className="flex flex-col gap-6 lg:col-span-5">
            <div className="relative min-h-80 flex-1 overflow-hidden bg-olive-mist">
              <iframe
                title="Manifest Business Services office location — Fahidi Heights, Bur Dubai"
                src={site.mapEmbed}
                className="absolute inset-0 size-full border-0 grayscale-[60%] sepia-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 bg-olive-deep p-8 text-ivory transition-colors duration-500 hover:bg-olive-rich"
            >
              <span className="flex items-center gap-5">
                <span className="flex size-12 items-center justify-center rounded-full bg-[#25d366] text-white">
                  <WhatsappIcon className="size-5" />
                </span>
                <span>
                  <span className="block font-display text-2xl">Prefer WhatsApp?</span>
                  <span className="text-sm text-ivory/65">Chat with our team instantly</span>
                </span>
              </span>
              <ArrowUpRight className="size-5 text-champagne transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
