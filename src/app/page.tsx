import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Testimonial } from "@/components/testimonial";
import { PricingNote } from "@/components/pricing-note";
import { DemoSection } from "@/components/demo-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonial />
      <PricingNote />
      <DemoSection />
    </>
  );
}
