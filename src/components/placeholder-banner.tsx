import { AlertTriangle } from "lucide-react";

export function PlaceholderBanner({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="note"
      className="flex gap-3 rounded-xl border border-amber-400/25 bg-amber-400/[0.07] p-4 text-sm text-amber-200/90"
    >
      <AlertTriangle
        className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
        aria-hidden
      />
      <p>{children}</p>
    </div>
  );
}
