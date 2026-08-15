import type { Metadata } from "next";
import { CoffeeChatForm, ContactForm } from "@/components/forms/email-forms";
import { HeroCopy, HeroShell } from "@/components/page/hero-system";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Miners Group for community, mentorship, training, projects, partnerships, and collaboration."
};

export default function ContactPage() {
  return (
    <>
      <HeroShell className="pt-32" grid={false}>
        <div className="container-miners relative z-10 pb-16 pt-10 sm:pb-20 sm:pt-16">
          <HeroCopy
            eyebrow="Contact Miners"
            title="Let's talk about what you are building."
            text="Whether you have a project, collaboration idea, question, or simply want to start a conversation, choose the path that fits."
            size="compact"
          />
          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Contact paths">
            {["Project", "General Message", "Coffee Chat"].map((path) => (
              <li key={path} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/70">
                {path}
              </li>
            ))}
          </ul>
        </div>
      </HeroShell>
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
