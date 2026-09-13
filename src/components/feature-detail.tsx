import { Check } from "lucide-react";
import {
  FEATURE_CATEGORIES,
  featuresByCategory,
  type FeatureCategory,
} from "@/lib/features";
import { CATEGORY_ACCENTS } from "@/lib/accents";
import { Reveal } from "@/components/reveal";

const CATEGORY_ORDER: FeatureCategory[] = ["care", "operations", "insights"];

/**
 * Full, grouped feature listing used on the dedicated /features page.
 */
export function FeatureDetail() {
  return (
    <div className="space-y-20">
      {CATEGORY_ORDER.map((category, categoryIndex) => {
        const info = FEATURE_CATEGORIES[category];
        const features = featuresByCategory(category);
        const accent = CATEGORY_ACCENTS[category];

        return (
          <Reveal key={category}>
            <section aria-labelledby={`${category}-heading`}>
              <div className="max-w-2xl">
                <p className={`eyebrow ${accent.text}`}>
                  {String(categoryIndex + 1).padStart(2, "0")} /{" "}
                  {features.length}{" "}
                  {features.length === 1 ? "feature" : "features"}
                </p>
                <h2
                  id={`${category}-heading`}
                  className="font-heading text-fg-strong mt-3 text-2xl font-bold tracking-tight sm:text-3xl"
                >
                  {info.label}
                </h2>
                <p className="text-fg-muted mt-3 leading-relaxed">
                  {info.description}
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.slug}
                    className="glass-card group h-full rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent.gradient} ${accent.glow} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <feature.icon
                          className={`h-5 w-5 ${accent.icon}`}
                          aria-hidden
                        />
                      </span>
                      <h3 className="font-heading text-fg-strong text-lg font-semibold">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-fg-muted mt-4 text-sm leading-relaxed">
                      {feature.long}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {feature.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-fg-muted flex items-start gap-2.5 text-sm"
                        >
                          <Check
                            className={`mt-0.5 h-4 w-4 shrink-0 ${accent.text}`}
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
          </Reveal>
        );
      })}
    </div>
  );
}
