import type { ReactNode } from "react";

/**
 * Shared "browser chrome" wrapper for the illustrative UI mockups used on
 * the homepage and Features page. These are hand-drawn, abstract
 * representations (skeleton lines, chips, bar charts) — not real product
 * screenshots, since the actual Pyllar app UI lives in a separate,
 * still-in-progress repo.
 *
 * Accessibility: the visual chrome/content is `aria-hidden` (it's a
 * decorative illustration, not information), while the caption is a normal,
 * visible `<figcaption>` so both sighted and screen-reader users get a clear
 * "this is illustrative" label — the same pattern used for the homepage
 * testimonial.
 */
export function MockupFrame({
  title = "Pyllar",
  caption = "Illustrative concept — not an actual product screenshot",
  children,
}: {
  title?: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure className="relative">
      {/* Soft brand-color glow behind the frame so it "pops" off the page,
          rather than sitting flat against the background. Decorative only. */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-400/25 via-teal-500/10 to-transparent blur-2xl"
      />
      <div
        aria-hidden="true"
        className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.25)] ring-1 ring-black/[0.02]"
      >
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-slate-100/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-2 truncate text-xs font-medium text-slate-400">
            {title}
          </span>
        </div>
        <div className="p-4 sm:p-5">{children}</div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-slate-400">
        {caption}
      </figcaption>
    </figure>
  );
}

export function SkeletonLine({
  width = "w-full",
  tone = "bg-slate-200",
}: {
  width?: string;
  tone?: string;
}) {
  return <div className={`h-2 rounded-full ${tone} ${width}`} />;
}

export function Chip({
  tone = "bg-teal-100 text-teal-700",
  children,
}: {
  tone?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold ${tone}`}
    >
      {children}
    </span>
  );
}

/**
 * A small teal "button" shape for mockups, to make them feel more like a
 * real, clickable UI instead of only gray skeleton lines.
 */
export function MockButton({ width = "w-16" }: { width?: string }) {
  return (
    <div
      className={`h-5 rounded-md bg-gradient-to-r from-teal-500 to-teal-600 ${width}`}
    />
  );
}
