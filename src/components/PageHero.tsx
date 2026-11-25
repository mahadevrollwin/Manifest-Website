import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt?: string;
  crumbs: Crumb[];
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, image, imageAlt = "", crumbs, children }: PageHeroProps) {
  return (
    <section className="grain relative isolate flex min-h-[78svh] items-end overflow-hidden bg-olive-night text-ivory">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="-z-20 animate-ken-burns object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-night via-olive-night/80 to-olive-deep/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-olive-night via-transparent to-olive-night/60" />

      <div className="container-luxe pt-40 pb-16 sm:pb-20 lg:pb-24">
        <nav aria-label="Breadcrumb" className="animate-fade-up">
          <ol className="flex flex-wrap items-center gap-2 text-[0.68rem] tracking-[0.22em] text-ivory/60 uppercase">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="size-3 text-champagne" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-champagne">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ivory/90">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow eyebrow-light mt-10 animate-fade-up [animation-delay:120ms]">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl animate-fade-up text-5xl leading-[1.02] [animation-delay:200ms] sm:text-6xl lg:text-[5.25rem]">
          {title}
        </h1>
        {intro && (
          <p className="mt-7 max-w-2xl animate-fade-up text-base leading-relaxed text-ivory/75 [animation-delay:320ms] sm:text-lg">
            {intro}
          </p>
        )}
        {children && <div className="mt-10 animate-fade-up [animation-delay:440ms]">{children}</div>}
      </div>
    </section>
  );
}
