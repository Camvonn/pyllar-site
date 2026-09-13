import { Chip, MockButton, MockPanel, MockupFrame } from "./mockup-frame";

const STATS = [
  {
    label: "Youth in care",
    value: "42",
    bar: "from-teal-500 to-teal-400 dark:from-teal-400 dark:to-teal-300",
    text: "text-teal-600 dark:text-teal-300",
  },
  {
    label: "Open incidents",
    value: "3",
    bar: "from-amber-500 to-amber-400 dark:from-amber-400 dark:to-amber-300",
    text: "text-amber-600 dark:text-amber-300",
  },
  {
    label: "Meds due today",
    value: "12",
    bar: "from-sky-500 to-sky-400 dark:from-sky-400 dark:to-sky-300",
    text: "text-sky-600 dark:text-sky-300",
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
        <p className="text-fg-subtle font-mono text-[10px] tracking-[0.18em] uppercase">
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
            <p className="text-fg-subtle mt-1 text-[10px] leading-tight">
              {stat.label}
            </p>
          </MockPanel>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <MockPanel className="p-3">
          <p className="text-fg-muted text-[10px] font-medium">
            Incident trends
          </p>
          <div className="mt-3 flex h-20 items-end gap-1.5">
            {CHART_BARS.map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t bg-gradient-to-t from-teal-600 via-teal-500 to-sky-400 shadow-[0_4px_10px_-3px_rgba(13,148,136,0.6)] dark:from-teal-500/30 dark:via-teal-400 dark:to-sky-300 dark:shadow-[0_0_12px_-2px_rgba(45,212,191,0.7)]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </MockPanel>

        <MockPanel className="p-3">
          <p className="text-fg-muted text-[10px] font-medium">
            Today&apos;s schedule
          </p>
          <ul className="mt-3 space-y-2.5">
            {SCHEDULE.map((item) => (
              <li
                key={item.label}
                className="text-fg-muted flex items-center gap-2 text-[11px]"
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
