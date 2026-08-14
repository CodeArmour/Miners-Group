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
        text="Practical programs are being developed to help students and developers strengthen technical skills, practice modern engineering workflows, receive guidance, and prepare for meaningful opportunities."
        cta="Explore Opportunities"
        href="/join"
      />
      <Section>
        <SectionIntro
          eyebrow="Learning Areas"
          title="Technical directions for future training, workshops, and guided practice."
          text="These areas show where Miners is focusing its learning ecosystem as programs and cohorts take shape."
        />
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
              title: "Training",
              text: "Structured practical learning and workshops focused on skills developers can apply.",
              icon: GraduationCap,
              meta: "In Development"
            },
            {
              title: "Internships",
              text: "Future structured practical experience around requirements, planning, Git, reviews, testing, QA, documentation, and delivery.",
              icon: GitPullRequestArrow,
              meta: "Applications Not Open Yet"
            },
            {
              title: "Mentorship",
              text: "Guidance around learning roadmaps, specialization, portfolio, certifications, internship preparation, and career direction.",
              icon: Compass,
              meta: "Open for Requests"
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
