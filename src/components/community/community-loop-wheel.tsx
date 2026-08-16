"use client";

import { useState } from "react";
import { MinersLogo } from "@/components/brand/logo";

type CommunityLoopStage = {
  title: string;
  text: string;
};

export function CommunityLoopWheel({ stages }: { stages: CommunityLoopStage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <ol className="sr-only" aria-label="Miners community growth loop: Ask, Share, Build, Review, Mentor, Grow, then back to Ask">
        {stages.map((stage) => (
          <li key={stage.title}>
            {stage.title}: {stage.text}
          </li>
        ))}
      </ol>

      <div className="relative ml-auto hidden aspect-square w-[clamp(510px,41vw,600px)] lg:block" aria-hidden="true">
        <svg className="h-full w-full overflow-visible" viewBox="0 0 760 760">
          <defs>
            <marker id="community-wheel-arrow" markerHeight="6" markerWidth="6" orient="auto" refX="5.4" refY="3">
              <path d="M0 0 L6 3 L0 6 Z" fill="#5B3DF5" fillOpacity="0.58" />
            </marker>
          </defs>

          <g>
            {outerDirectionArcs().map((arc) => (
              <path
                key={arc.id}
                d={arc.path}
                fill="none"
                stroke="#5B3DF5"
                strokeOpacity="0.28"
                strokeWidth="1.35"
                strokeLinecap="round"
                markerEnd="url(#community-wheel-arrow)"
              />
            ))}
          </g>

          {stages.map((stage, index) => {
            const segment = loopSegment(index);
            const label = loopLabel(index);
            const isActive = activeIndex === index;
            const textColors = isActive
              ? { number: "rgba(255,255,255,0.86)", title: "#FFFFFF", description: "rgba(255,255,255,0.86)" }
              : { number: "#5B3DF5", title: "#11111A", description: "rgba(17,17,26,0.68)" };

            return (
              <g
                key={stage.title}
                className="cursor-default outline-none"
                tabIndex={-1}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <path
                  d={segment.path}
                  className="stroke-white stroke-[4.8] transition duration-300"
                  fill={isActive ? "#5B3DF5" : "#F5F2FF"}
                  transform={isActive ? segment.lift : undefined}
                />
                <foreignObject x={label.x} y={label.y} width={label.width} height={label.height} className="pointer-events-none">
                  <div className="flex h-full flex-col justify-center px-2 text-center">
                    <p className="text-[0.76rem] font-bold uppercase tracking-[0.15em]" style={{ color: textColors.number }}>
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1.5 text-xl font-bold uppercase tracking-[0.08em]" style={{ color: textColors.title }}>
                      {stage.title}
                    </p>
                    <p className="mt-2 text-[0.86rem] font-medium leading-[1.36]" style={{ color: textColors.description }}>
                      {loopDescription(stage.title, stage.text)}
                    </p>
                  </div>
                </foreignObject>
              </g>
            );
          })}

        </svg>

        <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ink/10 bg-white text-center shadow-sm">
          <div>
            <MinersLogo variant="symbol" className="mx-auto h-[3.35rem] w-[3.35rem]" />
            <p className="mt-3 text-xs font-extrabold uppercase leading-tight tracking-[0.18em] text-ink">Miners</p>
            <p className="text-xs font-extrabold uppercase leading-tight tracking-[0.18em] text-ink">Community</p>
          </div>
        </div>
      </div>

      <div className="relative lg:hidden" aria-hidden="true">
        <div className="absolute bottom-16 left-6 top-8 w-px bg-indigoElectric/25" />
        <ol className="grid gap-4">
          {stages.map((stage, index) => (
            <li key={stage.title} className="relative ml-10 rounded-[1.25rem] border border-ink/10 bg-lilacSoft/35 p-5">
              <span className="absolute -left-[3.1rem] top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-bold text-indigoElectric shadow-sm ring-1 ring-indigoElectric/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-lg font-bold uppercase tracking-[0.08em] text-ink">{stage.title}</h2>
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
  const outerRadius = 304;
  const innerRadius = 118;
  const midAngle = [-90, -30, 30, 90, 150, 210][index];
  const startAngle = midAngle - 29;
  const endAngle = midAngle + 29;
  const outerStart = polarPoint(center, center, outerRadius, startAngle);
  const outerEnd = polarPoint(center, center, outerRadius, endAngle);
  const innerEnd = polarPoint(center, center, innerRadius, endAngle);
  const innerStart = polarPoint(center, center, innerRadius, startAngle);
  const lift = polarPoint(0, 0, 2.5, midAngle);

  return {
    path: [
      `M ${outerStart.x} ${outerStart.y}`,
      `A ${outerRadius} ${outerRadius} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
      `L ${innerEnd.x} ${innerEnd.y}`,
      `A ${innerRadius} ${innerRadius} 0 0 0 ${innerStart.x} ${innerStart.y}`,
      "Z"
    ].join(" "),
    lift: `translate(${lift.x} ${lift.y})`
  };
}

function loopLabel(index: number) {
  const center = 380;
  const radius = 218;
  const angle = [-90, -30, 30, 90, 150, 210][index];
  const point = polarPoint(center, center, radius, angle);
  const width = index === 0 || index === 3 ? 202 : 178;
  const height = 142;

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
    Share: "Knowledge grows when it moves.",
    Build: "Ideas become practical through building.",
    Review: "Feedback improves people and work.",
    Mentor: "Experience helps others move faster.",
    Grow: "Progress creates future contributors."
  };

  return descriptions[title] || fallback;
}

function outerDirectionArcs() {
  const center = 380;
  const radius = 325;
  const arcs = [-102, 18, 138];

  return arcs.map((startAngle, index) => {
    const endAngle = startAngle + 48;
    const start = polarPoint(center, center, radius, startAngle);
    const end = polarPoint(center, center, radius, endAngle);

    return {
      id: `outer-arc-${index}`,
      path: `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`
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
