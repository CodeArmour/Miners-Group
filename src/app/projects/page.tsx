import type { Metadata } from "next";
import { labsAreas, labsProcess } from "@/data/site";
import { PageHero } from "@/components/page/page-hero";
import { Section, SectionIntro } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Projects",
  description: "Miners Labs, internal products, community experiments, and practical software-building areas."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Build things that teach you something."
        text="Miners Labs is the practical side of the ecosystem, a place for internal products, community experiments, open-source practice, and eventually real collaborative software projects."
      />
      <Section className="bg-ink text-white dark-technical-grid">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-limeSignal">Current Labs Areas</p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">Practice the engineering process by building with purpose.</h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {labsAreas.map((project) => (
            <article key={project.name} className="rounded-[2rem] border border-white/10 bg-white/8 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-limeSignal">{project.status}</p>
              <h2 className="mt-5 text-2xl font-semibold">{project.name}</h2>
              <p className="mt-4 text-sm leading-6 text-white/66">{project.purpose}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <SectionIntro
          eyebrow="How Labs Work"
          title="From idea to reflection."
          text="Labs work is designed to reinforce the real habits behind software development, not only the final interface."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {labsProcess.map((step) => (
            <span key={step} className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm">
              {step}
            </span>
          ))}
        </div>
      </Section>
      <Section className="bg-lilacSoft/35">
        <div className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-soft sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">Future Case Studies</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-ink">Work worth showing will live here.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            As Miners projects are completed and can be shared publicly, this space will document the problem, process, technology, challenges, and lessons behind them.
          </p>
        </div>
      </Section>
    </>
  );
}
