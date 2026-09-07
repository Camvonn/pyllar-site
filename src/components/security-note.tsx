import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function SecurityNote({ compact = false }: { compact?: boolean }) {
  return (
    <section
      aria-labelledby="security-heading"
      className={compact ? "bg-slate-50 py-16" : "bg-slate-50 py-20 sm:py-24"}
    >
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-sm">
          <ShieldCheck className="h-6 w-6" aria-hidden />
        </span>
        <h2
          id="security-heading"
          className="font-heading mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Built with security and privacy in mind
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Group homes and residential facilities handle some of the most
          sensitive information there is. Pyllar is built around role-based
          access, so staff and administrators only see the records relevant
          to their job, and reporting is organized with CARF-oriented metrics
          in mind.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          To be clear: Pyllar does not currently hold HIPAA, CARF, or any
          other compliance certification. If certifications are a
          requirement for your organization, ask us about our roadmap when
          you request a demo.
        </p>
      </Reveal>
    </section>
  );
}
