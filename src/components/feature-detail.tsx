import { Check } from "lucide-react";
import {
  FEATURE_CATEGORIES,
  featuresByCategory,
  type FeatureCategory,
} from "@/lib/features";

const CATEGORY_ORDER: FeatureCategory[] = ["care", "operations", "insights"];

/**
 * Full, grouped feature listing used on the dedicated /features page.
 */
export function FeatureDetail() {
  return (
    <div className="space-y-20">
      {CATEGORY_ORDER.map((category) => {
        const info = FEATURE_CATEGORIES[category];
        const features = featuresByCategory(category);

        return (
          <section key={category} aria-labelledby={`${category}-heading`}>
            <div className="max-w-2xl">
              <h2
                id={`${category}-heading`}
                className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
              >
                {info.label}
              </h2>
              <p className="mt-2 text-slate-600">{info.description}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.slug}
                  className="rounded-xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-sm">
                      <feature.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {feature.long}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {feature.bullets.map((bullet) => (
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
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
