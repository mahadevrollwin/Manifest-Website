import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsappIcon } from "./SocialIcons";
import { formationPackages } from "@/content/packages";
import { site, whatsappLink } from "@/content/site";

const aed = (value: number) => `AED ${value.toLocaleString("en-US")}`;

export function FormationPackages() {
  return (
    <section id="packages" className="bg-olive-wash py-24 sm:py-28">
      <div className="container-luxe">
        <SectionHeading
          align="center"
          eyebrow="Packages"
          title="Company formation in the UAE"
          intro="Take advantage of these limited-time offers and launch your UAE business for less."
        />

        <MobileCarousel count={formationPackages.length} label="Company formation packages" gridClassName="sm:grid-cols-2 xl:grid-cols-4">
          {formationPackages.map((pkg, i) => (
            <Reveal
              as="li"
              key={pkg.name}
              delay={(i % 4) * 100}
              className="flex w-[82%] shrink-0 snap-center max-sm:transform-none! max-sm:opacity-100! sm:w-auto"
            >
              <article
                className={`relative flex w-full flex-col border bg-white px-6 pt-9 pb-6 shadow-[0_1px_2px_rgba(42,50,31,0.05)] transition-[translate,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_2px_4px_rgba(42,50,31,0.05),0_22px_36px_-16px_rgba(42,50,31,0.28)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-7 ${
                  pkg.badge ? "border-champagne" : "border-olive-deep/10 hover:border-champagne"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-champagne px-3.5 py-1 text-[0.68rem] font-bold tracking-[0.12em] whitespace-nowrap text-ink uppercase">
                    {pkg.badge}
                  </span>
                )}

                <h3 className="min-h-[4.2rem] text-[1.4rem] leading-tight text-olive-deep">{pkg.name}</h3>
                <p className="mt-3 text-[0.95rem] font-semibold text-champagne-deep">{pkg.subtitle}</p>

                <ul className="mt-5 flex-1 divide-y divide-dashed divide-olive-deep/15 border-t border-olive-deep/10">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 py-3 text-[0.92rem] leading-snug text-ink-soft">
                      <Check className="mt-0.5 size-4 shrink-0 text-olive" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-olive-deep/20 pt-5">
                  <p className="h-5 text-sm text-ink-soft/60">
                    {pkg.wasPrice && (
                      <>
                        <span className="sr-only">Previous price: </span>
                        <span className="line-through">Before {aed(pkg.wasPrice)}*</span>
                      </>
                    )}
                  </p>
                  <p className="mt-1 text-[2rem] leading-none font-bold text-olive-deep">
                    <span className="sr-only">Price: </span>
                    {aed(pkg.price)}*
                  </p>
                  <p className="mt-2 text-xs text-ink-soft/60">*T &amp; C apply</p>
                </div>

                <Link href="#form" className="btn btn-olive mt-6 w-full justify-center">
                  Get started today <ArrowRight className="size-4" aria-hidden />
                </Link>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-[0.82rem] leading-tight text-ink-soft/70">For instant response</span>
                  <span className="flex items-center gap-2">
                    <a
                      href={whatsappLink(
                        `Hi, I am interested in the ${pkg.name} package (${aed(pkg.price)}). Please share the details.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ask about the ${pkg.name} package on WhatsApp`}
                      className="flex size-10 items-center justify-center rounded-full border border-olive-deep/15 text-[#1fa855] transition-colors hover:border-[#1fa855] hover:bg-[#1fa855] hover:text-white"
                    >
                      <WhatsappIcon className="size-5" />
                    </a>
                    <a
                      href={site.phoneHref}
                      aria-label={`Call us about the ${pkg.name} package`}
                      className="flex size-10 items-center justify-center rounded-full border border-olive-deep/15 text-olive-deep transition-colors hover:border-olive-deep hover:bg-olive-deep hover:text-ivory"
                    >
                      <Phone className="size-[1.1rem]" aria-hidden />
                    </a>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </MobileCarousel>
      </div>
    </section>
  );
}
