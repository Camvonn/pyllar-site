import Link from "next/link";

export function CtaBand() {
  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Ready to see Pyllar on your workflow?
        </h2>
        <p className="max-w-xl text-slate-300">
          Tell us about your organization and we&apos;ll set up a guided
          demo — no self-serve sign-up, no obligation.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition-colors hover:bg-teal-400"
          >
            Request a Demo
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-base font-semibold text-slate-100 transition-colors hover:border-slate-400 hover:bg-white/5"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
