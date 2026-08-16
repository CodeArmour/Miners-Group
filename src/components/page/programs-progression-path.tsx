const stages = [
  { label: "Learn", className: "left-0 top-3", final: false },
  { label: "Practice", className: "left-[20%] top-[24%]", final: false },
  { label: "Build", className: "left-[43%] top-[44%]", final: false },
  { label: "Review", className: "left-[63%] top-[64%]", final: false },
  { label: "Grow", className: "right-0 bottom-2", final: true }
] as const;

export function ProgramsProgressionPath() {
  return (
    <aside className="w-full max-w-[560px] lg:ml-auto" aria-label="Miners programs progression model">
      <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Progression Model</p>

      <ol className="relative hidden min-h-[360px] lg:block" aria-label="Learn, practice, build, review, grow progression">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 360" fill="none" aria-hidden="true">
          <path
            d="M36 76 H158 C176 76 184 86 194 101 L224 146 C234 161 243 170 260 170 H342 C360 170 370 180 380 196 L409 240 C419 256 431 264 449 264 H524"
            stroke="#5B3DF5"
            strokeOpacity="0.22"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
          <path
            d="M407 240 C419 256 431 264 449 264 H524"
            stroke="#5B3DF5"
            strokeOpacity="0.42"
            strokeWidth="1.45"
            strokeLinecap="round"
          />
        </svg>

        {stages.map((stage, index) => (
          <li key={stage.label} className={`group absolute ${stage.className}`}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">{String(index + 1).padStart(2, "0")}</p>
            <h2 className={`mt-2 text-3xl font-semibold uppercase leading-none tracking-[-0.035em] transition-colors duration-200 group-hover:text-indigoElectric ${stage.final ? "text-indigoElectric" : "text-ink"}`}>
              {stage.label}
            </h2>
            <span className={`mt-4 block h-px transition-colors duration-200 ${stage.final ? "w-20 bg-indigoElectric/50" : "w-16 bg-indigoElectric/22 group-hover:bg-indigoElectric/42"}`} aria-hidden="true" />
          </li>
        ))}
      </ol>

      <ol className="grid gap-0 border-l border-indigoElectric/24 pl-6 lg:hidden" aria-label="Learn, practice, build, review, grow progression">
        {stages.map((stage, index) => (
          <li key={stage.label} className="relative border-b border-ink/10 py-4 last:border-b-0">
            <span className="absolute -left-[1.82rem] top-6 h-2.5 w-2.5 rounded-full bg-indigoElectric" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">{String(index + 1).padStart(2, "0")}</p>
            <h2 className={`mt-2 text-2xl font-semibold uppercase leading-none tracking-[-0.035em] ${stage.final ? "text-indigoElectric" : "text-ink"}`}>
              {stage.label}
            </h2>
          </li>
        ))}
      </ol>
    </aside>
  );
}
