"use client";

import { useEffect, useRef } from "react";

type CounterProps = { value: number; decimals?: number; suffix?: string; duration?: number };

export function Counter({ value, decimals = 0, suffix = "", duration = 1800 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const format = (n: number) => n.toFixed(decimals) + suffix;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.textContent = format(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          node.textContent = format(value * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, decimals, suffix, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toFixed(decimals) + suffix}
    </span>
  );
}
