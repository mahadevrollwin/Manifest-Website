import Link from "next/link";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "./SocialIcons";
import { footerQuickLinks, footerServiceLinks, site } from "@/content/site";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: site.social.youtube, Icon: YoutubeIcon },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-olive-night text-ivory">
      <div className="container-luxe relative">
        <div className="grid gap-12 pt-20 pb-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pt-24">
          <div className="lg:col-span-4">
            <Logo className="h-12" />
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
          <ul className="flex items-center gap-3" aria-label="Social media">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Manifest on ${label}`}
                  title={label}
                  className="flex size-9 items-center justify-center rounded-full border border-ivory/20 text-ivory/70 transition-[translate,color,border-color,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-champagne hover:bg-champagne/10 hover:text-champagne focus-visible:border-champagne focus-visible:text-champagne motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <Icon className="size-[1.05rem]" />
                </a>
              </li>
            ))}
          </ul>
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
