import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionGlow } from "@/components/site-background";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <SectionGlow />
      <Reveal className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <p className="eyebrow text-accent">Get started</p>
        <h2 className="font-heading text-gradient text-3xl leading-tight font-bold tracking-tight sm:text-[2.6rem]">
          Ready to see Pyllar on your workflow?
        </h2>
        <p className="text-fg-muted max-w-xl leading-relaxed">
          Tell us about your organization and we&apos;ll set up a guided
          demo — no self-serve sign-up, no obligation.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
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
          <Link
            href="/pricing"
            className="glass text-fg-strong hover:border-accent/40 inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            View Pricing
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
