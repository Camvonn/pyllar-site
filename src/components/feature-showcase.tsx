import { Check } from "lucide-react";
import { FEATURES } from "@/lib/features";
import { CATEGORY_ACCENTS } from "@/lib/accents";
import {
  AnalyticsMockup,
  IncidentsMockup,
  ProfileMockup,
  ScheduleMockup,
} from "@/components/mockups/feature-mockups";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

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
    <section className="relative py-24 sm:py-32">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="In action"
          title="See Pyllar in action"
          description="The Pyllar product is still being finalized, so these are illustrative UI concepts showing how each part of the workflow comes together — not actual product screenshots."
        />

        <div className="mt-20 space-y-24">
          {SHOWCASE.map(({ slug, Mockup }, index) => {
            const feature = FEATURES.find((item) => item.slug === slug);
            if (!feature) return null;
            const accent = CATEGORY_ACCENTS[feature.category];

            return (
              <Reveal key={slug}>
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <Mockup />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent.gradient} ${accent.glow}`}
                      >
                        <feature.icon
                          className={`h-5 w-5 ${accent.icon}`}
                          aria-hidden
                        />
                      </span>
                      <h3 className="font-heading text-fg-strong text-xl font-bold sm:text-2xl">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-fg-muted mt-5 leading-relaxed">
                      {feature.long}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {feature.bullets.slice(0, 3).map((bullet) => (
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
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
