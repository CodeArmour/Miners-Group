"use client";

import { useState } from "react";
import { MinersLogo } from "@/components/brand/logo";

type CommunityLoopStage = {
  title: string;
  text: string;
};

export function CommunityLoopWheel({ stages }: { stages: CommunityLoopStage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <ol className="sr-only" aria-label="Miners community growth loop: Ask, Share, Build, Review, Mentor, Grow, then back to Ask">
        {stages.map((stage) => (
          <li key={stage.title}>
            {stage.title}: {stage.text}
          </li>
        ))}
      </ol>

      <div className="relative mx-auto hidden aspect-square w-full max-w-[740px] lg:block" aria-hidden="true">
        <svg className="h-full w-full overflow-visible" viewBox="0 0 760 760">
          <defs>
            <marker id="community-wheel-arrow" markerHeight="7" markerWidth="7" orient="auto" refX="6.2" refY="3.5">
              <path d="M0 0 L7 3.5 L0 7 Z" fill="#5B3DF5" fillOpacity="0.62" />
            </marker>
            <filter id="active-segment-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#5B3DF5" floodOpacity="0.18" />
            </filter>
          </defs>

          <g>
            {outerDirectionArcs().map((arc) => (
              <path
                key={arc.id}
                d={arc.path}
                fill="none"
                stroke="#5B3DF5"
                strokeOpacity="0.28"
                strokeWidth="1.8"
                strokeLinecap="round"
                markerEnd="url(#community-wheel-arrow)"
              />
            ))}
            {outerDirectionDots().map((dot) => (
              <circle key={dot.id} cx={dot.x} cy={dot.y} r="5.2" fill="#5B3DF5" fillOpacity="0.82" />
            ))}
          </g>

          {stages.map((stage, index) => {
            const segment = loopSegment(index);
            const label = loopLabel(index);
            const isActive = activeIndex === index;

            return (
              <g
                key={stage.title}
                className="cursor-default outline-none"
                tabIndex={-1}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <path
                  d={segment.path}
                  className="stroke-white stroke-[9] transition duration-300"
                  fill={isActive ? "#5B3DF5" : "#F3EEFF"}
                  filter={isActive ? "url(#active-segment-shadow)" : undefined}
                />
                <foreignObject x={label.x} y={label.y} width={label.width} height={label.height} className="pointer-events-none">
                  <div className="flex h-full flex-col justify-center px-1.5 text-center">
                    <p className={isActive ? "text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-white/86" : "text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-indigoElectric"}>
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className={isActive ? "mt-1.5 text-lg font-extrabold uppercase tracking-[0.06em] text-white" : "mt-1.5 text-lg font-extrabold uppercase tracking-[0.06em] text-ink"}>
                      {stage.title}
                    </p>
                    <p className={isActive ? "mt-2 text-[0.76rem] font-medium leading-[1.35] text-white/84" : "mt-2 text-[0.76rem] font-medium leading-[1.35] text-ink/76"}>
                      {loopDescription(stage.title, stage.text)}
                    </p>
                  </div>
                </foreignObject>
              </g>
            );
          })}

        </svg>

        <div className="absolute left-1/2 top-1/2 grid h-48 w-48 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ink/10 bg-white text-center shadow-soft">
          <div>
            <MinersLogo variant="symbol" className="mx-auto h-16 w-16" />
            <p className="mt-4 text-sm font-extrabold uppercase leading-tight tracking-[0.16em] text-ink">Miners</p>
            <p className="text-sm font-extrabold uppercase leading-tight tracking-[0.16em] text-ink">Community</p>
          </div>
        </div>
      </div>

      <div className="relative lg:hidden" aria-hidden="true">
        <div className="absolute bottom-16 left-6 top-8 w-px bg-indigoElectric/30" />
        <ol className="grid gap-4">
          {stages.map((stage, index) => (
            <li key={stage.title} className="relative ml-10 rounded-[1.25rem] border border-ink/10 bg-lilacSoft/45 p-5 shadow-sm">
              <span className="absolute -left-[3.1rem] top-5 flex h-10 w-10 items-center justify-center rounded-full bg-indigoElectric text-xs font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-lg font-extrabold uppercase tracking-[0.06em] text-ink">{stage.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{loopDescription(stage.title, stage.text)}</p>
            </li>
          ))}
        </ol>
        <p className="ml-10 mt-5 text-sm font-bold text-indigoElectric">Back to ASK</p>
      </div>
    </div>
  );
}

function loopSegment(index: number) {
  const center = 380;
  const outerRadius = 316;
  const innerRadius = 142;
  const midAngle = [-90, -30, 30, 90, 150, 210][index];
  const startAngle = midAngle - 27.2;
  const endAngle = midAngle + 27.2;
  const outerStart = polarPoint(center, center, outerRadius, startAngle);
  const outerEnd = polarPoint(center, center, outerRadius, endAngle);
  const innerEnd = polarPoint(center, center, innerRadius, endAngle);
  const innerStart = polarPoint(center, center, innerRadius, startAngle);

  return {
    path: [
      `M ${outerStart.x} ${outerStart.y}`,
      `A ${outerRadius} ${outerRadius} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
      `L ${innerEnd.x} ${innerEnd.y}`,
      `A ${innerRadius} ${innerRadius} 0 0 0 ${innerStart.x} ${innerStart.y}`,
      "Z"
    ].join(" ")
  };
}

function loopLabel(index: number) {
  const center = 380;
  const radius = 224;
  const angle = [-90, -30, 30, 90, 150, 210][index];
  const point = polarPoint(center, center, radius, angle);
  const width = index === 0 || index === 3 ? 184 : 166;
  const height = 132;

  return {
    x: point.x - width / 2,
    y: point.y - height / 2,
    width,
    height
  };
}

function loopDescription(title: string, fallback: string) {
  const descriptions: Record<string, string> = {
    Ask: "Questions create direction.",
    Share: "Knowledge becomes more valuable when it moves between people.",
    Build: "Ideas become practical when people work on them.",
    Review: "Feedback improves both the work and the person behind it.",
    Mentor: "Experience can shorten someone else's learning path.",
    Grow: "Progress creates contributors, collaborators, and future mentors."
  };

  return descriptions[title] || fallback;
}

function outerDirectionArcs() {
  const center = 380;
  const radius = 344;
  const boundaries = [-120, -60, 0, 60, 120, 180];

  return boundaries.map((startBoundary, index) => {
    const startAngle = startBoundary + 12;
    const endAngle = startBoundary + 48;
    const start = polarPoint(center, center, radius, startAngle);
    const end = polarPoint(center, center, radius, endAngle);

    return {
      id: `outer-arc-${index}`,
      path: `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`
    };
  });
}

function outerDirectionDots() {
  const center = 380;
  const radius = 344;
  const boundaries = [-120, -60, 0, 60, 120, 180];

  return boundaries.map((angle, index) => {
    const point = polarPoint(center, center, radius, angle);

    return {
      id: `outer-dot-${index}`,
      ...point
    };
  });
}

function polarPoint(cx: number, cy: number, radius: number, angle: number) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: round(cx + radius * Math.cos(radians)),
    y: round(cy + radius * Math.sin(radians))
  };
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}
