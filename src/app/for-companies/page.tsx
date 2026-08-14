import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { MinersLogo } from "@/components/brand/logo";
import { ProjectInquiryForm } from "@/components/forms/email-forms";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionIntro } from "@/components/ui/section";
import { featuredProjects } from "@/data/site";

export const metadata: Metadata = {
  title: "For Companies",
  description: "Work with Miners Group on web, mobile, custom software, AI, cloud, technical training, and collaborative programs."
};

const collaborationPaths = [
  {
    index: "01",
    title: "Build With Miners",
    headline: "Turn an idea into working software.",
    text: "Whether the project starts with detailed requirements or only an early concept, Miners can help clarify the scope and move toward a working solution.",
    items: ["Web applications", "Mobile applications", "Custom software", "AI-powered solutions", "Cloud / DevOps", "Maintenance & technical support"],
    cta: "Start a Project",
    href: "#start-project",
    featured: true
  },
  {
    index: "02",
    title: "Develop Talent",
    headline: "Create practical learning opportunities.",
    text: "Organizations can collaborate with Miners to create practical environments where students and developers learn through real technical challenges and guidance.",
    items: ["Internships", "Workshops", "Technical challenges", "Mentorship initiatives", "Training", "Student development"],
    cta: "Discuss a Program",
    href: "#start-project"
  },
  {
    index: "03",
    title: "Partner With Miners",
    headline: "Build something together.",
    text: "Explore community initiatives, events, workshops, challenges, university collaboration, and sponsored technical activities.",
    items: ["Community initiatives", "Events", "Workshops", "Hackathons/challenges", "University collaboration", "Sponsored technical activities"],
    cta: "Explore Partnership",
    href: "#start-project"
  }
];

const capabilities = [
  { title: "Web Products", text: "Customer portals, platforms, internal systems, and modern websites." },
  { title: "Mobile Experiences", text: "Applications designed around real user workflows." },
  { title: "Custom Software", text: "Solutions built around business-specific requirements." },
  { title: "AI Solutions", text: "Practical AI features and automation integrated where they create value." },
  { title: "Cloud & DevOps", text: "Deployment, infrastructure, automation, and reliable delivery workflows." },
  { title: "Support", text: "Maintenance, improvements, and ongoing technical support." }
];

const workProcess = [
  { title: "Discover", text: "Understand the problem, goals, users, and context." },
  { title: "Scope", text: "Turn the idea into priorities, requirements, and a realistic delivery direction." },
  { title: "Build", text: "Develop the solution iteratively." },
  { title: "Review", text: "Review implementation, product behavior, and quality throughout the process." },
  { title: "Deliver", text: "Prepare and release a working result." },
  { title: "Support", text: "Continue improving and supporting the product where needed." }
];

const whyMiners = [
  { title: "Practical by Design", text: "We focus on turning requirements into working software rather than unnecessary complexity." },
  { title: "Collaborative Process", text: "Clients remain close to the decisions that shape the product." },
  { title: "Engineering Discipline", text: "Planning, implementation, review, QA, and documentation are part of the workflow." },
  { title: "Built Around Growth", text: "Miners combines project delivery with an ecosystem built around developing technical talent." }
];

export default function ForCompaniesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-offWhite pt-32 sm:pt-36 lg:pt-40">
        <div className="absolute inset-0 technical-grid opacity-55" aria-hidden="true" />
        <div className="container-miners relative grid gap-12 pb-20 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">For Companies</p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Build software. Support talent. Create opportunities.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Work with Miners Group to build digital products, solve technical challenges, or create opportunities where software development and talent growth meet.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#start-project">Start a Project</ButtonLink>
              <ButtonLink href="#coffee-chat" variant="secondary">
                Book a Coffee Chat
              </ButtonLink>
            </div>
          </div>
          <CompanyConnectionVisual />
        </div>
      </section>

      <Section className="bg-white/58">
        <SectionIntro eyebrow="Ways To Collaborate" title="Choose the right starting point." text="Companies can work with Miners through software delivery, talent-focused programs, or broader ecosystem collaboration." />
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {collaborationPaths.map((path) => (
            <article
              key={path.title}
              className={
                path.featured
                  ? "rounded-[2rem] border border-indigoElectric/20 bg-ink p-7 text-white shadow-soft lg:col-span-7 lg:p-9"
                  : "rounded-[2rem] border border-ink/10 bg-white p-6 shadow-sm lg:col-span-5"
              }
            >
              <div className="flex items-center justify-between gap-4">
                <p className={path.featured ? "text-xs font-bold uppercase tracking-[0.2em] text-limeSignal" : "text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric"}>
                  {path.index} / {path.title}
                </p>
                {path.featured ? <MinersLogo variant="symbol" className="h-9 w-9" /> : null}
              </div>
              <h2 className={path.featured ? "mt-8 max-w-xl text-4xl font-semibold tracking-tight" : "mt-6 text-2xl font-semibold tracking-tight text-ink"}>{path.headline}</h2>
              <p className={path.featured ? "mt-5 max-w-2xl text-base leading-7 text-white/68" : "mt-4 text-sm leading-6 text-muted"}>{path.text}</p>
              <ul className={path.featured ? "mt-7 grid gap-2 sm:grid-cols-2" : "mt-6 grid gap-2"} aria-label={`${path.title} collaboration areas`}>
                {path.items.map((item) => (
                  <li key={item} className={path.featured ? "rounded-full border border-white/10 px-4 py-2 text-sm text-white/78" : "rounded-full border border-ink/10 bg-offWhite px-4 py-2 text-sm text-ink/78"}>
                    {item}
                  </li>
                ))}
              </ul>
              <ButtonLink href={path.href} variant={path.featured ? "dark" : "secondary"} className="mt-7">
                {path.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionIntro eyebrow="Selected Work" title="Real work gives the page its proof." text="A compact look at the first visible projects in the Miners ecosystem." />
          <ButtonLink href="/projects" variant="secondary" className="w-fit">
            View All Projects
          </ButtonLink>
        </div>
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-soft">
              <div className="relative h-64 border-b border-ink/10 bg-ink/[0.03] p-3 sm:h-72 lg:h-80">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={project.slug === "andalucia" ? 1730 : 1393}
                  height={project.slug === "andalucia" ? 942 : 967}
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="h-full w-full rounded-[1.25rem] border border-ink/10 bg-white object-contain transition duration-300 group-hover:scale-[1.01]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h2 className="text-2xl font-semibold tracking-tight text-ink">{project.name}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-indigoElectric">{project.index} / {project.category}</p>
              </div>
              <div className="mt-auto border-t border-ink/10 px-6 py-5 sm:px-7">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live project`}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink transition hover:border-indigoElectric/30 hover:text-indigoElectric"
                >
                  View Live Project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white/58">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <SectionIntro eyebrow="What We Can Build" title="Capability without unnecessary jargon." text="The conversation starts with the outcome, users, and constraints before choosing the right technical direction." />
            <ButtonLink href="/services" variant="secondary" className="mt-8 w-fit">
              Explore Services
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-ink/10 bg-white p-5">
                <h2 className="text-lg font-semibold tracking-tight text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionIntro eyebrow="How We Work" title="A clear process from first conversation to support." text="The process stays practical: understand the problem, shape the work, build carefully, review quality, and keep improving where needed." />
        <ol className="relative mt-12 grid gap-4 lg:grid-cols-6">
          <span className="absolute left-8 right-8 top-8 hidden h-px bg-indigoElectric/20 lg:block" aria-hidden="true" />
          {workProcess.map((step, index) => (
            <li key={step.title} className="relative rounded-[1.5rem] border border-ink/10 bg-white p-5 shadow-sm">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigoElectric text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="mt-5 text-lg font-semibold tracking-tight text-ink">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-ink text-white dark-technical-grid">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-limeSignal">Why Miners</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">A delivery partner connected to a technical ecosystem.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyMiners.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/7 p-5">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="start-project" className="bg-white/58">
        <div className="rounded-[2.25rem] bg-ink p-6 text-white shadow-soft sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-limeSignal">Start a Project</p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Have something worth building?</h2>
              <p className="mt-5 text-lg leading-8 text-white/68">
                Tell us what you are working on, what problem you want to solve, or simply where you need technical help.
              </p>
              <div id="coffee-chat" className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/7 p-5">
                <h3 className="text-xl font-semibold tracking-tight">Not ready for a project brief?</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">Start with a conversation and share the context at a lower pressure pace.</p>
                <Link href="/contact" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-limeSignal">
                  Book a Coffee Chat
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <ProjectInquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}

function CompanyConnectionVisual() {
  const nodes = [
    { label: "Build", className: "left-1/2 top-4 -translate-x-1/2" },
    { label: "Company", className: "left-4 top-1/2 -translate-y-1/2" },
    { label: "Talent", className: "right-4 top-1/2 -translate-y-1/2" },
    { label: "Partner", className: "bottom-4 left-1/2 -translate-x-1/2" }
  ];

  return (
    <div className="relative mx-auto aspect-[1.12/1] w-full max-w-[560px] rounded-[2rem] border border-ink/10 bg-white p-5 shadow-soft sm:p-7">
      <div className="absolute inset-0 rounded-[2rem] technical-grid opacity-60" aria-hidden="true" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 500" aria-hidden="true">
        <path d="M280 104 L280 210" stroke="#5B3DF5" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M112 250 L218 250" stroke="#5B3DF5" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M342 250 L448 250" stroke="#5B3DF5" strokeOpacity="0.22" strokeWidth="1.5" />
        <path d="M280 290 L280 396" stroke="#5B3DF5" strokeOpacity="0.22" strokeWidth="1.5" />
      </svg>
      <div className="relative flex h-full items-center justify-center">
        <div className="grid h-28 w-28 place-items-center rounded-[1.75rem] border border-indigoElectric/20 bg-offWhite shadow-sm">
          <MinersLogo variant="symbol" className="h-14 w-14" />
          <span className="sr-only">Miners Group connects company collaboration to build, talent, and partnership paths.</span>
        </div>
        {nodes.map((node) => (
          <div key={node.label} className={`absolute ${node.className}`}>
            <div className="flex min-w-28 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm">
              <span className="h-2 w-2 rounded-full bg-indigoElectric" aria-hidden="true" />
              {node.label}
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 right-4 hidden items-center gap-2 rounded-full border border-ink/10 bg-offWhite px-3 py-2 text-xs font-semibold text-muted sm:flex">
          <ArrowDown className="h-3.5 w-3.5 text-indigoElectric" aria-hidden="true" />
          Conversation to direction
        </div>
      </div>
    </div>
  );
}
