"use client";

import { useCallback, useSyncExternalStore } from "react";
import { ar, type Lang } from "@/content/i18n";

const STORAGE_KEY = "manifest-lang";
const listeners = new Set<() => void>();
let current: Lang | null = null;

function readStored(): Lang {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      current = readStored();
      callback();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): Lang {
  if (current === null) current = readStored();
  return current;
}

// The server (and the first client render) always render English, so there is no hydration mismatch.
function getServerSnapshot(): Lang {
  return "en";
}

function setLang(lang: Lang) {
  current = lang;
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage can be blocked (private mode); the choice still applies for this visit.
  }
  listeners.forEach((listener) => listener());
}

/** Current language, its text direction, and a translate helper that falls back to the English text. */
export function useLang() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const tr = useCallback((text: string) => (lang === "ar" ? (ar[text] ?? text) : text), [lang]);
  return { lang, dir: lang === "ar" ? ("rtl" as const) : undefined, tr, setLang };
}
