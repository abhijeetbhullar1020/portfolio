"use client";

import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/utils";

interface TechCardProps {
  name: string;
}

const techColors: Record<string, string> = {
  React: "#61DAFB",
  "Next.js": "#ffffff",
  "Tailwind CSS": "#38BDF8",
  TypeScript: "#3178C6",
  "Framer Motion": "#FF3400",
  GSAP: "#88CE02",
  "Node.js": "#68A063",
  MongoDB: "#47A248",
  Firebase: "#FFCA28",
  Figma: "#F24E1E",
};

export default function TechCard({ name }: TechCardProps) {
  const color = techColors[name] ?? "#FF3400";

  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -4 }}
      transition={{ duration: 0.45, ease: EASE_PREMIUM }}
      className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-heading text-xs font-bold transition-shadow group-hover:shadow-[0_0_28px_rgba(255,52,0,0.2)]"
        style={{ color }}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
      <span className="text-center text-sm font-medium text-white/70 group-hover:text-white">
        {name}
      </span>
    </motion.div>
  );
}
