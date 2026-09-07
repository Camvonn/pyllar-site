import { Chip, MockButton, MockupFrame, SkeletonLine } from "./mockup-frame";

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
  { tone: "bg-teal-100 text-teal-700", label: "On track" },
  { tone: "bg-teal-100 text-teal-700", label: "On track" },
  { tone: "bg-amber-100 text-amber-700", label: "Review" },
  { tone: "bg-teal-100 text-teal-700", label: "On track" },
];

/**
 * A larger, wider "full app" mockup used for the one full-width showcase
 * section on the homepage — a sidebar + top bar + roster table, to give a
 * sense of the whole portal rather than a single feature. Entirely
 * code-drawn and captioned as illustrative (see MockupFrame).
 */
export function PlatformMockup() {
  return (
    <MockupFrame title="Pyllar — app.pyllar.com">
      <div className="grid grid-cols-[9rem_1fr] gap-4 sm:grid-cols-[10rem_1fr]">
        <nav className="space-y-1 border-r border-slate-100 pr-3">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`rounded-md px-2.5 py-1.5 text-[11px] font-medium ${
                item.active
                  ? "bg-teal-50 text-teal-700"
                  : "text-slate-500"
              }`}
            >
              {item.label}
            </div>
          ))}
        </nav>

        <div>
          <div className="flex items-center justify-between">
            <SkeletonLine width="w-32" tone="bg-slate-300" />
            <MockButton width="w-20" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: "Youth in care", value: "42" },
              { label: "Facilities", value: "3" },
              { label: "Open tasks", value: "7" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg bg-slate-50 p-2.5"
              >
                <p className="text-base font-semibold text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 overflow-hidden rounded-lg border border-slate-100">
            <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-slate-100 bg-slate-50 px-3 py-2 text-[10px] font-semibold text-slate-400">
              <span>Youth</span>
              <span>Status</span>
            </div>
            {ROSTER.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-slate-50 px-3 py-2 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-teal-400 to-teal-600" />
                  <SkeletonLine width="w-20" />
                </div>
                <Chip tone={row.tone}>{row.label}</Chip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
