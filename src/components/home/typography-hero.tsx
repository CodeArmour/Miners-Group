"use client";

import { useState } from "react";
import { MinersSymbol } from "@/components/brand/logo";
import { HeroTransitionBlur } from "@/components/page/hero-transition-blur";
import { ButtonLink } from "@/components/ui/button";

const growthRail = ["Learn", "Build", "Contribute", "Mentor", "Grow"];

export function TypographyHero({ description }: { description: string }) {
  const [active, setActive] = useState("Build");

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 technical-grid opacity-35" aria-hidden="true" />
      <div className="absolute -right-[22vw] bottom-[-10rem] z-0 sm:-right-[14vw] lg:-right-[10vw] lg:bottom-[-16rem]" aria-hidden="true">
        <MinersSymbol className="h-[28rem] w-[28rem] opacity-[0.035] sm:h-[40rem] sm:w-[40rem] lg:h-[54rem] lg:w-[54rem]" title="Decorative Miners symbol" />
      </div>
      <div className="absolute -right-[20vw] bottom-[-8rem] z-0 sm:-right-[12vw] lg:-right-[8vw] lg:bottom-[-14rem]" aria-hidden="true">
        <svg className="h-[28rem] w-[28rem] sm:h-[40rem] sm:w-[40rem] lg:h-[54rem] lg:w-[54rem]" viewBox="0 0 100 100" fill="none">
          <path d="M14 35c0-2.2 1.8-4 4-4h5.2c1.2 0 2.4.5 3.2 1.3l13.7 13.7c1.2 1.2 1.9 2.8 1.9 4.5V88c0 2.2-1.8 4-4 4H18c-2.2 0-4-1.8-4-4V35Z" stroke="#5B3DF5" strokeOpacity="0.08" strokeWidth="1.2" />
          <path d="M86 35c0-2.2-1.8-4-4-4h-5.2c-1.2 0-2.4.5-3.2 1.3L59.9 46c-1.2 1.2-1.9 2.8-1.9 4.5V88c0 2.2 1.8 4 4 4h20c2.2 0 4-1.8 4-4V35Z" stroke="#5B3DF5" strokeOpacity="0.08" strokeWidth="1.2" />
          <path d="M18 8h20.8c1.4 0 2.8.6 3.8 1.6l22.1 22.1c1.5 1.5 1.5 4 0 5.5L53.1 48.8c-1.5 1.5-4 1.5-5.5 0L15.2 16.4C12.8 14 14.5 8 18 8Z" stroke="#5B3DF5" strokeOpacity="0.08" strokeWidth="1.2" />
          <path d="M82 8H61.2c-1.4 0-2.8.6-3.8 1.6L42.9 24.1c-1.5 1.5-1.5 4 0 5.5l11.6 11.6c1.5 1.5 4 1.5 5.5 0l24.8-24.8C87.2 14 85.5 8 82 8Z" stroke="#5B3DF5" strokeOpacity="0.08" strokeWidth="1.2" />
          <path d="M52.8 43.8c1.5-1.5 3.9-1.5 5.4 0l10.6 10.6c1.5 1.5 1.5 3.9 0 5.4L53.4 75.2c-1.9 1.9-4.9 1.9-6.8 0L31.2 59.8c-1.5-1.5-1.5-3.9 0-5.4l10.6-10.6c1.5-1.5 3.9-1.5 5.4 0L50 46.6l2.8-2.8Z" stroke="#5B3DF5" strokeOpacity="0.08" strokeWidth="1.2" />
        </svg>
      </div>
      <HeroTransitionBlur />
      <div className="absolute right-10 top-40 hidden text-right text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted/70 lg:block" aria-hidden="true">
        <p>Miners / 001</p>
        <p className="mt-2">Software / Learning / Community</p>
      </div>

      <div className="container-miners relative z-10 flex min-h-[790px] flex-col justify-center pb-16 pt-24 lg:min-h-[860px] lg:pt-28">
        <div className="max-w-[72rem]">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-indigoElectric">
            Miners Group - Technology / Learning / Community
          </p>
          <h1 className="mt-9 max-w-[68rem] text-balance text-[clamp(4.5rem,10.6vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-ink">
            Where developers
            <br />
            <span className={active === "Learn" ? "text-indigoElectric" : "text-ink"}>learn</span>,{" "}
            <span className={active === "Build" ? "text-indigoElectric" : "text-ink"}>build</span>,
            <br />
            and <span className={active === "Grow" ? "text-indigoElectric" : "text-ink"}>grow</span>.
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#ecosystem" className="bg-indigoElectric hover:bg-ink">
              Explore Miners
            </ButtonLink>
            <ButtonLink href="/for-companies" variant="secondary">
              Work With Us
            </ButtonLink>
          </div>
        </div>

        <div className="mt-16 pt-8 lg:mt-auto">
          <ol className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Miners culture keywords">
            {growthRail.map((item, index) => {
              const selected = active === item;
              return (
                <li key={item}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(item)}
                    onFocus={() => setActive(item)}
                    className={
                      selected
                        ? "focus-ring group inline-flex items-baseline gap-2 rounded-full bg-lilacSoft/60 px-4 py-2 text-left text-indigoElectric transition"
                        : "focus-ring group inline-flex items-baseline gap-2 rounded-full px-4 py-2 text-left text-ink/72 transition hover:bg-white/70 hover:text-indigoElectric"
                    }
                  >
                    <span className={selected ? "text-[0.7rem] font-bold text-indigoElectric/80" : "text-[0.7rem] font-bold text-muted/80"}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={selected ? "text-xs font-extrabold uppercase tracking-[0.2em] text-indigoElectric" : "text-xs font-extrabold uppercase tracking-[0.2em] text-ink/70"}>
                      {item}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
