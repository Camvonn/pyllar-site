import type { ReactNode } from "react";

/**
 * Shared "app window" wrapper for the illustrative UI mockups used on the
 * homepage and Features page. These are hand-drawn, abstract representations
 * (skeleton lines, chips, bar charts) — not real product screenshots, since
 * the actual Pyllar app UI lives in a separate, still-in-progress repo.
 *
 * The window follows the site theme: a light app window on the light theme, a
 * lit dark window on the dark theme. Interior colors come from the `mock-*`
 * tokens in globals.css so every mockup swaps consistently.
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
        className="animate-glow-pulse absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.16),rgba(2,132,199,0.08)_45%,transparent_72%)] blur-2xl dark:bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.32),rgba(56,189,248,0.14)_45%,transparent_72%)]"
      />

      <div
        aria-hidden="true"
        className="border-line bg-mock-bg relative overflow-hidden rounded-2xl border shadow-[0_30px_70px_-30px_rgba(10,16,32,0.35)] dark:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]"
      >
        {/* Top highlight, mimicking light catching the bezel edge. */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent dark:via-teal-300/50" />

        {/* Slow light sweep to suggest a live, updating screen. */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-scanline absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-teal-400/[0.05] to-transparent dark:via-teal-300/[0.07]" />
        </div>

        <div className="border-mock-line relative flex items-center gap-2 border-b bg-black/[0.02] px-4 py-3 dark:bg-white/[0.02]">
          <span className="bg-mock-skeleton h-2.5 w-2.5 rounded-full" />
          <span className="bg-mock-skeleton h-2.5 w-2.5 rounded-full" />
          <span className="bg-mock-skeleton h-2.5 w-2.5 rounded-full" />
          <span className="text-fg-subtle ml-3 inline-flex items-center gap-1.5 rounded-full bg-black/[0.04] px-3 py-1 font-mono text-[10px] tracking-wide dark:bg-white/[0.05]">
            <span className="bg-accent h-1.5 w-1.5 rounded-full shadow-[0_0_6px_1px_var(--accent-glow)]" />
            {title}
          </span>
        </div>

        <div className="relative p-4 sm:p-5">{children}</div>
      </div>

      <figcaption className="text-fg-subtle mt-4 text-center text-xs">
        {caption}
      </figcaption>
    </figure>
  );
}

export function SkeletonLine({
  width = "w-full",
  tone = "bg-mock-skeleton",
}: {
  width?: string;
  tone?: string;
}) {
  return <div className={`h-2 rounded-full ${tone} ${width}`} />;
}

export function Chip({
  tone = "bg-teal-500/12 text-teal-700 ring-teal-500/25 dark:bg-teal-400/15 dark:text-teal-300 dark:ring-teal-400/25",
  children,
}: {
  tone?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap ring-1 ${tone}`}
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
      className={`h-5 rounded-md bg-gradient-to-r from-teal-500 to-sky-500 shadow-[0_4px_10px_-3px_rgba(13,148,136,0.7)] dark:from-teal-400 dark:to-sky-400 dark:shadow-[0_0_14px_-2px_rgba(45,212,191,0.8)] ${width}`}
    />
  );
}

/** Inner panel used to group content inside a mockup window. */
export function MockPanel({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`border-mock-line bg-mock-panel rounded-xl border ${className}`}
    >
      {children}
    </div>
  );
}
