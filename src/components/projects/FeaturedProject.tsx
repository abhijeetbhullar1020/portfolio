"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { FadeUp } from "@/animations/wrappers";
import { EASE_PREMIUM } from "@/lib/utils";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xImage = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-white/5 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <FadeUp>
          <p className="text-label mb-4 text-accent">Featured Case Study</p>
        </FadeUp>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div style={{ x: xImage }} className="relative">
            <Link
              href={`/portfolio/${project.slug}`}
              className="group block overflow-hidden rounded-3xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <motion.div
                className="aspect-[16/10] flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.color}33, #0a0a0a 60%, ${project.color}22)`,
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: EASE_PREMIUM }}
              >
                <span className="font-heading text-[clamp(4rem,12vw,8rem)] font-bold text-white/10">
                  ★
                </span>
              </motion.div>
            </Link>
          </motion.div>

          <div>
            <FadeUp delay={0.1}>
              <span className="text-label text-accent">{project.category}</span>
              <h2 className="text-display-lg mt-4 text-[clamp(2.5rem,5vw,4rem)] font-bold uppercase leading-[0.92] text-white">
                {project.title}
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-white/55">
                {project.description}
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
                {[
                  { label: "Timeline", value: project.timeline },
                  { label: "Role", value: project.role.split(" ")[0] + "…" },
                  { label: "Year", value: project.year },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-label text-white/40">{stat.label}</p>
                    <p className="mt-1 font-heading text-xl font-semibold text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <motion.div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="mt-10 flex flex-wrap gap-4">
                <AnimatedButton href={`/portfolio/${project.slug}`} variant="primary">
                  View Case Study <ArrowUpRight className="h-4 w-4" />
                </AnimatedButton>
                {project.liveUrl && (
                  <AnimatedButton href={project.liveUrl} variant="ghost">
                    Live Preview
                  </AnimatedButton>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
