"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { consultationInterests, site, whatsappLink } from "@/content/site";

type ConsultationFormProps = {
  tone?: "light" | "dark";
  defaultInterest?: string;
  /** "plan" uses the homepage "Get my free setup plan" wording and extra fields. */
  variant?: "default" | "plan";
};

export function ConsultationForm({ tone = "light", defaultInterest = "", variant = "default" }: ConsultationFormProps) {
  const [sent, setSent] = useState(false);
  const dark = tone === "dark";
  const plan = variant === "plan";
  const field = `field ${dark ? "field-dark" : ""}`;
  const label = `block text-sm font-semibold ${dark ? "text-champagne" : "text-olive-deep"}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      "Hi Manifest, I would like a free consultation.",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
    ];
    const country = String(data.get("country") ?? "").trim();
    if (country) lines.push(`Country of residence: ${country}`);
    lines.push(`Interested in: ${data.get("interest")}`);
    const message = String(data.get("message") ?? "").trim();
    if (message) lines.push(`Message: ${message}`);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className={`flex flex-col items-start gap-5 py-6 ${dark ? "text-ivory" : "text-olive-deep"}`}>
        <CheckCircle2 className="size-10 text-champagne" strokeWidth={1.4} />
        <h3 className="text-2xl">Thank you — we&apos;ll be in touch shortly.</h3>
        <p className={`max-w-md text-sm leading-relaxed ${dark ? "text-ivory/70" : "text-ink-soft/80"}`}>
          Your request has been prepared in WhatsApp. If it didn&apos;t open, email us at{" "}
          <a href={`mailto:${site.email}`} className="underline decoration-champagne underline-offset-4">
            {site.email}
          </a>{" "}
          or call {site.phoneDisplay}.
        </p>
        <button type="button" onClick={() => setSent(false)} className={`btn ${dark ? "btn-ghost-light" : "btn-ghost-dark"}`}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-7 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-name" className={label}>
          Full name
        </label>
        <input id="cf-name" name="name" required autoComplete="name" placeholder="Your name" className={field} />
      </div>
      <div>
        <label htmlFor="cf-email" className={label}>
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="cf-phone" className={label}>
          Phone / WhatsApp
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+971"
          className={field}
        />
      </div>
      {plan && (
        <div>
          <label htmlFor="cf-country" className={label}>
            Country of residence (optional)
          </label>
          <input
            id="cf-country"
            name="country"
            autoComplete="country-name"
            placeholder="e.g. India"
            className={field}
          />
        </div>
      )}
      <div className={plan ? "sm:col-span-2" : ""}>
        <label htmlFor="cf-interest" className={label}>
          I&apos;m interested in *
        </label>
        <select id="cf-interest" name="interest" required defaultValue={defaultInterest} className={`${field} cursor-pointer`}>
          <option value="" disabled>
            Select a service
          </option>
          {consultationInterests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className={label}>
          {plan ? "Tell us about your business (optional)" : "How can we help?"}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={3}
          placeholder="Tell us about your business goals in the UAE…"
          className={`${field} resize-none`}
        />
      </div>
      {plan && (
        <label className="flex items-start gap-3 text-sm leading-snug text-ink-soft/85 sm:col-span-2">
          <input type="checkbox" name="consent" required className="mt-0.5 size-[1.125rem] accent-olive-deep" />
          I agree to Manifest contacting me about my enquiry.
        </label>
      )}
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className={`text-xs ${dark ? "text-ivory/60" : "text-ink-soft/70"}`}>
          {plan
            ? "Confidential · No obligation · Reply within one working day"
            : "Confidential · No obligation · Dubai-based experts"}
        </p>
        <button type="submit" className={`btn ${dark ? "btn-champagne" : "btn-olive"}`}>
          {plan ? "Get my free setup plan" : "Request consultation"} <ArrowUpRight className="size-4" />
        </button>
      </div>
    </form>
  );
}
