import { Reveal } from "@/components/reveal";

/**
 * IMPORTANT: This is a fabricated, illustrative testimonial written to show
 * the *style* of feedback Pyllar is designed to earn — it is NOT a real
 * customer quote. Do not present this as an actual customer claim. Replace
 * with a real, permissioned testimonial once one is available, and remove
 * the "Illustrative example" label at that time.
 */
const EXAMPLE_TESTIMONIAL = {
  quote:
    "Before, our shift log, medication binder, and incident forms all lived in different places. Now our whole team checks one dashboard for meds, incidents, and the day's schedule.",
  name: "Alex R.",
  role: "House Manager, 12-bed group home",
};

export function Testimonial() {
  return (
    <section
      id="testimonial"
      className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-16 select-none font-heading text-[14rem] font-bold leading-none text-white/10"
      >
        &ldquo;
      </div>
      <Reveal className="relative mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
        <p className="font-heading text-2xl font-medium leading-relaxed tracking-tight text-white sm:text-3xl">
          &ldquo;{EXAMPLE_TESTIMONIAL.quote}&rdquo;
        </p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-teal-100">
          {EXAMPLE_TESTIMONIAL.name} — {EXAMPLE_TESTIMONIAL.role}
        </p>
        <p className="mt-1 text-xs text-teal-200/80">
          Illustrative example — not an actual customer quote
        </p>
      </Reveal>
    </section>
  );
}
