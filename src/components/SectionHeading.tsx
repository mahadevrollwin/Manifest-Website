import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";
  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${dark ? "eyebrow-light" : ""} ${centered ? "justify-center" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-5 text-[2.35rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem] ${
          dark ? "text-ivory" : "text-olive-deep"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            dark ? "text-ivory/70" : "text-ink-soft/80"
          } ${centered ? "mx-auto max-w-2xl" : ""}`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
