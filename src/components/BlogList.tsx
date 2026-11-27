"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { formatDate } from "@/lib/format";

export type BlogCard = {
  slug: string;
  href: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  readingMinutes: number;
};

function Meta({ post }: { post: BlogCard }) {
  return (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft/70">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span className="flex items-center gap-1.5">
        <Clock className="size-3.5" /> {post.readingMinutes} min read
      </span>
    </p>
  );
}

export function BlogList({ posts }: { posts: BlogCard[] }) {
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const visible = active === "All" ? posts : posts.filter((p) => p.category === active);
  const [featured, ...rest] = visible;

  return (
    <div className="container-luxe">
      <div role="group" aria-label="Filter by topic" className="mb-12 flex flex-wrap gap-2.5">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={c === active}
            onClick={() => setActive(c)}
            className={`border px-4 py-2 text-sm font-semibold transition-colors ${
              c === active
                ? "border-olive-deep bg-olive-deep text-ivory"
                : "border-olive-deep/20 text-olive-deep hover:border-olive-deep"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {featured && (
        <Link
          href={featured.href}
          className="group grid overflow-hidden border border-olive-deep/10 bg-white card-lift lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-80">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[2s] ease-luxe group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
            <span className="text-xs font-semibold tracking-[0.14em] text-champagne-deep uppercase">
              Featured · {featured.category}
            </span>
            <h2 className="text-2xl leading-[1.2] text-olive-deep transition-colors group-hover:text-olive sm:text-[2rem]">
              {featured.title}
            </h2>
            <p className="text-base leading-relaxed text-ink-soft/85">{featured.excerpt}</p>
            <Meta post={featured} />
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-olive">
              Read the guide <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="group flex flex-col overflow-hidden border border-olive-deep/10 bg-white card-lift"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[2s] ease-luxe group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="text-sm font-semibold text-champagne-deep">{post.category}</span>
                <h3 className="text-xl leading-snug text-olive-deep transition-colors group-hover:text-olive">
                  {post.title}
                </h3>
                <p className="flex-1 text-[0.95rem] leading-relaxed text-ink-soft/85">{post.excerpt}</p>
                <Meta post={post} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
