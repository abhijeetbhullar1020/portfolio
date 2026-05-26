"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Project } from "@/data/projects";
import { EASE_PREMIUM } from "@/lib/utils";

interface UIShowcaseProps {
  project: Project;
}

const showcases = [
  { label: "Desktop Experience", aspect: "aspect-[16/10]", span: "md:min-w-[70%]" },
  { label: "Mobile Screens", aspect: "aspect-[9/16]", span: "md:min-w-[28%]" },
  { label: "UI Components", aspect: "aspect-[4/3]", span: "md:min-w-[45%]" },
  { label: "Design System", aspect: "aspect-[16/10]", span: "md:min-w-[50%]" },
];

export default function UIShowcase({ project }: UIShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-8%"]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        style={{ x }}
        className="flex gap-5 overflow-x-auto pb-4 md:gap-6"
        drag="x"
        dragConstraints={{ left: -400, right: 0 }}
      >
        {showcases.map((item, i) => (
          <motion.div
            key={item.label}
            whileHover={{ scale: 1.02 }}
            transition={{ ease: EASE_PREMIUM }}
            className={`shrink-0 overflow-hidden rounded-2xl border border-white/10 ${item.span}`}
          >
            <div
              className={`${item.aspect} flex w-[min(85vw,600px)] items-end p-6 md:w-auto`}
              style={{
                background: `linear-gradient(160deg, ${project.color}${20 + i * 8}, #0a0a0a)`,
              }}
            >
              <div>
                <p className="text-label text-white/40">0{i + 1}</p>
                <p className="mt-1 font-heading text-lg font-semibold text-white">{item.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
