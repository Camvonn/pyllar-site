import { PlatformMockup } from "@/components/mockups/platform-mockup";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function PlatformShowcase() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="One view"
          title="Your entire operation, in one view"
          description="Youth, staff, and facilities — side by side, instead of spread across a dozen spreadsheets and a filing cabinet."
        />
        <Reveal className="mt-16">
          <PlatformMockup />
        </Reveal>
      </div>
    </section>
  );
}
