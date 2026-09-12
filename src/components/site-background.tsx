/**
 * Sitewide animated background. Renders once in the root layout and sits
 * behind every page, so sections can be transparent and share one continuous
 * environment instead of alternating flat fills.
 *
 * Layers, back to front:
 *  1. Slow-drifting aurora blobs in the brand accents.
 *  2. A fine technical grid that fades out toward the bottom.
 *  3. A film-grain noise wash to stop the large gradients from banding.
 *  4. A vignette that darkens the edges and keeps text contrast high.
 *
 * Purely decorative: `aria-hidden`, `pointer-events-none`, and `fixed` so it
 * never affects layout or interaction. The drift animation is disabled under
 * `prefers-reduced-motion` (see globals.css).
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      <div
        className="animate-aurora absolute inset-[-20%]"
        style={{
          backgroundImage: [
            "radial-gradient(circle at 15% 12%, rgba(45,212,191,0.28), transparent 42%)",
            "radial-gradient(circle at 82% 8%, rgba(56,189,248,0.22), transparent 38%)",
            "radial-gradient(circle at 68% 62%, rgba(167,139,250,0.16), transparent 42%)",
            "radial-gradient(circle at 25% 82%, rgba(45,212,191,0.14), transparent 45%)",
          ].join(","),
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,190,220,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,190,220,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, transparent 40%, rgba(5,7,13,0.85) 100%)",
        }}
      />
    </div>
  );
}

/**
 * Localized accent glow for individual sections that need extra emphasis
 * (hero, CTA bands) on top of the shared `SiteBackground`. Decorative only —
 * the parent section must be `relative overflow-hidden` with its real content
 * in a `relative z-10` wrapper.
 */
export function SectionGlow({
  tone = "teal",
}: {
  tone?: "teal" | "cyan" | "violet";
}) {
  const color = {
    teal: "rgba(45,212,191,0.22)",
    cyan: "rgba(56,189,248,0.2)",
    violet: "rgba(167,139,250,0.2)",
  }[tone];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="animate-glow-pulse absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 100% at 50% 0%, ${color}, transparent 65%)`,
        }}
      />
      <div className="hairline absolute inset-x-0 top-0" />
    </div>
  );
}
