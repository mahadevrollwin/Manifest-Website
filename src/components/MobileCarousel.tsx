"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useLang } from "./useLang";

/**
 * Swipeable carousel on phones, regular grid from the `sm` breakpoint up.
 *
 * Slider settings (mobile): dots on, arrows off, autoplay off. Built on native CSS scroll-snap so touch
 * swiping, momentum and keyboard scrolling work without a slider library. Pass the grid classes for
 * `sm` and up through `gridClassName`; children must be <li> elements.
 */
export function MobileCarousel({
  children,
  count,
  label,
  gridClassName = "",
  dots = true,
}: {
  children: ReactNode;
  count: number;
  label: string;
  gridClassName?: string;
  dots?: boolean;
}) {
  const { tr } = useLang();
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const syncActive = useCallback(() => {
    const list = listRef.current;
    if (!list || list.scrollWidth <= list.clientWidth + 1) return; // grid layout: nothing scrolls
    // Viewport rects work the same in left-to-right and right-to-left layouts (scrollLeft is negative in RTL).
    const listRect = list.getBoundingClientRect();
    const center = listRect.left + list.clientWidth / 2;
    let best = 0;
    let bestDistance = Infinity;
    Array.from(list.children).forEach((child, i) => {
      const rect = (child as HTMLElement).getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - center);
      if (distance < bestDistance) {
        best = i;
        bestDistance = distance;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncActive);
    };
    list.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      list.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [syncActive]);

  const goTo = (index: number) => {
    const list = listRef.current;
    const item = list?.children[index] as HTMLElement | undefined;
    if (!list || !item) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const listRect = list.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    list.scrollBy({
      left: itemRect.left + itemRect.width / 2 - (listRect.left + list.clientWidth / 2),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div className="mt-8 sm:mt-14">
      <ul
        ref={listRef}
        aria-label={tr(label)}
        className={`-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pt-6 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:gap-6 sm:overflow-visible sm:px-0 sm:pt-0 sm:pb-0 ${gridClassName}`}
      >
        {children}
      </ul>
      {dots && count > 1 && (
        <div className="-mt-2 flex justify-center sm:hidden" role="group" aria-label={`${tr(label)} ${tr("navigation")}`}>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={tr("Show package {n} of {total}").replace("{n}", String(i + 1)).replace("{total}", String(count))}
              aria-current={active === i ? "true" : undefined}
              className="flex size-6 items-center justify-center"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  active === i ? "w-6 bg-olive-deep" : "w-2 bg-olive-deep/25"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
