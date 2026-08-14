import type { Metadata } from "next";
import { ServiceAccordion } from "@/components/home/service-accordion";
import { PageHero } from "@/components/page/page-hero";
import { Section, SectionIntro } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { deliveryProcess } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Software development, training, mentorship, cloud, AI, and technical collaboration services from Miners Group."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology, education, and experience in one ecosystem."
        text="Miners Group provides software development services while creating practical learning and growth opportunities for developers."
        cta="Discuss Your Project"
        href="/for-companies#start-project"
      />
      <Section className="bg-white/52">
        <SectionIntro
          eyebrow="Software Development"
          title="Build, operate, and enable technical capability."
          text="Work with Miners on web platforms, mobile applications, custom software, AI-enabled features, cloud workflows, maintenance, training, consulting, and workshops."
        />
        <ServiceAccordion />
      </Section>
      <Section>
        <div className="rounded-[2rem] border border-ink/10 bg-ink p-8 text-white shadow-soft sm:p-12 dark-technical-grid">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight">Tell us what you are trying to build.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/66">
            Whether you already have detailed requirements or only an early idea, start the conversation and we can explore the right direction together.
          </p>
          <ButtonLink href="/for-companies#start-project" variant="dark" className="mt-8">Start a Project</ButtonLink>
        </div>
      </Section>
      <Section className="bg-white/52">
        <SectionIntro eyebrow="Delivery Process" title="From direction to useful software." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliveryProcess.map((step, index) => (
            <article key={step.title} className="rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigoElectric">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-xl font-semibold text-ink">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
