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
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 transition-colors hover:text-white ${
                  active
                    ? "text-white after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-teal-400 after:to-sky-400 after:shadow-[0_0_10px_0_rgba(45,212,191,0.8)]"
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
            className="hidden rounded-full bg-gradient-to-r from-teal-400 to-sky-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_22px_-6px_rgba(45,212,191,0.9)] transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_32px_-4px_rgba(45,212,191,1)] active:scale-[0.98] sm:inline-flex"
          >
            Request a Demo
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="glass inline-flex items-center justify-center rounded-md p-2 text-slate-300 transition-colors hover:text-white md:hidden"
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
          className="border-t border-white/[0.07] bg-ink/95 px-6 py-4 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-2 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/demo"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block rounded-full bg-gradient-to-r from-teal-400 to-sky-400 px-3 py-2 text-center text-base font-semibold text-slate-950"
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
