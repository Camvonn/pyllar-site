import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeatureShowcase } from "@/components/feature-showcase";
import { FeatureDetail } from "@/components/feature-detail";
import { SecurityNote } from "@/components/security-note";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Youth management, incident reporting, medications, scheduling, staff compliance, finance, and CARF-oriented reporting — everything a group home or residential youth facility needs in one portal.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything your facility runs on"
        description="Pyllar brings youth care, day-to-day operations, and reporting into one portal — built around how group homes and residential youth facilities actually work."
      >
        <Link
          href="/demo"
          className="btn-accent group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold"
        >
          Request a Demo
          <ArrowRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </PageHero>

      <FeatureShowcase />

      <section className="relative py-24 sm:py-32">
        <div className="hairline absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Full list"
            title="Every feature, at a glance"
            description="The full list, grouped by how your team actually uses it day to day."
          />
          <div className="mt-16">
            <FeatureDetail />
          </div>
        </div>
      </section>

      <SecurityNote />
      <CtaBand />
    </>
  );
}
