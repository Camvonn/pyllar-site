import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import { SectionGlow } from "@/components/site-background";

const HERO_STATS = [
  { value: "7", label: "Core modules" },
  { value: "1", label: "Portal per organization" },
  { value: "Multi", label: "Facility ready" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <SectionGlow />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-24 sm:py-28 lg:grid-cols-[1.05fr_1fr] lg:py-36">
        <div className="flex flex-col items-start gap-7">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-teal-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Built for group homes &amp; residential youth facilities
          </span>

          <h1 className="font-heading max-w-2xl text-[2.75rem] font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-[4.25rem]">
            <span className="text-gradient">The operating system for</span>{" "}
            <span className="text-gradient-accent">care</span>
            <span className="text-gradient">, not paperwork.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Pyllar brings youth profiles, incidents, medications, scheduling,
            staff compliance, and CARF-oriented reporting into a single,
            secure portal — built for how residential facilities actually
            run, not adapted from generic case-management software.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/demo"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-sky-400 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-[0_0_30px_-6px_rgba(45,212,191,0.7)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_45px_-4px_rgba(45,212,191,0.9)] active:scale-[0.98]"
            >
              Request a Demo
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link
              href="/features"
              className="glass inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold text-slate-100 transition-all duration-200 hover:scale-[1.03] hover:border-teal-400/40 active:scale-[0.98]"
            >
              See What&apos;s Included
            </Link>
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-teal-400/70" aria-hidden />
            Role-based access control on every record
          </div>

          <dl className="mt-4 grid w-full max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-2xl font-bold text-white">
                  {stat.value}
                </dt>
                <dd className="eyebrow mt-1 text-slate-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-float-slow w-full">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
