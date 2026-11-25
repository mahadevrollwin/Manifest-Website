import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/content/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dubai Company Formation Services | Fast & Hassle-Free Setup",
    template: "%s | Manifest Business Services",
  },
  description:
    "Looking for Dubai Company Formation? We handle from company setup to compliance, helping you launch and grow your business with ease.",
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_AE",
    images: [{ url: "/images/hero-poster.jpg", width: 1920, height: 1080, alt: "Downtown Dubai skyline at dusk" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#1d2316",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: "+971509245196",
  image: `${site.url}/images/hero-poster.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fahidi Heights, 15th Floor, 1502-A, Office No. 11, Sharaf D G Exit-4",
    addressLocality: "Bur Dubai, Dubai",
    addressCountry: "AE",
  },
  sameAs: [site.social.instagram, site.social.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-svh">
        <a
          href="#main"
          className="sr-only z-[60] bg-champagne px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
