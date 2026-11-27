"use client";

import { useLang } from "./useLang";
import type { Lang } from "@/content/i18n";

const options: { code: Lang; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" },
];

/** Compact EN | AR switch for the utility bar. Always laid out left-to-right, in both languages. */
export function LanguageSwitcher() {
  const { lang, setLang, tr } = useLang();
  return (
    <div
      role="group"
      aria-label={tr("Language")}
      dir="ltr"
      className="inline-flex h-6 shrink-0 items-stretch border border-ivory/25 text-[0.68rem] leading-none font-semibold sm:text-[0.7rem]"
    >
      {options.map(({ code, label, name }, i) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            aria-label={name}
            title={name}
            onClick={() => setLang(code)}
            className={`flex min-w-[1.9rem] items-center justify-center px-2 tracking-[0.08em] transition-colors ${
              i > 0 ? "border-l border-ivory/25" : ""
            } ${
              active
                ? "bg-champagne text-ink"
                : "text-ivory/75 hover:text-champagne focus-visible:text-champagne"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
