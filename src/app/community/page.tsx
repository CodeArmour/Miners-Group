import type { Metadata } from "next";
import { communityActivities, communityPrinciples } from "@/data/site";
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
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Early Community</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink">Become part of the early Miners community.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Join students, developers, mentors, and builders who want to learn with direction, share knowledge, work together, and create opportunities through technology.
            </p>
            <ButtonLink href="/join" className="mt-8">Join Miners Group</ButtonLink>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {communityPrinciples.map((principle) => (
              <article key={principle.title} className="rounded-[1.25rem] border border-ink/10 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
