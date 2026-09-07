import Link from "next/link";
import { FEATURES } from "@/lib/features";

/**
 * Condensed feature grid used on the homepage. The full, longer-form
 * descriptions live on the dedicated /features page (see feature-detail.tsx).
 */
export function FeatureHighlights() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything your facility runs on, in one portal
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pyllar replaces scattered spreadsheets, binders, and disconnected
            tools with a single system built around how group homes and
            residential youth facilities actually operate.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.slug}
              className="rounded-xl border border-slate-200 bg-slate-50/60 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-600/10 text-teal-700">
                <feature.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.short}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            See the full feature list →
          </Link>
        </div>
      </div>
    </section>
  );
}
