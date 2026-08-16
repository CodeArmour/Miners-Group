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
    items: ["Web Applications", "Mobile Applications", "Custom Software"]
  },
  {
    title: "Operate",
    summary: "Engineering support for reliable delivery and long-term product health.",
    items: ["Cloud / DevOps", "Maintenance & Support"]
  },
  {
    title: "Enable",
    summary: "Technical capability building for teams, students, and organizations.",
    items: ["AI Solutions", "Consulting", "Technical Training", "Workshops"]
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

export const programPaths = [
  {
    index: "01",
    title: "Training",
    headline: "Build strong technical foundations.",
    status: "In Development",
    text: "Practical learning, workshops, structured learning areas, and guided technical practice.",
    cta: "Join for Program Updates",
    href: "/join",
    areasLabel: "Learning Areas",
    areas: programs
  },
  {
    index: "02",
    title: "Internships",
    headline: "Experience how real software teams work.",
    status: "Applications Not Open Yet",
    text: "Future structured practical experience around requirements, planning, Git, implementation, pull requests, code review, testing, QA, documentation, and delivery.",
    cta: "Join for Internship Updates",
    href: "/join"
  },
  {
    index: "03",
    title: "Mentorship",
    headline: "Get guidance when the next step is unclear.",
    status: "Available",
    text: "Guidance around learning roadmaps, specialization, portfolios, projects, certifications, internship preparation, and career direction.",
    cta: "Request Mentorship",
    href: "/join#mentor"
  }
];

export const learningAreaGroups = [
  { title: "Build", items: ["Frontend", "Backend", "Full Stack", "Mobile"] },
  { title: "Operate", items: ["Cloud", "DevOps"] },
  { title: "Intelligence & Security", items: ["AI", "Cybersecurity"] },
  { title: "Engineering Practice", items: ["Git & GitHub", "Testing & QA", "Software Engineering Practices"] }
];

export const minersLearningProcess = [
  { title: "Understand", text: "Learn the concepts and why they matter." },
  { title: "Practice", text: "Apply them in focused exercises." },
  { title: "Build", text: "Use them in projects and collaborative work." },
  { title: "Review", text: "Receive feedback and improve quality." },
  { title: "Reflect", text: "Understand what worked and what to improve next." }
];

export const internshipExperienceModel = [
  "Requirements",
  "Planning",
  "Git",
  "Build",
  "PR",
  "Review",
  "QA",
  "Documentation",
  "Delivery"
];

export const mentorshipQuestions = [
  "What should I learn next?",
  "Which specialization fits me?",
  "Is my portfolio strong enough?",
  "How can I improve this project?",
  "Which certifications are worth pursuing?",
  "How should I prepare for an internship?"
];

export const programAudiences = [
  { title: "Students", text: "Trying to build direction and practical experience." },
  { title: "Self-Taught Developers", text: "Wanting structure, feedback, and stronger projects." },
  { title: "Early-Career Developers", text: "Looking to strengthen engineering habits and collaboration skills." },
  { title: "Contributors", text: "Wanting to learn by building with others." }
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
    href: "https://www.andaluciagroup.eu/",
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
    href: "https://moon-two-flame.vercel.app/",
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
  { title: "Coding Sessions", icon: Code2, text: "Work together on technical problems and practical exercises.", className: "lg:col-span-4" },
  { title: "Workshops", icon: Lightbulb, text: "Focused sessions around tools, concepts, engineering practices, and career topics.", className: "lg:col-span-4" },
  { title: "Challenges", icon: BrainCircuit, text: "Small technical challenges designed to encourage practice and discussion.", className: "lg:col-span-3" },
  { title: "Mentor Reviews", icon: MessagesSquare, text: "Get thoughtful feedback on projects, portfolios, technical decisions, and learning direction.", className: "lg:col-span-5" },
  { title: "Project Teams", icon: UsersRound, text: "Collaborate around experiments, Labs projects, and future community initiatives.", className: "lg:col-span-7 lg:row-span-2" },
  { title: "Technical Collaboration", icon: Handshake, text: "Share ideas, review work, solve problems, and learn how others approach engineering.", className: "lg:col-span-5" }
];

export const communityLoop = [
  { title: "Ask", text: "Questions create direction." },
  { title: "Share", text: "Knowledge becomes more valuable when it moves between people." },
  { title: "Build", text: "Ideas become practical when people work on them." },
  { title: "Review", text: "Feedback helps improve both the work and the person behind it." },
  { title: "Mentor", text: "Experience can shorten someone else's learning path." },
  { title: "Grow", text: "Progress creates new contributors, collaborators, and future mentors." }
];

export const communityRoles = [
  { title: "Learner", text: "Ask questions, participate in sessions, practice, and learn from others." },
  { title: "Builder", text: "Work on ideas, experiments, and collaborative projects." },
  { title: "Reviewer", text: "Give thoughtful technical or product feedback." },
  { title: "Mentor", text: "Help others with direction, engineering decisions, portfolios, or career preparation." },
  { title: "Contributor", text: "Help with community activities, content, documentation, design, organization, or technical initiatives." }
];

export const communityCollaborationFlow = ["Question", "Idea", "Small Experiment", "Team", "Miners Labs", "Working Project"];

export const knowledgeFlow = ["Learn", "Document", "Share", "Discuss", "Improve"];

export const communityCode = [
  "Be curious.",
  "Ask clearly.",
  "Share what you know.",
  "Give useful feedback.",
  "Respect different experience levels.",
  "Take ownership.",
  "Build before you brag.",
  "Help someone behind you."
];

export const values = [
  {
    title: "Learn Continuously",
    text: "Technology changes. Curiosity and the ability to keep learning matter more than memorizing one tool."
  },
  {
    title: "Build Practically",
    text: "Knowledge becomes stronger when it is applied to real problems, constraints, and working software."
  },
  {
    title: "Grow Together",
    text: "Progress is faster when people learn, review, explain, and build with others."
  },
  {
    title: "Share Knowledge",
    text: "What one person learns can create value for the whole community."
  },
  {
    title: "Take Ownership",
    text: "Good engineering means caring about the result, not only completing a task."
  },
  {
    title: "Create Opportunities",
    text: "The ecosystem should help people move toward projects, internships, mentorship, and professional growth."
  },
  {
    title: "Quality Matters",
    text: "Planning, review, testing, documentation, and thoughtful implementation are part of the work."
  }
];

export const trustProcess = ["Plan", "Build", "Review", "Test", "Document", "Improve"];

export const minersDifference = [
  { title: "Learning", text: "Practical technical development." },
  { title: "Building", text: "Real software and collaborative projects." },
  { title: "Mentorship", text: "Guidance from people with more experience." },
  { title: "Opportunity", text: "Internships, contribution, career preparation, and future talent connections." },
  { title: "Delivery", text: "Software work for companies and organizations." }
];

export const communityBehaviors = ["Ask", "Share", "Review", "Build", "Mentor", "Contribute"];

export const futureLoop = ["Student", "Developer", "Contributor", "Mentor", "Opportunity Creator"];

export const futureDirections = [
  "Students find clearer paths.",
  "Developers strengthen real engineering experience.",
  "Mentors help others progress.",
  "Teams build meaningful software.",
  "Companies collaborate with emerging talent.",
  "Members create opportunities for the people who come after them."
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
