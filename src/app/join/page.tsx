import type { Metadata } from "next";
import { BriefcaseBusiness, GraduationCap, Mail, UsersRound } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionIntro } from "@/components/ui/section";
import { PageHero } from "@/components/page/page-hero";
import { FeatureList } from "@/components/page/feature-list";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Join Us",
  description: "Join Miners Group as a student, developer, mentor, internship applicant, or future contributor."
};

export default function JoinPage() {
  const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Join Miners Group")}&body=${encodeURIComponent("Full name:\nEmail:\nRole / university:\nMotivation:\nPortfolio / GitHub / LinkedIn:\n\nPlease attach your CV and motivation letter before sending.")}`;

  return (
    <>
      <PageHero
        eyebrow="Join Miners"
        title="Find your place inside Miners Group."
        text="You do not need to be an expert to become part of Miners. You need curiosity, commitment, and a willingness to grow and contribute."
      />
      <Section>
        <div className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-soft sm:p-12">
          <Mail className="h-8 w-8 text-indigoElectric" />
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-ink">Send your motivation letter and CV by email.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            For the first version, joining Miners is handled through email. Include your motivation letter, CV, and any relevant links such as GitHub, LinkedIn, or portfolio.
          </p>
          <ButtonLink href={mailto} className="mt-8">Prepare Join Email</ButtonLink>
        </div>
      </Section>
      <Section id="mentor" className="bg-white/52">
        <SectionIntro eyebrow="Ways To Join" title="Different paths, one ecosystem." />
        <div className="mt-10">
          <FeatureList
            items={[
              { title: "Join as a Student", text: "Get guidance, access learning opportunities, participate in community activities, and prepare for practical projects.", icon: GraduationCap },
              { title: "Join as a Developer", text: "Contribute to projects, collaborate with others, strengthen your engineering experience, and help build the ecosystem.", icon: BriefcaseBusiness },
              { title: "Join as a Mentor", text: "Help students and developers navigate technical and professional challenges by sharing your experience.", icon: UsersRound }
            ]}
          />
        </div>
      </Section>
    </>
  );
}
