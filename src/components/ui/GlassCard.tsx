"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn, EASE_PREMIUM } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  dark = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.45, ease: EASE_PREMIUM }}
      className={cn(
        "relative overflow-hidden rounded-2xl border backdrop-blur-md transition-colors",
        dark
          ? "border-white/10 bg-white/[0.04] hover:border-accent/30 hover:shadow-[0_0_40px_rgba(255,52,0,0.12)]"
          : "border-foreground/[0.08] bg-background-elevated hover:border-accent/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
