import type { Metadata } from "next";
import { projectPlaceholders } from "@/data/site";
import { PageHero } from "@/components/page/page-hero";
import { Section, SectionIntro } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Projects",
  description: "Miners Labs project placeholders and future case-study structure."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Real learning happens when you build."
        text="Explore software built by Miners Group teams, community experiments, internal products, and client work that can be publicly shared. V1 uses honest internal placeholders until real projects exist."
      />
      <Section className="bg-ink text-white dark-technical-grid">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-limeSignal">Miners Labs</p>
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">No fabricated case studies. Only real or clearly marked work.</h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projectPlaceholders.map((project) => (
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
          eyebrow="Future Case Studies"
          title="The architecture is ready for real project data."
          text="Future case studies can include overview, problem, solution, team, technologies, process, challenges, results, screenshots, and lessons learned."
        />
      </Section>
    </>
  );
}
