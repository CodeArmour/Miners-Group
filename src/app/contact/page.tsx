import type { Metadata } from "next";
import { CoffeeChatForm, ContactForm } from "@/components/forms/email-forms";
import { PageHero } from "@/components/page/page-hero";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Miners Group for community, mentorship, training, projects, partnerships, and collaboration."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build, learn, or collaborate."
        text="Whether you have a project, want to join the community, are looking for mentorship, or want to collaborate with Miners Group, we'd like to hear from you."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-indigoElectric">Contact Miners</p>
            <h2 className="text-4xl font-semibold tracking-tight text-ink">{siteConfig.contactEmail}</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              For general questions, projects, mentorship, programs, partnerships, and community conversations.
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>
      <Section id="coffee-chat" className="bg-ink text-white dark-technical-grid">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-limeSignal">Coffee Chat</p>
            <h2 className="text-4xl font-semibold tracking-tight">Prefer an informal conversation?</h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Choose a preferred date and time and tell us briefly what you would like to discuss.
            </p>
          </div>
          <CoffeeChatForm />
        </div>
      </Section>
    </>
  );
}
