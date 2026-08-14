import type { Metadata } from "next";
import { ArrowRight, CircleCheck, Compass, GitPullRequestArrow, GraduationCap } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionIntro } from "@/components/ui/section";
import {
  internshipExperienceModel,
  learningAreaGroups,
  mentorshipQuestions,
  minersLearningProcess,
  programAudiences,
  programPaths
} from "@/data/site";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore Miners Group training, mentorship, learning areas, and future internship pathways designed around practical software engineering experience."
};

const progression = ["Learn", "Practice", "Build", "Mentored", "Experience", "Opportunity"];

const pathIcons = {
  Training: GraduationCap,
  Internships: GitPullRequestArrow,
  Mentorship: Compass
};

export default function ProgramsPage() {
  const training = programPaths.find((path) => path.title === "Training");
  const internships = programPaths.find((path) => path.title === "Internships");
  const mentorship = programPaths.find((path) => path.title === "Mentorship");

  return (
    <>
      <section className="relative overflow-hidden bg-offWhite pt-32 sm:pt-36 lg:pt-40">
        <div className="absolute inset-0 technical-grid opacity-45" aria-hidden="true" />
        <div className="container-miners relative grid gap-12 pb-20 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Miners Programs</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Learn with direction. Build with purpose.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Miners programs are designed to help students and developers strengthen technical skills, practice real engineering workflows, receive guidance, and prepare for meaningful opportunities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#program-paths">Explore Programs</ButtonLink>
              <ButtonLink href="/join" variant="secondary">
                Join Miners Group
              </ButtonLink>
            </div>
          </div>
          <ProgressionVisual />
        </div>
      </section>

      <Section id="program-paths" className="bg-white/58">
        <SectionIntro eyebrow="Program Paths" title="Three ways to grow inside Miners." text="Training, internships, and mentorship serve different needs, but they share the same goal: helping developers move from knowledge toward practical experience." />
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {training ? <TrainingPanel path={training} /> : null}
          <div className="grid gap-5 lg:col-span-5">
            {internships ? <InternshipPanel path={internships} /> : null}
            {mentorship ? <MentorshipPanel path={mentorship} /> : null}
          </div>
        </div>
      </Section>

      <Section>
        <SectionIntro eyebrow="Learning Areas" title="Technical directions without course-marketplace noise." text="These areas show where Miners is focusing structured learning, workshops, and guided practice as programs take shape." />
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {learningAreaGroups.map((group) => (
            <article key={group.title} className="rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold tracking-tight text-ink">{group.title}</h2>
              <ul className="mt-5 grid gap-2" aria-label={`${group.title} learning areas`}>
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-ink/10 bg-offWhite px-4 py-2 text-sm font-semibold text-ink/78">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white/58">
        <SectionIntro eyebrow="How Learning Works" title="Understand, apply, improve." text="Miners learning is designed around progression, not passive consumption." />
        <ol className="relative mt-12 grid gap-4 md:grid-cols-5">
          <span className="absolute left-8 right-8 top-8 hidden h-px bg-indigoElectric/20 md:block" aria-hidden="true" />
          {minersLearningProcess.map((step, index) => (
            <li key={step.title} className="relative rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigoElectric text-xs font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-5 text-lg font-semibold tracking-tight text-ink">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="internship">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 w-fit rounded-full border border-indigoElectric/20 bg-lilacSoft px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigoElectric">
              Applications Not Open Yet
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">More than passive observation.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Future Miners internships are designed around real engineering practices rather than passive observation.
            </p>
          </div>
          <div className="rounded-[2rem] border border-ink/10 bg-white p-5 shadow-soft sm:p-7">
            <ol className="grid gap-3 sm:grid-cols-3" aria-label="Future internship experience model">
              {internshipExperienceModel.map((stage, index) => (
                <li key={stage} className="flex min-h-20 items-center gap-3 rounded-[1.25rem] border border-ink/10 bg-offWhite p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-indigoElectric shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-ink">{stage}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section id="mentorship" className="bg-ink text-white dark-technical-grid">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="mb-4 w-fit rounded-full border border-limeSignal/30 bg-limeSignal/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-limeSignal">
              Available
            </p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Get guidance when the next step is unclear.</h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              Mentorship helps learners choose direction, improve projects, prepare portfolios, and make better technical decisions.
            </p>
            <ButtonLink href="/join#mentor" variant="dark" className="mt-8">
              Request Mentorship
            </ButtonLink>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/7 p-5 sm:p-7">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <span className="text-sm font-semibold text-white/78">Learner</span>
              <ArrowRight className="h-4 w-4 text-limeSignal" aria-hidden="true" />
              <span className="text-sm font-semibold text-white/78">Mentor</span>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2" aria-label="Mentorship questions">
              {mentorshipQuestions.map((question) => (
                <li key={question} className="rounded-[1.25rem] border border-white/10 bg-white/7 p-4 text-sm leading-6 text-white/76">
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionIntro eyebrow="Who Programs Are For" title="Is Miners for me?" text="You do not need to have everything figured out before joining the ecosystem." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programAudiences.map((audience) => (
            <article key={audience.title} className="rounded-[1.5rem] border border-ink/10 bg-white p-5">
              <CircleCheck className="h-5 w-5 text-indigoElectric" aria-hidden="true" />
              <h2 className="mt-5 text-lg font-semibold tracking-tight text-ink">{audience.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{audience.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white/58">
        <div className="rounded-[2rem] border border-indigoElectric/15 bg-lilacSoft/70 p-8 shadow-soft sm:p-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Next Step</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Join early and follow the programs as they open.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Miners is building practical paths for students and developers who want direction, feedback, collaboration, and stronger proof of ability.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/join">Join Miners Group</ButtonLink>
            <ButtonLink href="/join#mentor" variant="secondary">
              Request Mentorship
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

function ProgressionVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] rounded-[2rem] border border-ink/10 bg-white p-5 shadow-soft sm:p-7">
      <div className="absolute inset-0 rounded-[2rem] technical-grid opacity-50" aria-hidden="true" />
      <ol className="relative grid gap-3 sm:grid-cols-2" aria-label="Miners program progression">
        {progression.map((stage, index) => (
          <li key={stage} className="relative flex items-center gap-3 rounded-[1.25rem] border border-ink/10 bg-offWhite/90 p-4">
            <span className={index === 2 ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigoElectric text-xs font-bold text-white" : "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-indigoElectric shadow-sm"}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold text-ink">{stage}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function StatusBadge({ children, tone = "indigo" }: { children: string; tone?: "indigo" | "lime" }) {
  return (
    <span className={tone === "lime" ? "w-fit rounded-full border border-limeSignal/30 bg-limeSignal/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-limeSignal" : "w-fit rounded-full border border-indigoElectric/20 bg-lilacSoft px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigoElectric"}>
      {children}
    </span>
  );
}

function TrainingPanel({ path }: { path: (typeof programPaths)[number] }) {
  const Icon = pathIcons.Training;

  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-indigoElectric/15 bg-white p-7 shadow-soft lg:col-span-7 lg:p-9">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <StatusBadge>{path.status}</StatusBadge>
        <Icon className="h-8 w-8 text-indigoElectric" aria-hidden="true" />
      </div>
      <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">{path.index} / {path.title}</p>
      <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink">{path.headline}</h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{path.text}</p>
      <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-ink/58">{path.areasLabel}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {path.areas?.map((area) => (
          <span key={area} className="rounded-full border border-ink/10 bg-offWhite px-4 py-2 text-sm font-semibold text-ink/78">
            {area}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-8">
        <ButtonLink href={path.href} variant="secondary" className="w-fit">
          {path.cta}
        </ButtonLink>
      </div>
    </article>
  );
}

function InternshipPanel({ path }: { path: (typeof programPaths)[number] }) {
  const Icon = pathIcons.Internships;

  return (
    <article className="rounded-[2rem] border border-ink/10 bg-offWhite p-6">
      <div className="flex items-center justify-between gap-4">
        <StatusBadge>{path.status}</StatusBadge>
        <Icon className="h-7 w-7 text-indigoElectric" aria-hidden="true" />
      </div>
      <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">{path.index} / {path.title}</p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-ink">{path.headline}</h2>
      <p className="mt-4 text-sm leading-6 text-muted">{path.text}</p>
      <ButtonLink href={path.href} variant="secondary" className="mt-7">
        {path.cta}
      </ButtonLink>
    </article>
  );
}

function MentorshipPanel({ path }: { path: (typeof programPaths)[number] }) {
  const Icon = pathIcons.Mentorship;

  return (
    <article className="rounded-[2rem] border border-ink/10 bg-ink p-6 text-white">
      <div className="flex items-center justify-between gap-4">
        <StatusBadge tone="lime">{path.status}</StatusBadge>
        <Icon className="h-7 w-7 text-limeSignal" aria-hidden="true" />
      </div>
      <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-limeSignal">{path.index} / {path.title}</p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight">{path.headline}</h2>
      <p className="mt-4 text-sm leading-6 text-white/66">{path.text}</p>
      <ButtonLink href={path.href} variant="dark" className="mt-7">
        {path.cta}
      </ButtonLink>
    </article>
  );
}
