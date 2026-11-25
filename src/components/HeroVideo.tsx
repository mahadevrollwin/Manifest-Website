"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React does not serialize `muted` into SSR markup, and iOS refuses to autoplay without it.
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video absolute inset-0 size-full animate-ken-burns object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/hero-poster.jpg"
      aria-hidden="true"
    >
      <source src="/video/hero-dubai-720.mp4" type="video/mp4" media="(max-width: 767px)" />
      <source src="/video/hero-dubai.mp4" type="video/mp4" />
    </video>
  );
}
