import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pyllar is priced per facility based on your size and needs. Request a demo to get a quote — no self-serve checkout.",
};

const WHATS_INCLUDED = [
  "Youth management, incident reporting, medications, and scheduling",
  "Staff records, compliance tracking, and finance tools",
  "Analytics dashboards and CARF-oriented reporting",
  "Guided onboarding and setup with your team",
  "Ongoing support as your organization grows",
];

const FAQS = [
  {
    question: "Is there a free trial or self-serve sign-up?",
    answer:
      "No — Pyllar isn't a self-serve product. Instead, we walk your team through a guided demo tailored to your facility, so you can see Pyllar on your actual workflow before deciding.",
  },
  {
    question: "Is Pyllar HIPAA or CARF certified?",
    answer:
      "Not yet. Pyllar is built with security and privacy in mind, and our reporting is designed around CARF-oriented metrics, but we do not currently hold HIPAA or CARF certification. Ask us about our roadmap during your demo.",
  },
  {
    question: "Can multiple facilities share one account?",
    answer:
      "Yes — Pyllar supports multi-facility organizations, with facility switching inside a single portal.",
  },
  {
    question: "How do we get started?",
    answer:
      "Request a demo below. A member of our team will follow up personally to schedule a walkthrough and put together a quote based on your size and needs — there's no self-serve sign-up.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Pricing
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Pyllar is priced per facility, based on the size and needs of
            your organization — not a one-size-fits-all monthly fee. We work
            directly with each facility to put together a quote.
          </p>
          <Link
            href="/demo"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
          >
            Request a Demo for Pricing
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What&apos;s included
          </h2>
          <ul className="mt-6 space-y-3">
            {WHATS_INCLUDED.map((item) => (
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
            Let&apos;s talk about your facility
          </h2>
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
