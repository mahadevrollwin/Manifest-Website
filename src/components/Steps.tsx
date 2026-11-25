import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export type Step = { title: string; text?: string };

type StepsProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  steps: Step[];
  aside?: ReactNode;
};

export function Steps({ eyebrow, title, intro, steps, aside }: StepsProps) {
  return (
    <section className="grain relative overflow-hidden bg-olive-deep py-24 text-ivory sm:py-32">
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-[34rem] rounded-full bg-olive/25 blur-3xl" />
      <div className="container-luxe relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="eyebrow eyebrow-light">{eyebrow}</p>
              <h2 className="mt-5 text-4xl leading-[1.08] sm:text-5xl">{title}</h2>
              {intro && <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/70 sm:text-lg">{intro}</p>}
            </Reveal>
            {aside && <Reveal delay={150} className="mt-10">{aside}</Reveal>}
          </div>
        </div>
        <ol className="lg:col-span-7">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 60}
              className="group grid grid-cols-[4.5rem_1fr] gap-6 border-t border-ivory/10 py-8 last:border-b sm:grid-cols-[6rem_1fr]"
            >
              <span className="font-display text-5xl leading-none text-champagne/40 transition-colors duration-700 group-hover:text-champagne sm:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <p className="text-[0.65rem] font-medium tracking-[0.3em] text-champagne uppercase">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-2xl leading-snug sm:text-[1.75rem]">{step.title}</h3>
                {step.text && <p className="mt-3 max-w-xl text-sm leading-relaxed text-ivory/65 sm:text-base">{step.text}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
