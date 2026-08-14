"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { MinersLogo } from "@/components/brand/logo";
import { cx } from "@/lib/utils";

const ecosystemNodes = [
  {
    id: "academy",
    index: "01",
    name: "Academy",
    label: "Learn",
    text: "Training & learning paths",
    position: "left-4 top-[4.75rem] sm:left-[8%] sm:top-[12%]",
    anchor: { x: 180, y: 110 }
  },
  {
    id: "labs",
    index: "02",
    name: "Labs",
    label: "Build",
    text: "Projects & experiments",
    position: "right-4 top-[4.75rem] sm:right-[7%] sm:top-[24%]",
    anchor: { x: 455, y: 170 }
  },
  {
    id: "mentorship",
    index: "03",
    name: "Mentorship",
    label: "Grow",
    text: "Guidance & reviews",
    position: "left-4 bottom-28 sm:left-[5%] sm:bottom-[22%]",
    anchor: { x: 165, y: 320 }
  },
  {
    id: "software",
    index: "04",
    name: "Software",
    label: "Deliver",
    text: "Real software solutions",
    position: "right-4 bottom-28 sm:right-[13%] sm:bottom-[12%]",
    anchor: { x: 420, y: 350 }
  },
  {
    id: "talent",
    index: "05",
    name: "Talent",
    label: "Opportunity",
    text: "Coming later",
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(91,61,245,0.08),transparent_18rem),radial-gradient(circle_at_18%_18%,rgba(232,222,255,0.45),transparent_13rem)]" />
      <div className="relative min-h-[620px] sm:min-h-[520px]">
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
              strokeOpacity={active && active !== node.id ? 0.1 : active === node.id ? 0.5 : 0.2}
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
        </motion.div>

        {ecosystemNodes.map((node, index) => {
          const isActive = active === node.id;
          return (
            <motion.article
              key={node.id}
              className={cx(
                "absolute z-20 w-[9.25rem] rounded-[1.1rem] border bg-white/88 p-3 shadow-sm backdrop-blur transition sm:w-44 sm:p-4",
                node.position,
                isActive ? "border-indigoElectric/35 shadow-soft" : "border-ink/10"
              )}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.24 + index * 0.08, ease: "easeOut" }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              onMouseEnter={() => setActive(node.id)}
              onMouseLeave={() => setActive(null)}
            >
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-indigoElectric">{node.index} / {node.label}</p>
              <p className="mt-3 text-base font-semibold tracking-tight text-ink">{node.name}</p>
              <p className="mt-1.5 text-xs leading-5 text-muted">{node.text}</p>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
