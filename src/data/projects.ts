export type ProjectCategory =
  | "UI Design"
  | "Web Design"
  | "SaaS"
  | "Mobile Apps"
  | "Branding"
  | "Frontend Development";

export type FilterTab =
  | "All"
  | ProjectCategory;

export interface ProjectMetric {
  label: string;
  value: string;
  suffix?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  categories: ProjectCategory[];
  shortDescription: string;
  description: string;
  featured: boolean;
  color: string;
  tech: string[];
  client: string;
  timeline: string;
  role: string;
  industry: string;
  deliverables: string[];
  overview: string;
  goals: string[];
  challenge: string;
  audience: string;
  problem: string;
  research: string;
  solution: string;
  outcome: string;
  process: ProcessStep[];
  technologies: string[];
  metrics: ProjectMetric[];
  gallery: { id: string; label: string; aspect: "landscape" | "portrait" | "square" }[];
  liveUrl?: string;
  year: string;
}

export const filterTabs: FilterTab[] = [
  "All",
  "UI Design",
  "Web Design",
  "SaaS",
  "Mobile Apps",
  "Branding",
  "Frontend Development",
];

export const projects: Project[] = [
  {
    slug: "ai-saas-dashboard",
    title: "AI SaaS Dashboard",
    category: "SaaS",
    categories: ["SaaS", "UI Design", "Frontend Development"],
    shortDescription:
      "A cinematic analytics platform blending AI insights with premium data visualization.",
    description:
      "An enterprise-grade SaaS dashboard that transforms complex AI metrics into intuitive, story-driven interfaces for product teams.",
    featured: true,
    color: "#FF3400",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
    client: "Nova Intelligence",
    timeline: "12 Weeks",
    role: "Lead UI/UX & Frontend",
    industry: "Artificial Intelligence",
    deliverables: ["Product UI", "Design System", "Frontend App", "Motion Specs"],
    overview:
      "Nova Intelligence needed a dashboard that could surface machine-learning outputs without overwhelming non-technical stakeholders. The goal was clarity at scale—premium aesthetics paired with real-time performance.",
    goals: [
      "Reduce time-to-insight for product managers",
      "Unify disparate data modules into one cohesive system",
      "Establish a scalable design language for future AI features",
    ],
    challenge:
      "Legacy tools felt clinical and fragmented. Users struggled to trust AI recommendations when the interface felt utilitarian rather than intentional.",
    audience: "Product managers, data analysts, and executive stakeholders at mid-market SaaS companies.",
    problem:
      "Complex datasets were buried behind dense tables. Key actions required too many clicks, and visual hierarchy failed under high data density.",
    research:
      "Conducted stakeholder interviews, task-flow audits, and competitive analysis across Linear, Stripe Dashboard, and modern AI tools.",
    solution:
      "Designed a modular card system with progressive disclosure, contextual AI summaries, and motion-guided focus states for primary workflows.",
    outcome:
      "Shipped a cohesive v1 that increased weekly active usage and received praise for clarity during enterprise demos.",
    process: [
      { title: "Discovery", description: "Stakeholder workshops and KPI mapping." },
      { title: "UX Research", description: "User interviews and journey mapping." },
      { title: "Wireframes", description: "Low-fi flows for core dashboards." },
      { title: "Design System", description: "Tokens, components, and documentation." },
      { title: "UI Exploration", description: "High-fidelity screens and states." },
      { title: "Prototyping", description: "Interactive flows in Figma." },
      { title: "Development", description: "Next.js implementation with motion." },
      { title: "Testing", description: "Usability sessions and QA cycles." },
      { title: "Launch", description: "Phased rollout with analytics tracking." },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "Node.js", "Firebase"],
    metrics: [
      { label: "Conversion Increase", value: "34", suffix: "%" },
      { label: "User Engagement", value: "2.4", suffix: "x" },
      { label: "Performance Score", value: "96", suffix: "" },
      { label: "Demo Close Rate", value: "28", suffix: "%" },
    ],
    gallery: [
      { id: "g1", label: "Dashboard Overview", aspect: "landscape" },
      { id: "g2", label: "AI Insights Panel", aspect: "landscape" },
      { id: "g3", label: "Mobile View", aspect: "portrait" },
      { id: "g4", label: "Component Library", aspect: "square" },
      { id: "g5", label: "Analytics Module", aspect: "landscape" },
      { id: "g6", label: "Settings Flow", aspect: "portrait" },
    ],
    liveUrl: "https://dtc-live.webflow.io/",
    year: "2025",
  },
  {
    slug: "real-estate-website",
    title: "Real Estate Website",
    category: "Web Design",
    categories: ["Web Design", "UI Design", "Frontend Development"],
    shortDescription:
      "A luxury property platform with immersive storytelling and cinematic property showcases.",
    description:
      "A high-end real estate experience designed to elevate premium listings through editorial layouts and smooth scroll narratives.",
    featured: false,
    color: "#C4A574",
    tech: ["Next.js", "GSAP", "Tailwind CSS", "Lenis"],
    client: "Meridian Estates",
    timeline: "10 Weeks",
    role: "UI/UX Designer & Developer",
    industry: "Real Estate",
    deliverables: ["Website Design", "Frontend Build", "CMS Integration"],
    overview:
      "Meridian Estates wanted a digital presence that matched the caliber of their properties—minimal, luxurious, and emotionally resonant.",
    goals: [
      "Increase qualified lead inquiries",
      "Showcase properties with editorial impact",
      "Build a reusable listing template system",
    ],
    challenge:
      "Competitor sites felt template-driven. Photography was strong but presentation lacked narrative and premium pacing.",
    audience: "High-net-worth buyers and international investors seeking luxury residential properties.",
    problem:
      "Listings were presented as grids without story. Brand trust suffered from generic UX patterns.",
    research:
      "Audited luxury hospitality and fashion e-commerce for pacing, typography, and image treatment references.",
    solution:
      "Crafted full-bleed hero sequences, curated property stories, and subtle parallax to guide emotional discovery.",
    outcome:
      "Delivered a launch-ready site that elevated brand perception and improved inquiry quality.",
    process: [
      { title: "Discovery", description: "Brand audit and positioning." },
      { title: "UX Research", description: "Buyer persona development." },
      { title: "Wireframes", description: "Page structure and flows." },
      { title: "Design System", description: "Typography and spacing scale." },
      { title: "UI Exploration", description: "Visual design for key pages." },
      { title: "Prototyping", description: "Scroll prototype validation." },
      { title: "Development", description: "Next.js build with animations." },
      { title: "Testing", description: "Cross-device QA." },
      { title: "Launch", description: "Go-live and handoff." },
    ],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Framer Motion"],
    metrics: [
      { label: "Lead Quality", value: "41", suffix: "%" },
      { label: "Time on Site", value: "3.2", suffix: "min" },
      { label: "Bounce Rate", value: "-22", suffix: "%" },
      { label: "Page Speed", value: "94", suffix: "" },
    ],
    gallery: [
      { id: "g1", label: "Homepage Hero", aspect: "landscape" },
      { id: "g2", label: "Property Detail", aspect: "landscape" },
      { id: "g3", label: "Mobile Listing", aspect: "portrait" },
      { id: "g4", label: "Map Experience", aspect: "landscape" },
    ],
    liveUrl: "https://narnia-website.webflow.io/product-aslan-designer",
    year: "2024",
  },
  {
    slug: "fintech-platform",
    title: "Fintech Platform",
    category: "SaaS",
    categories: ["SaaS", "UI Design", "Frontend Development"],
    shortDescription:
      "A secure, elegant financial platform with real-time data and premium dark-mode UI.",
    description:
      "End-to-end product design for a modern fintech dashboard focused on trust, clarity, and performance.",
    featured: false,
    color: "#4ADE80",
    tech: ["React", "TypeScript", "Tailwind", "Recharts"],
    client: "VaultPay",
    timeline: "14 Weeks",
    role: "Product Designer",
    industry: "Financial Technology",
    deliverables: ["UX Strategy", "UI Design", "Design System"],
    overview:
      "VaultPay required a platform that communicated security while remaining approachable for everyday users managing finances.",
    goals: ["Increase user trust", "Simplify transaction flows", "Support regulatory clarity"],
    challenge: "Financial products often feel cold or overwhelming. Balance was critical.",
    audience: "Millennial professionals and small business owners.",
    problem: "Onboarding drop-off was high due to dense forms and unclear value props.",
    research: "Competitive benchmarking and usability testing on onboarding flows.",
    solution: "Streamlined onboarding, contextual education, and a refined dark UI system.",
    outcome: "Improved activation rates and positive feedback on visual polish.",
    process: [
      { title: "Discovery", description: "Regulatory and user constraints." },
      { title: "UX Research", description: "Testing and analytics review." },
      { title: "Wireframes", description: "Core flows mapped." },
      { title: "Design System", description: "Dark theme components." },
      { title: "UI Exploration", description: "Dashboard and cards." },
      { title: "Prototyping", description: "Clickable onboarding." },
      { title: "Development", description: "React component handoff." },
      { title: "Testing", description: "A/B onboarding tests." },
      { title: "Launch", description: "Staged release." },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    metrics: [
      { label: "Activation Rate", value: "52", suffix: "%" },
      { label: "Support Tickets", value: "-18", suffix: "%" },
      { label: "NPS Score", value: "67", suffix: "" },
      { label: "Task Completion", value: "89", suffix: "%" },
    ],
    gallery: [
      { id: "g1", label: "Dashboard", aspect: "landscape" },
      { id: "g2", label: "Transactions", aspect: "landscape" },
      { id: "g3", label: "Mobile App", aspect: "portrait" },
    ],
    liveUrl: "https://sweatsprout.net/",
    year: "2024",
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    category: "Mobile Apps",
    categories: ["Mobile Apps", "UI Design"],
    shortDescription:
      "A refined mobile banking experience with intuitive flows and premium micro-interactions.",
    description:
      "Native-feeling mobile UI for personal banking with focus on speed, accessibility, and delight.",
    featured: false,
    color: "#60A5FA",
    tech: ["Figma", "Framer Motion", "React Native"],
    client: "Horizon Bank",
    timeline: "16 Weeks",
    role: "Lead Mobile UI/UX",
    industry: "Banking",
    deliverables: ["Mobile UI", "Prototypes", "Motion Guidelines"],
    overview:
      "Horizon Bank sought a mobile refresh that felt contemporary without sacrificing the trust users expect from financial apps.",
    goals: ["Reduce friction in transfers", "Modernize visual identity", "Improve accessibility"],
    challenge: "Legacy app had cluttered navigation and inconsistent patterns.",
    audience: "Retail banking customers aged 25–55.",
    problem: "Key tasks required too many taps; visual design felt dated.",
    research: "App store reviews, support tickets, and in-app analytics.",
    solution: "Tab-based IA, gesture-friendly flows, and a cohesive component library.",
    outcome: "Higher app store ratings and improved task success in testing.",
    process: [
      { title: "Discovery", description: "Feature prioritization." },
      { title: "UX Research", description: "Mobile diary studies." },
      { title: "Wireframes", description: "Screen flows." },
      { title: "Design System", description: "Mobile tokens." },
      { title: "UI Exploration", description: "Visual polish." },
      { title: "Prototyping", description: "Framer prototypes." },
      { title: "Development", description: "Dev collaboration." },
      { title: "Testing", description: "Beta user testing." },
      { title: "Launch", description: "App store release." },
    ],
    technologies: ["Figma", "Framer Motion", "React", "TypeScript", "Firebase"],
    metrics: [
      { label: "App Rating", value: "4.8", suffix: "★" },
      { label: "Transfer Speed", value: "40", suffix: "%" },
      { label: "Daily Active Users", value: "31", suffix: "%" },
      { label: "Accessibility", value: "AA", suffix: "" },
    ],
    gallery: [
      { id: "g1", label: "Home Screen", aspect: "portrait" },
      { id: "g2", label: "Transfer Flow", aspect: "portrait" },
      { id: "g3", label: "Cards UI", aspect: "portrait" },
      { id: "g4", label: "Onboarding", aspect: "portrait" },
    ],
    liveUrl: "https://fitfiesta.net/",
    year: "2025",
  },
  {
    slug: "branding-system",
    title: "Branding System",
    category: "Branding",
    categories: ["Branding", "UI Design"],
    shortDescription:
      "A cohesive visual identity system spanning logo, typography, color, and digital touchpoints.",
    description:
      "Full brand system for a tech startup—from strategy to scalable guidelines and marketing assets.",
    featured: false,
    color: "#A78BFA",
    tech: ["Figma", "Illustrator"],
    client: "Arc Labs",
    timeline: "8 Weeks",
    role: "Brand Designer",
    industry: "Technology",
    deliverables: ["Brand Strategy", "Visual Identity", "Guidelines", "Templates"],
    overview:
      "Arc Labs needed a distinctive identity that could scale across product, marketing, and investor materials.",
    goals: ["Define brand personality", "Create flexible visual system", "Enable team self-service"],
    challenge: "Previous identity lacked consistency across channels.",
    audience: "B2B SaaS buyers and venture partners.",
    problem: "Fragmented visuals weakened market positioning.",
    research: "Workshops, moodboards, and competitive landscape analysis.",
    solution: "Modular logo system, typographic hierarchy, and comprehensive brand book.",
    outcome: "Unified presence across web, decks, and social within one quarter.",
    process: [
      { title: "Discovery", description: "Brand workshops." },
      { title: "UX Research", description: "Audience positioning." },
      { title: "Wireframes", description: "Layout templates." },
      { title: "Design System", description: "Brand tokens." },
      { title: "UI Exploration", description: "Applications." },
      { title: "Prototyping", description: "Deck templates." },
      { title: "Development", description: "Web asset export." },
      { title: "Testing", description: "Stakeholder review." },
      { title: "Launch", description: "Brand rollout." },
    ],
    technologies: ["Figma"],
    metrics: [
      { label: "Brand Recognition", value: "45", suffix: "%" },
      { label: "Asset Reuse", value: "3", suffix: "x" },
      { label: "Design Time Saved", value: "60", suffix: "%" },
      { label: "Consistency Score", value: "92", suffix: "%" },
    ],
    gallery: [
      { id: "g1", label: "Logo System", aspect: "square" },
      { id: "g2", label: "Typography", aspect: "landscape" },
      { id: "g3", label: "Marketing", aspect: "landscape" },
    ],
    liveUrl: "https://vividgovtech.com/",
    year: "2024",
  },
  {
    slug: "creative-agency-website",
    title: "Creative Agency Website",
    category: "Web Design",
    categories: ["Web Design", "Frontend Development", "Branding"],
    shortDescription:
      "An Awwwards-inspired agency site with WebGL accents and cinematic scroll storytelling.",
    description:
      "Immersive portfolio website for a creative studio—bold typography, motion, and case-study-driven narrative.",
    featured: false,
    color: "#FF3400",
    tech: ["Next.js", "GSAP", "Three.js", "Framer Motion"],
    client: "Lumina Studio",
    timeline: "11 Weeks",
    role: "Creative Developer",
    industry: "Creative Agency",
    deliverables: ["Website", "Motion Design", "CMS"],
    overview:
      "Lumina Studio wanted a digital flagship that mirrored their craft—experimental, refined, and unforgettable.",
    goals: ["Win new enterprise clients", "Showcase case studies", "Push technical boundaries"],
    challenge: "Standing out in a saturated agency market required distinctive interaction design.",
    audience: "Brand directors and marketing leads at enterprise companies.",
    problem: "Previous site failed to convey creative capability.",
    research: "Awwwards analysis and scroll-driven narrative references.",
    solution: "Chapter-based storytelling, WebGL moments, and seamless case study transitions.",
    outcome: "Site featured in design communities and increased inbound leads.",
    process: [
      { title: "Discovery", description: "Creative direction." },
      { title: "UX Research", description: "Client journey mapping." },
      { title: "Wireframes", description: "Page architecture." },
      { title: "Design System", description: "Web components." },
      { title: "UI Exploration", description: "Visual experiments." },
      { title: "Prototyping", description: "Motion prototypes." },
      { title: "Development", description: "Next.js + GSAP build." },
      { title: "Testing", description: "Performance optimization." },
      { title: "Launch", description: "Public launch campaign." },
    ],
    technologies: ["Next.js", "GSAP", "Framer Motion", "TypeScript", "Tailwind CSS"],
    metrics: [
      { label: "Inbound Leads", value: "67", suffix: "%" },
      { label: "Award Features", value: "3", suffix: "" },
      { label: "Avg. Session", value: "4.1", suffix: "min" },
      { label: "Lighthouse", value: "91", suffix: "" },
    ],
    gallery: [
      { id: "g1", label: "Homepage", aspect: "landscape" },
      { id: "g2", label: "Work Index", aspect: "landscape" },
      { id: "g3", label: "Case Study", aspect: "landscape" },
      { id: "g4", label: "Contact", aspect: "portrait" },
    ],
    liveUrl: "https://www.bloomsdr.com/home",
    year: "2025",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getFeaturedProject(): Project {
  return projects.find((p) => p.featured) ?? projects[0];
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}

export function filterProjects(tab: FilterTab): Project[] {
  if (tab === "All") return projects;
  return projects.filter((p) => p.categories.includes(tab));
}
