"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile nav links already close the menu via onClick; this just adds
  // Escape-key support for keyboard users.
  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="border-line bg-surface/70 sticky top-0 z-40 border-b backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav
          aria-label="Primary"
          className="text-fg-muted hidden items-center gap-8 text-sm font-medium md:flex"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`hover:text-fg-strong relative py-1 transition-colors ${
                  active
                    ? "text-fg-strong after:absolute after:-bottom-1 after:right-0 after:left-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-teal-500 after:to-sky-500 dark:after:from-teal-400 dark:after:to-sky-400"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="/demo"
            className="btn-accent hidden rounded-full px-5 py-2 text-sm font-semibold sm:inline-flex"
          >
            Request a Demo
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="glass text-fg-muted hover:text-fg-strong inline-flex items-center justify-center rounded-md p-2 transition-colors md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-line bg-surface/95 border-t px-6 py-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-fg hover:text-fg-strong block rounded-md px-2 py-2 text-base font-medium hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/demo"
                onClick={() => setMenuOpen(false)}
                className="btn-accent mt-2 block rounded-full px-3 py-2 text-center text-base font-semibold"
              >
                Request a Demo
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
