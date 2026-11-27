"use client";

import type { ReactNode } from "react";
import { useLang } from "./useLang";

/** Translates a plain string, so server components can show Arabic text. */
export function T({ children }: { children: string }) {
  const { tr } = useLang();
  return <>{tr(children)}</>;
}

type ScopeTag = "div" | "section" | "footer";

/**
 * A region whose text is translated. In Arabic it gets `lang="ar"` and `dir="rtl"`,
 * so layout mirrors and Arabic typography applies only where the content is translated.
 */
export function LangScope({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ScopeTag;
  className?: string;
  children: ReactNode;
}) {
  const { lang, dir } = useLang();
  return (
    <Tag className={className} lang={lang === "ar" ? "ar" : undefined} dir={dir}>
      {children}
    </Tag>
  );
}
