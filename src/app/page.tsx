import { Hero } from "@/components/hero";
import { FeatureHighlights } from "@/components/feature-highlights";
import { Testimonial } from "@/components/testimonial";
import { SecurityNote } from "@/components/security-note";
import { CtaBand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureHighlights />
      <Testimonial />
      <SecurityNote compact />
      <CtaBand />
    </>
  );
}
