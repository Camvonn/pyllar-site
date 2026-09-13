import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionGlow } from "@/components/site-background";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pyllar is priced per facility, starting at $299/month. See what's included, optional add-ons, and answers to common pricing questions.",
};

const TIERS = [
  {
    label: "First facility",
    price: "$299",
    description: "Everything in Pyllar's core plan for your first location.",
    accent: "from-teal-500 to-teal-600 dark:from-teal-300 dark:to-teal-500",
    text: "text-teal-600 dark:text-teal-300",
  },
  {
    label: "Each additional facility",
    price: "$199",
    description: "For organizations running more than one facility on Pyllar.",
    accent: "from-sky-500 to-sky-600 dark:from-sky-300 dark:to-sky-500",
    text: "text-sky-600 dark:text-sky-300",
  },
];

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
      <PageHero
        eyebrow="Pricing"
        title="Straightforward, per-facility pricing"
        description="One price per facility, with each additional facility costing less than the first. Here's an example of how that looks — your actual quote depends on your size and needs."
      />

      <section className="relative pb-6">
        <Reveal className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 sm:grid-cols-2">
          {TIERS.map((tier) => (
            <div
              key={tier.label}
              className="glass-card relative overflow-hidden rounded-2xl p-8"
            >
              <div
                aria-hidden
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tier.accent}`}
              />
              <p className={`eyebrow ${tier.text}`}>{tier.label}</p>
              <p className="mt-4 flex items-baseline gap-1.5">
                <span className="font-heading text-fg-strong text-5xl font-bold tracking-tight">
                  {tier.price}
                </span>
                <span className="text-fg-subtle text-sm">/month</span>
              </p>
              <p className="mt-4 text-fg-muted text-sm leading-relaxed">
                {tier.description}
              </p>
            </div>
          ))}
        </Reveal>

        <p className="mx-auto mt-8 max-w-2xl px-6 text-fg-subtle text-center text-sm italic">
          Example, starting prices shown to illustrate our pricing model —
          not a binding quote. Your actual price depends on facility size,
          seats, and add-ons, and will be confirmed when you request a demo.
        </p>
      </section>

      <section className="relative py-20">
        <div className="hairline absolute inset-x-0 top-0" />
        <Reveal className="mx-auto max-w-3xl px-6">
          <p className="eyebrow text-accent">Core plan</p>
          <h2 className="font-heading mt-3 text-2xl font-bold text-fg-strong tracking-tight sm:text-3xl">
            What&apos;s included
          </h2>
          <ul className="mt-8 space-y-3.5">
            {CORE_INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-fg leading-relaxed"
              >
                <Check
                  className="mt-1 h-5 w-5 text-accent shrink-0"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="relative py-20">
        <div className="hairline absolute inset-x-0 top-0" />
        <Reveal className="mx-auto max-w-3xl px-6">
          <p className="eyebrow text-sky-600 dark:text-sky-400">Optional</p>
          <h2 className="font-heading mt-3 text-2xl font-bold text-fg-strong tracking-tight sm:text-3xl">
            Add-ons
          </h2>
          <p className="text-fg-muted mt-3">
            Available on top of the core plan for organizations that need
            them — priced separately, ask us for details.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {ADD_ONS.map((addOn) => (
              <div key={addOn.title} className="glass-card rounded-2xl p-5">
                <h3 className="font-heading text-fg-strong text-sm font-semibold">
                  {addOn.title}
                </h3>
                <p className="mt-2 text-fg-muted text-sm leading-relaxed">
                  {addOn.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative py-20">
        <div className="hairline absolute inset-x-0 top-0" />
        <Reveal className="mx-auto max-w-3xl px-6">
          <p className="eyebrow text-violet-600 dark:text-violet-400">Questions</p>
          <h2 className="font-heading mt-3 text-2xl font-bold text-fg-strong tracking-tight sm:text-3xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.question} className="glass rounded-2xl p-6">
                <dt className="font-heading text-fg-strong text-base font-semibold">
                  {faq.question}
                </dt>
                <dd className="mt-2.5 text-fg-muted text-sm leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="relative overflow-hidden py-24">
        <SectionGlow />
        <Reveal className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-heading text-gradient text-3xl font-bold tracking-tight sm:text-[2.6rem]">
            Contact us for a custom quote
          </h2>
          <p className="text-fg-muted max-w-xl leading-relaxed">
            Every organization is a little different — tell us about your
            facility and we&apos;ll put together pricing that fits.
          </p>
          <Link
            href="/demo"
            className="btn-accent group mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold"
          >
            Request a Demo
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
