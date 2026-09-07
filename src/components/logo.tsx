import Link from "next/link";

/**
 * Simple, original wordmark + icon treatment for "Pyllar" (no external logo
 * asset exists yet, so this is a clean, code-drawn mark rather than a
 * fabricated logo image). The icon is three vertical bars evoking
 * "pillars" — easy to reproduce consistently at any size.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-teal-700 shadow-sm ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[55%] w-[55%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="4" width="4" height="16" rx="1.5" fill="white" />
        <rect x="10" y="2" width="4" height="18" rx="1.5" fill="white" />
        <rect x="17" y="7" width="4" height="13" rx="1.5" fill="white" />
      </svg>
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-lg font-semibold tracking-tight text-slate-900 ${className}`}
    >
      Pyllar
    </span>
  );
}

export function Logo({
  className,
  wordmarkClassName,
}: {
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <LogoMark className={className} />
      <Wordmark className={wordmarkClassName} />
    </Link>
  );
}
