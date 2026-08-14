"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ecosystemPillars } from "@/data/site";

const positions = [
  "left-[8%] top-[18%]",
  "right-[8%] top-[16%]",
  "left-[29%] top-[43%]",
  "right-[18%] bottom-[18%]",
  "left-[8%] bottom-[15%]"
];

export function HeroEcosystemMap() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-ink/10 bg-white/72 p-5 shadow-soft technical-grid">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 440" fill="none" aria-hidden="true">
        <motion.path
          d="M115 115 C210 45 385 55 485 112 C555 170 455 315 360 335 C255 358 105 318 92 235 C82 178 180 171 270 218 C360 265 440 248 485 112"
          stroke="url(#heroGradient)"
          strokeWidth="2"
          strokeDasharray="8 10"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.8, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="heroGradient" x1="90" y1="80" x2="520" y2="350">
            <stop stopColor="#5B3DF5" />
            <stop offset="1" stopColor="#CFFF74" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-indigoElectric/20 bg-ink text-center text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lift">
        Miners
        <span className="block text-limeSignal">Core</span>
      </div>
      {ecosystemPillars.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <motion.div
            key={pillar.title}
            className={`absolute ${positions[index]} w-40 rounded-3xl border border-ink/10 bg-white/88 p-4 shadow-soft backdrop-blur`}
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{
              opacity: { duration: 0.4, delay: index * 0.12 },
              y: { duration: 0.5, delay: index * 0.12, ease: "easeOut" },
              scale: { duration: 0.4, delay: index * 0.12 }
            }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
          >
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-2xl bg-lilacSoft text-indigoElectric">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">{pillar.label}</span>
            </div>
            <p className="mt-4 text-base font-semibold text-ink">{pillar.title.replace("Miners ", "")}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
