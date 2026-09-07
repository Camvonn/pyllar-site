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

export type FeatureCategory = "care" | "operations" | "insights";

export type Feature = {
  slug: string;
  icon: LucideIcon;
  title: string;
  /** One-sentence version used in condensed views (e.g. the homepage). */
  short: string;
  /** Fuller description used on the dedicated Features page. */
  long: string;
  bullets: string[];
  category: FeatureCategory;
};

export const FEATURE_CATEGORIES: Record<
  FeatureCategory,
  { label: string; description: string }
> = {
  care: {
    label: "Care & Safety",
    description:
      "The day-to-day record-keeping that keeps every youth's care consistent, even across shifts.",
  },
  operations: {
    label: "Day-to-Day Operations",
    description:
      "The scheduling, staffing, and finance tools that keep a facility running smoothly.",
  },
  insights: {
    label: "Insights & Reporting",
    description:
      "Turn what your team already logs into dashboards and reports you can act on.",
  },
};

export const FEATURES: Feature[] = [
  {
    slug: "youth-management",
    icon: Users,
    title: "Youth Management",
    short:
      "Centralized youth profiles — demographics, legal status, placement history, and key contacts in one place.",
    long: "Every youth's profile brings together demographics, legal and placement status, caseworker and CASA contact information, school and insurance details, and allergies — so staff aren't hunting across binders and spreadsheets during a shift change or a crisis.",
    bullets: [
      "Placement and legal status history",
      "Caseworker, CASA, and guardian contacts in one place",
      "School, insurance, and allergy details on hand",
      "Search and filter across your full census",
    ],
    category: "care",
  },
  {
    slug: "incident-reporting",
    icon: AlertTriangle,
    title: "Incident Reporting",
    short:
      "Document behavioral, medical, and safety incidents with the detail your program expects.",
    long: "Capture incidents as they happen with structured fields for type, severity, involved parties, and follow-up actions. Filter by youth, incident type, severity, or status when it's time to review trends or prepare materials for an audit.",
    bullets: [
      "Structured incident types and severity levels",
      "Follow-up and prevention-strategy notes",
      "Filter and review by youth, type, or status",
      "Full incident history tied to each youth's profile",
    ],
    category: "care",
  },
  {
    slug: "medications",
    icon: Pill,
    title: "Medications",
    short:
      "Track prescriptions, administration times, and PRN doses — with a clear record of who gave what and when.",
    long: "Keep a shared record of prescriptions, scheduled administration times, and as-needed (PRN) doses. Staff log each dose as it's given, and missed or refused doses are flagged so nothing quietly falls through the cracks.",
    bullets: [
      "Scheduled and PRN dose tracking",
      "Missed-dose and refusal flags",
      "Administration history by staff member",
      "One shared record instead of a paper med binder",
    ],
    category: "care",
  },
  {
    slug: "scheduling",
    icon: CalendarDays,
    title: "Scheduling",
    short:
      "Appointments, therapy, court dates, school, and transport — one calendar your whole team can see.",
    long: "Bring every kind of appointment — therapy sessions, court dates, school events, medical visits, and transport — into a shared calendar. Assign youth and staff, set priority, and give your team one place to check instead of piecing together sticky notes and text threads.",
    bullets: [
      "One shared calendar across appointment types",
      "Assign youth and staff to each event",
      "Priority flags for time-sensitive appointments",
      "Fewer missed pickups and double-bookings",
    ],
    category: "operations",
  },
  {
    slug: "staff-records",
    icon: BadgeCheck,
    title: "Staff Records & Compliance",
    short:
      "An HR hub for onboarding, background checks, training, and licensing — with role-based visibility.",
    long: "Track onboarding checklists, background checks, required training, licenses, and performance evaluations in one place. Role-based access means each team member sees what's relevant to their job — nothing more, nothing less.",
    bullets: [
      "Onboarding checklists and background checks",
      "Training and certification tracking",
      "Role-based visibility into staff records",
      "Performance evaluation history",
    ],
    category: "operations",
  },
  {
    slug: "finance",
    icon: Wallet,
    title: "Finance",
    short:
      "Per diem tracking by youth, budgets by category, and expenses with receipts.",
    long: "Track per diem reimbursements by youth, manage budgets by category, and log expenses with receipts — with optional scoping across multiple facilities for organizations that operate more than one home.",
    bullets: [
      "Per diem tracking by youth",
      "Budgets broken out by category",
      "Expense logging with receipts",
      "Optional multi-facility scoping",
    ],
    category: "operations",
  },
  {
    slug: "analytics-reporting",
    icon: BarChart3,
    title: "Analytics & CARF Reporting",
    short:
      "Dashboards for incident trends, medication compliance, and outcomes — built with CARF-oriented reporting in mind.",
    long: "Get dashboards that surface incident trends, medication compliance, and program outcomes over time. Reporting views are organized with CARF-oriented metrics in mind, so pulling together information for an accreditation review is less of a scramble.",
    bullets: [
      "Incident trend dashboards",
      "Medication compliance views",
      "Outcome tracking over time",
      "CARF-oriented reporting layouts",
    ],
    category: "insights",
  },
];

export function featuresByCategory(category: FeatureCategory): Feature[] {
  return FEATURES.filter((feature) => feature.category === category);
}
