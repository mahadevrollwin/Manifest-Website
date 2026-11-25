import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { posts } from "@/content/posts";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: { absolute: "Dubai Business Setup Blog | Insights, Guides & Updates" },
  description:
    "Stay updated with our Dubai business setup blog covering free zone setup, visa services, accounting, and business growth strategies.",
  alternates: { canonical: "/dubai-business-setup-blog/" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Insights & guides"
        title={
          <>
            Our <em className="text-champagne">Blogs</em>
          </>
        }
        intro="Stay informed with expert insights on company formation, compliance, and business growth strategies across Dubai and the UAE. Discover practical guides on Dubai business setup."
        image="/images/dubai-aerial-night.jpg"
        imageAlt="Aerial view of Dubai at night"
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Latest articles"
            title={
              <>
                All Blog <em className="text-olive">Posts</em>
              </>
            }
          />

          <Reveal className="mt-16">
            <Link
              href={`/${featured.slug}/`}
              className="group grid overflow-hidden bg-white shadow-[0_40px_80px_-50px_rgba(20,22,16,0.45)] lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2s] ease-luxe group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                <PostMeta category={featured.category} date={featured.date} minutes={featured.readingMinutes} />
                <h2 className="mt-6 text-3xl leading-tight text-olive-deep transition-colors group-hover:text-olive sm:text-[2.6rem]">
                  {featured.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-soft/80">{featured.excerpt}</p>
                <span className="mt-10 inline-flex items-center gap-3 text-[0.68rem] font-medium tracking-[0.26em] text-olive uppercase">
                  Read More <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 120}>
                <Link href={`/${post.slug}/`} className="group block bg-white">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[2s] ease-luxe group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 sm:p-10">
                    <PostMeta category={post.category} date={post.date} minutes={post.readingMinutes} />
                    <h2 className="mt-5 text-3xl leading-tight text-olive-deep transition-colors group-hover:text-olive">{post.title}</h2>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft/80">{post.excerpt}</p>
                    <span className="mt-8 inline-flex items-center gap-3 text-[0.68rem] font-medium tracking-[0.26em] text-olive uppercase">
                      Read More <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Ready to turn insight into <em className="text-champagne">action?</em>
          </>
        }
        text="Talk to our Dubai business setup experts about your company formation plans."
      />
    </>
  );
}

function PostMeta({ category, date, minutes }: { category: string; date: string; minutes: number }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.65rem] tracking-[0.24em] text-ink-soft/60 uppercase">
      <span className="bg-olive-wash px-3 py-1.5 text-olive">{category}</span>
      <time dateTime={date}>{formatDate(date)}</time>
      <span className="flex items-center gap-1.5">
        <Clock className="size-3" /> {minutes} min read
      </span>
    </div>
  );
}
