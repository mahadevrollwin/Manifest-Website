"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "./useLang";
import { formatPostDate, formatReadingTime, localizePost } from "@/content/posts-ar";

export type InsightCard = {
  slug: string;
  href: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  readingMinutes: number;
};

/** The three article cards of the homepage "Latest insights" strip; text is localized in the browser. */
export function LatestInsightsGrid({ cards }: { cards: InsightCard[] }) {
  const { lang } = useLang();

  return (
    <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => {
        const post = localizePost(card, lang);
        return (
          <Reveal as="li" key={post.slug} delay={i * 100} className="flex">
            <Link
              href={post.href}
              className="group flex w-full flex-col overflow-hidden border border-olive-deep/10 bg-white shadow-[0_1px_2px_rgba(42,50,31,0.05)] card-lift"
            >
              <span className="relative block aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105 motion-reduce:transition-none"
                />
              </span>
              <span className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                <span className="text-sm font-semibold text-champagne-deep">{post.category}</span>
                <span className="text-xl leading-snug font-bold text-olive-deep transition-colors group-hover:text-olive">
                  {post.title}
                </span>
                <span className="flex-1 text-[0.95rem] leading-relaxed text-ink-soft/85">{post.excerpt}</span>
                <span className="flex items-center justify-between gap-4 border-t border-olive-deep/10 pt-4 text-sm text-ink-soft/70">
                  <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <time dateTime={post.date}>{formatPostDate(post.date, lang)}</time>
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-3.5" aria-hidden /> {formatReadingTime(post.readingMinutes, lang)}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-champagne-deep transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
                    aria-hidden
                  />
                </span>
              </span>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
