import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { postPath, posts } from "@/content/posts";
import { formatDate } from "@/lib/format";

const BLOG_HREF = "/dubai-business-setup-blog/";

export function LatestInsights() {
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <section className="bg-olive-wash py-24 sm:py-28">
      <div className="container-luxe">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Latest insights" title="Guides for founders setting up in Dubai" />
          <Reveal delay={100}>
            <Link
              href={BLOG_HREF}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-olive-deep underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-olive"
            >
              All articles <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 100} className="flex">
              <Link
                href={postPath(post)}
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
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" aria-hidden /> {post.readingMinutes} min read
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-champagne-deep transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden
                    />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={150} className="mt-12 flex justify-center">
          <Link href={BLOG_HREF} className="btn btn-olive">
            View more articles <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
