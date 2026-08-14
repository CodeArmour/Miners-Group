import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Compass,
  GitBranch,
  GraduationCap,
  Handshake,
  Layers3,
  Lightbulb,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench
} from "lucide-react";

export const siteConfig = {
  name: "Miners Group",
  tagline: "From learning to real software experience.",
  description:
    "Miners Group connects students, developers, mentors, and organizations through practical training, mentorship, internships, real software projects, and career guidance.",
  url: "https://minersgroup.com",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@minersgroup.com",
  socialLinks: {
    linkedIn: "",
    github: "",
    instagram: "",
    facebook: "",
    x: "",
    discord: ""
  }
};

export const navItems = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/services" },
  { label: "Programs", href: "/programs" },
  { label: "Projects", href: "/projects" },
  { label: "Community", href: "/community" }
];

export const journeySteps = [
  {
    title: "Learn",
    icon: GraduationCap,
    text: "Build strong technical foundations through practical training, workshops, resources, and guided learning paths."
  },
  {
    title: "Practice",
    icon: Wrench,
    text: "Strengthen your skills through exercises, challenges, collaborative sessions, and small implementations."
  },
  {
    title: "Build",
    icon: Code2,
    text: "Join teams and contribute to real or experimental software projects using modern development workflows."
  },
  {
    title: "Get Mentored",
    icon: MessagesSquare,
    text: "Receive guidance from developers and mentors who can help you improve technically and professionally."
  },
  {
    title: "Gain Experience",
    icon: GitBranch,
    text: "Learn how real teams use Git, pull requests, code review, QA, documentation, planning, and delivery."
  },
  {
    title: "Work",
    icon: BriefcaseBusiness,
    text: "Use demonstrated experience to pursue internships, freelance opportunities, jobs, or future Miners opportunities."
  }
];

export const ecosystemPillars = [
  {
    title: "Miners Academy",
    label: "Training",
    href: "/programs",
    cta: "Explore Training",
    icon: GraduationCap,
    text: "Practical training, workshops, learning paths, certification preparation, and technical education designed around skills developers actually use.",
    className: "lg:col-span-5 lg:row-span-2"
  },
  {
    title: "Miners Labs",
    label: "Projects",
    href: "/projects",
    cta: "Explore Projects",
    icon: Layers3,
    text: "A collaborative environment for building real and experimental products, practicing teamwork, testing ideas, and turning knowledge into working software.",
    className: "lg:col-span-4 lg:row-span-2"
  },
  {
    title: "Miners Mentorship",
    label: "Guidance",
    href: "/programs#mentorship",
    cta: "Find Your Path",
    icon: Compass,
    text: "Technical mentorship, career guidance, portfolio feedback, learning roadmaps, and support for students deciding their next step.",
    className: "lg:col-span-3 lg:row-span-3"
  },
  {
    title: "Miners Software",
    label: "Delivery",
    href: "/for-companies",
    cta: "Start a Project",
    icon: Rocket,
    text: "Software development for companies, startups, universities, organizations, and entrepreneurs, delivered through structured teams and professional practices.",
    className: "lg:col-span-6"
  },
  {
    title: "Miners Talent",
    label: "Coming Later",
    href: "/join",
    cta: "Follow Future Opportunities",
    icon: Sparkles,
    text: "A future talent network connecting developers who demonstrate their abilities inside the Miners ecosystem with relevant companies and opportunities.",
    className: "lg:col-span-3"
  }
];

export const serviceGroups = [
  {
    title: "Build",
    summary: "Product and software implementation for practical business needs.",
    items: ["Web Applications", "Mobile Applications", "Custom Software", "AI Solutions"]
  },
  {
    title: "Operate",
    summary: "Engineering support for reliable delivery and long-term product health.",
    items: ["Cloud / DevOps", "Maintenance & Support"]
  },
  {
    title: "Enable",
    summary: "Technical capability building for teams, students, and organizations.",
    items: ["Consulting", "Technical Training", "Workshops"]
  }
];

export const programs = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "Mobile Development",
  "Cloud & DevOps",
  "Artificial Intelligence",
  "Cybersecurity",
  "Git & GitHub",
  "Software Engineering Practices",
  "Testing & QA"
];

export const projectPlaceholders = [
  {
    name: "Miners Labs Internal Projects",
    category: "Internal / Labs",
    status: "Preparing",
    purpose:
      "Structured project spaces for members to practice planning, implementation, review, and delivery workflows.",
    technologies: ["Next.js", "React", "TypeScript"],
    team: "Guided community teams"
  },
  {
    name: "Community Experiments",
    category: "Experimental",
    status: "Coming Soon",
    purpose:
      "Small collaborative builds that help members move from tutorials into shipped interfaces and documented decisions.",
    technologies: ["Web", "AI", "Cloud"],
    team: "Project contributors"
  },
  {
    name: "Open Source Practice Tracks",
    category: "Learning / Open Source",
    status: "Coming Soon",
    purpose:
      "Practice repositories for Git workflows, pull requests, issue handling, code review, testing, and documentation.",
    technologies: ["GitHub", "Testing", "Documentation"],
    team: "Mentored contributors"
  }
];

export const opportunities = [
  {
    type: "Internships",
    description: "Structured practical experience will be announced when suitable teams and projects are available.",
    status: "No active openings"
  },
  {
    type: "Training Programs",
    description: "Program schedules are being prepared and will be listed when enrollment opens.",
    status: "Coming Soon"
  },
  {
    type: "Project Contributors",
    description: "Future Labs opportunities will invite members to contribute to internal and experimental builds.",
    status: "Coming Soon"
  },
  {
    type: "Mentors",
    description: "Experienced developers will be able to apply to mentor, review, teach, or guide members.",
    status: "Preparing"
  },
  {
    type: "Community Volunteers",
    description: "Community support roles will open as events, workshops, and collaboration spaces grow.",
    status: "Preparing"
  }
];

export const communityActivities = [
  { title: "Coding Sessions", icon: Code2 },
  { title: "Workshops", icon: Lightbulb },
  { title: "Challenges", icon: BrainCircuit },
  { title: "Mentor Reviews", icon: MessagesSquare },
  { title: "Project Teams", icon: UsersRound },
  { title: "Technical Collaboration", icon: Handshake }
];

export const values = [
  "Learn Continuously",
  "Build Practically",
  "Grow Together",
  "Share Knowledge",
  "Take Ownership",
  "Create Opportunities",
  "Quality Matters"
];

export const faqs = [
  {
    question: "What is Miners Group?",
    answer:
      "Miners Group is a technology community and software organization focused on learning, practical experience, mentorship, software projects, internships, and career development."
  },
  {
    question: "Do I need professional experience to join?",
    answer:
      "No. Miners Group should support different experience levels. Some programs and projects may have specific prerequisites."
  },
  {
    question: "Does Miners Group provide software development services?",
    answer:
      "Yes. Miners Group can work with companies, startups, organizations, universities, and entrepreneurs on software projects."
  },
  {
    question: "Can experienced developers become mentors?",
    answer:
      "Yes. Experienced developers should be able to apply to mentor members, lead workshops, or contribute to projects."
  }
];

export const companyProcess = ["Idea", "Scope", "Team", "Build", "Review", "Deliver"];

export const contactReasons = [
  "I want to join Miners Group",
  "I want an internship",
  "I need mentorship",
  "I want training",
  "I have a software project",
  "I want to become a mentor",
  "I represent a company",
  "Partnership",
  "University collaboration",
  "Other"
];

export const trustPrinciples = [
  { title: "No inflated claims", icon: ShieldCheck, text: "The site avoids invented statistics, clients, partners, testimonials, or outcomes." },
  { title: "Structured practice", icon: GitBranch, text: "Members are introduced to planning, Git workflows, review, QA, documentation, and delivery." },
  { title: "Balanced mission", icon: UsersRound, text: "The company-services path supports the broader learning, mentorship, and community ecosystem." }
];
