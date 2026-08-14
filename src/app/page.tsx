import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Sparkles
} from "lucide-react";
import { CoffeeChatForm } from "@/components/forms/email-forms";
import { HeroEcosystemMap } from "@/components/home/hero-ecosystem-map";
import { JourneyPath } from "@/components/home/journey-path";
import { ServiceAccordion } from "@/components/home/service-accordion";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionIntro } from "@/components/ui/section";
import {
  communityActivities,
  companyProcess,
  ecosystemPillars,
  labsAreas,
  siteConfig
} from "@/data/site";

const studentQuestions = [
  "What should I learn next?",
  "How do professional teams actually work?",
  "How do I get experience before my first job?",
  "What should I put in my portfolio?",
  "How do I know if I am job-ready?"
];

export default function Home() {
  return (
    <main className="overflow-hidden pt-28">
      <section className="container-miners grid min-h-[calc(100vh-7rem)] items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-indigoElectric">Miners Group</p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Where developers learn, build, and grow through real experience.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{siteConfig.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/join">Join Miners Group</ButtonLink>
            <ButtonLink href="#ecosystem" variant="secondary">Explore the Ecosystem</ButtonLink>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 text-sm font-semibold text-ink">
            {["Learn", "Practice", "Build", "Get Mentored", "Gain Experience", "Work"].map((stage) => (
              <span key={stage} className="rounded-full border border-ink/10 bg-white px-3 py-2 shadow-sm">
                {stage}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <HeroEcosystemMap />
        </Reveal>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Why Miners Exists</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">More than a programming community.</h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Learning how to program is only the beginning. Miners Group exists to help close the gap between technical knowledge and real-world software development experience.
            </p>
            <p className="mt-6 text-2xl font-semibold tracking-tight text-ink">Miners Group exists to close this gap.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-ink/10 bg-white p-5 shadow-soft">
              {studentQuestions.map((question, index) => (
                <div key={question} className="flex gap-5 border-b border-ink/10 py-5 last:border-b-0">
                  <span className="text-sm font-bold text-indigoElectric">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-xl font-medium text-ink">{question}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="journey" className="bg-white/48">
        <Reveal>
          <SectionIntro
            eyebrow="The Miners Journey"
            title="Turn knowledge into experience."
            text="A clear pathway from learning fundamentals to building, receiving mentorship, practicing engineering workflows, and preparing for real opportunities."
          />
        </Reveal>
        <JourneyPath />
      </Section>

      <Section id="ecosystem">
        <Reveal>
          <SectionIntro eyebrow="Ecosystem" title="One ecosystem. Multiple ways to grow." />
        </Reveal>
        <div className="mt-12 grid auto-rows-[minmax(230px,auto)] gap-5 lg:grid-cols-12">
          {ecosystemPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const dark = pillar.title.includes("Labs");
            return (
              <Reveal key={pillar.title} delay={index * 0.05} className={pillar.className}>
                <article className={`relative flex h-full min-h-[230px] flex-col justify-between overflow-hidden rounded-[2rem] border p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift ${dark ? "dark-technical-grid border-white/10 bg-ink text-white" : "border-ink/10 bg-white text-ink"}`}>
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${dark ? "bg-white/10 text-limeSignal" : "bg-lilacSoft text-indigoElectric"}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${pillar.label === "Coming Later" ? "bg-limeSignal text-ink" : dark ? "bg-white/10 text-white/70" : "bg-offWhite text-muted"}`}>
                        {pillar.label}
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
                    <p className={`mt-4 text-sm leading-6 ${dark ? "text-white/66" : "text-muted"}`}>{pillar.text}</p>
                  </div>
                  <Link className={`focus-ring mt-8 inline-flex items-center gap-2 rounded-full text-sm font-semibold ${dark ? "text-limeSignal" : "text-indigoElectric"}`} href={pillar.href}>
                    {pillar.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-lilacSoft/40">
        <div className="grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-soft lg:grid-cols-2">
          <AudiencePanel
            title="Turn what you know into what you can prove."
            label="Students & Developers"
            text="Learn with direction, receive mentorship, build real projects, prepare for internships, and create portfolio evidence through practical work."
            cta="Start Your Journey"
            href="/join"
          />
          <AudiencePanel
            title="Build with an engineering community."
            label="Companies"
            text="Work with Miners on web, mobile, custom software, AI, cloud, technical collaboration, workshops, and project implementation."
            cta="Start a Project"
            href="/for-companies#start-project"
            dark
          />
        </div>
      </Section>

      <Section id="projects" className="bg-ink text-white dark-technical-grid">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-limeSignal">Miners Labs</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">We learn by building.</h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Miners Labs is where ideas, experiments, and collaborative projects become practical engineering experience.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {labsAreas.map((project) => (
            <article key={project.name} className="rounded-[2rem] border border-white/10 bg-white/8 p-6">
              <div className="mb-8 flex items-center justify-between gap-3">
                <span className="rounded-full bg-limeSignal px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ink">{project.status}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">{project.category}</span>
              </div>
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="mt-4 text-sm leading-6 text-white/66">{project.purpose}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">{tech}</span>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/50">{project.team}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <SectionIntro eyebrow="Mentorship" title="You do not have to figure everything out alone." text="Mentorship helps members understand where they are, where they want to go, and what steps can move them forward." />
            <ButtonLink href="/programs#mentorship" variant="secondary" className="mt-8">Explore Mentorship</ButtonLink>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                {["Which path fits me?", "What should I learn next?", "How can I improve this project?", "Is my portfolio ready?", "How do I prepare for internships?"].map((item) => (
                  <div key={item} className="rounded-2xl bg-offWhite p-4 text-sm font-semibold text-ink">{item}</div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div className="rounded-2xl bg-lilacSoft p-4 text-center font-semibold text-ink">Learner</div>
                <MessageCircle className="h-6 w-6 text-indigoElectric" />
                <div className="rounded-2xl bg-ink p-4 text-center font-semibold text-white">Mentor</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="services" className="bg-white/52">
        <Reveal>
          <SectionIntro eyebrow="Services" title="What Miners Group offers" text="Services are grouped around building software, operating systems reliably, and enabling people and teams through training and collaboration." />
        </Reveal>
        <ServiceAccordion />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionIntro eyebrow="Community" title="You should not have to grow alone." text="The community creates space for coding sessions, workshops, challenges, project collaboration, reviews, knowledge sharing, and mentorship." />
            <ButtonLink href="/community" variant="secondary" className="mt-8">Join the Community</ButtonLink>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {communityActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.title} className={`rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-soft ${index % 2 ? "translate-y-5" : ""}`}>
                    <Icon className="h-5 w-5 text-indigoElectric" />
                    <p className="mt-8 text-sm font-semibold text-ink">{activity.title}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-lilacSoft/35">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionIntro
              eyebrow="Future Opportunities"
              title="Internships, cohorts, contributor paths, and mentorship roles will open as programs grow."
              text="Miners is preparing the spaces where people can learn, contribute, and gain practical experience. Join early to hear when the next path opens."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {["Internships", "Contributor Opportunities", "Training Cohorts", "Mentorship Roles"].map((item) => (
                  <div key={item} className="rounded-2xl bg-offWhite p-4 text-sm font-semibold text-ink">
                    {item}
                  </div>
                ))}
              </div>
              <ButtonLink href="/join" className="mt-6">
                Join Miners for Future Opportunities
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-ink text-white dark-technical-grid">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-limeSignal">For Companies</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Have an idea worth building?</h2>
            <p className="mt-5 text-lg leading-8 text-white/66">Work with Miners Group on web, mobile, custom software, AI, cloud, training, or technical collaboration.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/for-companies#start-project" variant="dark">Start a Project</ButtonLink>
              <ButtonLink href="/contact#coffee-chat" variant="ghost" className="text-white hover:bg-white/10">Book a Coffee Chat</ButtonLink>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {companyProcess.map((step) => (
                <span key={step} className="rounded-full border border-white/10 px-3 py-2 text-sm text-white/70">{step}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <CoffeeChatForm />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="rounded-[2rem] border border-ink/10 bg-white p-8 text-center shadow-soft sm:p-12">
            <Sparkles className="mx-auto h-8 w-8 text-indigoElectric" />
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Your next step should not depend on figuring everything out alone.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
              Join Miners Group to learn with direction, build with others, receive guidance, and turn technical knowledge into meaningful experience.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/join">Join Miners Group</ButtonLink>
              <ButtonLink href="/programs" variant="secondary">Explore Programs</ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}

function AudiencePanel({ label, title, text, cta, href, dark = false }: { label: string; title: string; text: string; cta: string; href: string; dark?: boolean }) {
  return (
    <article className={`${dark ? "bg-ink text-white dark-technical-grid" : "bg-white text-ink"} p-8 sm:p-10`}>
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${dark ? "text-limeSignal" : "text-indigoElectric"}`}>{label}</p>
      <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className={`mt-5 text-base leading-7 ${dark ? "text-white/66" : "text-muted"}`}>{text}</p>
      <Link className={`focus-ring mt-8 inline-flex items-center gap-2 rounded-full text-sm font-semibold ${dark ? "text-limeSignal" : "text-indigoElectric"}`} href={href}>
        {cta} <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
