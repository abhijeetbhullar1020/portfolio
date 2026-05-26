export const contactInfo = {
  email: "abhijeetbhullar1020@gmail.com",
  phone: "(+91) 872-582-3982",
  location: "590, Golden Palms Park, Mubarikpur (Dera-Bassi)",
  availability: "Available for freelance",
  hours: "Mon – Fri, 10am – 6pm IST",
} as const;

export const socialLinks = [
  { name: "GitHub", handle: "@abhijeet", href: "https://github.com", label: "Code & projects" },
  { name: "LinkedIn", handle: "@abhijeet", href: "https://linkedin.com", label: "Professional network" },
  { name: "Behance", handle: "@abhijeet", href: "https://behance.net", label: "Design portfolio" },
  { name: "Dribbble", handle: "@abhijeet", href: "https://dribbble.com", label: "UI shots" },
  { name: "Instagram", handle: "@abhijeet", href: "https://instagram.com", label: "Visual stories" },
  { name: "Twitter", handle: "@abhijeet", href: "https://twitter.com", label: "Thoughts & updates" },
] as const;

export const contactFaqs = [
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope. A landing page typically takes 2–3 weeks; a full product experience can take 2–3 months from discovery through launch.",
  },
  {
    question: "What services do you offer?",
    answer:
      "UI/UX design, interaction design, design systems, frontend development with React and Next.js, and premium motion-driven experiences.",
  },
  {
    question: "Are you available for freelance?",
    answer:
      "Yes. I take on select freelance projects, collaborations, and long-term partnerships with teams that value craft and storytelling.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Figma for design, Next.js and TypeScript for development, Framer Motion and GSAP for animation, and Tailwind CSS for styling.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Absolutely. I collaborate with clients globally and am comfortable working across time zones with async communication.",
  },
] as const;

export const serviceOptions = [
  "UI/UX Design",
  "Web Design",
  "Frontend Development",
  "Full Product Design",
  "Motion & Interaction",
  "Design System",
] as const;

export const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000+",
  "Not sure yet",
] as const;
