import { ButtonLink } from "@/components/ui/button";
import { HeroBrandMark } from "@/components/page/hero-brand-mark";
import { HeroTransitionBlur } from "@/components/page/hero-transition-blur";

export function PageHero({
  eyebrow,
  title,
  text,
  cta,
  href = "/contact"
}: {
  eyebrow: string;
  title: string;
  text: string;
  cta?: string;
  href?: string;
}) {
  return (
    <main className="relative isolate overflow-hidden bg-offWhite pt-32">
      <div className="absolute inset-0 technical-grid opacity-35" aria-hidden="true" />
      <HeroBrandMark />
      <HeroTransitionBlur />
      <section className="container-miners relative z-10 pb-24 pt-16 sm:pb-28 sm:pt-24">
        <div className="max-w-5xl">
          <p className="mb-7 text-xs font-bold uppercase tracking-[0.24em] text-indigoElectric">{eyebrow}</p>
          <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-[5.5rem] lg:leading-[0.95]">{title}</h1>
          <p className="mt-9 max-w-3xl text-lg leading-8 text-muted sm:text-xl">{text}</p>
          {cta ? <ButtonLink href={href} className="mt-10">{cta}</ButtonLink> : null}
        </div>
      </section>
    </main>
  );
}
