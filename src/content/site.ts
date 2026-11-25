export const site = {
  name: "Manifest Business Services",
  shortName: "Manifest",
  tagline: "Building businesses. Refining growth. Creating success.",
  url: "https://manifestbizz.com",
  email: "info@manifestbizz.com",
  phoneDisplay: "+971 50 924 5196",
  phoneHref: "tel:+971509245196",
  whatsappNumber: "971509245196",
  address:
    "Fahidi Heights, 15th Floor, 1502-A, Office No. 11, Sharaf D G Exit-4, Bur Dubai, Dubai, United Arab Emirates",
  addressShort: "Fahidi Heights, Bur Dubai, Dubai, UAE",
  mapEmbed:
    "https://www.google.com/maps?q=Fahidi+Heights,+Sharaf+DG+Metro+Station,+Bur+Dubai,+Dubai&output=embed",
  social: {
    instagram: "https://www.instagram.com/manifest_business/",
    linkedin: "https://www.linkedin.com/company/manifestbusinessservices/",
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general:
    "Hi I am interested in starting a company in Dubai. Please share details about cost, process, and timeline.",
  banking: "Hi I need help with opening a bank account in Dubai. Can you assist me?",
  pro: "Hi I have a query about PRO services in Dubai.",
};

export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const servicePages: NavLink[] = [
  {
    label: "Company Formation",
    href: "/services/company-formation-in-dubai-experts/",
    description: "Right jurisdiction, right license, launched hassle-free.",
  },
  {
    label: "PRO Services",
    href: "/services/pro-services-dubai/",
    description: "Government liaison, approvals and compliance handled.",
  },
  {
    label: "Visa Services",
    href: "/services/visa-services-dubai/",
    description: "Golden, investor, employment and family visas.",
  },
  {
    label: "Accounting & Bookkeeping",
    href: "/services/accounting-bookkeeping/",
    description: "Accurate records, reporting and full compliance.",
  },
  {
    label: "Banking",
    href: "/banking/",
    description: "Corporate and personal accounts with major UAE banks.",
  },
];

export const setupPages: NavLink[] = [
  {
    label: "Dubai Mainland",
    href: "/dubai-mainland/",
    description: "Trade freely across the UAE with a DED license.",
  },
  {
    label: "Dubai Free Zone",
    href: "/dubai-free-zone-business-setup/",
    description: "100% ownership across 46+ UAE jurisdictions.",
  },
];

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services/", children: servicePages },
  { label: "Business setup", href: "/dubai-mainland/", children: setupPages },
  { label: "About", href: "/about-manifest-business-setup-experts/" },
  { label: "FAQs", href: "/faqs/" },
  { label: "Blog", href: "/dubai-business-setup-blog/" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About", href: "/about-manifest-business-setup-experts/" },
  { label: "FAQs", href: "/faqs/" },
  { label: "Dubai Mainland", href: "/dubai-mainland/" },
  { label: "Dubai Free Zone", href: "/dubai-free-zone-business-setup/" },
  { label: "Blog", href: "/dubai-business-setup-blog/" },
  { label: "Contact", href: "/contact-us/" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Company formation", href: "/services/company-formation-in-dubai-experts/" },
  { label: "PRO services", href: "/services/pro-services-dubai/" },
  { label: "Visa services", href: "/services/visa-services-dubai/" },
  { label: "Banking assistance", href: "/banking/" },
  { label: "Accounting & bookkeeping", href: "/services/accounting-bookkeeping/" },
  { label: "Attestation & translation", href: "/contact-us/" },
];

export const coreServices = [
  {
    key: "formation",
    title: "Company formation",
    href: "/services/company-formation-in-dubai-experts/",
    text: "Mainland, free zone or offshore. We match your business activity to the right licence and take you from trade name to trade licence.",
  },
  {
    key: "pro",
    title: "PRO services",
    href: "/services/pro-services-dubai/",
    text: "Government work handled for you: licence renewals, labour and immigration files, approvals and document clearing.",
  },
  {
    key: "visa",
    title: "Visa services",
    href: "/services/visa-services-dubai/",
    text: "Investor, partner, employee and family visas, plus Golden Visa eligibility checks and applications.",
  },
  {
    key: "banking",
    title: "Banking assistance",
    href: "/banking/",
    text: "We prepare your file and introduce you to UAE banks that suit your business profile, for a smoother account opening.",
  },
  {
    key: "accounting",
    title: "Accounting & bookkeeping",
    href: "/services/accounting-bookkeeping/",
    text: "Monthly bookkeeping, VAT and corporate tax registration and filing, so you stay compliant from year one.",
  },
  {
    key: "attestation",
    title: "Attestation & translation",
    href: "/contact-us/",
    text: "Certified legal translation and attestation of degrees, certificates and company documents for use in the UAE.",
  },
] as const;

export const consultationInterests = [
  "Company Formation",
  "Dubai Mainland Setup",
  "Dubai Free Zone Setup",
  "PRO Services",
  "Visa Services",
  "Banking Assistance",
  "Accounting & Bookkeeping",
  "Attestation & Translation",
  "Other",
];
