import type { Metadata } from "next";
import Link from "next/link";
import { FeatureShowcase } from "@/components/feature-showcase";
import { FeatureDetail } from "@/components/feature-detail";
import { SecurityNote } from "@/components/security-note";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Youth management, incident reporting, medications, scheduling, staff compliance, finance, and CARF-oriented reporting — everything a group home or residential youth facility needs in one portal.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-slate-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything your facility runs on
          </h1>
          <p className="mt-4 text-lg text-slate-300 sm:text-xl">
            Pyllar brings youth care, day-to-day operations, and reporting
            into one portal — built around how group homes and residential
            youth facilities actually work.
          </p>
          <div className="mt-8">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition-colors hover:bg-teal-400"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      <FeatureShowcase />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Every feature, at a glance
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The full list, grouped by how your team actually uses it day to
              day.
            </p>
          </div>
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
