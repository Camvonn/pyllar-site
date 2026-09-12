import { Reveal } from "@/components/reveal";

/**
 * Shared centered section header — monospace eyebrow, gradient display
 * heading, supporting paragraph. Used across the homepage and inner pages so
 * every section shares one consistent rhythm.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";

  return (
    <Reveal>
      <div
        className={
          centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"
        }
      >
        {eyebrow ? (
          <p
            className={`eyebrow flex items-center gap-2.5 text-teal-400 ${
              centered ? "justify-center" : ""
            }`}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-teal-400" />
            {eyebrow}
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-teal-400" />
          </p>
        ) : null}
        <h2 className="font-heading text-gradient mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-[2.6rem]">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
