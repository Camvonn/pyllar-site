import Link from "next/link";
import { LogoMark, Wordmark } from "./logo";

const PRODUCT_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Request a Demo" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

// NOTE: "hello@pyllar.com" is a placeholder contact address for this
// pre-launch marketing site. Replace with the real support/sales inbox
// once the domain and mailbox are set up.
const CONTACT_EMAIL = "hello@pyllar.com";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <LogoMark />
            <Wordmark className="text-white" />
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            One system for youth, staff, and everyday operations at group
            homes and residential youth facilities.
          </p>
        </div>

        <nav aria-label="Product">
          <h3 className="text-sm font-semibold text-white">Product</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h3 className="text-sm font-semibold text-white">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <p className="mt-3 text-sm text-slate-400">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-teal-400 transition-colors hover:text-teal-300"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-slate-500">
        © {year} Pyllar. All rights reserved.
      </div>
    </footer>
  );
}
