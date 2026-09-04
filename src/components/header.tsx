import Link from "next/link";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#testimonial", label: "Why Pyllar" },
  { href: "#pricing", label: "Pricing" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 font-semibold text-white">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Pyllar
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
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

        <a
          href="#demo"
          className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
        >
          Request a Demo
        </a>
      </div>
    </header>
  );
}
