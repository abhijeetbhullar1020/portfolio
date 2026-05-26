"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { EASE_PREMIUM } from "@/lib/utils";

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export default function ContactCard({ icon: Icon, label, value, href }: ContactCardProps) {
  const content = (
    <GlassCard className="group h-full p-6 md:p-7">
      <motion.div
        whileHover={{ rotate: 8, scale: 1.05 }}
        transition={{ ease: EASE_PREMIUM }}
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-accent/10 text-accent"
      >
        <Icon className="h-5 w-5" />
      </motion.div>
      <p className="text-label mb-2 text-white/45">{label}</p>
      <p className="font-heading text-lg font-semibold tracking-tight text-white md:text-xl">
        {value}
      </p>
    </GlassCard>
  );

  if (href) {
    return (
      <a href={href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl">
        {content}
      </a>
    );
  }

  return content;
}
