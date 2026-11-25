export const site = {
  name: "Manifest Business Services",
  shortName: "Manifest",
  tagline: "Building businesses. Refining growth. Creating success.",
  url: "https://manifestbizz.com",
  email: "info@manifestbizz.com",
  phoneDisplay: "+971-50924-5196",
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
  { label: "Home", href: "/" },
  { label: "About Manifest", href: "/about-manifest-business-setup-experts/" },
  { label: "Services", href: "/services/", children: servicePages },
  { label: "Business Setup", href: "/dubai-mainland/", children: setupPages },
  { label: "FAQs", href: "/faqs/" },
  { label: "Blog", href: "/dubai-business-setup-blog/" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-manifest-business-setup-experts/" },
  { label: "FAQs", href: "/faqs/" },
  { label: "Dubai Mainland", href: "/dubai-mainland/" },
  { label: "Dubai FreeZone", href: "/dubai-free-zone-business-setup/" },
  { label: "Blog", href: "/dubai-business-setup-blog/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Banking", href: "/banking/" },
  { label: "Company Formation", href: "/services/company-formation-in-dubai-experts/" },
  { label: "PRO Services", href: "/services/pro-services-dubai/" },
  { label: "Visa Services", href: "/services/visa-services-dubai/" },
  { label: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping/" },
];

export const coreServices = [
  {
    key: "formation",
    title: "Company Formation",
    href: "/services/company-formation-in-dubai-experts/",
    text: "Select the right jurisdiction and license based on your business needs. We guide you through every step to ensure a smooth and hassle-free company formation.",
  },
  {
    key: "pro",
    title: "PRO Services",
    href: "/services/pro-services-dubai/",
    text: "Complete government liaison and PRO ensuring compliance, risk reduction, and efficient handling of all regulatory requirements saving you time and cost.",
  },
  {
    key: "visa",
    title: "Visa Services",
    href: "/services/visa-services-dubai/",
    text: "From golden visas to employee and family visas, our experts ensure fast, smooth, and hassle-free processing for all visa service categories.",
  },
  {
    key: "banking",
    title: "Banking Assistance",
    href: "/banking/",
    text: "Simplified bank account opening with major banks, dedicated relationship managers, and seamless multilingual digital banking support.",
  },
  {
    key: "accounting",
    title: "Accounting & Book keeping",
    href: "/services/accounting-bookkeeping/",
    text: "Accurate financial records, timely reporting, and full compliance to give you clarity, control, and peace of mind.",
  },
  {
    key: "attestation",
    title: "Attestation & Translation",
    href: "/contact-us/",
    text: "Reliable document attestation and certified translation services to ensure authenticity, legal acceptance, and international validity.",
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
