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
          <p className="eyebrow text-accent">Request a demo</p>
          <h1 className="font-heading text-gradient mt-4 text-3xl leading-tight font-bold tracking-tight sm:text-[2.6rem]">
            See Pyllar on your workflow
          </h1>
          <p className="text-fg-muted mt-5 text-lg leading-relaxed">
            Tell us a bit about your organization and we&apos;ll set up a
            guided demo with your team. We work directly with each facility
            to make sure Pyllar fits how you actually run your day-to-day.
          </p>

          <ul className="text-fg-muted mt-8 space-y-3 text-sm">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5">
                <Check
                  className="text-accent mt-0.5 h-4 w-4 shrink-0"
                  aria-hidden
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="border-line mt-10 border-t pt-8">
            <h2 className="eyebrow text-fg-subtle">
              What happens after you submit
            </h2>
            <ol className="mt-5 space-y-5">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-3.5">
                  <span className="border-accent/30 bg-accent/10 text-accent flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-fg-strong text-sm font-semibold">
                      {step.title}
                    </p>
                    <p className="text-fg-muted mt-0.5 text-sm">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p className="text-fg-subtle mt-8 text-sm">
            Prefer email? Reach us directly at{" "}
            <a
              href="mailto:hello@pyllar.com"
              className="text-accent font-medium transition-opacity hover:opacity-80"
            >
              hello@pyllar.com
            </a>
            .
          </p>
        </div>

        <div className="glass rounded-3xl p-6 shadow-[0_30px_70px_-40px_rgba(10,16,32,0.45)] sm:p-8 dark:shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
