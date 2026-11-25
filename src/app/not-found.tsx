import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="grain relative isolate flex min-h-svh items-center overflow-hidden bg-olive-night text-ivory">
      <Image src="/images/dubai-skyline-night.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-night via-olive-night/85 to-olive-night/40" />
      <div className="container-luxe pt-24">
        <p className="eyebrow eyebrow-light">Error 404</p>
        <h1 className="mt-6 max-w-3xl text-6xl leading-[1] sm:text-8xl">
          This page has <em className="text-champagne">moved on</em>
        </h1>
        <p className="mt-7 max-w-xl text-lg text-ivory/70">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to building your business in Dubai.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-champagne">
            Back to home <ArrowRight className="size-4" />
          </Link>
          <Link href="/contact-us/" className="btn btn-ghost-light">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
