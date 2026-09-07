import Link from "next/link";
import { Logo } from "./logo";

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
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-slate-500">
            One system for youth, staff, and everyday operations at group
            homes and residential youth facilities.
          </p>
        </div>

        <nav aria-label="Product">
          <h3 className="text-sm font-semibold text-slate-900">Product</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-slate-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
          <p className="mt-3 text-sm text-slate-600">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-teal-700 hover:text-teal-800"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-400">
        © {year} Pyllar. All rights reserved.
      </div>
    </footer>
  );
}
