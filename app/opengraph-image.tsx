import { ImageResponse } from "next/og";

export const alt = "Mended Health IT — Healthcare IT Staffing & Recruitment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0f766e 0%, #134e4a 50%, #0c3a37 100%)",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: "#5eead4",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Mended Health IT
        </div>
        <div
          style={{
            fontSize: 84,
            color: "white",
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 24,
            maxWidth: 1000,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <span>Healthcare IT Talent,&nbsp;</span>
          <span style={{ color: "#fbbf24" }}>Delivered.</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a7f3d0",
            marginTop: 32,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Staffing, recruitment, and business development for hospitals,
          health systems, and HIT vendors.
        </div>
      </div>
    ),
    { ...size },
  );
}
