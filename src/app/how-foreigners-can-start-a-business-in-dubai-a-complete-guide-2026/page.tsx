import { BlogArticle, blogMetadata } from "@/components/BlogArticle";

const slug = "how-foreigners-can-start-a-business-in-dubai-a-complete-guide-2026";

export const metadata = blogMetadata(slug);

export default function Page() {
  return <BlogArticle slug={slug} />;
}
