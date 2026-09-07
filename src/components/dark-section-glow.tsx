/**
 * Shared decorative background for dark ("ink") sections — hero, CTA bands,
 * the Features page intro banner. Layers soft brand-color glows with a
 * subtle dot-grid texture for a more "engineered," premium feel than a flat
 * color fill.
 *
 * Purely decorative: `aria-hidden`, and the parent section must be
 * `relative overflow-hidden` with its real content in a `relative z-10`
 * wrapper so this sits behind everything.
 */
export function DarkSectionGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(45,212,191,0.22), transparent 45%), radial-gradient(circle at 80% 0%, rgba(56,189,248,0.14), transparent 40%), radial-gradient(circle at 50% 100%, rgba(45,212,191,0.10), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
