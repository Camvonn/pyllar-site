import Link from "next/link";
import { FEATURES } from "@/lib/features";
import { Reveal } from "@/components/reveal";

/**
 * Condensed feature grid used on the homepage. The full, longer-form
 * descriptions live on the dedicated /features page (see feature-detail.tsx).
 */
export function FeatureHighlights() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything your facility runs on, in one portal
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Pyllar replaces scattered spreadsheets, binders, and
              disconnected tools with a single system built around how group
              homes and residential youth facilities actually operate.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.slug} delayMs={(index % 3) * 80}>
              <div className="group h-full rounded-xl border border-slate-200 bg-slate-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <feature.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.short}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-sm"
          >
            See the full feature list →
          </Link>
        </div>
      </div>
    </section>
  );
}
