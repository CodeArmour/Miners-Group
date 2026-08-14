"use client";

import { FormEvent, useState } from "react";
import { CalendarClock, Send } from "lucide-react";
import { contactReasons } from "@/data/site";
import { buildMailto } from "@/lib/email";

function openMailto(href: string) {
  window.location.href = href;
}

export function ContactForm({ mode = "contact" }: { mode?: "contact" | "project" }) {
  const [status, setStatus] = useState<string>("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = mode === "project" ? "Project inquiry for Miners Group" : "Contact request for Miners Group";
    const href = buildMailto({
      subject,
      lines: [
        ["Full name", String(form.get("name") || "")],
        ["Email", String(form.get("email") || "")],
        ["Organization / University", String(form.get("organization") || "")],
        ["Role", String(form.get("role") || "")],
        ["Reason", String(form.get("reason") || "")],
        ["Relevant link", String(form.get("link") || "")],
        "",
        "Message:",
        String(form.get("message") || "")
      ]
    });
    setStatus("Opening your email app with the details filled in.");
    openMailto(href);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Organization / University" name="organization" />
        <Field label="Role" name="role" />
      </div>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Reason for contacting
        <select name="reason" className="min-h-12 rounded-2xl border border-ink/10 bg-offWhite px-4 text-base font-normal text-ink focus:border-indigoElectric focus:outline-none" required>
          {contactReasons.map((reason) => (
            <option key={reason}>{reason}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Message
        <textarea name="message" rows={6} className="rounded-2xl border border-ink/10 bg-offWhite px-4 py-3 text-base font-normal text-ink focus:border-indigoElectric focus:outline-none" required />
      </label>
      <Field label="Relevant link" name="link" placeholder="LinkedIn, GitHub, website, or portfolio" />
      <button type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigoElectric">
        <Send className="h-4 w-4" aria-hidden="true" />
        {mode === "project" ? "Prepare Project Email" : "Prepare Email"}
      </button>
      {status ? <p className="text-sm text-muted" role="status">{status}</p> : null}
    </form>
  );
}

export function CoffeeChatForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const href = buildMailto({
      subject: "Coffee chat booking request",
      lines: [
        ["Full name", String(form.get("name") || "")],
        ["Email", String(form.get("email") || "")],
        ["Preferred date", String(form.get("date") || "")],
        ["Preferred time", String(form.get("time") || "")],
        ["Topic", String(form.get("topic") || "")]
      ]
    });
    setStatus("Opening your email app with the booking request.");
    openMailto(href);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/8 p-5 text-white">
      <div className="grid gap-4 sm:grid-cols-2">
        <DarkField label="Name" name="name" required />
        <DarkField label="Email" name="email" type="email" required />
        <DarkField label="Date" name="date" type="date" required />
        <DarkField label="Time" name="time" type="time" required />
      </div>
      <label className="grid gap-2 text-sm font-semibold">
        Topic
        <textarea name="topic" rows={3} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-base font-normal text-white outline-none placeholder:text-white/40 focus:border-limeSignal" placeholder="What would you like to discuss?" />
      </label>
      <button type="submit" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-limeSignal">
        <CalendarClock className="h-4 w-4" aria-hidden="true" />
        Book a Coffee Chat
      </button>
      {status ? <p className="text-sm text-white/64" role="status">{status}</p> : null}
    </form>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <input name={name} type={type} required={required} placeholder={placeholder} className="min-h-12 rounded-2xl border border-ink/10 bg-offWhite px-4 text-base font-normal text-ink outline-none placeholder:text-muted/70 focus:border-indigoElectric" />
    </label>
  );
}

function DarkField({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input name={name} type={type} required={required} className="min-h-12 rounded-2xl border border-white/10 bg-white/10 px-4 text-base font-normal text-white outline-none focus:border-limeSignal" />
    </label>
  );
}
