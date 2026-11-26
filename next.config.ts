import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/about-manifest", destination: "/about-manifest-business-setup-experts/", permanent: true },
      { source: "/services/company-formation", destination: "/services/company-formation-in-dubai-experts/", permanent: true },
      { source: "/services/pro-services", destination: "/services/pro-services-dubai/", permanent: true },
      { source: "/services/visa-services", destination: "/services/visa-services-dubai/", permanent: true },
      { source: "/dubai-company-formation-services", destination: "/", permanent: true },
      { source: "/blog", destination: "/dubai-business-setup-blog/", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/video/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
