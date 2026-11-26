import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { ConsultationForm } from "./ConsultationForm";
import { getPost, postPath, posts, type Post } from "@/content/posts";
import { formatDate } from "@/lib/format";
import { site } from "@/content/site";

export function blogMetadata(slug: string): Metadata {
  const post = getPost(slug);
  return {
    title: { absolute: post.title },
    description: post.description,
    alternates: { canonical: postPath(post) },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [{ url: post.image }],
    },
  };
}

export function BlogArticle({ slug }: { slug: string }) {
  const post = getPost(slug);
  const related = posts.filter((p) => p.slug !== slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: `${site.url}${post.image}`,
    mainEntityOfPage: `${site.url}${postPath(post)}`,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <section className="grain relative isolate overflow-hidden bg-olive-night pt-40 pb-20 text-ivory sm:pb-28">
        <Image src={post.image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-olive-night via-olive-night/80 to-olive-night/60" />
        <div className="container-luxe max-w-4xl">
          <Link
            href="/dubai-business-setup-blog/"
            className="inline-flex animate-fade-up items-center gap-2 text-[0.68rem] tracking-[0.24em] text-ivory/60 uppercase hover:text-champagne"
          >
            <ArrowLeft className="size-3.5" /> All articles
          </Link>
          <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-5 gap-y-2 text-[0.65rem] tracking-[0.24em] text-ivory/65 uppercase [animation-delay:120ms]">
            <span className="border border-champagne/40 px-3 py-1.5 text-champagne">{post.category}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3" /> {post.readingMinutes} min read
            </span>
          </div>
          <h1 className="mt-7 animate-fade-up text-4xl leading-[1.08] [animation-delay:200ms] sm:text-6xl">{post.title}</h1>
          <p className="mt-7 max-w-2xl animate-fade-up text-lg leading-relaxed text-ivory/70 [animation-delay:300ms]">
            {post.excerpt}
          </p>
        </div>
      </section>

      <div className="bg-ivory">
        <div className="container-luxe max-w-4xl">
          <div className="relative -mt-0 aspect-[16/8] overflow-hidden sm:-mt-12">
            <Image src={post.image} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
          </div>
        </div>
      </div>

      <section className="bg-ivory pt-16 pb-24 sm:pt-20 sm:pb-32">
        <div className="container-luxe grid max-w-6xl gap-16 lg:grid-cols-[1fr_20rem]">
          <article className="prose-luxe" dangerouslySetInnerHTML={{ __html: post.html }} />
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div className="bg-olive-deep p-8 text-ivory">
              <p className="eyebrow eyebrow-light">Free consultation</p>
              <p className="mt-4 font-display text-3xl leading-tight">Planning your Dubai business setup?</p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                Get clear, expert guidance on the right structure, license, and costs.
              </p>
              <Link href="/contact-us/" className="btn btn-champagne mt-7 w-full">
                Talk to an expert <ArrowUpRight className="size-4" />
              </Link>
            </div>
            {related.length > 0 && (
              <div>
                <p className="eyebrow">Keep reading</p>
                <ul className="mt-5 space-y-5">
                  {related.map((p) => (
                    <li key={p.slug}>
                      <RelatedLink post={p} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="border-t border-olive-deep/10 bg-white py-24 sm:py-28">
        <div className="container-luxe grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Begin your consultation</p>
            <h2 className="mt-5 text-4xl leading-[1.08] text-olive-deep sm:text-5xl">
              Get in <em className="text-olive">touch</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft/80">
              Tell us about your business and we&apos;ll help you build a foundation designed for long-term success.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <ConsultationForm />
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}

function RelatedLink({ post }: { post: Post }) {
  return (
    <Link href={postPath(post)} className="group flex gap-4">
      <span className="relative block size-20 shrink-0 overflow-hidden">
        <Image src={post.image} alt="" fill sizes="80px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
      </span>
      <span>
        <span className="block font-display text-lg leading-snug text-olive-deep group-hover:text-olive">{post.title}</span>
        <span className="mt-1 block text-[0.62rem] tracking-[0.2em] text-ink-soft/60 uppercase">{formatDate(post.date)}</span>
      </span>
    </Link>
  );
}
