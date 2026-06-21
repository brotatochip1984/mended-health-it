import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Mended Health IT | Healthcare Transformation & Advisory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const bgBuffer = await readFile(
    join(process.cwd(), "public/images/og-bg.png"),
  );
  const bgDataUrl = `data:image/png;base64,${bgBuffer.toString("base64")}`;

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
          backgroundColor: "#020617",
          backgroundImage: `url(${bgDataUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
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
            maxWidth: 760,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <span>Healthcare IT,&nbsp;</span>
          <span style={{ color: "#fbbf24" }}>operated.</span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#cbd5e1",
            marginTop: 32,
            maxWidth: 720,
            lineHeight: 1.4,
          }}
        >
          Healthcare transformation and advisory for health systems, health
          plans, Tribal organizations, and FQHCs.
        </div>
      </div>
    ),
    { ...size },
  );
}
