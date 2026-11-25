"use client";

import { useState } from "react";
import Link from "next/link";
import { Accordion } from "./Accordion";
import type { FaqGroup } from "@/content/faqs";

export function FaqTabs({ groups }: { groups: FaqGroup[] }) {
  const [active, setActive] = useState(0);
  const group = groups[active];

  return (
    <div className="container-luxe grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="min-w-0 lg:sticky lg:top-28 lg:col-span-4">
        <div
          role="tablist"
          aria-label="FAQ topics"
          aria-orientation="vertical"
          className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0"
        >
          {groups.map((g, i) => (
            <button
              key={g.id}
              type="button"
              role="tab"
              id={`faq-tab-${g.id}`}
              aria-selected={i === active}
              aria-controls="faq-panel"
              onClick={() => setActive(i)}
              className={`shrink-0 px-4 py-3 text-left text-[0.95rem] font-semibold whitespace-nowrap transition-colors lg:text-base ${
                i === active ? "bg-olive-deep text-ivory" : "text-olive-deep hover:bg-olive-wash"
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>
        <div className="mt-8 hidden bg-olive-night p-6 text-ivory lg:block">
          <p className="text-[1.05rem] font-semibold">Still have a question?</p>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ivory/75">
            An adviser will reply within one working day.
          </p>
          <Link href="/contact-us/" className="btn btn-champagne mt-5">
            Ask an adviser
          </Link>
        </div>
      </div>

      <div id="faq-panel" role="tabpanel" aria-labelledby={`faq-tab-${group.id}`} className="min-w-0 lg:col-span-8">
        <h2 className="mb-4 text-2xl text-olive-deep sm:text-3xl">{group.title}</h2>
        <Accordion
          key={group.id}
          name={`faq-${group.id}`}
          items={group.items.map((item) => ({ question: item.q, answer: <p>{item.a}</p> }))}
        />
        <div className="mt-10 bg-olive-night p-6 text-ivory lg:hidden">
          <p className="text-[1.05rem] font-semibold">Still have a question?</p>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ivory/75">
            An adviser will reply within one working day.
          </p>
          <Link href="/contact-us/" className="btn btn-champagne mt-5">
            Ask an adviser
          </Link>
        </div>
      </div>
    </div>
  );
}
