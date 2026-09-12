import type { ReactNode } from "react";

/**
 * Shared "app window" wrapper for the illustrative UI mockups used on the
 * homepage and Features page. These are hand-drawn, abstract representations
 * (skeleton lines, chips, bar charts) rendered in a dark product theme — not
 * real product screenshots, since the actual Pyllar app UI lives in a
 * separate, still-in-progress repo.
 *
 * Accessibility: the visual chrome/content is `aria-hidden` (it's a
 * decorative illustration, not information), while the caption is a normal,
 * visible `<figcaption>` so both sighted and screen-reader users get a clear
 * "this is illustrative" label — the same pattern used for the homepage
 * testimonial.
 */
export function MockupFrame({
  title = "app.pyllar.com",
  caption = "Illustrative concept — not an actual product screenshot",
  children,
}: {
  title?: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure className="relative">
      {/* Brand-color bloom behind the window so it reads as a lit screen
          floating over the page background. Decorative only. */}
      <div
        aria-hidden="true"
        className="animate-glow-pulse absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.32),rgba(56,189,248,0.14)_45%,transparent_72%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#080c17]/95 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
      >
        {/* Top highlight, mimicking light catching the bezel edge. */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent" />

        {/* Slow light sweep to suggest a live, updating screen. */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-scanline absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-teal-300/[0.07] to-transparent" />
        </div>

        <div className="relative flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] px-3 py-1 font-mono text-[10px] tracking-wide text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_1px_rgba(45,212,191,0.8)]" />
            {title}
          </span>
        </div>

        <div className="relative p-4 sm:p-5">{children}</div>
      </div>

      <figcaption className="mt-4 text-center text-xs text-slate-500">
        {caption}
      </figcaption>
    </figure>
  );
}

export function SkeletonLine({
  width = "w-full",
  tone = "bg-white/12",
}: {
  width?: string;
  tone?: string;
}) {
  return <div className={`h-2 rounded-full ${tone} ${width}`} />;
}

export function Chip({
  tone = "bg-teal-400/15 text-teal-300 ring-teal-400/25",
  children,
}: {
  tone?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${tone}`}
    >
      {children}
    </span>
  );
}

/**
 * A small glowing "button" shape for mockups, so they feel like a real,
 * clickable UI instead of only skeleton lines.
 */
export function MockButton({ width = "w-16" }: { width?: string }) {
  return (
    <div
      className={`h-5 rounded-md bg-gradient-to-r from-teal-400 to-sky-400 shadow-[0_0_14px_-2px_rgba(45,212,191,0.8)] ${width}`}
    />
  );
}

/** Dark inner panel used to group content inside a mockup window. */
export function MockPanel({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-xl border border-white/[0.07] bg-white/[0.025] ${className}`}
    >
      {children}
    </div>
  );
}
