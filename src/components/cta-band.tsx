import Link from "next/link";
import { DarkSectionGlow } from "@/components/dark-section-glow";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
      <DarkSectionGlow />
      <Reveal className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Ready to see Pyllar on your workflow?
        </h2>
        <p className="max-w-xl leading-relaxed text-slate-300">
          Tell us about your organization and we&apos;ll set up a guided
          demo — no self-serve sign-up, no obligation.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition-all duration-200 hover:scale-[1.02] hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-500/30 active:scale-[0.98]"
          >
            Request a Demo
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-base font-semibold text-slate-100 transition-all duration-200 hover:scale-[1.02] hover:border-slate-400 hover:bg-white/5 active:scale-[0.98]"
          >
            View Pricing
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
