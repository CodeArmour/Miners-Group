import { siteConfig } from "@/data/site";

type MailtoOptions = {
  subject: string;
  lines: Array<[string, string | undefined] | string>;
};

export function buildMailto({ subject, lines }: MailtoOptions) {
  const body = lines
    .map((line) => {
      if (typeof line === "string") return line;
      const [label, value] = line;
      return `${label}: ${value?.trim() || "Not provided"}`;
    })
    .join("\n");

  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
