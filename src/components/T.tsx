"use client";

import { Fragment, type ReactNode } from "react";
import { useLang } from "./useLang";

/**
 * Translates plain text. Pass the exact English string as the child; other nodes (elements, numbers,
 * arrays) are rendered unchanged, so `<T>{title}</T>` is safe when `title` may be a string or JSX.
 */
export function T({ children }: { children?: ReactNode }) {
  const { tr } = useLang();
  return <>{typeof children === "string" ? tr(children) : children}</>;
}

/**
 * Translates a sentence that contains inline elements (links, bold text). Write the English with named
 * placeholders, e.g. `Ask an {adviser} or see {faqs}.`, and pass the elements as `slots`. The Arabic
 * dictionary entry uses the same placeholders in Arabic word order.
 */
export function Rich({ children, slots }: { children: string; slots: Record<string, ReactNode> }) {
  const { tr } = useLang();
  const parts = tr(children).split(/\{(\w+)\}/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <Fragment key={i}>{slots[part] ?? null}</Fragment> : <Fragment key={i}>{part}</Fragment>,
      )}
    </>
  );
}

type ScopeTag = "div" | "section" | "footer";

/**
 * A region whose text is translated. In Arabic it gets `lang="ar"` and `dir="rtl"`.
 * (The whole document is also switched by `LangSync`; this keeps a region correct on its own.)
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
