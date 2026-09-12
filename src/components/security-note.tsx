import { ShieldCheck, KeyRound, ScrollText } from "lucide-react";
import { Reveal } from "@/components/reveal";

const PILLARS = [
  {
    icon: KeyRound,
    title: "Role-based access",
    body: "Staff and administrators only see the records relevant to their job — nothing more.",
  },
  {
    icon: ScrollText,
    title: "CARF-oriented reporting",
    body: "Reporting views are organized around the metrics accreditation reviews ask for.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy by design",
    body: "Sensitive youth and staff records are treated as the default, not an add-on.",
  },
];

export function SecurityNote({ compact = false }: { compact?: boolean }) {
  return (
    <section
      aria-labelledby="security-heading"
      className={`relative ${compact ? "py-20" : "py-24 sm:py-32"}`}
    >
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/25 bg-gradient-to-br from-violet-400/25 to-violet-600/10 shadow-[0_0_28px_-8px_rgba(167,139,250,0.9)]">
            <ShieldCheck className="h-7 w-7 text-violet-300" aria-hidden />
          </span>
          <h2
            id="security-heading"
            className="font-heading text-gradient mt-6 text-3xl font-bold tracking-tight sm:text-[2.6rem]"
          >
            Built with security and privacy in mind
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-400">
            Group homes and residential facilities handle some of the most
            sensitive information there is. Pyllar is built around
            least-privilege access from the ground up.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delayMs={index * 90}>
              <div className="glass h-full rounded-2xl p-6">
                <pillar.icon
                  className="h-5 w-5 text-violet-300"
                  aria-hidden
                />
                <h3 className="font-heading mt-4 text-base font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="glass mx-auto max-w-3xl rounded-xl px-6 py-4 text-center text-sm leading-relaxed text-slate-400">
            <strong className="font-semibold text-slate-200">
              To be clear:
            </strong>{" "}
            Pyllar does not currently hold HIPAA, CARF, or any other
            compliance certification. If certifications are a requirement for
            your organization, ask us about our roadmap when you request a
            demo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
