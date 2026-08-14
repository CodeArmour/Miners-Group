"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { serviceGroups } from "@/data/site";
import { cx } from "@/lib/utils";

export function ServiceAccordion() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-12 overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-sm">
      {serviceGroups.map((group, index) => (
        <div key={group.title} className={cx("border-b border-ink/10 last:border-b-0", active === index && "bg-lilacSoft/28")}>
          <button
            type="button"
            className="focus-ring flex w-full items-center justify-between gap-6 p-6 text-left transition hover:bg-lilacSoft/18 sm:p-8"
            aria-expanded={active === index}
            aria-controls={`service-panel-${index}`}
            onClick={() => setActive(index)}
          >
            <span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 block text-2xl font-semibold text-ink">{group.title}</span>
            </span>
            <ChevronDown className={cx("h-5 w-5 shrink-0 transition", active === index && "rotate-180")} />
          </button>
          <AnimatePresence initial={false}>
            {active === index ? (
              <motion.div
                id={`service-panel-${index}`}
                initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
                exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="overflow-hidden"
              >
                <div className="grid gap-6 px-6 pb-8 sm:grid-cols-[0.8fr_1.2fr] sm:px-8">
                  <p className="text-lg leading-8 text-muted">{group.summary}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-ink/10 bg-offWhite px-4 py-3 text-sm font-semibold text-ink">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
