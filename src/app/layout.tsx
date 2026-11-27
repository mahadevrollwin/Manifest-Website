import type { Metadata, Viewport } from "next";
import { Noto_Sans_Arabic, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { LangSync } from "@/components/LangSync";
import { T } from "@/components/T";
import { HideOnAssistant } from "@/components/HideOnAssistant";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/content/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Used for Arabic text only. Not preloaded, so English visitors never download it.
const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
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
    streetAddress: site.streetAddress,
    addressLocality: "Bur Dubai, Dubai",
    addressCountry: "AE",
  },
  sameAs: [site.social.instagram, site.social.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${notoArabic.variable} antialiased`}>
      <body className="min-h-svh">
        <LangSync />
        <a
          href="#main"
          className="sr-only z-[60] bg-champagne px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:start-3"
        >
          <T>Skip to content</T>
        </a>
        <HideOnAssistant>
          <Header />
        </HideOnAssistant>
        <main id="main">{children}</main>
        <HideOnAssistant>
          <Footer />
          <WhatsAppFloat />
        </HideOnAssistant>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
