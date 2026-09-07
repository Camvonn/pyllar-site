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
    <figure>
      <div
        aria-hidden="true"
        className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
      >
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
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
