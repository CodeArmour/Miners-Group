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
  Sparkles,
  UsersRound,
  Wrench
} from "lucide-react";

export const siteConfig = {
  name: "Miners Group",
  tagline: "From learning to real software experience.",
  description:
    "Miners Group connects students, developers, mentors, and organizations through practical training, mentorship, internships, real software projects, and career guidance.",
  url: "https://miners-group.vercel.app",
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
    text: "Strengthen your skills through exercises, challenges, collaborative sessions, and small practical builds."
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
    summary: "Product and software delivery for practical business needs.",
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

export const labsAreas = [
  {
    name: "Internal Labs",
    category: "Products and tools",
    status: "Building",
    purpose:
      "Products and tools created inside Miners Group to practice structured software development.",
    technologies: ["Planning", "Build", "Review"],
    team: "Guided Labs teams"
  },
  {
    name: "Community Experiments",
    category: "Exploration",
    status: "Coming Soon",
    purpose:
      "Small collaborative ideas where members can explore technologies and learn by shipping.",
    technologies: ["Web", "AI", "Product"],
    team: "Community contributors"
  },
  {
    name: "Open Source Practice",
    category: "Engineering workflow",
    status: "Preparing",
    purpose:
      "Repositories designed around Git, pull requests, issues, testing, review, and documentation.",
    technologies: ["Git", "QA", "Documentation"],
    team: "Mentored contributors"
  }
];

export const featuredProjects = [
  {
    slug: "andalucia",
    name: "Andalucia",
    index: "01",
    description:
      "A website interface for an engineering consulting brand, shown through a wide homepage screenshot with strong editorial hierarchy and service-oriented navigation.",
    category: "Website interface",
    image: "/projects/andalucia.png",
    imageAlt: "Andalucia website homepage screenshot showing engineering consulting hero content and navigation.",
    status: "Showcase",
    technologies: []
  },
  {
    slug: "moon-glow",
    name: "Moon Glow",
    index: "02",
    description:
      "A travel-focused web interface built around destination discovery, large visual cards, and a clear journey-planning entry point.",
    category: "Website interface",
    image: "/projects/moonglow.png",
    imageAlt: "Moon Glow travel website screenshot showing destination cards and journey planning navigation.",
    status: "Showcase",
    technologies: []
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
  {
    title: "Learn Continuously",
    text: "Technology changes quickly, so Miners treats learning as an ongoing practice."
  },
  {
    title: "Build Practically",
    text: "Knowledge becomes stronger when it is applied to real decisions, constraints, and working software."
  },
  {
    title: "Grow Together",
    text: "People progress faster when they can ask, review, explain, and improve with others."
  },
  {
    title: "Share Knowledge",
    text: "Experience becomes more valuable when it helps someone else move forward."
  },
  {
    title: "Take Ownership",
    text: "Professional growth comes from responsibility, communication, and care for the work."
  },
  {
    title: "Create Opportunities",
    text: "Talent needs pathways to practice, demonstrate ability, and meet meaningful next steps."
  },
  {
    title: "Quality Matters",
    text: "Learning environments should still encourage clear standards and thoughtful engineering."
  }
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

export const deliveryProcess = [
  { title: "Discover", text: "Understand the goal, audience, constraints, and practical context." },
  { title: "Scope", text: "Shape the work into clear priorities, requirements, and delivery steps." },
  { title: "Build", text: "Implement through focused engineering work and transparent collaboration." },
  { title: "Review", text: "Evaluate decisions, quality, usability, and readiness before release." },
  { title: "Deliver", text: "Ship the agreed work with clear handoff and documentation where needed." },
  { title: "Support", text: "Continue improving, maintaining, or extending the solution when appropriate." }
];

export const labsProcess = ["Idea", "Plan", "Build", "Review", "QA", "Document", "Ship", "Reflect"];

export const labsWorkflow = [
  { title: "Idea", text: "Define what is worth solving." },
  { title: "Plan", text: "Turn the idea into scope, requirements, and tasks." },
  { title: "Build", text: "Implement in focused development rounds." },
  { title: "Review", text: "Review code, architecture, and decisions." },
  { title: "QA", text: "Test behavior, usability, edge cases, and regressions." },
  { title: "Document", text: "Capture decisions, usage, and corrections." },
  { title: "Ship", text: "Deliver a working result." },
  { title: "Reflect", text: "Review what worked, what failed, and what should improve next." }
];

export const communityPrinciples = [
  { title: "Ask", text: "Make space for questions and honest technical discussion." },
  { title: "Share", text: "Turn useful lessons into knowledge others can build on." },
  { title: "Build", text: "Move beyond theory by working on practical ideas together." },
  { title: "Review", text: "Improve work through feedback, code review, and reflection." },
  { title: "Mentor", text: "Help others understand choices, tradeoffs, and next steps." },
  { title: "Grow", text: "Treat progress as something the community can create together." }
];

export const companyCollaborationPaths = [
  {
    title: "Build With Miners",
    cta: "Start a Project",
    href: "/for-companies#start-project",
    text: "For web applications, mobile applications, custom software, AI solutions, cloud/DevOps, and technical collaboration."
  },
  {
    title: "Develop Talent",
    cta: "Discuss a Program",
    href: "/contact",
    text: "For internships, workshops, technical challenges, mentorship initiatives, student development, and speakers."
  },
  {
    title: "Partner With Miners",
    cta: "Explore Partnership",
    href: "/for-companies#partner",
    text: "For community initiatives, events, sponsorship, workshops, collaborative programs, and project challenges."
  }
];

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
  { title: "Earn trust through real work", icon: GitBranch, text: "Credibility should come from what we build, how we work, and the value we create, not inflated promises." },
  { title: "Practice the full process", icon: Layers3, text: "Members are introduced to planning, Git workflows, review, QA, documentation, and delivery." },
  { title: "Keep the mission balanced", icon: UsersRound, text: "Software services, mentorship, learning, and community should reinforce each other inside one ecosystem." }
];
