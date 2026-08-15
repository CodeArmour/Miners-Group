export function HeroTransitionBlur() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-[2] h-36 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-[-10%] bottom-[-4.5rem] h-36 bg-offWhite/80 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-offWhite/70 to-offWhite" />
    </div>
  );
}
