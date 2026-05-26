"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, FloatLayer } from "@/animations/wrappers";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { EASE_PREMIUM } from "@/lib/utils";

interface CTASectionProps {
  id?: string;
  label?: string;
  heading: string;
  headingAccent?: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  className?: string;
}

export default function CTASection({
  id = "cta",
  label = "Collaborate",
  heading,
  headingAccent,
  subheading,
  primaryCta,
  secondaryCta,
  dark = false,
  className = "",
}: CTASectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yGlow = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id={id}
      ref={ref}
      className={`noise-overlay relative w-full overflow-hidden py-28 md:py-40 lg:py-52 ${
        dark ? "bg-background-dark text-white" : "bg-background text-foreground"
      } ${className}`}
    >
      <motion.div
        style={{ y: yGlow }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[min(80vw,700px)] w-[min(80vw,700px)] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full rounded-full bg-accent/25 blur-[120px]"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <FloatLayer duration={7} distance={16}>
          <div className="absolute top-[15%] left-[8%] h-24 w-24 rotate-12 rounded-2xl border border-accent/20 bg-accent/5" />
        </FloatLayer>
        <FloatLayer duration={9} distance={20}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute right-[5%] bottom-[20%] h-40 w-40 rounded-full border border-dashed border-white/10"
          />
        </FloatLayer>
        <motion.div
          className="absolute top-[25%] right-[15%] h-2 w-32 bg-accent/40 blur-sm"
          animate={{ opacity: [0.3, 0.8, 0.3], scaleX: [0.8, 1.2, 0.8] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center md:px-12">
        <FadeUp>
          <p className="text-label mb-6 text-accent">{label}</p>
          <h2
            className={`text-display-xl mx-auto max-w-5xl text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.05em] ${
              dark ? "text-white" : "text-foreground"
            }`}
          >
            {heading}
            {headingAccent && (
              <>
                <br />
                <span className="text-accent">{headingAccent}</span>
              </>
            )}
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p
            className={`mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed md:text-xl ${
              dark ? "text-white/55" : "text-body-editorial"
            }`}
          >
            {subheading}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <AnimatedButton href={primaryCta.href} variant="primary">
              {primaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </AnimatedButton>
            {secondaryCta && (
              <AnimatedButton
                href={secondaryCta.href}
                variant={dark ? "ghost" : "secondary"}
              >
                {secondaryCta.label}
              </AnimatedButton>
            )}
          </div>
        </FadeUp>

        {!dark && (
          <FadeUp delay={0.4}>
            <p className="mt-10 text-sm text-foreground/40">
              Or email directly at{" "}
              <Link
                href="mailto:hello@abhijeet.dev"
                className="border-b border-accent/40 text-foreground/70 transition-colors hover:text-accent"
              >
                hello@abhijeet.dev
              </Link>
            </p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
