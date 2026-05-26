"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { getNextProject } from "@/data/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import CaseStudySection from "@/components/projects/CaseStudySection";
import ProcessTimeline from "@/components/projects/ProcessTimeline";
import UIShowcase from "@/components/projects/UIShowcase";
import TechCard from "@/components/projects/TechCard";
import AnimatedCounter from "@/components/projects/AnimatedCounter";
import GalleryGrid from "@/components/projects/GalleryGrid";
import NextProject from "@/components/projects/NextProject";
import CTASection from "@/components/CTASection";
import Footer from "@/sections/Footer";
import { StaggerContainer, StaggerItem } from "@/animations/wrappers";
interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const nextProject = getNextProject(project.slug);

  return (
    <main className="bg-background-dark text-white">
      <ProjectHero project={project} />

      {/* Overview */}
      <CaseStudySection label="Overview" title="Project Story" id="overview">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <p className="text-xl font-light leading-relaxed text-white/60 md:text-2xl">
            {project.overview}
          </p>
          <div>
            <h4 className="text-label mb-4 text-accent">Business Goals</h4>
            <ul className="space-y-4">
              {project.goals.map((goal) => (
                <li key={goal} className="flex gap-3 text-white/55">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {goal}
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h4 className="text-label mb-3 text-white/40">Target Audience</h4>
              <p className="text-white/55">{project.audience}</p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Problem & Solution */}
      <section className="border-y border-white/5 bg-[#080808] py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <motion.div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {[
              { title: "The Problem", body: project.problem },
              { title: "Research", body: project.research },
              { title: "The Solution", body: project.solution },
              { title: "Outcome", body: project.outcome },
            ].map((block, i) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.8 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
              >
                <h3 className="font-heading text-2xl font-bold text-accent">{block.title}</h3>
                <p className="mt-4 leading-relaxed text-white/55">{block.body}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-8 md:p-10"
          >
            <h3 className="font-heading text-xl font-semibold text-white">The Challenge</h3>
            <p className="mt-3 text-lg text-white/60">{project.challenge}</p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <CaseStudySection label="Process" title="Design Journey" id="process">
        <ProcessTimeline steps={project.process} />
      </CaseStudySection>

      {/* UI Showcase */}
      <CaseStudySection label="Showcase" title="UI & Screens" id="showcase">
        <UIShowcase project={project} />
      </CaseStudySection>

      {/* Tech */}
      <section className="border-t border-white/5 py-20 md:py-28">
        <motion.div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <p className="text-label mb-4 text-accent">Stack</p>
          <h2 className="text-display-lg mb-12 text-3xl font-bold uppercase md:text-4xl">
            Technology<span className="text-accent">.</span>
          </h2>
          <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {project.technologies.map((tech) => (
              <StaggerItem key={tech}>
                <TechCard name={tech} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>
      </section>

      {/* Results */}
      <CaseStudySection label="Impact" title="Results" id="results">
        <AnimatedCounter metrics={project.metrics} />
      </CaseStudySection>

      {/* Gallery */}
      <CaseStudySection label="Gallery" title="Visual Archive" id="gallery">
        <GalleryGrid project={project} />
      </CaseStudySection>

      <NextProject project={nextProject} />

      <CTASection
        dark
        label="Next step"
        heading="Have a Vision?"
        headingAccent="Let's Bring It to Life."
        subheading="Let's collaborate on your next premium digital product with cinematic UI and flawless engineering."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "Schedule a Call", href: "/contact" }}
        className="border-t border-white/5"
      />

      <Footer />
    </main>
  );
}
