import { ImageResponse } from "next/og";

import { getProject } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Project case study";

type OpenGraphImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function OpenGraphImage({
  params,
}: OpenGraphImageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  const title = project?.title ?? "Project Case Study";
  const summary =
    project?.summary ??
    "Software engineering project case study by Prabhat Tiwari.";

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
            PROJECT CASE STUDY
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            {title}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 25,
              lineHeight: 1.45,
              color: "#5B6470",
              maxWidth: 900,
            }}
          >
            {summary}
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