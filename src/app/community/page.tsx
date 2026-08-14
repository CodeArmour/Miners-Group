import type { Metadata } from "next";
import { communityActivities } from "@/data/site";
import { PageHero } from "@/components/page/page-hero";
import { FeatureList } from "@/components/page/feature-list";
import { Section, SectionIntro } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Community",
  description: "Community activities for learning, building, mentoring, sharing, and collaboration at Miners Group."
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="A community built around progress."
        text="Meet people who are learning, building, teaching, experimenting, and growing in technology."
        cta="Become a Member"
        href="/join"
      />
      <Section>
        <SectionIntro
          eyebrow="Activities"
          title="Grow through collaboration."
          text="The community creates opportunities for discussions, coding sessions, workshops, challenges, project collaboration, networking, knowledge sharing, and mentorship."
        />
        <div className="mt-10">
          <FeatureList items={communityActivities.map((activity) => ({ title: activity.title, icon: activity.icon }))} />
        </div>
      </Section>
      <Section className="bg-lilacSoft/35">
        <div className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-soft sm:p-12">
          <h2 className="text-4xl font-semibold tracking-tight text-ink">Join the community by email for now.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Official community platforms and social links will be added once they are available.
          </p>
          <ButtonLink href="/join" className="mt-8">Join Miners Group</ButtonLink>
        </div>
      </Section>
    </>
  );
}
