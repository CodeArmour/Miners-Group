import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { MinersLogo } from "@/components/brand/logo";
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
        <SectionIntro
          eyebrow="How Miners Grows"
          title="Ask, share, build, review, mentor, grow."
          text="Community growth is continuous. Questions become shared knowledge, knowledge becomes collaboration, experience becomes mentorship, and growing members help the next person begin."
        />
          <div className="mt-12 rounded-[2rem] border border-ink/10 bg-white p-5 shadow-soft sm:p-8">
          <ol className="sr-only" aria-label="Miners community growth loop: Ask, Share, Build, Review, Mentor, Grow, then back to Ask">
            {communityLoop.map((stage) => (
              <li key={stage.title}>
                {stage.title}: {stage.text}
              </li>
            ))}
          </ol>
          <div className="relative mx-auto hidden aspect-square w-full max-w-[760px] lg:block" aria-hidden="true">
            <svg className="h-full w-full overflow-visible" viewBox="0 0 760 760">
              {communityLoop.map((stage, index) => {
                const segment = loopSegment(index);
                const label = loopLabel(index);

                return (
                  <g key={stage.title} className="group">
                    <path
                      d={segment.path}
                      className="fill-lilacSoft/45 stroke-white stroke-[8] transition duration-300 group-hover:fill-indigoElectric"
                    />
                    <path d={segment.midArc} className="fill-none stroke-indigoElectric/25 stroke-[1.5] transition duration-300 group-hover:stroke-white/55" />
                    <foreignObject x={label.x} y={label.y} width={label.width} height={label.height} className="pointer-events-none">
                      <div className="flex h-full flex-col justify-center px-2 text-center">
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-indigoElectric transition group-hover:text-white/80">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h2 className="mt-1 text-lg font-bold uppercase tracking-[0.08em] text-ink transition group-hover:text-white">
                          {stage.title}
                        </h2>
                        <p className="mt-2 text-[0.78rem] font-medium leading-5 text-muted transition group-hover:text-white/78">
                          {loopDescription(stage.title, stage.text)}
                        </p>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
              {loopArrowMarkers().map((marker) => (
                <path key={marker.id} d={marker.path} fill="#5B3DF5" fillOpacity="0.38" transform={marker.transform} />
              ))}
            </svg>
            <div className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-indigoElectric/20 bg-white text-center shadow-soft">
              <div>
                <MinersLogo variant="symbol" className="mx-auto h-16 w-16" />
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">Miners</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/60">Community</p>
              </div>
            </div>
          </div>
          <ol className="grid gap-4 lg:hidden" aria-hidden="true">
            {communityLoop.map((stage, index) => (
              <li key={stage.title} className="relative rounded-[1.5rem] border border-ink/10 bg-offWhite p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigoElectric">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink">{stage.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{stage.text}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-indigoElectric">
                  {index === communityLoop.length - 1 ? "Back to Ask" : "Next"}
                </p>
              </li>
            ))}
          </ol>
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

function loopSegment(index: number) {
  const center = 380;
  const outerRadius = 340;
  const innerRadius = 154;
  const midRadius = 252;
  const midAngle = [-90, -30, 30, 90, 150, 210][index];
  const startAngle = midAngle - 27.8;
  const endAngle = midAngle + 27.8;
  const outerStart = polarPoint(center, center, outerRadius, startAngle);
  const outerEnd = polarPoint(center, center, outerRadius, endAngle);
  const innerEnd = polarPoint(center, center, innerRadius, endAngle);
  const innerStart = polarPoint(center, center, innerRadius, startAngle);
  const midStart = polarPoint(center, center, midRadius, startAngle + 4);
  const midEnd = polarPoint(center, center, midRadius, endAngle - 4);

  return {
    path: [
      `M ${outerStart.x} ${outerStart.y}`,
      `A ${outerRadius} ${outerRadius} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
      `L ${innerEnd.x} ${innerEnd.y}`,
      `A ${innerRadius} ${innerRadius} 0 0 0 ${innerStart.x} ${innerStart.y}`,
      "Z"
    ].join(" "),
    midArc: `M ${midStart.x} ${midStart.y} A ${midRadius} ${midRadius} 0 0 1 ${midEnd.x} ${midEnd.y}`
  };
}

function loopLabel(index: number) {
  const center = 380;
  const radius = 244;
  const angle = [-90, -30, 30, 90, 150, 210][index];
  const point = polarPoint(center, center, radius, angle);
  const width = index === 0 || index === 3 ? 190 : 172;
  const height = 124;

  return {
    x: point.x - width / 2,
    y: point.y - height / 2,
    width,
    height
  };
}

function loopDescription(title: string, fallback: string) {
  const descriptions: Record<string, string> = {
    Ask: "Questions create direction.",
    Share: "Knowledge moves between people.",
    Build: "Ideas become practical work.",
    Review: "Feedback improves the work and person.",
    Mentor: "Experience shortens the path.",
    Grow: "Progress creates future mentors."
  };

  return descriptions[title] || fallback;
}

function loopArrowMarkers() {
  const center = 380;
  const radius = 356;
  const angles = [-60, 0, 60, 120, 180, 240];

  return angles.map((angle, index) => {
    const point = polarPoint(center, center, radius, angle);
    return {
      id: `${angle}-${index}`,
      path: "M -7 -4 L 7 0 L -7 4 Z",
      transform: `translate(${point.x} ${point.y}) rotate(${angle + 90})`
    };
  });
}

function polarPoint(cx: number, cy: number, radius: number, angle: number) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: round(cx + radius * Math.cos(radians)),
    y: round(cy + radius * Math.sin(radians))
  };
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}
