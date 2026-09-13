import type { FeatureCategory } from "./features";

/**
 * Per-category accent treatments, so the site has visual variety beyond a
 * single teal without losing brand coherence: care surfaces stay on the
 * primary teal, operations lean cyan, and insights lean violet.
 *
 * Each treatment carries both themes. Light mode uses deeper, more saturated
 * tile gradients with white glyphs (pale gradients wash out on white); dark
 * mode uses bright gradients with near-black glyphs. Kept as complete
 * Tailwind class strings, rather than composed at runtime, so the classes
 * remain statically discoverable by the compiler.
 */
export const CATEGORY_ACCENTS: Record<
  FeatureCategory,
  { gradient: string; glow: string; text: string; ring: string; icon: string }
> = {
  care: {
    gradient:
      "from-teal-500 to-teal-700 dark:from-teal-300 dark:to-teal-500",
    glow: "shadow-[0_8px_20px_-8px_rgba(13,148,136,0.7)] dark:shadow-[0_0_22px_-6px_rgba(45,212,191,0.9)]",
    text: "text-teal-600 dark:text-teal-300",
    ring: "ring-teal-500/25 dark:ring-teal-400/25",
    icon: "text-white dark:text-slate-950",
  },
  operations: {
    gradient: "from-sky-500 to-sky-700 dark:from-sky-300 dark:to-sky-500",
    glow: "shadow-[0_8px_20px_-8px_rgba(2,132,199,0.7)] dark:shadow-[0_0_22px_-6px_rgba(56,189,248,0.9)]",
    text: "text-sky-600 dark:text-sky-300",
    ring: "ring-sky-500/25 dark:ring-sky-400/25",
    icon: "text-white dark:text-slate-950",
  },
  insights: {
    gradient:
      "from-violet-500 to-violet-700 dark:from-violet-300 dark:to-violet-500",
    glow: "shadow-[0_8px_20px_-8px_rgba(124,58,237,0.7)] dark:shadow-[0_0_22px_-6px_rgba(167,139,250,0.9)]",
    text: "text-violet-600 dark:text-violet-300",
    ring: "ring-violet-500/25 dark:ring-violet-400/25",
    icon: "text-white dark:text-slate-950",
  },
};
