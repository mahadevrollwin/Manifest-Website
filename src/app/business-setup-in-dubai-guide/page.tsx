import { BlogArticle, blogMetadata } from "@/components/BlogArticle";

const slug = "business-setup-in-dubai-guide";

export const metadata = blogMetadata(slug);

export default function Page() {
  return <BlogArticle slug={slug} />;
}
