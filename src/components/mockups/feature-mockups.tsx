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
        <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-teal-300 to-sky-500 shadow-[0_0_14px_-2px_rgba(45,212,191,0.8)]" />
        <div className="flex-1 space-y-1.5">
          <SkeletonLine width="w-24" tone="bg-white/25" />
          <SkeletonLine width="w-16" />
        </div>
        <Chip>Active</Chip>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3">
        {["Placement", "Caseworker", "School", "Allergies"].map((label) => (
          <MockPanel key={label} className="p-2.5">
            <dt className="text-[10px] text-slate-500">{label}</dt>
            <dd className="mt-1.5">
              <SkeletonLine width="w-3/4" tone="bg-white/25" />
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

const INCIDENTS = [
  { tone: "bg-teal-400/15 text-teal-300 ring-teal-400/25", label: "Low" },
  { tone: "bg-amber-400/15 text-amber-300 ring-amber-400/25", label: "Medium" },
  { tone: "bg-teal-400/15 text-teal-300 ring-teal-400/25", label: "Low" },
];

export function IncidentsMockup() {
  return (
    <MockupFrame title="app.pyllar.com/incidents">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
          Recent incidents
        </p>
        <MockButton width="w-20" />
      </div>
      <div className="mt-3 space-y-2.5">
        {INCIDENTS.map((incident, index) => (
          <MockPanel
            key={index}
            className="flex items-center gap-3 p-2.5"
          >
            <SkeletonLine width="w-10" tone="bg-white/25" />
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
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
          This month
        </p>
        <MockButton width="w-20" />
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1.5">
        {CALENDAR_DAYS.map((day, index) => (
          <span
            key={index}
            className="text-center text-[10px] font-medium text-slate-500"
          >
            {day}
          </span>
        ))}
        {cells.map((cell) => (
          <div
            key={cell}
            className={`h-6 rounded ${
              HIGHLIGHTED_CELLS.has(cell)
                ? "bg-gradient-to-br from-teal-300 to-sky-500 shadow-[0_0_12px_-3px_rgba(45,212,191,0.9)]"
                : "bg-white/[0.05]"
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
            className="flex-1 rounded-t bg-gradient-to-t from-teal-500/25 via-teal-400 to-sky-300 shadow-[0_0_12px_-2px_rgba(45,212,191,0.7)]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Chip>Med compliance 94%</Chip>
        <Chip tone="bg-sky-400/15 text-sky-300 ring-sky-400/25">
          Incidents ↓ 12%
        </Chip>
      </div>
    </MockupFrame>
  );
}
