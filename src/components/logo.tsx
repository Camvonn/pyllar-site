import Link from "next/link";

/**
 * Original wordmark + icon treatment for "Pyllar" (no external logo asset
 * exists yet, so this is a clean, code-drawn mark rather than a fabricated
 * logo image).
 *
 * The mark is three ascending "pillars" rendered in the brand gradient, with
 * a capping bar across the top — reading as both a colonnade and a bar chart,
 * which suits an operations/reporting product. It carries its own glow so it
 * holds up against the dark background at any size.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`relative inline-flex shrink-0 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-teal-400/25 to-sky-500/10 shadow-[0_0_20px_-6px_rgba(45,212,191,0.85)] backdrop-blur-sm ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[62%] w-[62%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pyllar-mark" x1="0" y1="24" x2="24" y2="0">
            <stop stopColor="#2dd4bf" />
            <stop offset="0.55" stopColor="#5eead4" />
            <stop offset="1" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <rect x="2.5" y="4" width="3.5" height="17" rx="1.75" fill="url(#pyllar-mark)" />
        <rect x="9.5" y="8" width="3.5" height="13" rx="1.75" fill="url(#pyllar-mark)" opacity="0.75" />
        <rect x="16.5" y="11" width="3.5" height="10" rx="1.75" fill="url(#pyllar-mark)" opacity="0.5" />
        <rect x="2.5" y="1.5" width="17.5" height="2" rx="1" fill="url(#pyllar-mark)" />
      </svg>
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-heading text-lg font-bold tracking-tight text-white ${className}`}
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
    <Link
      href="/"
      className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
    >
      <LogoMark className={className} />
      <Wordmark className={wordmarkClassName} />
    </Link>
  );
}
