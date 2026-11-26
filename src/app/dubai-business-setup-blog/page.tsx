import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { BlogList } from "@/components/BlogList";
import { postPath, posts } from "@/content/posts";

export const metadata: Metadata = {
  title: { absolute: "Dubai Business Setup Blog | Insights, Guides & Updates" },
  description:
    "Stay updated with our Dubai business setup blog covering free zone setup, visa services, accounting, and business growth strategies.",
  alternates: { canonical: "/dubai-business-setup-blog/" },
};

export default function BlogPage() {
  const cards = posts.map((post) => ({
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
    <>
      <PageHero
        eyebrow="Insights & guides"
        title="Dubai business setup guides"
        intro="Practical, up-to-date guides on licences, visas, banking and tax in the UAE, written by our advisers."
        image="/images/dubai-aerial-night.jpg"
        imageAlt="Aerial view of Dubai at night"
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="bg-ivory py-16 sm:py-24">
        <BlogList posts={cards} />
      </section>

      <CtaBand title="Prefer to talk it through?" image="/images/dubai-aerial-night.jpg" />
    </>
  );
}
