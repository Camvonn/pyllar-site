import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURES } from "@/lib/features";
import { CATEGORY_ACCENTS } from "@/lib/accents";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

/**
 * Condensed feature grid used on the homepage. The full, longer-form
 * descriptions live on the dedicated /features page (see feature-detail.tsx).
 */
export function FeatureHighlights() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="The platform"
          title="Everything your facility runs on, in one portal"
          description="Pyllar replaces scattered spreadsheets, binders, and disconnected tools with a single system built around how group homes and residential youth facilities actually operate."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const accent = CATEGORY_ACCENTS[feature.category];
            return (
              <Reveal key={feature.slug} delayMs={(index % 3) * 60}>
                <div className="glass-card group h-full rounded-2xl p-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent.gradient} ${accent.glow} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <feature.icon
                      className={`h-6 w-6 ${accent.icon}`}
                      aria-hidden
                    />
                  </div>
                  <h3 className="font-heading text-fg-strong mt-5 text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-fg-muted mt-2.5 text-sm leading-relaxed">
                    {feature.short}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/features"
            className="glass group text-fg hover:border-accent/40 hover:text-fg-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200"
          >
            See the full feature list
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
