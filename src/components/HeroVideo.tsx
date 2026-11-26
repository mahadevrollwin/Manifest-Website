"use client";

import { useEffect, useRef } from "react";

// H.264 MP4, 1920x1080, 17.3 s, no audio track: plays in every Safari, Chrome, Firefox and Edge build.
const SRC = "/video/manifest-hero-banner.mp4";

const GESTURES = ["touchend", "pointerdown", "click", "keydown"] as const;

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // the poster image is shown instead
    // Data-saver visitors keep the poster image rather than downloading the 32 MB file.
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (connection?.saveData) return;

    // Safari only autoplays video that is muted and inline. React does not reliably write these as attributes or
    // properties, so set every spelling WebKit looks at before playback starts.
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    let disposed = false;
    let visible = true;
    let failed = false;

    const play = () => {
      if (disposed || failed || !visible || document.hidden) return;
      video.play()?.catch(() => {
        // Autoplay was refused (iOS Low Power Mode, Safari "Never Auto-Play"). A tap or key press will start it.
      });
    };

    const onGesture = () => play();
    const onPlaying = () => GESTURES.forEach((type) => window.removeEventListener(type, onGesture));
    const onError = () => {
      // Nothing playable on this device: leave the poster image in place.
      failed = true;
      video.removeAttribute("src");
      video.load();
    };
    const onVisibility = () => play();

    video.addEventListener("playing", onPlaying);
    video.addEventListener("canplay", play);
    video.addEventListener("error", onError);
    document.addEventListener("visibilitychange", onVisibility);
    GESTURES.forEach((type) => window.addEventListener(type, onGesture, { passive: true }));

    // Pause when the hero is off-screen (saves battery) and resume when it comes back.
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else video.pause();
    });
    observer.observe(video);

    video.src = SRC;
    video.load();
    play();

    return () => {
      disposed = true;
      observer.disconnect();
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("canplay", play);
      video.removeEventListener("error", onError);
      document.removeEventListener("visibilitychange", onVisibility);
      GESTURES.forEach((type) => window.removeEventListener(type, onGesture));
    };
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
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
