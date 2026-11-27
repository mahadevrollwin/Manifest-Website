import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { T } from "./T";

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
          <T>{eyebrow}</T>
        </p>
      )}
      <h2
        className={`mt-5 text-[2rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-ivory" : "text-olive-deep"
        }`}
      >
        <T>{title}</T>
      </h2>
      {intro && (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            dark ? "text-ivory/70" : "text-ink-soft/80"
          } ${centered ? "mx-auto max-w-2xl" : ""}`}
        >
          <T>{intro}</T>
        </p>
      )}
    </Reveal>
  );
}
