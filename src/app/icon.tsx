import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Branded favicon generated from the same "pillar" bars motif used in the
 * header logo (see components/logo.tsx), so the browser tab icon matches the
 * site's visual identity instead of the default Next.js icon.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d9488",
          borderRadius: 6,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
          <div
            style={{
              width: 4,
              height: 11,
              borderRadius: 1,
              backgroundColor: "#ffffff",
            }}
          />
          <div
            style={{
              width: 4,
              height: 16,
              borderRadius: 1,
              backgroundColor: "#ffffff",
            }}
          />
          <div
            style={{
              width: 4,
              height: 9,
              borderRadius: 1,
              backgroundColor: "#ffffff",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
