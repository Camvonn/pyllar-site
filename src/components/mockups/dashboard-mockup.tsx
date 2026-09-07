import { Chip, MockButton, MockupFrame } from "./mockup-frame";

const STATS = [
  { label: "Youth in care", value: "42", accent: "border-teal-400" },
  { label: "Open incidents", value: "3", accent: "border-amber-400" },
  { label: "Meds due today", value: "12", accent: "border-sky-400" },
];

const CHART_BARS = [40, 65, 50, 80, 55, 70, 60];

const SCHEDULE = [
  "Court appearance",
  "Therapy — group session",
  "School pickup",
];

/**
 * Illustrative "dashboard overview" mockup used as the homepage hero image.
 * Entirely code-drawn (no real product data or screenshots) — see
 * MockupFrame for the accessibility/labeling approach.
 */
export function DashboardMockup() {
  return (
    <MockupFrame title="Pyllar — Overview">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-slate-500">This week</p>
        <MockButton width="w-20" />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-lg border-l-4 ${stat.accent} bg-slate-50 p-3`}
          >
            <p className="text-lg font-semibold text-slate-900">
              {stat.value}
            </p>
            <p className="mt-1 text-[11px] leading-tight text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-100 p-3">
          <p className="text-[11px] font-medium text-slate-500">
            Incident trends
          </p>
          <div className="mt-3 flex h-20 items-end gap-1.5">
            {CHART_BARS.map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-gradient-to-t from-teal-600 to-teal-400"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-100 p-3">
          <p className="text-[11px] font-medium text-slate-500">
            Today&apos;s schedule
          </p>
          <ul className="mt-3 space-y-2.5">
            {SCHEDULE.map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[11px] text-slate-500"
              >
                <Chip>{["9:00", "1:30", "4:00"][index]}</Chip>
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MockupFrame>
  );
}
