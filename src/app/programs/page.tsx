import type { Metadata } from "next";
import { Compass, GitPullRequestArrow, GraduationCap } from "lucide-react";
import { FeatureList } from "@/components/page/feature-list";
import { PageHero } from "@/components/page/page-hero";
import { Section, SectionIntro } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { programs } from "@/data/site";

export const metadata: Metadata = {
  title: "Programs",
  description: "Training, internship, and mentorship program direction for Miners Group."
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Programs designed to move you forward."
        text="Static program areas are prepared for the first website version. Real schedules, mentors, duration, requirements, and application status can connect later."
        cta="Explore Opportunities"
        href="/join"
      />
      <Section>
        <SectionIntro eyebrow="Training Programs" title="Practical learning tracks being prepared." />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {programs.map((program) => (
            <div key={program} className="rounded-2xl border border-ink/10 bg-white p-4 text-sm font-semibold text-ink shadow-sm">
              {program}
            </div>
          ))}
        </div>
      </Section>
      <Section id="internship" className="bg-white/52">
        <FeatureList
          items={[
            {
              title: "Training Programs",
              text: "Structured practical learning experiences focused on specific technical skills.",
              icon: GraduationCap,
              meta: "Preparing"
            },
            {
              title: "Internship Program",
              text: "Future structured exposure to requirements, planning, Git workflows, code reviews, testing, QA, documentation, and delivery.",
              icon: GitPullRequestArrow,
              meta: "No active openings"
            },
            {
              title: "Mentorship Program",
              text: "Guidance for roadmaps, specialization choices, portfolio reviews, certifications, internship preparation, and job preparation.",
              icon: Compass,
              meta: "Preparing"
            }
          ]}
        />
      </Section>
      <Section id="mentorship">
        <div className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-soft sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">Mentorship</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-ink">You do not have to figure everything out alone.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            Mentorship should help members understand where they are, where they want to go, and what steps can move them forward.
          </p>
          <ButtonLink href="/join#mentor" className="mt-8">Request Mentorship</ButtonLink>
        </div>
      </Section>
    </>
  );
}
