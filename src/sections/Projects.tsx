"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/animations/wrappers";
import { ArrowUpRight } from "lucide-react";
import { projects as allProjects } from "@/data/projects";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { EASE_PREMIUM } from "@/lib/utils";

const previewProjects = allProjects.slice(0, 4);

function HomeProjectCard({
  project,
  index,
}: {
  project: (typeof previewProjects)[0];
  index: number;
}) {
  return (
    <StaggerItem>
      <Link
        href={`/portfolio/${project.slug}`}
        className="group relative block overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <motion.div
          className="relative aspect-[16/11] overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <motion.div
            className="absolute inset-[-8%] flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.color}33, #050505)`,
            }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          >
            <span className="font-heading text-5xl text-white/15">0{index + 1}</span>
          </motion.div>
          <motion.div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </motion.div>
        <div className="p-6 md:p-8">
          <span className="text-label text-accent">{project.category}</span>
          <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight transition-colors group-hover:text-accent md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm text-white/50">{project.shortDescription}</p>
        </div>
      </Link>
    </StaggerItem>
  );
}

export default function Projects() {
  return (
    <section id="work" className="noise-overlay relative w-full bg-background-dark py-28 text-white md:py-40">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <FadeUp>
          <motion.div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="text-label mb-4 text-accent">Portfolio</p>
              <h2 className="text-display-lg text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase">
                Selected Works<span className="text-accent">.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-6 md:items-end">
              <p className="max-w-sm text-base font-light text-white/50">
                A curated selection showcasing design, motion, and robust engineering.
              </p>
              <AnimatedButton href="/portfolio" variant="ghost">
                View All Projects <ArrowUpRight className="h-4 w-4" />
              </AnimatedButton>
            </div>
          </motion.div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {previewProjects.map((project, index) => (
            <HomeProjectCard key={project.slug} project={project} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
