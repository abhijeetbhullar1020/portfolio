"use client";

import { motion } from "framer-motion";
import type { FilterTab } from "@/data/projects";
import { filterTabs } from "@/data/projects";
import { cn, EASE_PREMIUM } from "@/lib/utils";

interface ProjectFiltersProps {
  active: FilterTab;
  onChange: (tab: FilterTab) => void;
}

export default function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE_PREMIUM }}
      className="flex flex-wrap justify-center gap-2 md:gap-3"
      role="tablist"
      aria-label="Filter projects"
    >
      {filterTabs.map((tab) => {
        const isActive = active === tab;
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors md:px-5 md:py-2.5",
              isActive ? "text-white" : "text-white/50 hover:text-white/80"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="portfolio-filter"
                className="absolute inset-0 rounded-full border border-accent/40 bg-accent/20 shadow-[0_0_24px_rgba(255,52,0,0.25)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </motion.div>
  );
}
