"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Thin client wrapper around next-themes so the root layout can stay a
 * server component.
 *
 * next-themes injects a small blocking script that sets the `class` on
 * <html> before first paint, which is what prevents a flash of the wrong
 * theme on load. That requires `suppressHydrationWarning` on <html> (set in
 * layout.tsx), since the server can't know which theme the client will pick.
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
