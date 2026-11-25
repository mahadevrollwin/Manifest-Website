import Image from "next/image";
import { Reveal } from "./Reveal";

const authorities = [
  { src: "/images/authorities/auth-1.png", alt: "Dubai Courts" },
  { src: "/images/authorities/auth-2.png", alt: "Salem" },
  { src: "/images/authorities/auth-3.png", alt: "Tasheel" },
  { src: "/images/authorities/auth-4.png", alt: "Amer" },
];

export function AuthoritiesStrip() {
  return (
    <section className="border-y border-olive-deep/10 bg-white py-14 sm:py-16">
      <div className="container-luxe flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
        <Reveal className="shrink-0 text-center lg:text-left">
          <p className="eyebrow">Working alongside</p>
          <h2 className="mt-3 text-3xl text-olive-deep">UAE Government Authorities</h2>
        </Reveal>
        <div className="hidden h-14 w-px bg-olive-deep/15 lg:block" />
        <div className="grid w-full grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-4">
          {authorities.map((a, i) => (
            <Reveal key={a.alt} delay={i * 90} className="flex justify-center">
              <Image
                src={a.src}
                alt={a.alt}
                width={180}
                height={80}
                className="h-12 w-auto object-contain opacity-60 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0 sm:h-14"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
