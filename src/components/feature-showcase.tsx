import { Check } from "lucide-react";
import { FEATURES } from "@/lib/features";
import {
  AnalyticsMockup,
  IncidentsMockup,
  ProfileMockup,
  ScheduleMockup,
} from "@/components/mockups/feature-mockups";

const SHOWCASE = [
  { slug: "youth-management", Mockup: ProfileMockup },
  { slug: "incident-reporting", Mockup: IncidentsMockup },
  { slug: "scheduling", Mockup: ScheduleMockup },
  { slug: "analytics-reporting", Mockup: AnalyticsMockup },
] as const;

/**
 * A handful of flagship features shown with illustrative UI mockups,
 * alternating image/text sides. The real Pyllar app UI lives in a separate,
 * still-in-progress repo, so these mockups are code-drawn approximations —
 * each one is clearly captioned as illustrative (see MockupFrame).
 */
export function FeatureShowcase() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            See Pyllar in action
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            The Pyllar product is still being finalized, so these are
            illustrative UI concepts showing how each part of the workflow
            comes together — not actual product screenshots.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {SHOWCASE.map(({ slug, Mockup }, index) => {
            const feature = FEATURES.find((item) => item.slug === slug);
            if (!feature) return null;

            return (
              <div
                key={slug}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Mockup />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-sm">
                      <feature.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-slate-600">{feature.long}</p>
                  <ul className="mt-4 space-y-2">
                    {feature.bullets.slice(0, 3).map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-teal-600"
                          aria-hidden
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
