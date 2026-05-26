"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { ProjectMetric } from "@/data/projects";
import { EASE_PREMIUM } from "@/lib/utils";

function parseMetricValue(value: string): number {
  const n = parseFloat(value);
  return Number.isNaN(n) ? 0 : n;
}

function AnimatedMetric({ metric, index }: { metric: ProjectMetric; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const target = parseMetricValue(metric.value);
  const [display, setDisplay] = useState(0);
  const isNegative = metric.value.startsWith("-");

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(target * eased * 10) / 10);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  const formatted =
    metric.suffix === "★" || metric.suffix === "AA"
      ? metric.value + (metric.suffix ?? "")
      : `${isNegative ? "-" : ""}${Math.abs(display)}${metric.suffix ?? ""}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: EASE_PREMIUM }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-md"
    >
      <p className="font-heading text-4xl font-bold text-accent md:text-5xl">{formatted}</p>
      <p className="text-label mt-3 text-white/45">{metric.label}</p>
    </motion.div>
  );
}

export default function AnimatedCounter({ metrics }: { metrics: ProjectMetric[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {metrics.map((metric, i) => (
        <AnimatedMetric key={metric.label} metric={metric} index={i} />
      ))}
    </div>
  );
}
