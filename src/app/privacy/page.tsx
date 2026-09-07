import type { Metadata } from "next";
import { PlaceholderBanner } from "@/components/placeholder-banner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Placeholder privacy policy for the Pyllar marketing site.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: —</p>

        <div className="mt-6">
          <PlaceholderBanner>
            <strong>Placeholder — replace before real launch.</strong> This
            page is a stand-in for demonstration purposes only. It has not
            been reviewed by counsel and does not reflect Pyllar&apos;s
            actual data-handling practices. Replace it with a real, legally
            reviewed privacy policy before this site collects personal
            information at scale or is treated as a live public site.
          </PlaceholderBanner>
        </div>

        <div className="mt-10 space-y-8 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Information we collect
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Placeholder. This section should describe what information is
              collected through this website (e.g. the name, email,
              organization, and phone number submitted via the &ldquo;Request
              a Demo&rdquo; form) and any automatically collected data (e.g.
              basic analytics).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              How we use information
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Placeholder. This section should describe how submitted
              information is used — for example, to follow up on demo
              requests and schedule walkthroughs — and confirm it is not sold
              to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Data retention &amp; security
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Placeholder. This section should describe how long lead
              submissions are retained and the general safeguards in place to
              protect them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Your choices
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Placeholder. This section should explain how someone can
              request that their submitted information be corrected or
              deleted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Contact us
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Placeholder. Questions about this policy can be sent to{" "}
              <a
                href="mailto:hello@pyllar.com"
                className="font-medium text-teal-700 hover:text-teal-800"
              >
                hello@pyllar.com
              </a>{" "}
              (a placeholder address — replace with a real mailbox before
              launch).
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
