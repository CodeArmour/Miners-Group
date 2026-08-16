"use client";

import { useState } from "react";
import { MinersLogo } from "@/components/brand/logo";
import { cx } from "@/lib/utils";

const roles = [
  {
    id: "student",
    index: "01",
    label: "Student",
    desktopClassName: "left-[46%] top-[7%] -translate-x-1/2",
    align: "center",
    path: "M244 114 C247 150 249 178 250 207"
  },
  {
    id: "developer",
    index: "02",
    label: "Developer",
    desktopClassName: "left-0 top-[31%]",
    align: "left",
    path: "M116 179 C151 194 186 214 218 237"
  },
  {
    id: "builder",
    index: "03",
    label: "Builder",
    desktopClassName: "right-[2%] top-[27%]",
    align: "right",
    path: "M386 164 C352 187 318 211 281 237"
  },
  {
    id: "mentor",
    index: "04",
    label: "Mentor",
    desktopClassName: "left-[7%] bottom-[22%]",
    align: "left",
    path: "M134 349 C168 328 196 306 226 276"
  },
  {
    id: "contributor",
    index: "05",
    label: "Contributor",
    desktopClassName: "right-[6%] bottom-[19%]",
    align: "right",
    path: "M365 360 C335 332 309 306 276 276"
  }
] as const;

type RoleId = (typeof roles)[number]["id"];

function RoleLabel({
  index,
  label,
  active,
  className,
  align = "left",
  onEnter,
  onLeave
}: {
  index: string;
  label: string;
  active?: boolean;
  className?: string;
  align?: "left" | "center" | "right";
  onEnter?: () => void;
  onLeave?: () => void;
}) {
  return (
    <div
      className={cx(
        "group absolute select-none transition-colors duration-200",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <p className={cx("text-[0.68rem] font-bold leading-none tracking-[0.18em] text-indigoElectric/72 transition-colors duration-200", active && "text-indigoElectric")}>
        {index}
      </p>
      <p className={cx("mt-2 text-sm font-semibold uppercase leading-none tracking-[0.18em] text-ink transition-colors duration-200 group-hover:text-indigoElectric", active && "text-indigoElectric")}>
        {label}
      </p>
    </div>
  );
}

export function PeopleConstellation() {
  const [activeRole, setActiveRole] = useState<RoleId | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[500px] lg:-ml-4 lg:mr-auto" aria-label="Students, developers, builders, contributors, and mentors connected through Miners Community">
      <div className="relative hidden min-h-[440px] lg:block">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 500" aria-hidden="true">
          {roles.map((role) => (
            <path
              key={role.id}
              d={role.path}
              fill="none"
              stroke="#5B3DF5"
              strokeLinecap="round"
              strokeWidth={activeRole === role.id ? 1.8 : 1.2}
              strokeOpacity={activeRole === role.id ? 0.44 : 0.22}
              className="transition-all duration-200"
            />
          ))}
          {roles.map((role) => {
            const start = role.path.match(/^M([0-9.]+) ([0-9.]+)/);
            if (!start) return null;
            return (
              <circle
                key={`${role.id}-marker`}
                cx={Number(start[1])}
                cy={Number(start[2])}
                r={activeRole === role.id ? 2.3 : 1.4}
                fill="#5B3DF5"
                fillOpacity={activeRole === role.id ? 0.32 : 0.1}
                className="transition-all duration-200"
              />
            );
          })}
        </svg>

        <div
          className={cx(
            "absolute left-1/2 top-[49%] grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-white/82 shadow-sm backdrop-blur-sm transition-colors duration-200",
            activeRole ? "border-indigoElectric/24" : "border-indigoElectric/12"
          )}
        >
          <div className="text-center">
            <MinersLogo variant="symbol" className={cx("mx-auto h-20 w-20 transition-transform duration-200", activeRole && "scale-[1.03]")} />
            <p className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink/64">Miners</p>
            <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-indigoElectric">Community</p>
          </div>
        </div>

        {roles.map((role) => (
          <RoleLabel
            key={role.id}
            index={role.index}
            label={role.label}
            active={activeRole === role.id}
            align={role.align as "left" | "center" | "right"}
            className={role.desktopClassName}
            onEnter={() => setActiveRole(role.id)}
            onLeave={() => setActiveRole(null)}
          />
        ))}

      </div>

      <div className="lg:hidden">
        <div className="mx-auto grid h-32 w-32 place-items-center rounded-full border border-indigoElectric/12 bg-white/82 shadow-sm">
          <div className="text-center">
            <MinersLogo variant="symbol" className="mx-auto h-16 w-16" />
            <p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.24em] text-indigoElectric">Community</p>
          </div>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-5">
          {roles.map((role) => (
            <div key={role.id} className="text-center sm:text-left">
              <p className="text-[0.65rem] font-bold leading-none tracking-[0.18em] text-indigoElectric/72">{role.index}</p>
              <p className="mt-2 text-xs font-semibold uppercase leading-none tracking-[0.18em] text-ink">{role.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
