"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal, FloatLayer } from "@/animations/wrappers";
import { EASE_PREMIUM } from "@/lib/utils";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={containerRef}
      className="noise-overlay relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-background pt-24"
    >
      {/* Animated gradient glow */}
      <motion.div
        style={{ scale: glowScale }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[min(70vw,720px)] w-[min(70vw,720px)] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full rounded-full bg-[#FF3400]/25 blur-[100px]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-[#FF3400]/30 via-transparent to-[#FF3400]/10 blur-[60px]"
        />
      </motion.div>

      {/* Intro text left */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-8 md:left-16 top-1/3 max-w-[200px] hidden lg:block z-20"
      >
        <p className="text-sm font-medium text-foreground/70 leading-relaxed uppercase tracking-widest">
          Web Designer
        </p>
        <div className="w-12 h-[1px] bg-[#FF3400] mt-4" />
      </motion.div>

      {/* Intro text right */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-8 md:right-16 top-2/3 max-w-[200px] hidden lg:block text-right z-20"
      >
        <p className="text-sm font-medium text-foreground/70 leading-relaxed uppercase tracking-widest">
          UI/UX Designer
        </p>
        <div className="w-12 h-[1px] bg-[#FF3400] mt-4 ml-auto" />
      </motion.div>

      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="pointer-events-none absolute top-[42%] left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <h1
          aria-hidden
          className="text-display-xl whitespace-nowrap text-[clamp(4.5rem,18vw,16rem)] font-bold text-foreground/[0.04]"
        >
          ABHIJEET
        </h1>
      </motion.div>

      <motion.div
        style={{ y: yImage, scale: scaleImage }}
        className="relative z-10 flex w-full flex-col items-center justify-center px-4"
      >
        <FloatLayer duration={6} distance={10}>
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25, ease: EASE_PREMIUM }}
            className="relative aspect-[3/4] w-[min(72vw,420px)] overflow-hidden rounded-[2rem] border border-foreground/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-foreground/[0.06] via-foreground/[0.02] to-foreground/[0.08]"
              animate={{ opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -inset-1 rounded-[2rem] opacity-0"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,52,0,0.4), transparent 50%, rgba(255,52,0,0.2))",
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-end justify-center pb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: EASE_PREMIUM }}
            >
              <span className="font-heading text-sm font-semibold tracking-tight text-foreground/40">
                Portrait
              </span>
            </motion.div>
          </motion.div>
        </FloatLayer>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease: EASE_PREMIUM }}
          className="relative z-20 mt-10 max-w-2xl text-center md:mt-12"
        >
          <h2 className="text-display-lg mb-4 text-2xl font-bold tracking-tighter md:text-3xl">
            <TextReveal delay={0.9}>Web & UI/UX</TextReveal>{" "}
            <TextReveal delay={1}>Designer</TextReveal>
          </h2>
          <p className="text-body-editorial mx-auto max-w-xl text-base md:text-lg">
            Talented and driven Web & UI/UX Designer with 4+ years of professional experience crafting visually engaging, user-focused websites and web applications.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-label text-foreground/40">Scroll</span>
        <motion.div
          className="relative h-14 w-px overflow-hidden bg-foreground/15"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
            className="absolute inset-0 bg-accent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
