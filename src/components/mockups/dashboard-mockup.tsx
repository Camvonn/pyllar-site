import { Chip, MockButton, MockPanel, MockupFrame } from "./mockup-frame";

const STATS = [
  {
    label: "Youth in care",
    value: "42",
    bar: "from-teal-400 to-teal-300",
    text: "text-teal-300",
  },
  {
    label: "Open incidents",
    value: "3",
    bar: "from-amber-400 to-amber-300",
    text: "text-amber-300",
  },
  {
    label: "Meds due today",
    value: "12",
    bar: "from-sky-400 to-sky-300",
    text: "text-sky-300",
  },
];

const CHART_BARS = [40, 65, 50, 80, 55, 70, 60];

const SCHEDULE = [
  { time: "9:00", label: "Court appearance" },
  { time: "1:30", label: "Therapy — group session" },
  { time: "4:00", label: "School pickup" },
];

/**
 * Illustrative "dashboard overview" mockup used as the homepage hero image.
 * Entirely code-drawn (no real product data or screenshots) — see
 * MockupFrame for the accessibility/labeling approach.
 */
export function DashboardMockup() {
  return (
    <MockupFrame title="app.pyllar.com/overview">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
          This week
        </p>
        <MockButton width="w-20" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {STATS.map((stat) => (
          <MockPanel key={stat.label} className="overflow-hidden p-3">
            <div
              className={`-mx-3 -mt-3 mb-3 h-0.5 bg-gradient-to-r ${stat.bar}`}
            />
            <p className={`font-heading text-xl font-bold ${stat.text}`}>
              {stat.value}
            </p>
            <p className="mt-1 text-[10px] leading-tight text-slate-500">
              {stat.label}
            </p>
          </MockPanel>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <MockPanel className="p-3">
          <p className="text-[10px] font-medium text-slate-400">
            Incident trends
          </p>
          <div className="mt-3 flex h-20 items-end gap-1.5">
            {CHART_BARS.map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-gradient-to-t from-teal-500/30 via-teal-400 to-sky-300 shadow-[0_0_12px_-2px_rgba(45,212,191,0.7)]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </MockPanel>

        <MockPanel className="p-3">
          <p className="text-[10px] font-medium text-slate-400">
            Today&apos;s schedule
          </p>
          <ul className="mt-3 space-y-2.5">
            {SCHEDULE.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 text-[11px] text-slate-400"
              >
                <Chip>{item.time}</Chip>
                <span className="truncate">{item.label}</span>
              </li>
            ))}
          </ul>
        </MockPanel>
      </div>
    </MockupFrame>
  );
}
