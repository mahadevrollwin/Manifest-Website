import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { T } from "@/components/T";

export default function NotFound() {
  return (
    <section className="grain relative isolate flex min-h-svh items-center overflow-hidden bg-olive-night text-ivory">
      <Image src="/images/dubai-skyline-night.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-night via-olive-night/85 to-olive-night/40 rtl:bg-gradient-to-l" />
      <div className="container-luxe pt-24">
        <p className="eyebrow eyebrow-light">
          <T>Error 404</T>
        </p>
        <h1 className="mt-6 max-w-3xl text-6xl leading-[1] sm:text-8xl">
          <T>This page has</T> <em className="text-champagne"><T>moved on</T></em>
        </h1>
        <p className="mt-7 max-w-xl text-lg text-ivory/70">
          <T>{"The page you're looking for doesn't exist. Let's get you back to building your business in Dubai."}</T>
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-champagne">
            <T>Back to home</T> <ArrowRight className="size-4 rtl:-scale-x-100" />
          </Link>
          <Link href="/contact-us/" className="btn btn-ghost-light">
            <T>Contact Us</T>
          </Link>
        </div>
      </div>
    </section>
  );
}
