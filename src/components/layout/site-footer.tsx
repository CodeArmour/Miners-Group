import Link from "next/link";
import { BrandLink } from "@/components/brand/logo";
import { siteConfig } from "@/data/site";

const footerGroups = [
  { title: "Explore", links: [["About", "/about"], ["Services", "/services"], ["Programs", "/programs"], ["Projects", "/projects"], ["Community", "/community"]] },
  { title: "Opportunities", links: [["Join Miners", "/join"], ["Internships", "/programs#internship"], ["Mentorship", "/programs#mentorship"], ["Careers", "/join"], ["Become a Mentor", "/join#mentor"]] },
  { title: "Organizations", links: [["For Companies", "/for-companies"], ["Start a Project", "/for-companies#start-project"], ["Partnerships", "/for-companies#partner"], ["Contact", "/contact"]] }
];

export function SiteFooter() {
  return (
    <footer className="dark-technical-grid bg-ink text-white">
      <div className="container-miners py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.6fr]">
          <div>
            <BrandLink variant="white" />
            <p className="mt-5 max-w-sm text-lg leading-8 text-white/68">{siteConfig.tagline}</p>
            <a className="focus-ring mt-6 inline-block rounded-full text-sm font-semibold text-limeSignal" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold text-white">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link className="focus-ring rounded text-sm text-white/62 transition hover:text-white" href={href}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Miners Group. All rights reserved.</p>
          <p>Social links will be added when official accounts are available.</p>
        </div>
      </div>
    </footer>
  );
}
