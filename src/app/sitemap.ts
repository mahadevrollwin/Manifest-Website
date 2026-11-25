import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { site } from "@/content/site";

const routes = [
  "/",
  "/about-manifest-business-setup-experts/",
  "/services/",
  "/services/company-formation-in-dubai-experts/",
  "/services/pro-services-dubai/",
  "/services/visa-services-dubai/",
  "/services/accounting-bookkeeping/",
  "/dubai-mainland/",
  "/dubai-free-zone-business-setup/",
  "/dubai-offshore-company-formation/",
  "/services/attestation-translation-dubai/",
  "/banking/",
  "/faqs/",
  "/dubai-business-setup-blog/",
  "/contact-us/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/${post.slug}/`,
      lastModified: post.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
