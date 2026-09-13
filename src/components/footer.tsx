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
    <footer className="border-line relative overflow-hidden border-t">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark />
            <Wordmark />
          </Link>
          <p className="text-fg-muted mt-4 max-w-xs text-sm leading-relaxed">
            One system for youth, staff, and everyday operations at group
            homes and residential youth facilities.
          </p>
        </div>

        <nav aria-label="Product">
          <h3 className="eyebrow text-fg-subtle">Product</h3>
          <ul className="text-fg-muted mt-4 space-y-2.5 text-sm">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-fg-strong transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h3 className="eyebrow text-fg-subtle">Legal</h3>
          <ul className="text-fg-muted mt-4 space-y-2.5 text-sm">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-fg-strong transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow text-fg-subtle">Contact</h3>
          <p className="mt-4 text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent font-medium transition-opacity hover:opacity-80"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>

      <div className="border-line text-fg-subtle border-t px-6 py-5 text-center text-xs">
        © {year} Pyllar Technologies. All rights reserved.
      </div>
    </footer>
  );
}
