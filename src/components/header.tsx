"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

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
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 transition-colors hover:text-slate-900 ${
                  active
                    ? "text-slate-900 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-teal-400 after:to-teal-600"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="hidden rounded-md bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-md hover:shadow-teal-600/25 active:scale-[0.98] sm:inline-flex"
          >
            Request a Demo
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 transition-colors hover:bg-slate-50 md:hidden"
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
          className="border-t border-slate-200 bg-white px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-2 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/demo"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block rounded-md bg-teal-600 px-3 py-2 text-center text-base font-semibold text-white hover:bg-teal-700"
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
