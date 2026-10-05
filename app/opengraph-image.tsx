import { ImageResponse } from "next/og";

export const alt = "Prabhat Tiwari — Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF9F6",
          color: "#14171C",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            PRABHAT TIWARI
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#5B6470",
              fontFamily: "monospace",
            }}
          >
            SOFTWARE ENGINEER
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 940,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            I build AI-powered software systems.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 25,
              lineHeight: 1.45,
              color: "#5B6470",
            }}
          >
            Machine learning pipelines, backend systems, and web applications.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "2px solid #E3DFD6",
            paddingTop: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#5B6470",
              fontFamily: "monospace",
            }}
          >
            github.com/quantababy
          </div>

          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#B93A0A",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}