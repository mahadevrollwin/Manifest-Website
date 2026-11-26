import Link from "next/link";

/**
 * Brand wordmark. The artwork is a single-colour (white) PNG with a transparent
 * background, so it is rendered as a CSS mask filled with `currentColor`:
 * the logo automatically follows the surrounding text colour (ivory over the
 * hero / footer, olive-deep on the solid header) with no second asset needed.
 *
 * Size it through `className` (height only; width follows the aspect ratio).
 */
const LOGO_SRC = "/images/manifest-logo.png";
export const LOGO_ASPECT = 942 / 203;

export function Logo({ className = "h-8 min-[400px]:h-9 sm:h-11 xl:h-10 2xl:h-12" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Manifest Business Services — home"
      className="group inline-flex shrink-0 items-center leading-none transition-opacity hover:opacity-85"
    >
      <span
        role="img"
        aria-hidden="true"
        className={`block bg-current ${className}`}
        style={{
          aspectRatio: LOGO_ASPECT,
          WebkitMaskImage: `url(${LOGO_SRC})`,
          maskImage: `url(${LOGO_SRC})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "left center",
          maskPosition: "left center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
    </Link>
  );
}
