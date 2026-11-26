"use client";

import { useEffect, useRef } from "react";

// Both files are H.264 (High profile) in MP4 with the index at the start and no audio track, which every Safari can stream.
const SD_SRC = "/video/hero-dubai-720.mp4"; // level 3.1: safe on every iPhone and iPad
const HD_SRC = "/video/hero-dubai.mp4"; // 1080p, level 5.0: laptops and desktops only

function pickSource() {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (connection?.saveData) return SD_SRC;
  // `<source media>` is ignored by Safari, so the choice is made here instead.
  return window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)").matches ? HD_SRC : SD_SRC;
}

const GESTURES = ["touchend", "pointerdown", "click", "keydown"] as const;

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // the poster image is shown instead

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
    let source = pickSource();

    const play = () => {
      if (disposed || failed || !visible || document.hidden) return;
      video.play()?.catch(() => {
        // Autoplay was refused (iOS Low Power Mode, Safari "Never Auto-Play"). A tap or key press will start it.
      });
    };

    const onGesture = () => play();
    const onPlaying = () => GESTURES.forEach((type) => window.removeEventListener(type, onGesture));
    const onError = () => {
      if (source === HD_SRC) {
        // The 1080p file was rejected by this device: fall back to the lighter one.
        source = SD_SRC;
        video.src = source;
        video.load();
        play();
      } else {
        // Nothing playable: leave the poster image in place.
        failed = true;
        video.removeAttribute("src");
        video.load();
      }
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

    video.src = source;
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
