import { PlatformMockup } from "@/components/mockups/platform-mockup";
import { Reveal } from "@/components/reveal";

export function PlatformShowcase() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your entire operation, in one view
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Youth, staff, and facilities — side by side, instead of spread
              across a dozen spreadsheets and a filing cabinet.
            </p>
          </div>
          <div className="mt-14">
            <PlatformMockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
