import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F8F8FB",
          color: "#11111A",
          fontFamily: "Arial, sans-serif",
          padding: "72px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            backgroundImage:
              "radial-gradient(circle at 84% 18%, rgba(91, 61, 245, 0.16), transparent 30%), radial-gradient(circle at 18% 88%, rgba(232, 222, 255, 0.9), transparent 28%)"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "72px",
            top: "72px",
            width: "330px",
            height: "330px",
            borderRadius: "50%",
            border: "1px solid rgba(91, 61, 245, 0.22)"
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
            <div
              style={{
                width: "86px",
                height: "86px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "24px",
                background: "#FFFFFF",
                border: "1px solid rgba(17, 17, 26, 0.08)"
              }}
            >
              <svg width="58" height="58" viewBox="0 0 100 100" aria-hidden="true">
                <path fill="#5B3DF5" d="M14 35c0-2.2 1.8-4 4-4h5.2c1.2 0 2.4.5 3.2 1.3l13.7 13.7c1.2 1.2 1.9 2.8 1.9 4.5V88c0 2.2-1.8 4-4 4H18c-2.2 0-4-1.8-4-4V35Z" />
                <path fill="#5B3DF5" d="M86 35c0-2.2-1.8-4-4-4h-5.2c-1.2 0-2.4.5-3.2 1.3L59.9 46c-1.2 1.2-1.9 2.8-1.9 4.5V88c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4V35Z" />
                <path fill="#5B3DF5" d="M18 8h20.8c1.4 0 2.8.6 3.8 1.6l22.1 22.1c1.5 1.5 1.5 4 0 5.5L53.1 48.8c-1.5 1.5-4 1.5-5.5 0L15.2 16.4C12.8 14 14.5 8 18 8Z" />
                <path fill="#5B3DF5" d="M82 8H61.2c-1.4 0-2.8.6-3.8 1.6L42.9 24.1c-1.5 1.5-1.5 4 0 5.5l11.6 11.6c1.5 1.5 4 1.5 5.5 0l24.8-24.8C87.2 14 85.5 8 82 8Z" />
                <path fill="#5B3DF5" d="M52.8 43.8c1.5-1.5 3.9-1.5 5.4 0l10.6 10.6c1.5 1.5 1.5 3.9 0 5.4L53.4 75.2c-1.9 1.9-4.9 1.9-6.8 0L31.2 59.8c-1.5-1.5-1.5-3.9 0-5.4l10.6-10.6c1.5-1.5 3.9-1.5 5.4 0L50 46.6l2.8-2.8Z" />
              </svg>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "34px", fontWeight: 800, letterSpacing: "-0.04em" }}>Miners Group</span>
              <span style={{ marginTop: "6px", fontSize: "18px", color: "#5B3DF5", fontWeight: 700, letterSpacing: "0.12em" }}>
                LEARN / BUILD / GROW
              </span>
            </div>
          </div>

          <div style={{ maxWidth: "780px", display: "flex", flexDirection: "column" }}>
            <h1 style={{ margin: 0, fontSize: "72px", lineHeight: 0.95, letterSpacing: "-0.055em", fontWeight: 800 }}>
              Where developers learn, build, and grow through real experience.
            </h1>
            <p style={{ margin: "28px 0 0", maxWidth: "730px", fontSize: "28px", lineHeight: 1.35, color: "#4F4F5C" }}>
              {siteConfig.description}
            </p>
          </div>

          <div style={{ display: "flex", gap: "14px", alignItems: "center", color: "#5B3DF5", fontSize: "22px", fontWeight: 700 }}>
            <span>Learn</span>
            <span>→</span>
            <span>Practice</span>
            <span>→</span>
            <span>Build</span>
            <span>→</span>
            <span>Get Mentored</span>
            <span>→</span>
            <span>Work</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
