import { Check } from "lucide-react";
import { DemoForm } from "@/components/demo-form";
import { SectionGlow } from "@/components/site-background";

const BENEFITS = [
  "A live walkthrough tailored to group homes and residential youth facilities",
  "Time to ask about CARF-oriented reporting and multi-facility setup",
  "No obligation, and no self-serve account required to get started",
];

const STEPS = [
  {
    title: "We review your request",
    description: "Usually within one to two business days.",
  },
  {
    title: "We schedule a guided walkthrough",
    description: "A live demo with your team, on your schedule.",
  },
  {
    title: "You get answers, and a quote",
    description:
      "Ask about pricing, security, and how Pyllar fits your workflow.",
  },
];

export function DemoSection() {
  return (
    <section id="demo" className="relative overflow-hidden py-20 sm:py-28">
      <SectionGlow />
      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="eyebrow text-teal-400">Request a demo</p>
          <h1 className="font-heading text-gradient mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-[2.6rem]">
            See Pyllar on your workflow
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Tell us a bit about your organization and we&apos;ll set up a
            guided demo with your team. We work directly with each facility
            to make sure Pyllar fits how you actually run your day-to-day.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-slate-400">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-teal-400"
                  aria-hidden
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-white/10 pt-8">
            <h2 className="eyebrow text-slate-400">
              What happens after you submit
            </h2>
            <ol className="mt-5 space-y-5">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-3.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-teal-400/30 bg-teal-400/10 font-mono text-xs font-semibold text-teal-300">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-sm text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Prefer email? Reach us directly at{" "}
            <a
              href="mailto:hello@pyllar.com"
              className="font-medium text-teal-400 transition-colors hover:text-teal-300"
            >
              hello@pyllar.com
            </a>
            .
          </p>
        </div>

        <div className="glass rounded-3xl p-6 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)] sm:p-8">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
