import type { ReactNode } from "react";
import { Plus } from "lucide-react";

export type AccordionItem = { question: string; answer: ReactNode };

export function Accordion({ items, name }: { items: AccordionItem[]; name: string }) {
  return (
    <div className="divide-y divide-olive-deep/10 border-y border-olive-deep/10">
      {items.map((item) => (
        <details key={item.question} name={name} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
            <span className="font-display text-lg leading-snug font-semibold text-olive-deep transition-colors group-hover:text-olive sm:text-xl">
              {item.question}
            </span>
            <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-olive-deep/15 text-olive transition-all duration-500 group-open:rotate-45 group-open:border-champagne group-open:bg-champagne group-open:text-ink">
              <Plus className="size-4" />
            </span>
          </summary>
          <div className="space-y-4 pr-12 pb-7 text-[0.98rem] leading-relaxed text-ink-soft/85">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
