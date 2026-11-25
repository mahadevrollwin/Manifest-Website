import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsappIcon } from "./SocialIcons";
import { whatsappLink, whatsappMessages } from "@/content/site";

type CTASectionProps = {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappMessage?: string;
  whatsappLabel?: string;
  image?: string;
};

export function CTASection({
  eyebrow = "Free consultation",
  title,
  text,
  primaryLabel = "Schedule your free consulting session",
  primaryHref = "/contact-us/",
  whatsappMessage = whatsappMessages.general,
  whatsappLabel = "Chat on WhatsApp",
  image = "/images/dubai-skyline-night.jpg",
}: CTASectionProps) {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="container-luxe">
        <Reveal className="grain relative isolate overflow-hidden bg-olive-deep px-6 py-16 text-ivory sm:px-14 sm:py-20 lg:px-20">
          <Image src={image} alt="" fill sizes="(max-width: 1280px) 100vw, 1280px" className="-z-20 object-cover opacity-35" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-night via-olive-deep/90 to-olive-deep/40" />
          <div className="absolute top-0 right-0 h-px w-2/3 bg-gradient-to-l from-champagne/70 to-transparent" />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-light">{eyebrow}</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">{title}</h2>
              {text && <p className="mt-5 text-base leading-relaxed text-ivory/70 sm:text-lg">{text}</p>}
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href={primaryHref} className="btn btn-champagne">
                {primaryLabel} <ArrowUpRight className="size-4" />
              </Link>
              <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
                <WhatsappIcon className="size-4" /> {whatsappLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
