"use client";

import { useId, useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<Record<"name" | "email" | "organization", string>>;

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const formId = useId();

  function validate(payload: {
    name: string;
    email: string;
    organization: string;
  }): FieldErrors {
    const errors: FieldErrors = {};
    if (!payload.name.trim()) {
      errors.name = "Please enter your full name.";
    }
    if (!payload.email.trim()) {
      errors.email = "Please enter your work email.";
    } else if (!EMAIL_PATTERN.test(payload.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!payload.organization.trim()) {
      errors.organization = "Please enter your organization name.";
    }
    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      phone: String(formData.get("phone") ?? "") || undefined,
      notes: String(formData.get("notes") ?? "") || undefined,
    };

    const errors = validate(payload);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("error");
      setErrorMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your request. Please try again, or email us directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-teal-400/30 bg-teal-400/[0.08] p-6 text-center shadow-[0_0_40px_-12px_rgba(45,212,191,0.6)]"
      >
        <h3 className="font-heading text-lg font-semibold text-white">
          Thanks — we&apos;ve got your request.
        </h3>
        <p className="mt-2 text-sm text-slate-300">
          A member of our team will reach out shortly to schedule your demo.
          Pyllar demos are guided walkthroughs with our team — there&apos;s no
          self-serve sign-up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${formId}-name`}
            className="block text-sm font-medium text-slate-300"
          >
            Full name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={fieldErrors.name ? "true" : undefined}
            aria-describedby={
              fieldErrors.name ? `${formId}-name-error` : undefined
            }
            className="mt-2 block w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-slate-100 placeholder:text-slate-600 transition-colors focus:border-teal-400/60 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-teal-400/40"
          />
          {fieldErrors.name ? (
            <p
              id={`${formId}-name-error`}
              className="mt-1 text-xs text-rose-400"
            >
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`${formId}-email`}
            className="block text-sm font-medium text-slate-300"
          >
            Work email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={fieldErrors.email ? "true" : undefined}
            aria-describedby={
              fieldErrors.email ? `${formId}-email-error` : undefined
            }
            className="mt-2 block w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-slate-100 placeholder:text-slate-600 transition-colors focus:border-teal-400/60 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-teal-400/40"
          />
          {fieldErrors.email ? (
            <p
              id={`${formId}-email-error`}
              className="mt-1 text-xs text-rose-400"
            >
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          htmlFor={`${formId}-organization`}
          className="block text-sm font-medium text-slate-300"
        >
          Organization name
        </label>
        <input
          id={`${formId}-organization`}
          name="organization"
          type="text"
          required
          autoComplete="organization"
          aria-invalid={fieldErrors.organization ? "true" : undefined}
          aria-describedby={
            fieldErrors.organization
              ? `${formId}-organization-error`
              : undefined
          }
          className="mt-2 block w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-slate-100 placeholder:text-slate-600 transition-colors focus:border-teal-400/60 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-teal-400/40"
        />
        {fieldErrors.organization ? (
          <p
            id={`${formId}-organization-error`}
            className="mt-1 text-xs text-rose-400"
          >
            {fieldErrors.organization}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${formId}-phone`}
          className="block text-sm font-medium text-slate-300"
        >
          Phone <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-2 block w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-slate-100 placeholder:text-slate-600 transition-colors focus:border-teal-400/60 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-teal-400/40"
        />
      </div>

      <div>
        <label
          htmlFor={`${formId}-notes`}
          className="block text-sm font-medium text-slate-300"
        >
          Anything we should know?{" "}
          <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <textarea
          id={`${formId}-notes`}
          name="notes"
          rows={3}
          placeholder="Number of youth/beds, current tools, timeline, questions..."
          className="mt-2 block w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-slate-100 placeholder:text-slate-600 transition-colors focus:border-teal-400/60 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-teal-400/40"
        />
      </div>

      <div aria-live="polite">
        {status === "error" && errorMessage ? (
          <p className="text-sm text-rose-400">{errorMessage}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-gradient-to-r from-teal-400 to-sky-400 px-4 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_-8px_rgba(45,212,191,0.9)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_40px_-6px_rgba(45,212,191,1)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending..." : "Request a Demo"}
      </button>

      <p className="text-center text-xs text-slate-500">
        This is a request form, not a self-serve sign-up — a member of our
        team reviews every request and follows up personally.
      </p>
    </form>
  );
}
