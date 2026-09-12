import type { FeatureCategory } from "./features";

/**
 * Per-category accent treatments, so the site has visual variety beyond a
 * single teal without losing brand coherence: care surfaces stay on the
 * primary teal, operations lean cyan, and insights lean violet.
 *
 * Kept as complete Tailwind class strings (rather than composed at runtime)
 * so the classes remain statically discoverable by the compiler.
 */
export const CATEGORY_ACCENTS: Record<
  FeatureCategory,
  { gradient: string; glow: string; text: string; ring: string }
> = {
  care: {
    gradient: "from-teal-300 to-teal-500",
    glow: "shadow-[0_0_22px_-6px_rgba(45,212,191,0.9)]",
    text: "text-teal-300",
    ring: "ring-teal-400/25",
  },
  operations: {
    gradient: "from-sky-300 to-sky-500",
    glow: "shadow-[0_0_22px_-6px_rgba(56,189,248,0.9)]",
    text: "text-sky-300",
    ring: "ring-sky-400/25",
  },
  insights: {
    gradient: "from-violet-300 to-violet-500",
    glow: "shadow-[0_0_22px_-6px_rgba(167,139,250,0.9)]",
    text: "text-violet-300",
    ring: "ring-violet-400/25",
  },
};
