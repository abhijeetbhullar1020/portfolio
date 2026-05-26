"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { EASE_PREMIUM } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
  size?: "default" | "large";
}

export default function ProjectCard({
  project,
  index = 0,
  size = "default",
}: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const isLarge = size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: EASE_PREMIUM }}
      className={isLarge ? "md:col-span-2" : ""}
    >
      <Link
        ref={cardRef}
        href={`/portfolio/${project.slug}`}
        onMouseMove={handleMouseMove}
        className="group relative block h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,52,0,0.2), transparent 50%)`,
          }}
        />

        <motion.div
          className={`relative overflow-hidden ${isLarge ? "aspect-[16/9]" : "aspect-[4/3]"}`}
        >
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.color}22 0%, #050505 50%, ${project.color}11 100%)`,
            }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: EASE_PREMIUM }}
          >
            <span className="font-heading text-6xl font-bold text-white/10 md:text-8xl">
              0{index + 1}
            </span>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

          <motion.div
            className="absolute top-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white opacity-0 shadow-[0_0_24px_rgba(255,52,0,0.5)] transition-opacity group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="h-5 w-5" />
          </motion.div>
        </motion.div>

        <motion.div className="relative z-20 p-6 md:p-8">
          <span className="text-label text-accent">{project.category}</span>
          <h3
            className={`mt-2 font-heading font-bold tracking-tight text-white transition-colors group-hover:text-accent ${
              isLarge ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm font-light leading-relaxed text-white/55 md:text-base">
            {project.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors group-hover:text-accent">
            View Case Study <ArrowUpRight className="h-4 w-4" />
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
