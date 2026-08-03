import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ivanna Wasiuk do Canto — Personal Stylist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          backgroundColor: "#1C1A18",
          color: "#F7F3EC",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 48,
            right: 48,
            bottom: 48,
            border: "1px solid rgba(247,243,236,0.25)",
            display: "flex",
          }}
        />
        <p
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#B08D57",
            margin: 0,
          }}
        >
          Personal Stylist
        </p>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: 76,
            margin: "24px 0 0 0",
            textAlign: "center",
          }}
        >
          Ivanna Wasiuk do Canto
        </p>
        <p
          style={{
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(247,243,236,0.6)",
            margin: "28px 0 0 0",
          }}
        >
          estilo · imagem · moda
        </p>
      </div>
    ),
    { ...size }
  );
}
