import {
  Chip,
  MockButton,
  MockPanel,
  MockupFrame,
  SkeletonLine,
} from "./mockup-frame";

/**
 * Illustrative, abstract UI mockups for individual features on the
 * /features page. Entirely code-drawn — no real product data or
 * screenshots (the actual Pyllar app UI lives in a separate,
 * still-in-progress repo). See MockupFrame for the accessibility/labeling
 * approach.
 */

export function ProfileMockup() {
  return (
    <MockupFrame title="app.pyllar.com/youth">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-teal-400 to-sky-600 shadow-[0_0_14px_-2px_var(--accent-glow)]" />
        <div className="flex-1 space-y-1.5">
          <SkeletonLine width="w-24" />
          <SkeletonLine width="w-16" />
        </div>
        <Chip>Active</Chip>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3">
        {["Placement", "Caseworker", "School", "Allergies"].map((label) => (
          <MockPanel key={label} className="p-2.5">
            <dt className="text-fg-subtle text-[10px]">{label}</dt>
            <dd className="mt-1.5">
              <SkeletonLine width="w-3/4" />
            </dd>
          </MockPanel>
        ))}
      </dl>
      <div className="mt-4 flex justify-end">
        <MockButton width="w-24" />
      </div>
    </MockupFrame>
  );
}

const LOW =
  "bg-teal-500/12 text-teal-700 ring-teal-500/25 dark:bg-teal-400/15 dark:text-teal-300 dark:ring-teal-400/25";
const MEDIUM =
  "bg-amber-500/12 text-amber-700 ring-amber-500/25 dark:bg-amber-400/15 dark:text-amber-300 dark:ring-amber-400/25";

const INCIDENTS = [
  { tone: LOW, label: "Low" },
  { tone: MEDIUM, label: "Medium" },
  { tone: LOW, label: "Low" },
];

export function IncidentsMockup() {
  return (
    <MockupFrame title="app.pyllar.com/incidents">
      <div className="flex items-center justify-between">
        <p className="text-fg-subtle font-mono text-[10px] tracking-[0.18em] uppercase">
          Recent incidents
        </p>
        <MockButton width="w-20" />
      </div>
      <div className="mt-3 space-y-2.5">
        {INCIDENTS.map((incident, index) => (
          <MockPanel key={index} className="flex items-center gap-3 p-2.5">
            <SkeletonLine width="w-10" />
            <SkeletonLine width="w-full" />
            <Chip tone={incident.tone}>{incident.label}</Chip>
          </MockPanel>
        ))}
      </div>
    </MockupFrame>
  );
}

const CALENDAR_DAYS = ["S", "M", "T", "W", "T", "F", "S"];
const HIGHLIGHTED_CELLS = new Set([9, 14, 22]);

export function ScheduleMockup() {
  const cells = Array.from({ length: 28 }, (_, index) => index);

  return (
    <MockupFrame title="app.pyllar.com/schedule">
      <div className="flex items-center justify-between">
        <p className="text-fg-subtle font-mono text-[10px] tracking-[0.18em] uppercase">
          This month
        </p>
        <MockButton width="w-20" />
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1.5">
        {CALENDAR_DAYS.map((day, index) => (
          <span
            key={index}
            className="text-fg-subtle text-center text-[10px] font-medium"
          >
            {day}
          </span>
        ))}
        {cells.map((cell) => (
          <div
            key={cell}
            className={`h-6 rounded ${
              HIGHLIGHTED_CELLS.has(cell)
                ? "bg-gradient-to-br from-teal-400 to-sky-600 shadow-[0_0_12px_-3px_var(--accent-glow)]"
                : "bg-mock-panel"
            }`}
          />
        ))}
      </div>
    </MockupFrame>
  );
}

const ANALYTICS_BARS = [30, 55, 40, 70, 60, 85, 50];

export function AnalyticsMockup() {
  return (
    <MockupFrame title="app.pyllar.com/reports">
      <div className="flex h-24 items-end gap-2">
        {ANALYTICS_BARS.map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t bg-gradient-to-t from-teal-600 via-teal-500 to-sky-400 shadow-[0_4px_10px_-3px_rgba(13,148,136,0.6)] dark:from-teal-500/25 dark:via-teal-400 dark:to-sky-300 dark:shadow-[0_0_12px_-2px_rgba(45,212,191,0.7)]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Chip>Med compliance 94%</Chip>
        <Chip tone="bg-sky-500/12 text-sky-700 ring-sky-500/25 dark:bg-sky-400/15 dark:text-sky-300 dark:ring-sky-400/25">
          Incidents ↓ 12%
        </Chip>
      </div>
    </MockupFrame>
  );
}
