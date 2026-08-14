import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

export function Section({
  children,
  className,
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cx("py-20 sm:py-24 lg:py-32", className)}>
      <div className="container-miners">{children}</div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cx("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">{eyebrow}</p>
      ) : null}
      <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-muted">{text}</p> : null}
    </div>
  );
}
