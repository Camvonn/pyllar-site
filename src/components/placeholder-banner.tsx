import { AlertTriangle } from "lucide-react";

export function PlaceholderBanner({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="note"
      className="flex gap-3 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900"
    >
      <AlertTriangle
        className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
        aria-hidden
      />
      <p>{children}</p>
    </div>
  );
}
