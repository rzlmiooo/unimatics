import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex", // WAJIB
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #3b82f6 100%)",
          color: "white",
          fontSize: 56,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 72, marginBottom: 20 }}><img src="https://unimatics.vercel.app/images/logo-unimatics.png" alt="unimatics" style={{ width: 100, height: 100,  marginRight: 20 }}></img>UniMatics</div>
        <div
          style={{
            fontSize: 36,
            lineHeight: 1.4,
            maxWidth: "900px",
            display: "flex", // tambahin ini
            textAlign: "center",
          }}
        >
            <span>Komunitas Non-profit Upgrade Skill IT</span>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            fontWeight: "normal",
            opacity: 0.9,
            display: "flex", // tambahin ini juga
          }}
        >
          Belajar Frontend · Backend · AI · 3D · Content Creation
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}