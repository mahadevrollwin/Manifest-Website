"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/** The AI assistant is a full-screen app, so the site header, footer and WhatsApp button are hidden on it. */
export function HideOnAssistant({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/ai-assistant")) return null;
  return <>{children}</>;
}
