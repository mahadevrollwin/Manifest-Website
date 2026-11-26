"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { ArrowUpRight, ChevronDown, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { socialLinks } from "./socialLinks";
import { mainNav, site } from "@/content/site";

const ASSISTANT_HREF = "/ai-assistant/";

/** Opens the Manifest AI assistant in a new tab. */
function TalkToUs({ className = "" }: { className?: string }) {
  return (
    <a
      href={ASSISTANT_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`items-center gap-2 border border-current/30 px-3 py-2.5 text-[0.85rem] font-semibold whitespace-nowrap transition-colors max-[369px]:size-11 max-[369px]:justify-center max-[369px]:p-0 sm:px-4 hover:border-champagne hover:text-champagne focus-visible:border-champagne focus-visible:text-champagne sm:text-[0.88rem] ${className}`}
    >
      <MessageCircle className="size-4 text-champagne" aria-hidden />
      <span className="max-[369px]:sr-only">Chat With Us</span>
      <span className="sr-only"> (opens the AI assistant in a new tab)</span>
    </a>
  );
}

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 40,
    () => false,
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string, children?: { href: string }[]) => {
    if (href === "/") return pathname === "/";
    if (children?.some((c) => pathname.startsWith(c.href))) return true;
    return pathname.startsWith(href);
  };

  const solid = scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-luxe ${
        solid
          ? "bg-ivory/85 text-olive-deep shadow-[0_10px_40px_-25px_rgba(42,50,31,0.45)] backdrop-blur-xl"
          : "bg-transparent text-ivory"
      }`}
    >
      {/* Tier 1: utility bar. Collapses away once the page is scrolled. */}
      <div
        inert={solid}
        className={`overflow-hidden bg-olive-night/90 text-ivory/80 backdrop-blur-sm transition-[height,opacity] duration-500 ease-luxe ${
          solid ? "h-0 opacity-0" : "h-9 opacity-100 sm:h-10"
        }`}
      >
        <div className="container-luxe flex h-full items-center justify-between gap-4 text-[0.78rem] sm:text-[0.82rem]">
          <ul className="flex min-w-0 items-center gap-4 sm:gap-6" aria-label="Contact">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-champagne focus-visible:text-champagne"
              >
                <Phone className="size-3.5 text-champagne" aria-hidden />
                {site.phoneDisplay}
              </a>
            </li>
            <li className="hidden min-w-0 sm:block">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-champagne focus-visible:text-champagne"
              >
                <Mail className="size-3.5 shrink-0 text-champagne" aria-hidden />
                <span className="truncate">{site.email}</span>
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-1" aria-label="Social media">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Manifest on ${label}`}
                  title={label}
                  className="flex size-7 items-center justify-center text-ivory/75 transition-colors hover:text-champagne focus-visible:text-champagne"
                >
                  <Icon className="size-[0.95rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tier 2: brand, navigation and calls to action. */}
      <div
        className={`container-luxe flex items-center justify-between gap-3 transition-all sm:gap-6 duration-700 ease-luxe ${
          solid ? "h-[4.5rem]" : "h-[5rem] sm:h-[5.5rem]"
        }`}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-3 text-[0.92rem] whitespace-nowrap 2xl:px-3.5 font-medium transition-colors ${
                    isActive(item.href, item.children) ? "text-champagne" : "hover:text-champagne"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="size-3 transition-transform duration-500 group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <div className="invisible absolute top-full left-1/2 w-[22rem] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-500 ease-luxe group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="border border-olive-deep/10 bg-ivory p-3 text-olive-deep shadow-[0_30px_70px_-30px_rgba(20,22,16,0.5)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="group/item flex items-start justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-olive-wash"
                      >
                        <span>
                          <span className="block text-base leading-tight font-semibold">{child.label}</span>
                          {child.description && (
                            <span className="mt-1 block text-xs leading-relaxed text-ink-soft/70">
                              {child.description}
                            </span>
                          )}
                        </span>
                        <ArrowUpRight className="mt-1 size-4 shrink-0 text-champagne-deep opacity-0 transition-all duration-500 group-hover/item:opacity-100" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-3 text-[0.92rem] whitespace-nowrap 2xl:px-3.5 font-medium transition-colors ${
                  isActive(item.href) ? "text-champagne" : "hover:text-champagne"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="/contact-us/" className="btn btn-champagne hidden !px-5 !py-3 md:inline-flex">
            Book free consultation
          </Link>
          {/* Desktop / laptop: right after "Book free consultation" */}
          <TalkToUs className="hidden xl:inline-flex" />
          {/* Mobile / tablet: directly before the menu button */}
          <TalkToUs className="inline-flex xl:hidden" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-10 flex size-11 items-center justify-center border border-current/25 xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 -z-10 bg-olive-night text-ivory transition-all duration-700 ease-luxe xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="container-luxe flex h-full flex-col overflow-y-auto pt-36 pb-10">
          <nav aria-label="Mobile" className="flex-1">
            <ul className="divide-y divide-ivory/10 border-y border-ivory/10">
              {mainNav.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        aria-expanded={expanded === item.label}
                        className="flex w-full items-center justify-between py-5 text-left font-display text-2xl font-semibold"
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-5 text-champagne transition-transform duration-500 ${
                            expanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-500 ease-luxe ${
                          expanded === item.label ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                        }`}
                      >
                        <ul className="overflow-hidden">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between py-2.5 pl-4 text-base text-ivory/75 hover:text-champagne"
                              >
                                {child.label}
                                <ArrowUpRight className="size-4" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-5 font-display text-2xl font-semibold hover:text-champagne"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-10 space-y-5">
            <Link href="/contact-us/" onClick={() => setOpen(false)} className="btn btn-champagne w-full">
              Book free consultation
            </Link>
            <div className="flex flex-col gap-2 text-sm text-ivory/70">
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
