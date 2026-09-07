import { ImageResponse } from "next/og";

// Route segment config for the generated Open Graph image.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generates the site-wide social preview (og:image / twitter:image) as a
 * clean, code-drawn banner — no external design asset exists yet, so this
 * keeps things simple and on-brand rather than fabricating a fake logo/photo.
 * Next.js automatically serves this at /opengraph-image and wires up the
 * corresponding <meta> tags.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(20,184,166,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(56,189,248,0.2), transparent 40%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 10,
              height: 84,
            }}
          >
            <div
              style={{
                width: 26,
                height: 64,
                borderRadius: 8,
                backgroundColor: "#ffffff",
              }}
            />
            <div
              style={{
                width: 26,
                height: 84,
                borderRadius: 8,
                backgroundColor: "#ffffff",
              }}
            />
            <div
              style={{
                width: 26,
                height: 52,
                borderRadius: 8,
                backgroundColor: "#ffffff",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -2,
            }}
          >
            Pyllar
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "#cbd5e1",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          One system for youth, staff, and everyday operations
        </div>
      </div>
    ),
    { ...size },
  );
}
