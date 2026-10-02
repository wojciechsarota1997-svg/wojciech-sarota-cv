import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
          background: "#ffffff",
          backgroundImage:
            "linear-gradient(#d5ddff 1px, transparent 1px), linear-gradient(90deg, #d5ddff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          borderBottom: "24px solid #1740ff",
        }}
      >
        <div style={{ fontSize: 120, fontWeight: 900, lineHeight: 0.9, letterSpacing: -4, color: "#000" }}>
          Wojciech Sarota
        </div>
        <div style={{ marginTop: 28, fontSize: 44, fontWeight: 700, color: "#1740ff" }}>{site.headline}</div>
        <div style={{ marginTop: 16, fontSize: 30, color: "#000" }}>{site.location}</div>
      </div>
    ),
    size,
  );
}
