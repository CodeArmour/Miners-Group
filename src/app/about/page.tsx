import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page/page-hero";
import { FeatureList } from "@/components/page/feature-list";
import { Section, SectionIntro } from "@/components/ui/section";
import { trustPrinciples, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn why Miners Group exists and how it bridges learning with real-world software development."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Miners"
        title="Building the bridge between learning and real-world software development."
        text="Miners Group was created around a simple problem: learning programming and becoming ready to work as a software developer are not the same thing."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">Our Mission</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink">Transform knowledge into practical experience.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              To create an environment where students and developers can transform knowledge into practical skills, practical skills into experience, and experience into meaningful opportunities.
            </p>
          </article>
          <article className="rounded-[2rem] border border-ink/10 bg-ink p-8 text-white shadow-soft dark-technical-grid">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-limeSignal">Our Vision</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">An international technology ecosystem.</h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              A place where education, mentorship, software development, and opportunity exist inside the same ecosystem.
            </p>
          </article>
        </div>
      </Section>
      <Section className="bg-white/52">
        <SectionIntro
          eyebrow="Why It Matters"
          title="Professional software development requires more than syntax."
          text="Miners Group is designed to expose members to planning, collaboration, quality, review, communication, and delivery."
        />
        <div className="mt-10">
          <FeatureList items={trustPrinciples} />
        </div>
      </Section>
      <Section>
        <SectionIntro eyebrow="Values" title="Principles behind the ecosystem." />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value} className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-white p-4 font-semibold text-ink shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-indigoElectric" />
              {value}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
