export function PricingNote() {
  return (
    <section id="pricing" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Pricing
        </h2>
        <p className="mt-3 text-slate-600">
          Pyllar is currently onboarding facilities directly with our team.
          Contact us for pricing based on the size and needs of your
          organization.
        </p>
        <a
          href="#demo"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
        >
          Contact Us for Pricing
        </a>
      </div>
    </section>
  );
}
