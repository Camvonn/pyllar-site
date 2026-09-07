import Link from "next/link";
import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import { DarkSectionGlow } from "@/components/dark-section-glow";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <DarkSectionGlow />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 sm:py-28 lg:grid-cols-2 lg:py-36">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-teal-300">
            Built for group homes &amp; residential youth facilities
          </span>

          <h1 className="font-heading max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
            The operating system for care, not just paperwork.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Pyllar brings youth profiles, incidents, medications, scheduling,
            staff compliance, and CARF-oriented reporting into a single,
            secure portal — built for how group homes and residential youth
            facilities actually run, not adapted from generic case-management
            software.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-200 hover:scale-[1.02] hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-500/30 active:scale-[0.98]"
            >
              Request a Demo
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-base font-semibold text-slate-100 transition-all duration-200 hover:scale-[1.02] hover:border-slate-400 hover:bg-white/5 active:scale-[0.98]"
            >
              See What&apos;s Included
            </Link>
          </div>

          <dl className="mt-4 grid grid-cols-1 gap-x-10 gap-y-4 text-sm text-slate-400 sm:grid-cols-3">
            <div>
              <dt className="font-semibold text-slate-200">One system</dt>
              <dd>Replace spreadsheets and paper logs with one portal.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-200">CARF-oriented</dt>
              <dd>Reporting and metrics built with accreditation in mind.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-200">
                Multi-facility ready
              </dt>
              <dd>One portal per organization, with facility switching.</dd>
            </div>
          </dl>
        </div>

        <div className="w-full">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
