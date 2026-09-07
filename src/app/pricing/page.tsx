import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pyllar is priced per facility, starting at $299/month. See what's included, optional add-ons, and answers to common pricing questions.",
};

const CORE_INCLUDED = [
  "All 7 core modules: youth management, incident reporting, medications, scheduling, staff records & compliance, finance, and analytics & CARF-oriented reporting",
  "Up to 15 staff user accounts, with role-based access control",
  "Unlimited youth profiles",
  "Guided onboarding and setup with our team",
  "Standard email support",
  "Shared, multi-tenant database tier",
];

const ADD_ONS = [
  {
    title: "Additional staff seats",
    description:
      "Need more than 15 staff accounts? Extra seats are available in blocks — ask for pricing based on your team size.",
  },
  {
    title: "Dedicated database tier",
    description:
      "An isolated database instance for your organization, instead of the standard shared tier — typically relevant for larger multi-facility organizations with stricter data-isolation requirements.",
  },
  {
    title: "Premium support",
    description:
      "Priority response times and a named point of contact, instead of standard email support.",
  },
  {
    title: "Custom integrations",
    description:
      "Help connecting Pyllar to other systems your organization already uses (e.g. EHR, HR/payroll, or state reporting tools).",
  },
];

const FAQS = [
  {
    question: "Do you charge per user or per facility?",
    answer:
      "Per facility. Each facility's subscription includes a generous allowance of staff user accounts (15, in the example above) — organizations that need more can add seats.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No separate setup fee. Guided onboarding and initial setup are included in your subscription.",
  },
  {
    question:
      "What's the difference between shared and dedicated database tiers?",
    answer:
      "The shared tier — included by default — runs your organization's data in a multi-tenant database alongside other customers, logically separated. The dedicated tier runs your organization on its own isolated database instance. Most single- or few-facility organizations do fine on the shared tier; larger multi-facility organizations with stricter data-isolation requirements sometimes prefer dedicated. Ask us which makes sense for you.",
  },
  {
    question: "Are there volume discounts for multi-facility organizations?",
    answer:
      "Yes — each additional facility is priced lower than the first (see the example pricing above), and larger multi-facility organizations are welcome to talk to us about custom volume pricing.",
  },
  {
    question: "Is there a free trial or self-serve sign-up?",
    answer:
      "No — Pyllar isn't a self-serve product. Instead, we walk your team through a guided demo tailored to your facility, so you can see Pyllar on your actual workflow before deciding.",
  },
  {
    question: "Is Pyllar HIPAA, CARF, or SOC 2 certified?",
    answer:
      "Not yet. Pyllar is built with security and privacy in mind, and our reporting is designed around CARF-oriented metrics, but we do not currently hold HIPAA, CARF, or SOC 2 certification. HIPAA alignment, CARF alignment, and SOC 2 Type II certification are on our roadmap — ask us for specifics during your demo.",
  },
  {
    question: "How do we get started?",
    answer:
      "Request a demo below. A member of our team will follow up personally to schedule a walkthrough and put together a custom quote based on your size and needs — there's no self-serve sign-up.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Pricing
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Pyllar is priced per facility, with each additional facility
            costing less than the first. Here&apos;s an example of how that
            looks — your actual quote depends on your size and needs.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-4 sm:py-6">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              First facility
            </p>
            <p className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-slate-900">
                $299
              </span>
              <span className="text-sm text-slate-500">/month</span>
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Everything in Pyllar&apos;s core plan for your first location.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Each additional facility
            </p>
            <p className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-slate-900">
                $199
              </span>
              <span className="text-sm text-slate-500">/month</span>
            </p>
            <p className="mt-3 text-sm text-slate-600">
              For organizations running more than one facility on Pyllar.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-2xl px-6 text-center text-sm italic text-slate-500">
          Example, starting prices shown to illustrate our pricing model —
          not a binding quote. Your actual price depends on facility size,
          seats, and add-ons, and will be confirmed when you request a demo.
        </p>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What&apos;s included
          </h2>
          <ul className="mt-6 space-y-3">
            {CORE_INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Add-ons
          </h2>
          <p className="mt-3 text-slate-600">
            Available on top of the core plan for organizations that need
            them — priced separately, ask us for details.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ADD_ONS.map((addOn) => (
              <div
                key={addOn.title}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  {addOn.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {addOn.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Frequently asked questions
          </h2>
          <dl className="mt-8 space-y-8">
            {FAQS.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold text-slate-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Contact us for a custom quote
          </h2>
          <p className="max-w-xl text-slate-300">
            Every organization is a little different — tell us about your
            facility and we&apos;ll put together pricing that fits.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-md bg-teal-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition-colors hover:bg-teal-400"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
