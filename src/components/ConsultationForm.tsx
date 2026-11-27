"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Rich } from "./T";
import { useLang } from "./useLang";
import { consultationInterests, site, whatsappLink } from "@/content/site";

type ConsultationFormProps = {
  tone?: "light" | "dark";
  defaultInterest?: string;
  /** "plan" uses the homepage "Get my free setup plan" wording and extra fields. */
  variant?: "default" | "plan";
  /** Override the list of services shown in the "interested in" select. */
  interests?: readonly string[];
};

export function ConsultationForm({
  tone = "light",
  defaultInterest = "",
  variant = "default",
  interests = consultationInterests,
}: ConsultationFormProps) {
  const { tr } = useLang();
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
        <h3 className="text-2xl">{tr("Thank you — we'll be in touch shortly.")}</h3>
        <p className={`max-w-md text-sm leading-relaxed ${dark ? "text-ivory/70" : "text-ink-soft/80"}`}>
          <Rich
            slots={{
              email: (
                <a href={`mailto:${site.email}`} className="underline decoration-champagne underline-offset-4">
                  <bdi dir="ltr">{site.email}</bdi>
                </a>
              ),
              phone: <bdi dir="ltr">{site.phoneDisplay}</bdi>,
            }}
          >
            {"Your request has been prepared in WhatsApp. If it didn't open, email us at {email} or call {phone}."}
          </Rich>
        </p>
        <button type="button" onClick={() => setSent(false)} className={`btn ${dark ? "btn-ghost-light" : "btn-ghost-dark"}`}>
          {tr("Send another request")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-7 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-name" className={label}>
          {tr("Full name")}
        </label>
        <input id="cf-name" name="name" required autoComplete="name" placeholder={tr("Your name")} className={field} />
      </div>
      <div>
        <label htmlFor="cf-email" className={label}>
          {tr("Email")}
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com" dir="ltr"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="cf-phone" className={label}>
          {tr("Phone / WhatsApp")}
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+971" dir="ltr"
          className={field}
        />
      </div>
      {plan && (
        <div>
          <label htmlFor="cf-country" className={label}>
            {tr("Country of residence (optional)")}
          </label>
          <input
            id="cf-country"
            name="country"
            autoComplete="country-name"
            placeholder={tr("e.g. India")}
            className={field}
          />
        </div>
      )}
      <div className={plan ? "sm:col-span-2" : ""}>
        <label htmlFor="cf-interest" className={label}>
          {tr("I'm interested in *")}
        </label>
        <select id="cf-interest" name="interest" required defaultValue={defaultInterest} className={`${field} cursor-pointer`}>
          <option value="" disabled>
            {tr("Select a service")}
          </option>
          {interests.map((interest) => (
            <option key={interest} value={interest}>
              {tr(interest)}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className={label}>
          {plan ? tr("Tell us about your business (optional)") : tr("How can we help?")}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={3}
          placeholder={tr("Tell us about your business goals in the UAE…")}
          className={`${field} resize-none`}
        />
      </div>
      {plan && (
        <label className="flex items-start gap-3 text-sm leading-snug text-ink-soft/85 sm:col-span-2">
          <input type="checkbox" name="consent" required className="mt-0.5 size-[1.125rem] accent-olive-deep" />
          {tr("I agree to Manifest contacting me about my enquiry.")}
        </label>
      )}
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className={`text-xs ${dark ? "text-ivory/60" : "text-ink-soft/70"}`}>
          {plan
            ? tr("Confidential · No obligation · Reply within one working day")
            : tr("Confidential · No obligation · Dubai-based experts")}
        </p>
        <button type="submit" className={`btn ${dark ? "btn-champagne" : "btn-olive"}`}>
          {plan ? tr("Get my free setup plan") : tr("Request consultation")} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
        </button>
      </div>
    </form>
  );
}
