import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Carneros Football Club Guadalajara";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://carnerosgdl.com";
  const logoUrl = `${siteUrl}/images/logos/logo-mark.png`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0b55ad 0%, #083d7a 55%, #051f42 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "48px",
          padding: "60px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          alt="Carneros"
          width={320}
          height={320}
          style={{ objectFit: "contain" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              fontSize: 110,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            Carneros
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Football americano &amp; Flag
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)",
              marginTop: 6,
            }}
          >
            Guadalajara · Desde 1985
          </div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
