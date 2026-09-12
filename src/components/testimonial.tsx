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
    <section id="testimonial" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <figure className="glass relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.16),transparent_65%)]"
            />
            <div
              aria-hidden
              className="font-heading pointer-events-none absolute -left-4 -top-10 select-none text-[12rem] leading-none text-white/[0.06]"
            >
              &ldquo;
            </div>

            <blockquote className="relative">
              <p className="font-heading text-xl font-medium leading-relaxed tracking-tight text-white sm:text-2xl">
                {EXAMPLE_TESTIMONIAL.quote}
              </p>
            </blockquote>

            <figcaption className="relative mt-8">
              <p className="eyebrow text-teal-300">
                {EXAMPLE_TESTIMONIAL.name} — {EXAMPLE_TESTIMONIAL.role}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Illustrative example — not an actual customer quote
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
