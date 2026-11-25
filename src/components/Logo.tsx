import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Manifest Business Services — home"
      className={`group inline-flex flex-col items-center leading-none ${className}`}
    >
      <span className="font-display text-[1.65rem] font-medium tracking-[0.28em] sm:text-[1.85rem]">
        MANIFEST
      </span>
      <span className="mt-1 text-[0.5rem] font-normal tracking-[0.58em] opacity-80 sm:text-[0.55rem]">
        BUSINESS SERVICES
      </span>
    </Link>
  );
}
