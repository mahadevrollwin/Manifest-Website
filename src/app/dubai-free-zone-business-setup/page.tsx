import type { Metadata } from "next";
import Image from "next/image";
import { AuthoritiesStrip } from "@/components/AuthoritiesStrip";
import { Reveal } from "@/components/Reveal";
import { ServicePage, type ServicePageData } from "@/components/ServicePage";
import { serviceLinks as l } from "@/content/service-links";

export const metadata: Metadata = {
  title: {
    absolute: "Dubai Free Zone Business Setup: Complete Guide for 2026",
  },
  description:
    "Dubai free zone business setup guide covering costs, benefits, documents, and registration process. Launch your UAE business the smart way.",
  alternates: { canonical: "/dubai-free-zone-business-setup/" },
};

const structures = [
  {
    title: "Free Zone Establishment",
    short: "FZE",
    image: "/images/fz-fze.jpg",
  },
  { title: "Free Zone Company", short: "FZCO", image: "/images/fz-fzco.jpg" },
  {
    title: "Free Zone Limited Liability Company",
    short: "FZ LLC",
    image: "/images/fz-fzllc.jpg",
  },
];

const freeZones = [
  { short: "IFZA", name: "International Free Zone Authority" },
  { short: "DMCC", name: "Dubai Multi Commodities Centre" },
  { short: "ADGM", name: "Abu Dhabi Global Market" },
  { short: "DIFC", name: "Dubai International Financial Centre" },
  { short: "Meydan", name: "Meydan Free Zone" },
  { short: "SPC", name: "Sharjah Publishing City" },
  { short: "RAKEZ", name: "Ras Al Khaimah Economic Zone" },
  { short: "AFZ", name: "Ajman Free Zone" },
  { short: "SRTIP", name: "Sharjah Research, Technology & Innovation Park" },
  { short: "DAFZA", name: "Dubai Airport Free Zone" },
  { short: "JAFZA", name: "Jebel Ali Free Zone" },
];

const media = (
  <>
    <section className="bg-white py-20 sm:py-24">
      <div className="container-luxe">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Company structures</p>
          <h2 className="mt-5 text-3xl leading-[1.15] text-olive-deep sm:text-4xl">
            Choose the free zone structure that fits your plan
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {structures.map((s, i) => (
            <Reveal
              key={s.short}
              delay={i * 90}
              className="overflow-hidden border border-olive-deep/10 bg-ivory"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold tracking-[0.14em] text-champagne-deep uppercase">
                  {s.short}
                </p>
                <h3 className="mt-2 text-xl leading-snug text-olive-deep">
                  {s.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="text-2xl text-olive-deep">Free zones we set up in</h3>
          <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-ink-soft/85">
            We work across 46+ UAE jurisdictions, including:
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {freeZones.map((z) => (
              <li
                key={z.short}
                className="border border-olive-deep/10 bg-ivory px-5 py-4"
              >
                <span className="block font-semibold text-olive-deep">
                  {z.short}
                </span>
                <span className="mt-1 block text-sm leading-snug text-ink-soft/80">
                  {z.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
    <AuthoritiesStrip />
  </>
);

const page: ServicePageData = {
  crumbs: [
    { label: "Home", href: "/" },
    { label: "Business setup" },
    { label: "Dubai Free Zone" },
  ],
  eyebrow: "Dubai Free Zone",
  h1: "Dubai free zone company setup",
  intro:
    "There are dozens of free zones in the UAE, each with different costs, activities, office options and visa allowances. We compare them for your business, recommend the best fit, and handle the setup end to end.",
  heroImage: "/images/dubai-marina.jpg",
  heroImageAlt: "Dubai Marina waterfront",
  facts: [
    { k: "Ownership", v: "100% foreign ownership" },
    { k: "Corporate tax", v: "0% on qualifying income*" },
    { k: "Office", v: "Flexi-desk to full office" },
  ],
  forTitle: "A free zone suits businesses that sell beyond the UAE mainland",
  forItems: [
    {
      t: "E-commerce & digital",
      d: "Online stores, SaaS, media and tech companies serving customers across borders.",
    },
    {
      t: "Trading & logistics",
      d: "Import, export and re-export businesses that benefit from customs advantages in their zone.",
    },
    {
      t: "Consultants & startups",
      d: "Lean setups with a flexi-desk, a low starting cost and visas for the founders.",
    },
  ],
  incTitle: "Your free zone setup, handled end to end",
  included: [
    "Side-by-side comparison of suitable free zones",
    "Package selection: licence, office and visa allocation",
    "Application and document preparation",
    "Free zone registration and licence issuance",
    "Share certificate and incorporation documents",
    "Establishment card",
    "Investor and employee visas, medical and Emirates ID",
    "Corporate bank account introduction",
    "Corporate tax and VAT registration support",
  ],
  image: "/images/dubai-skyline-night.jpg",
  imageAlt: "Dubai skyline at night",
  media,
  stepsTitle: "How free zone setup works",
  steps: [
    {
      n: "01",
      t: "Compare free zones",
      d: "We shortlist the zones that allow your activity and fit your budget.",
    },
    {
      n: "02",
      t: "Choose your package",
      d: "Pick your licence, office type and number of visas.",
    },
    {
      n: "03",
      t: "Apply",
      d: "We prepare and submit your application and documents.",
    },
    {
      n: "04",
      t: "Licence issued",
      d: "Your free zone licence and incorporation documents are issued.",
    },
    {
      n: "05",
      t: "Visas & bank",
      d: "Establishment card, visas, Emirates ID and your bank account.",
    },
  ],
  docsTitle: "Documents you will need",
  docsNote: "Each free zone has its own checklist. We prepare it for you.",
  docs: [
    "Passport copy for every shareholder and manager",
    "Passport-size photo",
    "UAE visa or entry stamp, if you are in the UAE",
    "Proof of residential address",
    "Short business plan, for some free zones",
    "Bank reference letter or CV, for some free zones",
  ],
  costNote:
    "*A Qualifying Free Zone Person pays 0% corporate tax on qualifying income; other income is taxed at 9%. We help you understand which applies to you. Package and visa costs vary by free zone, so your quote shows each one separately.",
  faqs: [
    {
      q: "Which free zones do you work with?",
      a: "We work across 46+ UAE jurisdictions, including IFZA, DMCC, DIFC, ADGM, Meydan, SPC, RAKEZ, AFZ, SRTIP, DAFZA and JAFZA. We recommend one based on your activity, budget and visa needs, not on commission.",
    },
    {
      q: "Can a free zone company trade in mainland Dubai?",
      a: "Free zone companies trade freely inside their zone and internationally. Selling directly to customers on the UAE mainland usually needs a local distributor, a branch or an additional permit. We help you plan for this from the start.",
    },
    {
      q: "Do free zone companies pay corporate tax?",
      a: "A Qualifying Free Zone Person pays 0% on qualifying income and 9% on other taxable income. Every free zone company must still register for corporate tax and file a return.",
    },
    {
      q: "Can I get a visa with a flexi-desk?",
      a: "Yes. Most free zones include a set number of visas with a flexi-desk package, and you can upgrade your office as you hire.",
    },
  ],
  related: [l.mainland, l.formation, l.visa, l.accounting],
  ctaTitle: "Not sure which free zone fits? We'll compare them for you.",
};

export default function FreeZonePage() {
  return <ServicePage page={page} />;
}
