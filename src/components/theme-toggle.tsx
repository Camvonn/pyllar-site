"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Light/dark switch for the header.
 *
 * First-time visitors follow their OS preference (the provider is configured
 * with `defaultTheme="system"`); clicking this records an explicit choice,
 * which next-themes persists to localStorage.
 *
 * Hydration: the active theme isn't knowable during SSR, so rather than
 * gating on a mounted flag (which would mean a state update during render),
 * both icons are always rendered and CSS picks the right one off the `dark`
 * class on <html>. That markup is identical on server and client, so there's
 * no mismatch and no icon pop-in.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  function toggle() {
    // resolvedTheme is populated by the time a user can click. The DOM check
    // is a fallback in case the very first click lands before it settles.
    const isDark =
      resolvedTheme === "dark" ||
      (resolvedTheme === undefined &&
        document.documentElement.classList.contains("dark"));
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light or dark theme"
      title="Toggle light or dark theme"
      className={`glass text-fg-muted hover:text-accent inline-flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${className}`}
    >
      <Moon className="h-4 w-4 dark:hidden" aria-hidden />
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden />
    </button>
  );
}
