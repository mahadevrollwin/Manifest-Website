import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticle, blogMetadata } from "@/components/BlogArticle";
import { findPost, posts } from "@/content/posts";

type Params = Promise<{ slug: string }>;

// Posts imported from the original site keep their root-level URLs; every newer post is served from /blog/[slug]/.
function dynamicPost(slug: string) {
  const post = findPost(slug);
  return post && !post.legacyPath ? post : undefined;
}

export function generateStaticParams() {
  return posts.filter((post) => !post.legacyPath).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  return dynamicPost(slug) ? blogMetadata(slug) : {};
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  if (!dynamicPost(slug)) notFound();
  return <BlogArticle slug={slug} />;
}
