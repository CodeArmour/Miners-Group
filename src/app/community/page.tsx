import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { MinersLogo } from "@/components/brand/logo";
import { CommunityLoopWheel } from "@/components/community/community-loop-wheel";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionIntro } from "@/components/ui/section";
import {
  communityActivities,
  communityCode,
  communityCollaborationFlow,
  communityLoop,
  communityRoles,
  knowledgeFlow
} from "@/data/site";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Miners Group community to learn, share knowledge, collaborate on projects, receive feedback, contribute, and grow alongside students, developers, builders, and mentors."
};

const participantRoles = ["Student", "Developer", "Contributor", "Mentor", "Builder"];

export default function CommunityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-offWhite pt-32 sm:pt-36 lg:pt-40">
        <div className="absolute inset-0 technical-grid opacity-40" aria-hidden="true" />
        <div className="container-miners relative grid gap-12 pb-20 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Miners Community</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Grow faster when you do not build alone.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Miners Community brings students, developers, mentors, and builders together to ask questions, exchange knowledge, work on ideas, review work with one another, and grow through shared experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/join">Join Miners Group</ButtonLink>
              <ButtonLink href="#community-loop" variant="secondary">
                Explore How We Collaborate
              </ButtonLink>
            </div>
          </div>
          <CommunityNetwork />
        </div>
      </section>

      <Section id="community-loop">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div className="max-w-md">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">How Miners Grows</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">How Miners Grows</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Community growth is continuous. Questions become shared knowledge, knowledge becomes collaboration, experience becomes mentorship, and growing members help the next person begin.
            </p>
          </div>
          <div>
            <CommunityLoopWheel stages={communityLoop} />
            <div className="mx-auto mt-6 flex max-w-md items-start gap-4 text-sm leading-6 text-muted">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-ink/10 bg-offWhite text-indigoElectric">
                <MinersLogo variant="symbol" className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-ink">Our community loop is continuous.</p>
                <p>This is how we learn, build, mentor, and grow together.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-[1.75rem] border border-indigoElectric/10 bg-lilacSoft/55 p-6 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-7">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight text-ink">This cycle is what makes Miners different.</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              It is not a one-way path. Every member both benefits from the community and strengthens it for the next person.
            </p>
          </div>
          <ButtonLink href="/join" className="mt-6 shrink-0 sm:mt-0">
            Join Miners Group
          </ButtonLink>
        </div>
      </Section>

      <Section className="bg-white/58">
        <SectionIntro eyebrow="Inside The Community" title="More than a place to chat." text="Community activity should create motion: questions, shared knowledge, feedback, collaboration, and practical building." />
        <div className="mt-12 grid auto-rows-fr gap-5 lg:grid-cols-12">
          {communityActivities.map((activity) => {
            const Icon = activity.icon;
            return (
              <article key={activity.title} className={`rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-sm ${activity.className}`}>
                <Icon className="h-5 w-5 text-indigoElectric" aria-hidden="true" />
                <h2 className="mt-8 text-xl font-semibold tracking-tight text-ink">{activity.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{activity.text}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Build Together</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">From conversation to collaboration.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Community participation can move beyond discussion into ideas, experiments, teams, and Miners Labs work when the fit is right.
            </p>
            <ButtonLink href="/projects" variant="secondary" className="mt-8">
              Explore Miners Labs
            </ButtonLink>
          </div>
          <ol className="rounded-[2rem] border border-ink/10 bg-white p-5 shadow-soft sm:p-7" aria-label="Conversation to collaboration flow">
            {communityCollaborationFlow.map((step, index) => (
              <li key={step} className="flex items-center gap-4 border-b border-ink/10 py-4 last:border-b-0">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lilacSoft text-xs font-bold text-indigoElectric">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-ink">{step}</span>
                {index !== communityCollaborationFlow.length - 1 ? <ArrowRight className="ml-auto h-4 w-4 text-indigoElectric/60" aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="bg-lilacSoft/35">
        <SectionIntro eyebrow="Ways To Participate" title="There is more than one way to contribute." text="These are contribution modes, not ranks. A person may move between them as they learn, build, review, and support others." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {communityRoles.map((role) => (
            <article key={role.title} className="rounded-[1.5rem] border border-ink/10 bg-white p-5">
              <h2 className="text-lg font-semibold tracking-tight text-ink">{role.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{role.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[1.5rem] border border-ink/10 bg-white p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <p className="text-sm font-semibold text-ink">Looking for more structured learning?</p>
          <ButtonLink href="/programs" variant="secondary" className="mt-4 sm:mt-0">
            Explore Programs
          </ButtonLink>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Knowledge Should Move</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">What you learn should not stop with you.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              A useful explanation, code review, documented solution, workshop, or piece of feedback can help more than one person.
            </p>
            <ButtonLink href="/join#mentor" variant="secondary" className="mt-8">
              Request Mentorship
            </ButtonLink>
          </div>
          <ol className="grid gap-3 sm:grid-cols-5" aria-label="Knowledge sharing flow">
            {knowledgeFlow.map((step, index) => (
              <li key={step} className="rounded-[1.25rem] border border-ink/10 bg-white p-4 text-center shadow-sm">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigoElectric">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-sm font-semibold text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="bg-ink text-white dark-technical-grid">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-limeSignal">How We Show Up</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Simple behaviors make the community useful.</h2>
          </div>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2" aria-label="Community behavior code">
            {communityCode.map((principle) => (
              <li key={principle} className="border-b border-white/10 pb-4 text-lg font-semibold tracking-tight text-white/84">
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-indigoElectric/15 bg-white p-8 shadow-soft sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Early Community</p>
              <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Join while Miners is still being shaped.</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-muted">
                Early members have an opportunity to do more than join a finished community. They can help influence what gets built, which activities matter, and how the community grows.
              </p>
              <ButtonLink href="/join" className="mt-8">
                Become an Early Member
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white/58">
        <div className="rounded-[2rem] bg-lilacSoft/70 p-8 shadow-soft sm:p-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Join The Community</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Do not just follow the community. Help shape it.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Bring your questions, ideas, experience, curiosity, and willingness to contribute.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/join">Join Miners Group</ButtonLink>
            <ButtonLink href="/programs" variant="secondary">
              Explore Programs
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

function CommunityNetwork() {
  return (
    <div className="relative mx-auto aspect-[1.08/1] w-full max-w-[560px] rounded-[2rem] border border-ink/10 bg-white p-5 shadow-soft sm:p-7">
      <div className="absolute inset-0 rounded-[2rem] technical-grid opacity-45" aria-hidden="true" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 520" aria-hidden="true">
        <path d="M280 118 L280 220" stroke="#5B3DF5" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M118 260 L222 260" stroke="#5B3DF5" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M338 260 L442 260" stroke="#5B3DF5" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M226 326 L158 414" stroke="#5B3DF5" strokeOpacity="0.18" strokeWidth="1.5" />
        <path d="M334 326 L402 414" stroke="#5B3DF5" strokeOpacity="0.18" strokeWidth="1.5" />
      </svg>
      <div className="relative flex h-full items-center justify-center">
        <div className="grid h-28 w-28 place-items-center rounded-[1.75rem] border border-indigoElectric/20 bg-offWhite shadow-sm">
          <MinersLogo variant="symbol" className="h-14 w-14" />
          <span className="sr-only">Miners Community connects students, developers, contributors, mentors, and builders.</span>
        </div>
        {participantRoles.map((role, index) => (
          <div key={role} className={rolePosition(index)}>
            <div className="flex min-w-32 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm">
              <span className="h-2 w-2 rounded-full bg-indigoElectric" aria-hidden="true" />
              {role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function rolePosition(index: number) {
  const positions = [
    "absolute left-1/2 top-5 -translate-x-1/2",
    "absolute left-4 top-1/2 -translate-y-1/2",
    "absolute right-4 top-1/2 -translate-y-1/2",
    "absolute bottom-5 left-8",
    "absolute bottom-5 right-8"
  ];

  return positions[index];
}
