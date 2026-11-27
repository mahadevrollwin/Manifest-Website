import type { Metadata } from "next";
import { BlogArticleView } from "./BlogArticleView";
import { getPost, postPath, posts } from "@/content/posts";
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
      <BlogArticleView post={post} related={related} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
