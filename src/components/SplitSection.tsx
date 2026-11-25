import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SplitSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  badge?: ReactNode;
  className?: string;
};

export function SplitSection({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  reverse = false,
  badge,
  className = "bg-ivory",
}: SplitSectionProps) {
  return (
    <section className={`py-24 sm:py-32 ${className}`}>
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal className={`relative ${reverse ? "lg:order-2" : ""}`}>
          <div className="absolute -inset-2 -z-0 translate-x-3 translate-y-3 border border-champagne/50 sm:-inset-4 sm:translate-x-6 sm:translate-y-6" />
          <div className="relative aspect-[4/5] overflow-hidden bg-olive-mist">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[2s] ease-luxe hover:scale-105"
            />
          </div>
          {badge}
        </Reveal>
        <Reveal delay={120}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="mt-5 text-4xl leading-[1.08] text-olive-deep sm:text-5xl">{title}</h2>
          <div className="mt-7 space-y-5 text-base leading-[1.85] text-ink-soft/85 sm:text-[1.05rem]">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
