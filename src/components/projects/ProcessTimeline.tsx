"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ProcessStep } from "@/data/projects";
import { EASE_PREMIUM } from "@/lib/utils";

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div ref={ref} className="relative">
      <div className="absolute top-0 bottom-0 left-4 hidden w-0.5 bg-white/10 md:left-8 md:block" />
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="absolute top-0 bottom-0 left-4 hidden w-0.5 bg-accent md:left-8 md:block"
      />

      <div className="flex flex-col gap-8 md:gap-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.05, duration: 0.7, ease: EASE_PREMIUM }}
            className="relative flex gap-6 md:gap-10 md:pl-20"
          >
            <motion.div className="absolute left-0 top-1 hidden h-4 w-4 rounded-full border-2 border-accent bg-background-dark md:left-6 md:block">
              <motion.div className="absolute inset-1 rounded-full bg-accent" />
            </motion.div>
            <span className="font-heading text-3xl font-bold text-accent/30 md:text-4xl">
              0{index + 1}
            </span>
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h4 className="font-heading text-xl font-semibold text-white">{step.title}</h4>
              <p className="mt-2 text-white/55">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
