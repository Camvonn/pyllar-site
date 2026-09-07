import type { Metadata } from "next";
import { DemoSection } from "@/components/demo-section";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Tell us about your group home or residential youth facility and we'll set up a guided demo — no self-serve sign-up, no obligation.",
};

export default function DemoPage() {
  return <DemoSection />;
}
