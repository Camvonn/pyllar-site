import {
  Chip,
  MockButton,
  MockPanel,
  MockupFrame,
  SkeletonLine,
} from "./mockup-frame";

const NAV_ITEMS = [
  { label: "Overview", active: true },
  { label: "Youth" },
  { label: "Incidents" },
  { label: "Medications" },
  { label: "Scheduling" },
  { label: "Staff" },
  { label: "Finance" },
  { label: "Reports" },
];

const ON_TRACK =
  "bg-teal-500/12 text-teal-700 ring-teal-500/25 dark:bg-teal-400/15 dark:text-teal-300 dark:ring-teal-400/25";
const REVIEW =
  "bg-amber-500/12 text-amber-700 ring-amber-500/25 dark:bg-amber-400/15 dark:text-amber-300 dark:ring-amber-400/25";

const ROSTER = [
  { tone: ON_TRACK, label: "On track" },
  { tone: ON_TRACK, label: "On track" },
  { tone: REVIEW, label: "Review" },
  { tone: ON_TRACK, label: "On track" },
];

const SUMMARY = [
  { label: "Youth in care", value: "42" },
  { label: "Facilities", value: "3" },
  { label: "Open tasks", value: "7" },
];

/**
 * A larger, wider "full app" mockup used for the one full-width showcase
 * section on the homepage — a sidebar + top bar + roster table, to give a
 * sense of the whole portal rather than a single feature. Entirely
 * code-drawn and captioned as illustrative (see MockupFrame).
 */
export function PlatformMockup() {
  return (
    <MockupFrame title="app.pyllar.com">
      <div className="grid grid-cols-[9rem_1fr] gap-5 sm:grid-cols-[11rem_1fr]">
        <nav className="border-mock-line space-y-1 border-r pr-3">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`rounded-md px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                item.active
                  ? "bg-gradient-to-r from-teal-500/20 to-transparent text-teal-700 shadow-[inset_2px_0_0_0_var(--accent)] dark:from-teal-400/20 dark:text-teal-300"
                  : "text-fg-subtle"
              }`}
            >
              {item.label}
            </div>
          ))}
        </nav>

        <div>
          <div className="flex items-center justify-between">
            <SkeletonLine width="w-32" />
            <MockButton width="w-20" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {SUMMARY.map((stat) => (
              <MockPanel key={stat.label} className="p-2.5">
                <p className="font-heading text-fg-strong text-base font-bold">
                  {stat.value}
                </p>
                <p className="text-fg-subtle mt-0.5 text-[10px]">
                  {stat.label}
                </p>
              </MockPanel>
            ))}
          </div>

          <MockPanel className="mt-4 overflow-hidden">
            <div className="border-mock-line text-fg-subtle grid grid-cols-[1fr_auto] gap-3 border-b bg-black/[0.02] px-3 py-2 font-mono text-[9px] tracking-[0.16em] uppercase dark:bg-white/[0.03]">
              <span>Youth</span>
              <span>Status</span>
            </div>
            {ROSTER.map((row, index) => (
              <div
                key={index}
                className="border-mock-line grid grid-cols-[1fr_auto] items-center gap-3 border-b px-3 py-2.5 last:border-0"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-teal-400 to-sky-600 shadow-[0_0_10px_-2px_var(--accent-glow)]" />
                  <SkeletonLine width="w-20" />
                </div>
                <Chip tone={row.tone}>{row.label}</Chip>
              </div>
            ))}
          </MockPanel>
        </div>
      </div>
    </MockupFrame>
  );
}
