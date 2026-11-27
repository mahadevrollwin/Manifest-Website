import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { LatestInsightsGrid } from "./LatestInsightsGrid";
import { T } from "./T";
import { postPath, posts } from "@/content/posts";

const BLOG_HREF = "/dubai-business-setup-blog/";

export function LatestInsights() {
  const cards = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      href: postPath(post),
      title: post.title,
      date: post.date,
      category: post.category,
      image: post.image,
      excerpt: post.excerpt,
      readingMinutes: post.readingMinutes,
    }));

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
              <T>All articles</T> <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden />
            </Link>
          </Reveal>
        </div>

        <LatestInsightsGrid cards={cards} />

        <Reveal delay={150} className="mt-12 flex justify-center">
          <Link href={BLOG_HREF} className="btn btn-olive">
            <T>View more articles</T> <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
