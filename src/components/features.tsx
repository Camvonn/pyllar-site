import {
  Users,
  AlertTriangle,
  Pill,
  CalendarDays,
  BadgeCheck,
  Wallet,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Users,
    title: "Youth Management",
    description:
      "Complete youth profiles — demographics, legal status, placement history, caseworker/CASA contacts, school, insurance, and allergies — in one searchable place.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Reporting",
    description:
      "Document behavioral, medical, and safety incidents with severity, follow-ups, and prevention strategies. Filter by type, severity, youth, and status.",
  },
  {
    icon: Pill,
    title: "Medications",
    description:
      "Track prescriptions, administration times, and PRN doses. Record who gave what and when, and flag missed or refused doses.",
  },
  {
    icon: CalendarDays,
    title: "Scheduling",
    description:
      "Appointments, therapy, court dates, school, and transport in one calendar. Assign youth and staff, set priority, and keep everyone in sync.",
  },
  {
    icon: BadgeCheck,
    title: "Staff Records & Compliance",
    description:
      "An HR hub for onboarding, background checks, training, licenses, and evaluations — with role-based visibility into what each team member can see.",
  },
  {
    icon: Wallet,
    title: "Finance",
    description:
      "Per diem tracking by youth, budgets by category, and expenses with receipts — with optional scoping across multiple facilities.",
  },
  {
    icon: BarChart3,
    title: "Analytics & CARF Reporting",
    description:
      "Dashboards for incident trends, medication compliance, and outcomes — with CARF-oriented metrics designed to make reporting season easier.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything your facility runs on, in one portal
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pyllar replaces scattered spreadsheets, binders, and disconnected
            tools with a single system built around how group homes and
            residential youth facilities actually operate.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-200 bg-slate-50/60 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-600/10 text-teal-700">
                <feature.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
