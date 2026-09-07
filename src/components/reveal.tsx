"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Tasteful fade-in-on-scroll wrapper for below-the-fold sections.
 *
 * Progressive enhancement / accessibility:
 * - Default state is fully visible, so server-rendered (and pre-hydration)
 *   markup is never hidden — nothing depends on JavaScript running for
 *   content to be visible.
 * - The very first IntersectionObserver callback (fired shortly after
 *   mount) hides the element only if it's currently off-screen; since it's
 *   off-screen, that's imperceptible to the user. When it later scrolls
 *   into view, the same observer flips it back to visible with a
 *   transition. Elements already in view on load are simply left visible
 *   and never animate — no flash for above-the-fold content.
 * - All state updates happen inside the observer's callback (an async
 *   subscription boundary), never synchronously at the top of the effect.
 * - `prefers-reduced-motion: reduce` is handled by a sitewide CSS rule (see
 *   globals.css) that collapses transition durations to near-zero, so the
 *   element still reaches its final state correctly but without an
 *   animated motion effect.
 */
export function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        className,
        "transition-all duration-700 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
