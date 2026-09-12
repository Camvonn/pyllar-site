import type { ReactNode } from "react";
import { SectionGlow } from "@/components/site-background";

/**
 * Shared hero band for inner pages (Features, Pricing, Demo, legal). Keeps
 * one consistent entry rhythm sitewide: monospace eyebrow, gradient display
 * heading, supporting copy, optional actions.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  tone = "teal",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  tone?: "teal" | "cyan" | "violet";
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow tone={tone} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {eyebrow ? (
          <p className="eyebrow flex items-center justify-center gap-2.5 text-teal-400">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-teal-400" />
            {eyebrow}
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-teal-400" />
          </p>
        ) : null}
        <h1 className="font-heading text-gradient mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
