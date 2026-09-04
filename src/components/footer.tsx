const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#testimonial", label: "Why Pyllar" },
  { href: "#pricing", label: "Pricing" },
  { href: "#demo", label: "Request a Demo" },
];

// NOTE: "hello@pyllar.com" is a placeholder contact address for this
// pre-launch marketing site. Replace with the real support/sales inbox
// once the domain and mailbox are set up.
const CONTACT_EMAIL = "hello@pyllar.com";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight text-slate-900">
            Pyllar
          </p>
          <p className="mt-1 text-sm text-slate-500">
            One system for youth, staff, and everyday operations.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-slate-500">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-teal-700 hover:text-teal-800"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-400">
        © {year} Pyllar. All rights reserved.
      </div>
    </footer>
  );
}
