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
        className="border-accent/30 bg-accent/[0.08] rounded-2xl p-6 text-center shadow-[0_10px_40px_-12px_var(--accent-glow)]"
      >
        <h3 className="font-heading text-fg-strong text-lg font-semibold">
          Thanks — we&apos;ve got your request.
        </h3>
        <p className="text-fg-muted mt-2 text-sm">
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
            className="text-fg text-sm font-medium block"
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
            className="border-line text-fg-strong placeholder:text-fg-subtle focus:border-accent/60 focus:ring-accent/40 mt-2 block w-full rounded-lg border bg-black/[0.02] px-3.5 py-2.5 transition-colors focus:ring-1 focus:outline-none dark:bg-white/[0.04]"
          />
          {fieldErrors.name ? (
            <p
              id={`${formId}-name-error`}
              className="mt-1 text-xs text-rose-600 dark:text-rose-400"
            >
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`${formId}-email`}
            className="text-fg text-sm font-medium block"
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
            className="border-line text-fg-strong placeholder:text-fg-subtle focus:border-accent/60 focus:ring-accent/40 mt-2 block w-full rounded-lg border bg-black/[0.02] px-3.5 py-2.5 transition-colors focus:ring-1 focus:outline-none dark:bg-white/[0.04]"
          />
          {fieldErrors.email ? (
            <p
              id={`${formId}-email-error`}
              className="mt-1 text-xs text-rose-600 dark:text-rose-400"
            >
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          htmlFor={`${formId}-organization`}
          className="text-fg text-sm font-medium block"
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
          className="border-line text-fg-strong placeholder:text-fg-subtle focus:border-accent/60 focus:ring-accent/40 mt-2 block w-full rounded-lg border bg-black/[0.02] px-3.5 py-2.5 transition-colors focus:ring-1 focus:outline-none dark:bg-white/[0.04]"
        />
        {fieldErrors.organization ? (
          <p
            id={`${formId}-organization-error`}
            className="mt-1 text-xs text-rose-600 dark:text-rose-400"
          >
            {fieldErrors.organization}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${formId}-phone`}
          className="text-fg text-sm font-medium block"
        >
          Phone <span className="text-fg-subtle font-normal">(optional)</span>
        </label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          className="border-line text-fg-strong placeholder:text-fg-subtle focus:border-accent/60 focus:ring-accent/40 mt-2 block w-full rounded-lg border bg-black/[0.02] px-3.5 py-2.5 transition-colors focus:ring-1 focus:outline-none dark:bg-white/[0.04]"
        />
      </div>

      <div>
        <label
          htmlFor={`${formId}-notes`}
          className="text-fg text-sm font-medium block"
        >
          Anything we should know?{" "}
          <span className="text-fg-subtle font-normal">(optional)</span>
        </label>
        <textarea
          id={`${formId}-notes`}
          name="notes"
          rows={3}
          placeholder="Number of youth/beds, current tools, timeline, questions..."
          className="border-line text-fg-strong placeholder:text-fg-subtle focus:border-accent/60 focus:ring-accent/40 mt-2 block w-full rounded-lg border bg-black/[0.02] px-3.5 py-2.5 transition-colors focus:ring-1 focus:outline-none dark:bg-white/[0.04]"
        />
      </div>

      <div aria-live="polite">
        {status === "error" && errorMessage ? (
          <p className="text-sm text-rose-600 dark:text-rose-400">{errorMessage}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-accent w-full rounded-full px-4 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending..." : "Request a Demo"}
      </button>

      <p className="text-fg-subtle text-center text-xs">
        This is a request form, not a self-serve sign-up — a member of our
        team reviews every request and follows up personally.
      </p>
    </form>
  );
}
