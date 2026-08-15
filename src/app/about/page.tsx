import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { HeroBrandMark } from "@/components/page/hero-brand-mark";
import { EditorialIndex, HeroCopy, HeroShell } from "@/components/page/hero-system";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionIntro } from "@/components/ui/section";
import { communityBehaviors, futureDirections, futureLoop, minersDifference, trustProcess, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn why Miners Group exists, its mission, principles, and vision for connecting learning, mentorship, practical software experience, and opportunity."
};

export default function AboutPage() {
  return (
    <>
      <HeroShell className="bg-offWhite">
        <HeroBrandMark />
        <div className="container-miners relative z-10 grid gap-10 pb-28 lg:grid-cols-[1fr_0.36fr] lg:items-end lg:pb-36">
          <HeroCopy
            eyebrow="About Miners Group"
            title="We are building the bridge between learning and real software experience."
            text="Miners Group is a technology ecosystem built around learning, collaboration, mentorship, real projects, and meaningful opportunities."
            primary={{ label: "Join Miners Group", href: "/join" }}
            secondary={{ label: "Explore Programs", href: "/programs", variant: "secondary" }}
            size="large"
          />
          <EditorialIndex label="01" className="pb-4" />
        </div>
      </HeroShell>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Why Miners Exists</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Knowing how to code is not always enough.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>
              Many students and developers learn syntax, watch tutorials, and complete isolated exercises, but still feel unprepared for the way real software is planned, built, reviewed, and delivered.
            </p>
            <p>
              Professional work asks for more: requirements, planning, Git, collaboration, reviews, QA, documentation, delivery, and clear communication.
            </p>
            <p className="font-semibold text-ink">
              Miners Group exists to make that transition more structured, practical, and collaborative.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white/58">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="border-l-2 border-indigoElectric pl-6 sm:pl-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Our Mission</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink">
              Help students and developers turn technical knowledge into practical experience, stronger engineering habits, and meaningful opportunities.
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Direction", "Practical learning", "Mentorship", "Collaboration", "Real projects", "Career preparation"].map((item) => (
                <span key={item} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink/78">
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-[2rem] bg-ink p-7 text-white shadow-soft dark-technical-grid sm:p-9">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-limeSignal">Our Vision</p>
            <h2 className="text-4xl font-semibold tracking-tight">Build an international technology ecosystem.</h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              A place where learning, mentorship, software delivery, and opportunity reinforce one another.
            </p>
            <ol className="mt-8 grid gap-3" aria-label="Long-term Miners model">
              {["Learn", "Build", "Contribute", "Mentor", "Create Opportunities"].map((step, index) => (
                <li key={step} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/7 px-4 py-3 text-sm font-semibold text-white/82">
                  <span className="text-limeSignal">{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </article>
        </div>
      </Section>

      <Section>
        <SectionIntro eyebrow="Miners Principles" title="The beliefs behind the ecosystem." text="These principles shape the way Miners approaches learning, building, mentorship, and opportunity." />
        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {values.map((value, index) => (
            <article key={value.title} className="grid gap-4 py-7 md:grid-cols-[0.22fr_0.78fr] md:items-start">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">{String(index + 1).padStart(2, "0")}</p>
              <div className="grid gap-3 md:grid-cols-[0.38fr_0.62fr]">
                <h2 className="text-2xl font-semibold tracking-tight text-ink">{value.title}</h2>
                <p className="text-base leading-7 text-muted">{value.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white/58">
        <div className="rounded-[2rem] border border-indigoElectric/15 bg-white p-7 shadow-soft sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Trust Model</p>
              <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Earn trust through real work.</h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Miners Group believes credibility should come from what we build, how we work, and the value we create - not inflated promises.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-3" aria-label="Trust through real work process">
              {trustProcess.map((step, index) => (
                <li key={step} className="rounded-[1.25rem] border border-ink/10 bg-offWhite p-4">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigoElectric">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-sm font-semibold text-ink">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">What Makes Miners Different</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">More than training. More than an agency.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Miners is designed as an ecosystem where learning, building, mentorship, opportunity, and delivery support each other.
            </p>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-indigoElectric/20 sm:block" aria-hidden="true" />
            <div className="grid gap-4">
              {minersDifference.map((item, index) => (
                <article key={item.title} className="relative grid gap-3 rounded-[1.5rem] border border-ink/10 bg-white p-5 sm:grid-cols-[0.18fr_0.82fr]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigoElectric text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-ink text-white dark-technical-grid">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-limeSignal">Community As Infrastructure</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Growth needs more than content.</h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              Tutorials and courses can teach concepts. Community adds feedback, accountability, collaboration, questions, mentorship, and shared experience.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" aria-label="Community behaviors">
            {communityBehaviors.map((behavior) => (
              <li key={behavior} className="rounded-full border border-white/10 bg-white/7 px-5 py-4 text-sm font-semibold text-white/82">
                {behavior}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">The Future We Are Building</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">An ecosystem where progress creates more progress.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Miners Group is being built toward a model where people can grow, contribute, guide others, and create opportunity for the next person entering the ecosystem.
            </p>
            <ol className="mt-8 flex flex-wrap gap-2" aria-label="Conceptual community loop">
              {futureLoop.map((step) => (
                <li key={step} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink/78">
                  {step}
                  {step !== futureLoop[futureLoop.length - 1] ? <ArrowRight className="h-3.5 w-3.5 text-indigoElectric" aria-hidden="true" /> : null}
                </li>
              ))}
            </ol>
          </div>
          <ul className="grid gap-3" aria-label="Future Miners direction">
            {futureDirections.map((direction) => (
              <li key={direction} className="rounded-[1.25rem] border border-ink/10 bg-white p-4 text-sm leading-6 text-muted">
                {direction}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="bg-white/58">
        <div className="rounded-[2rem] border border-indigoElectric/15 bg-lilacSoft/70 p-8 shadow-soft sm:p-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Start Here</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Help build what Miners becomes.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Whether you are learning, building, mentoring, or looking for technical collaboration, there is a place to start.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/join">Join Miners Group</ButtonLink>
            <ButtonLink href="/for-companies" variant="secondary">
              Work With Miners
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
