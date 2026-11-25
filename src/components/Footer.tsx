import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { footerQuickLinks, footerServiceLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-olive-night text-ivory">
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-olive/20 blur-3xl" />

      <div className="container-luxe relative">
        <div className="grid gap-12 pt-20 pb-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pt-24">
          <div className="lg:col-span-4">
            <Logo className="!items-start" />
            <p className="mt-6 max-w-xs font-display text-xl leading-snug text-ivory/80 italic">
              Manifest Business Services — Building businesses. Refining growth. Creating success.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Manifest on LinkedIn"
                className="flex size-11 items-center justify-center border border-ivory/15 transition-colors duration-500 hover:border-champagne hover:text-champagne"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Manifest on Instagram"
                className="flex size-11 items-center justify-center border border-ivory/15 transition-colors duration-500 hover:border-champagne hover:text-champagne"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          <FooterColumn title="Quick Links" links={footerQuickLinks} className="lg:col-span-2" />
          <FooterColumn title="Our Services" links={footerServiceLinks} className="lg:col-span-3" />

          <div className="lg:col-span-3">
            <h3 className="font-sans text-[0.68rem] font-medium tracking-[0.3em] text-champagne uppercase">
              Contact Us
            </h3>
            <ul className="mt-6 space-y-5 text-sm text-ivory/75">
              <li>
                <a href={site.phoneHref} className="flex gap-3 hover:text-champagne">
                  <Phone className="mt-0.5 size-4 shrink-0 text-champagne" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-champagne">
                  <Mail className="mt-0.5 size-4 shrink-0 text-champagne" />
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <MapPin className="mt-0.5 size-4 shrink-0 text-champagne" />
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-ivory/10 py-8 text-xs tracking-[0.12em] text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 {site.name}. All rights reserved.</p>
          <p>Powered by Manifest</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className = "",
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="font-sans text-[0.68rem] font-medium tracking-[0.3em] text-champagne uppercase">
        {title}
      </h3>
      <ul className="mt-6 space-y-3.5 text-sm text-ivory/75">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="link-underline hover:text-ivory">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
