"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

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
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const syncActive = useCallback(() => {
    const list = listRef.current;
    if (!list || list.scrollWidth <= list.clientWidth + 1) return; // grid layout: nothing scrolls
    const center = list.scrollLeft + list.clientWidth / 2;
    let best = 0;
    let bestDistance = Infinity;
    Array.from(list.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
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
    list.scrollTo({
      left: item.offsetLeft + item.offsetWidth / 2 - list.clientWidth / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div className="mt-8 sm:mt-14">
      <ul
        ref={listRef}
        aria-label={label}
        className={`-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pt-6 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:gap-6 sm:overflow-visible sm:px-0 sm:pt-0 sm:pb-0 ${gridClassName}`}
      >
        {children}
      </ul>
      {dots && count > 1 && (
        <div className="-mt-2 flex justify-center sm:hidden" role="group" aria-label={`${label} navigation`}>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show package ${i + 1} of ${count}`}
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
