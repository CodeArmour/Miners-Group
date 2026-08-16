import { serviceGroups } from "@/data/site";

export function ServicesCapabilityStack() {
  return (
    <aside className="w-full max-w-[520px] lg:ml-auto" aria-label="Miners software service capabilities">
      <p className="mb-6 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-indigoElectric/80">Capabilities</p>
      <ol className="border-y border-ink/10">
        {serviceGroups.map((group, index) => (
          <li key={group.title} className="group grid gap-5 border-b border-ink/10 py-7 last:border-b-0 sm:grid-cols-[4.5rem_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">{String(index + 1).padStart(2, "0")}</p>
            </div>
            <div>
              <h2 className="text-4xl font-semibold uppercase leading-none tracking-[-0.04em] text-ink transition-colors duration-200 group-hover:text-indigoElectric sm:text-5xl">
                {group.title}
              </h2>
              <ul className="mt-5 grid gap-2" aria-label={`${group.title} services`}>
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-ink/54 transition-colors duration-200 group-hover:text-ink/78">
                    <span className="h-px w-5 bg-indigoElectric/20 transition-colors duration-200 group-hover:bg-indigoElectric/45" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}
