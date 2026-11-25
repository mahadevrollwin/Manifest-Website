import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Manifest Business Services — home"
      className={`group inline-flex flex-col items-start leading-none ${className}`}
    >
      <span className="text-[1.4rem] font-bold tracking-[0.18em] sm:text-[1.55rem]">MANIFEST</span>
      <span className="mt-1.5 text-[0.55rem] font-medium tracking-[0.3em] text-champagne-deep sm:text-[0.6rem]">
        BUSINESS SERVICES
      </span>
    </Link>
  );
}
