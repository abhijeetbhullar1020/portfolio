"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, TextReveal } from "@/animations/wrappers";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilters from "@/components/projects/ProjectFilters";
import FeaturedProject from "@/components/projects/FeaturedProject";
import CTASection from "@/components/CTASection";
import Footer from "@/sections/Footer";
import { getFeaturedProject, filterProjects } from "@/data/projects";
import type { FilterTab } from "@/data/projects";
import { EASE_PREMIUM } from "@/lib/utils";

export default function PortfolioPageContent() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const featured = getFeaturedProject();

  const filtered = useMemo(
    () => filterProjects(activeFilter),
    [activeFilter]
  );

  return (
    <main className="min-h-screen bg-background-dark text-white">
      {/* Hero */}
      <section className="noise-overlay relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-32 pb-20">
        <motion.div
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 9, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[140px]"
          />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 text-center md:px-12">
          <FadeUp>
            <p className="text-label mb-6 text-accent">Portfolio</p>
          </FadeUp>
          <h1 className="text-display-xl text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em]">
            <TextReveal>Selected Work</TextReveal>
            <br />
            <span className="text-white/30">
              <TextReveal delay={0.1}>& Digital Experiences</TextReveal>
            </span>
          </h1>
          <FadeUp delay={0.25}>
            <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-white/55 md:text-xl">
              A curated collection of premium UI/UX, branding, and frontend development projects.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-white/5 py-10 md:py-12">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <ProjectFilters active={activeFilter} onChange={setActiveFilter} />
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24">
        <motion.div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: EASE_PREMIUM }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
            >
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  size={index === 0 && activeFilter === "All" ? "large" : "default"}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-white/50">No projects in this category yet.</p>
          )}
        </motion.div>
      </section>

      <FeaturedProject project={featured} />

      <CTASection
        dark
        label="Let's collaborate"
        heading="Let's Build Something"
        headingAccent="Extraordinary"
        subheading="Ready to elevate your product with premium design, motion, and engineering?"
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "Get in Touch", href: "/contact" }}
        className="border-t border-white/5"
      />

      <Footer />
    </main>
  );
}
