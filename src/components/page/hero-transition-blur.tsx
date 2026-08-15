export function HeroTransitionBlur({ tone = "light" }: { tone?: "light" | "dark" }) {
  const blurSurface = tone === "dark" ? "bg-ink/80" : "bg-offWhite/80";
  const fadeSurface = tone === "dark" ? "bg-gradient-to-b from-transparent via-ink/70 to-ink" : "bg-gradient-to-b from-transparent via-offWhite/70 to-offWhite";

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-[2] h-36 overflow-hidden" aria-hidden="true">
      <div className={`absolute inset-x-[-10%] bottom-[-4.5rem] h-36 ${blurSurface} blur-3xl`} />
      <div className={`absolute inset-x-0 bottom-0 h-28 ${fadeSurface}`} />
    </div>
  );
}
