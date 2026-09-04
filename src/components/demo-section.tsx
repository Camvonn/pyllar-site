import { DemoForm } from "@/components/demo-form";

export function DemoSection() {
  return (
    <section id="demo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            See Pyllar on your workflow
          </h2>
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
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
          <DemoForm />
        </div>
      </div>
    </section>
  );
}
