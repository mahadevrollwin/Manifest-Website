import Link from "next/link";
import { Logo } from "./Logo";
import { footerQuickLinks, footerServiceLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-olive-night text-ivory">
      <div className="container-luxe relative">
        <div className="grid gap-12 pt-20 pb-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pt-24">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-ivory/75">
              Business setup in Dubai, handled end to end.
            </p>
          </div>

          <FooterColumn title="Quick links" links={footerQuickLinks} className="lg:col-span-2" />
          <FooterColumn title="Our services" links={footerServiceLinks} className="lg:col-span-3" />

          <div className="lg:col-span-3">
            <h3 className="font-sans text-sm font-semibold text-ivory">Contact</h3>
            <ul className="mt-5 space-y-3 text-[0.95rem] text-ivory/75">
              <li>
                <a href={site.phoneHref} className="hover:text-champagne">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-champagne">
                  {site.email}
                </a>
              </li>
              <li>
                <address className="leading-relaxed not-italic">
                  {site.addressLines.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-ivory/15 py-8 text-[0.8rem] text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p className="flex gap-5">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-champagne">
              LinkedIn
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-champagne">
              Instagram
            </a>
          </p>
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
      <h3 className="font-sans text-sm font-semibold text-ivory">{title}</h3>
      <ul className="mt-5 space-y-3 text-[0.95rem] text-ivory/75">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-champagne">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
