import type { Metadata } from "next";
import PortfolioPageContent from "@/sections/portfolio/PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio | Abhijeet — UI/UX & Frontend Projects",
  description:
    "A curated collection of premium UI/UX, branding, and frontend development projects including SaaS dashboards, fintech platforms, and creative agency websites.",
  openGraph: {
    title: "Portfolio | Abhijeet",
    description: "Selected work and digital experiences.",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
