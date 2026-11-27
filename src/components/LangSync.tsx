"use client";

import { useEffect } from "react";
import { useLang } from "./useLang";

/** Keeps `<html lang>` and `<html dir>` in step with the chosen language, so RTL applies site-wide. */
export function LangSync() {
  const { lang } = useLang();
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  return null;
}
