"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { FadeUp } from "@/animations/wrappers";
import { EASE_PREMIUM } from "@/lib/utils";

interface NextProjectProps {
  project: Project;
}

export default function NextProject({ project }: NextProjectProps) {
  return (
    <section className="relative border-t border-white/5 bg-background-dark py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <FadeUp>
          <p className="text-label mb-6 text-accent">Next Project</p>
        </FadeUp>
        <Link
          href={`/portfolio/${project.slug}`}
          className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ ease: EASE_PREMIUM }}
            className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <span className="text-label text-white/40">{project.category}</span>
              <h2 className="text-display-xl mt-4 text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] text-white transition-colors group-hover:text-accent">
                {project.title}
              </h2>
              <p className="mt-4 max-w-lg text-lg text-white/50">{project.shortDescription}</p>
            </div>
            <motion.div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/15 bg-accent text-white shadow-[0_0_40px_rgba(255,52,0,0.4)] transition-transform group-hover:scale-110"
              whileHover={{ rotate: 45 }}
            >
              <ArrowUpRight className="h-8 w-8" />
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-12 overflow-hidden rounded-3xl border border-white/10"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.6, ease: EASE_PREMIUM }}
          >
            <div
              className="aspect-[21/9]"
              style={{
                background: `linear-gradient(135deg, ${project.color}33, #050505)`,
              }}
            />
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
