import { DemoForm } from "@/components/demo-form";

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
    <section id="demo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            See Pyllar on your workflow
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Tell us a bit about your organization and we&apos;ll set up a
            guided demo with your team. We work directly with each facility
            to make sure Pyllar fits how you actually run your day-to-day.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <span aria-hidden className="text-teal-600">
                ✓
              </span>
              A live walkthrough tailored to group homes and residential
              youth facilities
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="text-teal-600">
                ✓
              </span>
              Time to ask about CARF-oriented reporting and multi-facility
              setup
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="text-teal-600">
                ✓
              </span>
              No obligation, and no self-serve account required to get
              started
            </li>
          </ul>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              What happens after you submit
            </h2>
            <ol className="mt-4 space-y-4">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-600/10 text-xs font-semibold text-teal-700">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      {step.title}
                    </p>
                    <p className="text-sm text-slate-600">
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
              className="font-medium text-teal-700 hover:text-teal-800"
            >
              hello@pyllar.com
            </a>
            .
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
