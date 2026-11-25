import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";
import { whatsappLink, whatsappMessages } from "@/content/site";

type CtaBandProps = {
  title: ReactNode;
  text?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappMessage?: string;
  image?: string;
};

export function CtaBand({
  title,
  text = "Tell us what you plan to do. An adviser will reply within one working day with the options and costs that fit.",
  primaryLabel = "Get my free setup plan",
  primaryHref = "/contact-us/",
  whatsappMessage = whatsappMessages.general,
  image = "/images/dubai-skyline-night.jpg",
}: CtaBandProps) {
  return (
    <section className="grain relative isolate overflow-hidden bg-olive-deep py-20 text-ivory sm:py-24">
      <Image src={image} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-deep via-olive-deep/90 to-olive-deep/60" />
      <div className="container-luxe flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-[1.12] sm:text-4xl lg:text-[2.6rem]">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-ivory/75 sm:text-lg">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href={primaryHref} className="btn btn-champagne">
            {primaryLabel} <ArrowRight className="size-4" />
          </Link>
          <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
            <WhatsappIcon className="size-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
