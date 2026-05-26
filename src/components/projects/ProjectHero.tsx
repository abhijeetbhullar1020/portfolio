"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/data/projects";
import { FadeUp, TextReveal } from "@/animations/wrappers";
import { EASE_PREMIUM } from "@/lib/utils";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const meta = [
    { label: "Client", value: project.client },
    { label: "Timeline", value: project.timeline },
    { label: "Role", value: project.role },
    { label: "Industry", value: project.industry },
  ];

  return (
    <section
      ref={ref}
      className="noise-overlay relative flex min-h-screen flex-col justify-end overflow-hidden bg-background-dark pb-16 pt-32 text-white md:pb-24"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{ backgroundColor: `${project.color}44` }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12">
        <FadeUp>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </FadeUp>

        <motion.div className="mt-10 md:mt-14">
          <FadeUp delay={0.1}>
            <span className="text-label text-accent">{project.category}</span>
          </FadeUp>
          <h1 className="text-display-xl mt-4 max-w-5xl text-[clamp(2.5rem,8vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em]">
            <TextReveal>{project.title}</TextReveal>
          </h1>
          <FadeUp delay={0.25}>
            <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/55 md:text-xl">
              {project.shortDescription}
            </p>
          </FadeUp>
        </motion.div>

        <motion.div
          style={{ y: yHero }}
          className="mt-12 overflow-hidden rounded-3xl border border-white/10 md:mt-16"
        >
          <motion.div
            className="flex aspect-[16/8] items-center justify-center md:aspect-[21/9]"
            style={{
              background: `linear-gradient(135deg, ${project.color}33 0%, #050505 50%, ${project.color}18 100%)`,
            }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: EASE_PREMIUM }}
          >
            <span className="font-heading text-[clamp(3rem,10vw,8rem)] font-bold text-white/10">
              {project.year}
            </span>
          </motion.div>
        </motion.div>

        <FadeUp delay={0.35}>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4 md:gap-8">
            {meta.map((item) => (
              <div key={item.label}>
                <p className="text-label text-white/40">{item.label}</p>
                <p className="mt-2 font-heading text-lg font-semibold text-white md:text-xl">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-label text-white/40">Deliverables</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.deliverables.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
