import Image from "next/image";
import { Reveal } from "./Reveal";

// Trimmed copies of the logos (no built-in white margin) so every logo can be sized consistently.
const authorities = [
  { src: "/images/authorities/trimmed/auth-1.png", alt: "Dubai Courts", width: 237, height: 64 },
  { src: "/images/authorities/trimmed/auth-2.png", alt: "Salem", width: 183, height: 67 },
  { src: "/images/authorities/trimmed/auth-3.png", alt: "Tasheel", width: 185, height: 81 },
  { src: "/images/authorities/trimmed/auth-4.png", alt: "Amer", width: 158, height: 98 },
];

export function AuthoritiesStrip() {
  return (
    <section className="border-y border-olive-deep/10 bg-white py-16 sm:py-20">
      <div className="container-luxe flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
        <Reveal className="shrink-0 text-center lg:max-w-xs lg:text-left">
          <p className="eyebrow justify-center lg:justify-start">Working alongside</p>
          <h2 className="mt-4 text-3xl leading-tight text-olive-deep">UAE Government Authorities</h2>
        </Reveal>
        <div className="hidden h-24 w-px shrink-0 bg-olive-deep/15 lg:block" />
        <ul className="grid w-full grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {authorities.map((a, i) => (
            <Reveal
              as="li"
              key={a.alt}
              delay={i * 90}
              className="group flex h-28 items-center justify-center border border-olive-deep/10 bg-white px-5 py-4 shadow-[0_1px_2px_rgba(42,50,31,0.05),0_14px_30px_-18px_rgba(42,50,31,0.2)] card-lift sm:h-32 sm:px-6"
            >
              <Image
                src={a.src}
                alt={a.alt}
                width={a.width}
                height={a.height}
                className="h-auto max-h-12 w-auto max-w-[8.5rem] object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100 sm:max-h-14"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
