/**
 * Sitewide animated background. Renders once in the root layout and sits
 * behind every page, so sections can be transparent and share one continuous
 * environment instead of alternating flat fills.
 *
 * Layers, back to front:
 *  1. Slow-drifting aurora blobs in the brand accents.
 *  2. A fine technical grid that fades out toward the bottom.
 *  3. A film-grain noise wash to stop the large gradients from banding.
 *  4. A vignette that fades toward the page edges and keeps text contrast high.
 *
 * Each layer's colors are theme-dependent and therefore live in globals.css
 * (`.site-aurora`, `.site-grid`, `.site-noise`, `.site-vignette`) rather than
 * as inline styles here.
 *
 * Purely decorative: `aria-hidden`, `pointer-events-none`, and `fixed` so it
 * never affects layout or interaction. The drift animation is disabled under
 * `prefers-reduced-motion` (see globals.css).
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="bg-surface pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="site-aurora animate-aurora absolute inset-[-20%]" />
      <div className="site-grid absolute inset-0" />
      <div className="site-noise absolute inset-0" />
      <div className="site-vignette absolute inset-0" />
    </div>
  );
}

/**
 * Localized accent glow for individual sections that need extra emphasis
 * (hero, CTA bands, page heroes) on top of the shared `SiteBackground`.
 * Decorative only — the parent section must be `relative overflow-hidden`
 * with its real content in a `relative z-10` wrapper.
 */
export function SectionGlow({
  tone = "teal",
}: {
  tone?: "teal" | "cyan" | "violet";
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className={`animate-glow-pulse absolute inset-0 bg-[radial-gradient(ellipse_70%_100%_at_50%_0%,var(--glow-tone),transparent_65%)] ${
          {
            teal: "[--glow-tone:rgba(13,148,136,0.1)] dark:[--glow-tone:rgba(45,212,191,0.22)]",
            cyan: "[--glow-tone:rgba(2,132,199,0.09)] dark:[--glow-tone:rgba(56,189,248,0.2)]",
            violet:
              "[--glow-tone:rgba(124,58,237,0.08)] dark:[--glow-tone:rgba(167,139,250,0.2)]",
          }[tone]
        }`}
      />
      <div className="hairline absolute inset-x-0 top-0" />
    </div>
  );
}
