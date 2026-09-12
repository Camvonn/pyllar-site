import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionGlow } from "@/components/site-background";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <SectionGlow />
      <Reveal className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <p className="eyebrow text-teal-400">Get started</p>
        <h2 className="font-heading text-gradient text-3xl font-bold leading-tight tracking-tight sm:text-[2.6rem]">
          Ready to see Pyllar on your workflow?
        </h2>
        <p className="max-w-xl leading-relaxed text-slate-400">
          Tell us about your organization and we&apos;ll set up a guided
          demo — no self-serve sign-up, no obligation.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/demo"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-sky-400 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-[0_0_30px_-6px_rgba(45,212,191,0.8)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_45px_-4px_rgba(45,212,191,1)] active:scale-[0.98]"
          >
            Request a Demo
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
          <Link
            href="/pricing"
            className="glass inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold text-slate-100 transition-all duration-200 hover:scale-[1.03] hover:border-teal-400/40 active:scale-[0.98]"
          >
            View Pricing
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
