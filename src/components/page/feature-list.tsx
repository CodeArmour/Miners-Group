import type { LucideIcon } from "lucide-react";

export function FeatureList({
  items
}: {
  items: Array<{ title: string; text?: string; icon?: LucideIcon; meta?: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.title} className="rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-soft">
            {Icon ? (
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lilacSoft text-indigoElectric">
                <Icon className="h-5 w-5" />
              </span>
            ) : null}
            {item.meta ? <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-indigoElectric">{item.meta}</p> : null}
            <h2 className="mt-4 text-xl font-semibold text-ink">{item.title}</h2>
            {item.text ? <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
