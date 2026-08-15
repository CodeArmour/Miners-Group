import type { ReactNode } from "react";
import { MinersLogo } from "@/components/brand/logo";
import { HeroTransitionBlur } from "@/components/page/hero-transition-blur";
import { ButtonLink } from "@/components/ui/button";
import { cx } from "@/lib/utils";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "dark" | "ghost";
};

export function HeroShell({
  children,
  className,
  grid = true,
  blur = true,
  dark = false
}: {
  children: ReactNode;
  className?: string;
  grid?: boolean;
  blur?: boolean;
  dark?: boolean;
}) {
  return (
    <section className={cx("relative isolate overflow-hidden pt-32 sm:pt-36 lg:pt-40", dark ? "bg-ink text-white" : "bg-offWhite text-ink", className)}>
      {grid ? <div className={cx("absolute inset-0", dark ? "dark-technical-grid opacity-45" : "technical-grid opacity-35")} aria-hidden="true" /> : null}
      {children}
      {blur ? <HeroTransitionBlur tone={dark ? "dark" : "light"} /> : null}
    </section>
  );
}

export function HeroCopy({
  eyebrow,
  title,
  text,
  primary,
  secondary,
  size = "standard",
  dark = false,
  className
}: {
  eyebrow: string;
  title: string;
  text: string;
  primary?: HeroAction;
  secondary?: HeroAction;
  size?: "compact" | "standard" | "large";
  dark?: boolean;
  className?: string;
}) {
  const titleClass =
    size === "large"
      ? "text-5xl sm:text-6xl lg:text-[5.9rem] lg:leading-[0.94]"
      : size === "compact"
        ? "text-4xl sm:text-5xl lg:text-[4.5rem] lg:leading-[0.98]"
        : "text-5xl sm:text-6xl lg:text-[5.2rem] lg:leading-[0.96]";

  return (
    <div className={cx("max-w-5xl", className)}>
      <p className={cx("mb-7 text-xs font-bold uppercase tracking-[0.24em]", dark ? "text-limeSignal" : "text-indigoElectric")}>{eyebrow}</p>
      <h1 className={cx("text-balance font-semibold tracking-tight", dark ? "text-white" : "text-ink", titleClass)}>{title}</h1>
      <p className={cx("mt-8 max-w-3xl text-lg leading-8 sm:text-xl", dark ? "text-white/68" : "text-muted")}>{text}</p>
      {primary || secondary ? (
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          {primary ? <ButtonLink href={primary.href} variant={primary.variant ?? (dark ? "dark" : "primary")}>{primary.label}</ButtonLink> : null}
          {secondary ? <ButtonLink href={secondary.href} variant={secondary.variant ?? (dark ? "ghost" : "secondary")} className={dark ? "text-white hover:bg-white/10" : undefined}>{secondary.label}</ButtonLink> : null}
        </div>
      ) : null}
    </div>
  );
}

export function EditorialIndex({
  label,
  className,
  dark = false
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={cx("hidden select-none text-right lg:block", dark ? "text-white/10" : "text-ink/[0.06]", className)} aria-hidden="true">
      <p className="text-[9rem] font-semibold leading-none tracking-[-0.08em]">{label}</p>
      <div className={cx("ml-auto mt-4 h-px w-40", dark ? "bg-white/12" : "bg-indigoElectric/16")} />
    </div>
  );
}

export function EditorialWords({
  words,
  dark = false
}: {
  words: string[];
  dark?: boolean;
}) {
  return (
    <div className="hidden max-w-sm lg:block" aria-hidden="true">
      <div className={cx("space-y-3 border-l pl-6", dark ? "border-white/12" : "border-indigoElectric/18")}>
        {words.map((word, index) => (
          <p key={word} className={cx("text-4xl font-semibold uppercase leading-none tracking-[-0.05em]", index === 0 ? (dark ? "text-limeSignal" : "text-indigoElectric") : dark ? "text-white/30" : "text-ink/18")}>
            {word}
          </p>
        ))}
      </div>
    </div>
  );
}

export function EditorialFlow({
  items,
  dark = false,
  compact = false
}: {
  items: string[];
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <ol className={cx("flex flex-wrap gap-2", compact ? "max-w-xl" : "max-w-3xl")} aria-label={`${items.join(", ")} flow`}>
      {items.map((item, index) => (
        <li key={item} className={cx("inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]", dark ? "border-white/12 text-white/72" : "border-ink/10 bg-white/70 text-ink/70")}>
          <span className={dark ? "text-limeSignal" : "text-indigoElectric"}>{String(index + 1).padStart(2, "0")}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}

export function PeopleConstellation() {
  const roles = [
    { label: "Student", className: "left-1/2 top-3 -translate-x-1/2" },
    { label: "Developer", className: "right-2 top-1/2 -translate-y-1/2" },
    { label: "Builder", className: "bottom-4 right-10" },
    { label: "Contributor", className: "bottom-4 left-10" },
    { label: "Mentor", className: "left-2 top-1/2 -translate-y-1/2" }
  ];

  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[420px] lg:block" aria-label="Students, developers, contributors, mentors, and builders connected through Miners Community">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 420" aria-hidden="true">
        <circle cx="210" cy="210" r="120" fill="none" stroke="#5B3DF5" strokeOpacity="0.12" strokeWidth="1" />
        <path d="M210 80V165M340 210H255M294 312L236 250M126 312L184 250M80 210H165" stroke="#5B3DF5" strokeOpacity="0.2" strokeWidth="1.4" />
      </svg>
      <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-indigoElectric/20 bg-white shadow-sm">
        <MinersLogo variant="symbol" className="h-11 w-11" />
      </div>
      {roles.map((role) => (
        <div key={role.label} className={cx("absolute", role.className)}>
          <span className="inline-flex rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm">{role.label}</span>
        </div>
      ))}
    </div>
  );
}

export function CollaborationLine() {
  return (
    <div className="hidden max-w-lg lg:block" aria-label="Company ideas move through Miners toward software, talent, and partnership paths">
      <div className="rounded-[1.75rem] border border-ink/10 bg-white/82 p-6 shadow-sm">
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 text-center">
          {["Idea", "Miners", "Software"].map((item, index) => (
            <span key={item} className={cx("rounded-full px-4 py-3 text-sm font-bold uppercase tracking-[0.16em]", index === 1 ? "bg-ink text-white" : "border border-ink/10 bg-offWhite text-ink")}>
              {item}
            </span>
          )).flatMap((node, index, array) => (index < array.length - 1 ? [node, <span key={`arrow-${index}`} className="text-indigoElectric" aria-hidden="true">→</span>] : [node]))}
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {["Build", "Talent", "Partnership"].map((path) => (
            <span key={path} className="rounded-full bg-lilacSoft px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-indigoElectric">{path}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
