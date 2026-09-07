import type { Metadata } from "next";
import { PlaceholderBanner } from "@/components/placeholder-banner";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Placeholder terms of service for the Pyllar marketing site.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: —</p>

        <div className="mt-6">
          <PlaceholderBanner>
            <strong>Placeholder — replace before real launch.</strong> This
            page is a stand-in for demonstration purposes only. It has not
            been reviewed by counsel and is not a real, enforceable terms of
            service. Replace it with real, legally reviewed terms before this
            site is treated as a live public site.
          </PlaceholderBanner>
        </div>

        <div className="mt-10 space-y-8 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Use of this site
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Placeholder. This section should describe acceptable use of
              this marketing website, including the &ldquo;Request a
              Demo&rdquo; form, and clarify that this site does not itself
              provide the Pyllar product or any account access.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              No warranty
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Placeholder. This section should include a standard
              &ldquo;as-is&rdquo; disclaimer for the content of this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Changes to these terms
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Placeholder. This section should describe how and when these
              terms may be updated.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Governing law
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Placeholder — jurisdiction to be determined by counsel.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900">
              Contact us
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Placeholder. Questions about these terms can be sent to{" "}
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
