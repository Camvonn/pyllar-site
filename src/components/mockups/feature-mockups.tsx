import { Chip, MockupFrame, SkeletonLine } from "./mockup-frame";

/**
 * Illustrative, abstract UI mockups for individual features on the
 * /features page. Entirely code-drawn — no real product data or
 * screenshots (the actual Pyllar app UI lives in a separate,
 * still-in-progress repo). See MockupFrame for the accessibility/labeling
 * approach.
 */

export function ProfileMockup() {
  return (
    <MockupFrame title="Pyllar — Youth Profile">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-teal-100" />
        <div className="flex-1 space-y-1.5">
          <SkeletonLine width="w-24" tone="bg-slate-300" />
          <SkeletonLine width="w-16" />
        </div>
        <Chip>Active</Chip>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3">
        {["Placement", "Caseworker", "School", "Allergies"].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-slate-100 p-2.5"
          >
            <dt className="text-[10px] text-slate-400">{label}</dt>
            <dd className="mt-1.5">
              <SkeletonLine width="w-3/4" tone="bg-slate-300" />
            </dd>
          </div>
        ))}
      </dl>
    </MockupFrame>
  );
}

const INCIDENTS = [
  { tone: "bg-teal-100 text-teal-700", label: "Low" },
  { tone: "bg-amber-100 text-amber-700", label: "Medium" },
  { tone: "bg-teal-100 text-teal-700", label: "Low" },
];

export function IncidentsMockup() {
  return (
    <MockupFrame title="Pyllar — Incidents">
      <div className="space-y-2.5">
        {INCIDENTS.map((incident, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-lg border border-slate-100 p-2.5"
          >
            <SkeletonLine width="w-10" tone="bg-slate-300" />
            <SkeletonLine width="w-full" />
            <Chip tone={incident.tone}>{incident.label}</Chip>
          </div>
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
    <MockupFrame title="Pyllar — Scheduling">
      <div className="grid grid-cols-7 gap-1.5">
        {CALENDAR_DAYS.map((day, index) => (
          <span
            key={index}
            className="text-center text-[10px] font-medium text-slate-400"
          >
            {day}
          </span>
        ))}
        {cells.map((cell) => (
          <div
            key={cell}
            className={`h-6 rounded ${
              HIGHLIGHTED_CELLS.has(cell) ? "bg-teal-500/80" : "bg-slate-100"
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
    <MockupFrame title="Pyllar — Analytics">
      <div className="flex h-24 items-end gap-2">
        {ANALYTICS_BARS.map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t bg-gradient-to-t from-teal-600 to-teal-400"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Chip>Med compliance 94%</Chip>
        <Chip tone="bg-sky-100 text-sky-700">Incidents ↓ 12%</Chip>
      </div>
    </MockupFrame>
  );
}
