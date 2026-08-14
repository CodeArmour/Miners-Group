import type { Metadata } from "next";
import { CoffeeChatForm, ContactForm } from "@/components/forms/email-forms";
import { PageHero } from "@/components/page/page-hero";
import { Section, SectionIntro } from "@/components/ui/section";
import { companyProcess } from "@/data/site";

export const metadata: Metadata = {
  title: "For Companies",
  description: "Work with Miners Group on software projects, training, mentorship initiatives, internships, and technical collaboration."
};

export default function ForCompaniesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Companies"
        title="Build software. Support talent. Create opportunities."
        text="Companies and organizations can work with Miners Group through software projects, technical training, mentorship initiatives, internships, sponsorships, and community partnerships."
      />
      <Section className="bg-white/52">
        <SectionIntro eyebrow="Build With Us" title="A clear path from idea to delivery." />
        <div className="mt-10 flex flex-wrap gap-3">
          {companyProcess.map((step) => (
            <span key={step} className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm">
              {step}
            </span>
          ))}
        </div>
      </Section>
      <Section id="start-project">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Start a Project</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink">Tell us what you are trying to build.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              This form prepares an email with your project details. When the backend is implemented later, this submission layer can be replaced without redesigning the UI.
            </p>
          </div>
          <ContactForm mode="project" />
        </div>
      </Section>
      <Section id="partner" className="bg-ink text-white dark-technical-grid">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-limeSignal">Partner With Us</p>
            <h2 className="text-4xl font-semibold tracking-tight">Support training, mentorship, internships, and community collaboration.</h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Partnerships can include programs, events, project challenges, mentors, speakers, workshops, and community initiatives.
            </p>
          </div>
          <CoffeeChatForm />
        </div>
      </Section>
    </>
  );
}
