"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Code2, GitBranch, MessagesSquare, Sparkles } from "lucide-react";
import { MinersLogo } from "@/components/brand/logo";
import { cx } from "@/lib/utils";

const ecosystemNodes = [
  {
    id: "academy",
    index: "01",
    name: "Academy",
    label: "Learn",
    text: "Training & learning paths",
    icon: BookOpen,
    position: "left-4 top-[4.75rem] sm:left-[8%] sm:top-[12%]",
    anchor: { x: 180, y: 110 }
  },
  {
    id: "labs",
    index: "02",
    name: "Labs",
    label: "Build",
    text: "Projects & experiments",
    icon: Code2,
    position: "right-4 top-[4.75rem] sm:right-[7%] sm:top-[24%]",
    anchor: { x: 455, y: 170 }
  },
  {
    id: "mentorship",
    index: "03",
    name: "Mentorship",
    label: "Grow",
    text: "Guidance & reviews",
    icon: MessagesSquare,
    position: "left-4 bottom-28 sm:left-[5%] sm:bottom-[22%]",
    anchor: { x: 165, y: 320 }
  },
  {
    id: "software",
    index: "04",
    name: "Software",
    label: "Deliver",
    text: "Real software solutions",
    icon: GitBranch,
    position: "right-4 bottom-28 sm:right-[13%] sm:bottom-[12%]",
    anchor: { x: 420, y: 350 }
  },
  {
    id: "talent",
    index: "05",
    name: "Talent",
    label: "Opportunity",
    text: "Coming later",
    icon: Sparkles,
    position: "left-[28%] bottom-4 sm:left-[36%] sm:bottom-[4%]",
    anchor: { x: 302, y: 405 }
  }
];

const pathById: Record<string, string> = {
  academy: "M300 230 C270 185 225 142 180 110",
  labs: "M300 230 C340 205 397 184 455 170",
  mentorship: "M300 230 C255 248 208 284 165 320",
  software: "M300 230 C334 272 374 315 420 350",
  talent: "M300 230 C300 284 301 344 302 405"
};

export function HeroEcosystemMap() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/82 p-4 shadow-soft backdrop-blur technical-grid sm:p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(91,61,245,0.12),transparent_19rem),radial-gradient(circle_at_18%_18%,rgba(232,222,255,0.78),transparent_14rem)]" />
      <div className="relative min-h-[620px] sm:min-h-[520px]">
        <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-limeSignal" />
          Ecosystem Interface
        </div>

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 500" fill="none" aria-hidden="true">
          <defs>
            <radialGradient id="corePulse" cx="50%" cy="50%" r="50%">
              <stop stopColor="#5B3DF5" stopOpacity="0.18" />
              <stop offset="1" stopColor="#5B3DF5" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="230" r="118" fill="url(#corePulse)" />
          {ecosystemNodes.map((node, index) => (
            <motion.path
              key={node.id}
              d={pathById[node.id]}
              stroke="#5B3DF5"
              strokeWidth={active === node.id ? 2.1 : 1.35}
              strokeOpacity={active && active !== node.id ? 0.13 : active === node.id ? 0.58 : 0.25}
              strokeLinecap="round"
              strokeDasharray="5 8"
              initial={reduceMotion ? false : { pathLength: 0 }}
              animate={reduceMotion ? undefined : { pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.18 + index * 0.08, ease: "easeOut" }}
            />
          ))}
          {!reduceMotion ? (
            <motion.circle
              r="3.5"
              fill="#5B3DF5"
              opacity="0.62"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: ["0%", "100%"] }}
              transition={{ duration: 4.8, delay: 1.2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
              style={{ offsetPath: `path("${pathById.labs}")` }}
            />
          ) : null}
        </svg>

        <motion.div
          className="absolute left-1/2 top-[46%] z-20 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] border border-indigoElectric/18 bg-white p-4 text-center shadow-lift"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <MinersLogo variant="symbol" className="mx-auto h-14 w-14" />
          <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted">Miners Core</p>
          <p className="mt-1 text-xs font-semibold text-ink">Learn / Build / Grow</p>
        </motion.div>

        {ecosystemNodes.map((node, index) => {
          const Icon = node.icon;
          const isActive = active === node.id;
          return (
            <motion.article
              key={node.id}
              className={cx(
                "absolute z-20 w-[9.25rem] rounded-[1.15rem] border bg-white/90 p-3 shadow-sm backdrop-blur transition sm:w-44 sm:p-4",
                node.position,
                isActive ? "border-indigoElectric/45 shadow-lift" : "border-ink/10"
              )}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.24 + index * 0.08, ease: "easeOut" }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              onMouseEnter={() => setActive(node.id)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-indigoElectric">{node.index} / {node.label}</span>
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-lilacSoft text-indigoElectric">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
              <p className="mt-4 text-base font-semibold tracking-tight text-ink">{node.name}</p>
              <p className="mt-1.5 text-xs leading-5 text-muted">{node.text}</p>
            </motion.article>
          );
        })}

        <div className="absolute bottom-4 left-4 hidden rounded-2xl border border-ink/10 bg-white/80 p-3 text-xs text-muted shadow-sm backdrop-blur sm:block">
          <span className="font-semibold text-ink">Workflow:</span> learn paths, project teams, reviews, delivery.
        </div>
      </div>
    </div>
  );
}
