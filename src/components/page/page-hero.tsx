import { ButtonLink } from "@/components/ui/button";

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
    <main className="pt-32">
      <section className="container-miners py-16 sm:py-24">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">{eyebrow}</p>
          <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{text}</p>
          {cta ? <ButtonLink href={href} className="mt-8">{cta}</ButtonLink> : null}
        </div>
      </section>
    </main>
  );
}
