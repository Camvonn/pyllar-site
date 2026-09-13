"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative, brand-echoing scroll-progress indicator: a slim vertical
 * "pillar" fixed to the left edge of the viewport that visually rises from
 * the bottom as the user scrolls down the page (a nod to "Pyllar").
 *
 * This is purely decorative:
 * - `aria-hidden` + `role="presentation"` — it never conveys information
 *   that isn't already available via the native scrollbar/keyboard.
 * - `pointer-events-none` — it can never intercept clicks, taps, or
 *   keyboard focus, so it can't interfere with navigation or the demo form.
 *
 * Performance:
 * - Scroll position is read in a single passive listener, rAF-throttled to
 *   at most one update per animation frame.
 * - The only DOM write per frame is a CSS custom property, driving a
 *   compositor-only `transform: scaleY()` — no layout thrash.
 * - Hidden below the `md` breakpoint entirely, so there is zero scroll-handler
 *   cost on mobile.
 *
 * Accessibility (motion):
 * - Under `prefers-reduced-motion: reduce`, the easing transition and glow
 *   are removed (see globals.css) — the fill still reflects scroll position
 *   directly (like a native scrollbar thumb), but with no independent,
 *   self-playing animation.
 */
export function ScrollPillar() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    function update() {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      fillRef.current?.style.setProperty(
        "--scroll-progress",
        String(Math.min(1, Math.max(0, progress))),
      );
    }

    function onScrollOrResize() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="pointer-events-none fixed top-24 bottom-24 left-6 z-30 hidden w-[6px] md:block"
    >
      <div className="border-line relative h-full w-full overflow-hidden rounded-full border bg-black/[0.04] dark:bg-white/[0.04]">
        <div
          ref={fillRef}
          className="scroll-pillar-fill absolute inset-0 origin-bottom rounded-full bg-gradient-to-t from-teal-600 via-teal-500 to-sky-400 dark:from-teal-500 dark:via-teal-300 dark:to-sky-300"
          style={{ transform: "scaleY(var(--scroll-progress, 0))" }}
        />
      </div>
    </div>
  );
}
