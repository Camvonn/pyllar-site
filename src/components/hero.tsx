export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.15),transparent_40%)]"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:py-28 lg:py-32">
        <span className="rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-teal-300">
          Built for group homes &amp; residential youth facilities
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          One system for youth, staff, and every day in between.
        </h1>

        <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
          Pyllar brings youth profiles, incidents, medications, scheduling,
          staff compliance, and CARF-oriented reporting into a single, secure
          portal — so your team spends less time on paperwork and
          spreadsheets, and more time on care.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition-colors hover:bg-teal-400"
          >
            Request a Demo
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-md border border-slate-600 px-6 py-3 text-base font-semibold text-slate-100 transition-colors hover:border-slate-400 hover:bg-white/5"
          >
            See What&apos;s Included
          </a>
        </div>

        <dl className="mt-4 grid grid-cols-1 gap-x-10 gap-y-4 text-sm text-slate-400 sm:grid-cols-3">
          <div>
            <dt className="font-semibold text-slate-200">One system</dt>
            <dd>Replace spreadsheets and paper logs with one portal.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-200">CARF-oriented</dt>
            <dd>Reporting and metrics built with accreditation in mind.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-200">
              Multi-facility ready
            </dt>
            <dd>One portal per organization, with facility switching.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
