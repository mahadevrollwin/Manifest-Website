import type { Metadata } from "next";
import { AssistantApp } from "@/components/assistant/AssistantApp";

export const metadata: Metadata = {
  title: "Manifest AI Assistant",
  description:
    "Ask Manifest AI about Dubai company formation, visas, banking, PRO services, tax and attestation and get instant answers.",
  alternates: { canonical: "/ai-assistant/" },
  robots: { index: false, follow: true },
};

export default function AiAssistantPage() {
  return <AssistantApp />;
}
