"use client";

import { useEffect, useRef, type RefObject } from "react";

const WEIGHTS = [0.55, 0.8, 1, 0.8, 0.55];

/** Live microphone level bars. The level lives in a ref so animating it never re-renders the chat. */
export function MicMeter({ levelRef }: { levelRef: RefObject<number> }) {
  const bars = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const level = levelRef.current;
      bars.current.forEach((bar, i) => {
        if (bar) bar.style.transform = `scaleY(${Math.min(1, 0.18 + level * WEIGHTS[i] * 0.95)})`;
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [levelRef]);

  return (
    <span className="flex h-5 items-center gap-[3px]" aria-hidden>
      {WEIGHTS.map((_, i) => (
        <span
          key={i}
          ref={(el) => {
            bars.current[i] = el;
          }}
          className="h-full w-[3px] origin-center bg-champagne transition-transform duration-75"
          style={{ transform: "scaleY(0.18)" }}
        />
      ))}
    </span>
  );
}
