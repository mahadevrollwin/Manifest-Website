import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt?: string;
  crumbs: Crumb[];
  facts?: { k: string; v: string }[];
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, image, imageAlt = "", crumbs, facts, children }: PageHeroProps) {
  return (
    <section className="grain relative isolate overflow-hidden bg-olive-deep pt-36 pb-16 text-ivory sm:pt-44 sm:pb-20">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-deep via-olive-deep/85 to-olive-deep/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-olive-night/80 via-transparent to-transparent" />

      <div className="container-luxe">
        <nav aria-label="Breadcrumb" className="animate-fade-up">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ivory/60">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
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
        <p className="eyebrow eyebrow-light mt-10 animate-fade-up [animation-delay:100ms]">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl animate-fade-up text-4xl leading-[1.08] [animation-delay:180ms] sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-3xl animate-fade-up text-base leading-relaxed text-ivory/75 [animation-delay:260ms] sm:text-lg">
            {intro}
          </p>
        )}
        {children && <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:340ms] sm:flex-row sm:flex-wrap">{children}</div>}
        {facts && facts.length > 0 && (
          <dl className="mt-12 grid animate-fade-up gap-6 border-t border-ivory/15 pt-8 [animation-delay:420ms] sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.k}>
                <dt className="text-[0.8rem] text-ivory/55">{fact.k}</dt>
                <dd className="mt-1.5 text-lg leading-snug font-semibold text-ivory">{fact.v}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
