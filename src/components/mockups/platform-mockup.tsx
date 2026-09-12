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

const ROSTER = [
  { tone: "bg-teal-400/15 text-teal-300 ring-teal-400/25", label: "On track" },
  { tone: "bg-teal-400/15 text-teal-300 ring-teal-400/25", label: "On track" },
  {
    tone: "bg-amber-400/15 text-amber-300 ring-amber-400/25",
    label: "Review",
  },
  { tone: "bg-teal-400/15 text-teal-300 ring-teal-400/25", label: "On track" },
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
        <nav className="space-y-1 border-r border-white/[0.07] pr-3">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`rounded-md px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                item.active
                  ? "bg-gradient-to-r from-teal-400/20 to-transparent text-teal-300 shadow-[inset_2px_0_0_0_rgba(45,212,191,0.9)]"
                  : "text-slate-500"
              }`}
            >
              {item.label}
            </div>
          ))}
        </nav>

        <div>
          <div className="flex items-center justify-between">
            <SkeletonLine width="w-32" tone="bg-white/20" />
            <MockButton width="w-20" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {SUMMARY.map((stat) => (
              <MockPanel key={stat.label} className="p-2.5">
                <p className="font-heading text-base font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] text-slate-500">
                  {stat.label}
                </p>
              </MockPanel>
            ))}
          </div>

          <MockPanel className="mt-4 overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-white/[0.07] bg-white/[0.03] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
              <span>Youth</span>
              <span>Status</span>
            </div>
            {ROSTER.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-white/[0.04] px-3 py-2.5 last:border-0"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-teal-300 to-sky-500 shadow-[0_0_10px_-2px_rgba(45,212,191,0.8)]" />
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
