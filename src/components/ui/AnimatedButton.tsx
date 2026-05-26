"use client";

import Link from "next/link";
import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn, EASE_PREMIUM } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_8px_32px_rgba(255,52,0,0.35)] hover:shadow-[0_12px_40px_rgba(255,52,0,0.5)]",
  secondary:
    "border border-foreground/15 bg-transparent text-foreground hover:border-accent hover:text-accent",
  ghost:
    "border border-white/15 bg-white/5 text-white hover:border-accent hover:bg-accent/10",
};

function MagneticWrapper({
  children,
  className,
  disabled,
}: {
  children: ReactNode;
  className: string;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.12);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.12);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ ease: EASE_PREMIUM }}
      className={cn("inline-flex", disabled && "pointer-events-none opacity-70")}
    >
      {children}
    </motion.div>
  );
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  disabled,
}: AnimatedButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-shadow md:px-8 md:py-4 md:text-base",
    variants[variant],
    className
  );

  if (href) {
    return (
      <MagneticWrapper className={styles} disabled={disabled}>
        <Link href={href} className={styles}>
          {children}
        </Link>
      </MagneticWrapper>
    );
  }

  return (
    <MagneticWrapper className={styles} disabled={disabled}>
      <button type={type} onClick={onClick} disabled={disabled} className={styles}>
        {children}
      </button>
    </MagneticWrapper>
  );
}
