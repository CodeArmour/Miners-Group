import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { HeroBrandMark } from "@/components/page/hero-brand-mark";
import { HeroTransitionBlur } from "@/components/page/hero-transition-blur";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionIntro } from "@/components/ui/section";
import { featuredProjects, labsAreas, labsWorkflow } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects & Miners Labs",
  description:
    "Explore Miners Group projects and learn how Miners Labs turns ideas into practical software engineering experience through planning, building, review, QA, documentation, and delivery."
};

export default function ProjectsPage() {
  const [andalucia, moonGlow] = featuredProjects;

  return (
    <main className="overflow-hidden pt-28">
      <section className="relative overflow-hidden bg-offWhite pt-10">
        <div className="absolute inset-0 technical-grid opacity-45" aria-hidden="true" />
        <HeroBrandMark />
        <HeroTransitionBlur />
        <div className="container-miners relative z-10 pb-24 pt-16 sm:pb-28 sm:pt-24">
          <div className="max-w-5xl">
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.24em] text-indigoElectric">Miners Labs</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-[5.5rem] lg:leading-[0.95]">
              We learn by building things that matter.
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-muted">
              Miners Labs is where ideas move through planning, implementation, review, testing, documentation, and delivery, turning technical knowledge into practical engineering experience.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#featured-projects">Explore Projects</ButtonLink>
              <ButtonLink href="#labs-workflow" variant="secondary">How Labs Works</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section id="featured-projects" className="pt-4">
        <article className="grid gap-8 lg:grid-cols-[1.45fr_0.75fr] lg:items-center">
          <ProjectFrame project={andalucia} priority />
          <ProjectSummary project={andalucia} />
        </article>
      </Section>

      <Section className="bg-ink text-white dark-technical-grid">
        <article className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <ProjectSummary project={moonGlow} dark />
          <ProjectFrame project={moonGlow} dark />
        </article>
      </Section>

      <Section id="labs-workflow">
        <SectionIntro
          eyebrow="How Labs Works"
          title="From idea to reflection."
          text="Labs work is designed around the engineering habits that turn a concept into working software and useful experience."
        />
        <div className="relative mt-12">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-ink/10 md:block lg:left-0 lg:right-0 lg:top-8 lg:h-px lg:w-full" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-8">
            {labsWorkflow.map((step, index) => (
              <article key={step.title} className="relative rounded-[1.25rem] border border-ink/10 bg-white p-5 shadow-sm">
                <span className="absolute -top-3 left-5 grid h-7 w-7 place-items-center rounded-full bg-indigoElectric text-[0.68rem] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-ink">{step.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-lilacSoft/30">
        <SectionIntro
          eyebrow="Labs Environments"
          title="Places to practice, experiment, and contribute."
          text="Beyond visible project work, Labs gives the Miners ecosystem structured environments for building skill through real collaboration."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {labsAreas.map((area) => (
            <article key={area.name} className="rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigoElectric">{area.category}</span>
                <span className="rounded-full bg-lilacSoft px-3 py-1 text-xs font-bold text-ink">{area.status}</span>
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink">{area.name}</h2>
              <p className="mt-4 text-sm leading-6 text-muted">{area.purpose}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.technologies.map((item) => (
                  <span key={item} className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-soft sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">Future Projects</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-ink">More work will live here.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            As Miners Labs grows, this space will document the products, experiments, open-source work, and collaborative software projects built through the ecosystem.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/join">Join Miners Group</ButtonLink>
            <ButtonLink href="/programs" variant="secondary">Explore Programs</ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}

function ProjectFrame({
  project,
  dark = false,
  priority = false
}: {
  project: (typeof featuredProjects)[number];
  dark?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`rounded-[1.75rem] border p-3 shadow-soft ${dark ? "border-white/10 bg-white/8" : "border-ink/10 bg-white"}`}>
      <div className={`rounded-[1.25rem] border ${dark ? "border-white/10 bg-ink" : "border-ink/10 bg-offWhite"}`}>
        <div className={`flex h-10 items-center gap-2 border-b px-4 ${dark ? "border-white/10" : "border-ink/10"}`} aria-hidden="true">
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-white/28" : "bg-ink/18"}`} />
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-white/18" : "bg-ink/12"}`} />
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-limeSignal/70" : "bg-indigoElectric/35"}`} />
        </div>
        <div className="p-2">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={project.slug === "andalucia" ? 1730 : 1393}
            height={project.slug === "andalucia" ? 942 : 967}
            priority={priority}
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="h-auto w-full rounded-[0.9rem]"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectSummary({ project, dark = false }: { project: (typeof featuredProjects)[number]; dark?: boolean }) {
  return (
    <div className={dark ? "text-white" : "text-ink"}>
      <p className={`text-xs font-bold uppercase tracking-[0.22em] ${dark ? "text-limeSignal" : "text-indigoElectric"}`}>
        Project {project.index}
      </p>
      <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{project.name}</h2>
      <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/66" : "text-muted"}`}>{project.description}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${dark ? "border-white/10 text-white/70" : "border-ink/10 text-muted"}`}>
          {project.category}
        </span>
        <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${dark ? "border-white/10 text-limeSignal" : "border-ink/10 text-indigoElectric"}`}>
          {project.status}
        </span>
      </div>
      <Link
        href="#labs-workflow"
        className={`focus-ring mt-8 inline-flex items-center gap-2 rounded-full text-sm font-semibold ${dark ? "text-limeSignal" : "text-indigoElectric"}`}
        aria-label={`See how Miners Labs work supports projects like ${project.name}`}
      >
        See the Labs workflow <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`focus-ring ml-0 mt-4 inline-flex items-center gap-2 rounded-full text-sm font-semibold sm:ml-4 ${dark ? "text-white/78 hover:text-limeSignal" : "text-ink/70 hover:text-indigoElectric"}`}
          aria-label={`View ${project.name} live project`}
        >
          View Live Project <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}
