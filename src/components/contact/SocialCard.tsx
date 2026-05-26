"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { EASE_PREMIUM } from "@/lib/utils";

interface SocialCardProps {
  name: string;
  handle: string;
  href: string;
  label: string;
}

function BrandMark({ name }: { name: string }) {
  const letter = name.charAt(0);
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-heading text-sm font-bold text-accent">
      {letter}
    </span>
  );
}

export default function SocialCard({ name, handle, href, label }: SocialCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl"
      aria-label={`${name} profile`}
    >
      <GlassCard className="h-full p-6">
        <div className="flex items-start justify-between gap-4">
          <motion.div
            whileHover={{ rotate: 12, scale: 1.08 }}
            transition={{ ease: EASE_PREMIUM }}
          >
            <BrandMark name={name} />
          </motion.div>
          <motion.span
            className="text-white/30 transition-colors group-hover:text-accent"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↗
          </motion.span>
        </div>
        <p className="mt-5 font-heading text-xl font-semibold tracking-tight text-white">
          {name}
        </p>
        <p className="mt-1 text-sm text-accent">{handle}</p>
        <p className="mt-3 text-sm text-white/45">{label}</p>
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at 50% 100%, rgba(255,52,0,0.12), transparent 60%)",
          }}
        />
      </GlassCard>
    </a>
  );
}
