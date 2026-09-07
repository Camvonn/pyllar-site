import { NextResponse } from "next/server";

type LeadPayload = {
  name: string;
  email: string;
  organization: string;
  phone?: string;
  notes?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidLead(value: unknown): value is LeadPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.name === "string" &&
    v.name.trim().length > 0 &&
    typeof v.email === "string" &&
    EMAIL_PATTERN.test(v.email.trim()) &&
    typeof v.organization === "string" &&
    v.organization.trim().length > 0 &&
    (v.phone === undefined || typeof v.phone === "string") &&
    (v.notes === undefined || typeof v.notes === "string")
  );
}

/**
 * Demo request lead capture.
 *
 * This intentionally does NOT implement the real demo-approval / shared
 * demo-environment workflow — that is being built separately in the main
 * Pyllar application repo. This route's only job is to accept the lead form
 * submission from the marketing site and hand it off for a human sales
 * follow-up.
 *
 * TODO(sales-ops): Wire this up to a real destination before launch, e.g.:
 *   - Send an email via a transactional provider (Resend, Postmark, SES...)
 *   - Forward to a CRM (HubSpot, Salesforce, Pipedrive...) via their API
 *   - POST to a Slack/Zapier/Make webhook for the sales team
 *
 * Until then, if LEAD_NOTIFY_WEBHOOK_URL is set, we best-effort forward the
 * payload there (e.g. a Slack incoming webhook or Zapier catch hook).
 * Otherwise we just log the lead server-side so nothing is silently lost.
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  if (!isValidLead(body)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Missing or invalid required fields: name, valid email, organization.",
      },
      { status: 400 },
    );
  }

  const lead: LeadPayload = {
    name: body.name.trim(),
    email: body.email.trim(),
    organization: body.organization.trim(),
    phone: body.phone?.trim() || undefined,
    notes: body.notes?.trim() || undefined,
  };

  // Always log server-side so a lead is never silently dropped, even if the
  // webhook below is not configured or fails.
  console.log("[pyllar-site] New demo request lead:", {
    ...lead,
    receivedAt: new Date().toISOString(),
  });

  const webhookUrl = process.env.LEAD_NOTIFY_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      // TODO(sales-ops): Confirm the payload shape expected by whichever
      // webhook destination is configured (Slack incoming webhook, Zapier,
      // internal CRM endpoint, etc.) and adjust this body accordingly.
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "pyllar-site-demo-request",
          ...lead,
          receivedAt: new Date().toISOString(),
        }),
      });
    } catch (error) {
      // Do not fail the user-facing request just because the downstream
      // notification failed — the lead is already logged above.
      console.error(
        "[pyllar-site] Failed to forward lead to LEAD_NOTIFY_WEBHOOK_URL:",
        error,
      );
    }
  }

  return NextResponse.json({ ok: true });
}
