"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { journeySteps } from "@/data/site";

export function JourneyPath() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 45%"] });
  const desktopScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mobileScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mt-14">
      <div className="hidden lg:block">
        <div className="mb-8 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-muted">
          <span>Knowledge</span>
          <span className="text-indigoElectric">Experience</span>
          <span>Opportunity</span>
        </div>
        <div className="absolute left-0 right-0 top-[7.7rem] h-px bg-ink/12" />
        <motion.div
          className="absolute left-0 top-[7.7rem] h-[3px] origin-left rounded-full bg-indigoElectric"
          style={reduceMotion ? { width: "100%" } : { width: desktopScale }}
        />
        <div className="grid grid-cols-6 gap-5">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="relative pt-16">
                <div className="absolute left-0 top-[3.45rem] grid h-10 w-10 place-items-center rounded-full border border-indigoElectric/20 bg-white shadow-soft ring-4 ring-offWhite">
                  <Icon className="h-4 w-4 text-indigoElectric" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigoElectric">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
      <div className="relative lg:hidden">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-ink/12" />
        <motion.div
          className="absolute left-5 top-0 w-[3px] origin-top rounded-full bg-indigoElectric"
          style={reduceMotion ? { height: "100%" } : { height: mobileScale }}
        />
        <div className="grid gap-7">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="relative pl-16">
                <div className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-indigoElectric/20 bg-white shadow-soft ring-4 ring-offWhite">
                  <Icon className="h-4 w-4 text-indigoElectric" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigoElectric">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
