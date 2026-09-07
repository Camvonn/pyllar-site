import { Hero } from "@/components/hero";
import { FeatureHighlights } from "@/components/feature-highlights";
import { PlatformShowcase } from "@/components/platform-showcase";
import { Testimonial } from "@/components/testimonial";
import { SecurityNote } from "@/components/security-note";
import { CtaBand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <PlatformShowcase />
      <Testimonial />
      <SecurityNote compact />
      <CtaBand />
    </>
  );
}
