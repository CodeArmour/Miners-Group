import type { Metadata } from "next";
import { BriefcaseBusiness, GraduationCap, Megaphone, UsersRound } from "lucide-react";
import { JoinApplicationForm } from "@/components/forms/email-forms";
import { Section, SectionIntro } from "@/components/ui/section";
import { EditorialWords, HeroCopy, HeroShell } from "@/components/page/hero-system";
import { FeatureList } from "@/components/page/feature-list";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Join Miners Group as a student, developer, mentor, internship applicant, or future contributor."
};

export default function JoinPage() {
  return (
    <>
      <HeroShell className="bg-lilacSoft/25">
        <div className="container-miners relative z-10 grid gap-12 pb-20 lg:grid-cols-[0.95fr_0.62fr] lg:items-end lg:pb-28">
          <HeroCopy
            eyebrow="Join Miners"
            title="There is more than one way to grow here."
            text="You do not need to be an expert to become part of Miners. You need curiosity, commitment, and a willingness to grow and contribute."
            primary={{ label: "Apply To Join", href: "#apply" }}
            secondary={{ label: "Ways To Join", href: "#mentor", variant: "secondary" }}
            size="standard"
          />
          <EditorialWords words={["Learn", "Build", "Contribute", "Mentor"]} />
        </div>
      </HeroShell>
      <Section id="apply">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Apply To Join</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink">Tell us where you are and what you want to build toward.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Share your experience, interests, and motivation. You can also include GitHub, LinkedIn, portfolio, or other relevant links.
            </p>
          </div>
          <JoinApplicationForm />
        </div>
      </Section>
      <Section id="mentor" className="bg-white/52">
        <SectionIntro eyebrow="Ways To Join" title="Different paths, one ecosystem." />
        <div className="mt-10">
          <FeatureList
            items={[
              { title: "Join as a Student", text: "Get guidance, access learning opportunities, participate in community activities, and prepare for practical projects.", icon: GraduationCap },
              { title: "Join as a Developer", text: "Contribute to projects, collaborate with others, strengthen your engineering experience, and help build the ecosystem.", icon: BriefcaseBusiness },
              { title: "Join as a Mentor", text: "Help students and developers navigate technical and professional challenges by sharing your experience.", icon: UsersRound },
              { title: "Join as a Community Contributor", text: "Support events, content, organization, design, communication, and community coordination.", icon: Megaphone }
            ]}
          />
        </div>
      </Section>
    </>
  );
}
