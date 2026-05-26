"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeUp } from "@/animations/wrappers";
import { EASE_PREMIUM } from "@/lib/utils";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yGlow = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="noise-overlay relative w-full overflow-hidden bg-background py-28 md:py-40 lg:py-52"
    >
      <motion.div
        className="pointer-events-none absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]"
        style={{ y: yGlow }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: EASE_PREMIUM }}
      >
        <motion.div
          className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-10 lg:gap-14"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE_PREMIUM }}
        >
          <motion.div className="md:col-span-4 lg:pr-8">
            <FadeUp>
              <p className="text-label mb-6 text-accent">About</p>
              <h2 className="text-display-lg text-[clamp(2.5rem,6vw,5.5rem)] font-bold uppercase">
                Design
                <br />
                <span className="text-foreground/25">Meets</span>
                <br />
                Logic<span className="text-accent">.</span>
              </h2>
            </FadeUp>
          </motion.div>

          <motion.div className="group relative md:col-span-4">
            <motion.div
              style={{ y: yImage }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-foreground/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/[0.04] to-foreground/[0.1]" />
              <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-heading text-sm text-foreground/30">
                Editorial Portrait
              </span>
              <div className="absolute inset-0 bg-accent/0 transition-colors duration-700 group-hover:bg-accent/[0.06]" />
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col justify-center md:col-span-4 md:pl-4 lg:pl-10">
            <FadeUp delay={0.15}>
              <h3 className="text-label mb-8 text-accent">The Philosophy</h3>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p className="text-body-editorial mb-8 max-w-md text-lg md:text-xl">
                I believe exceptional digital experiences are born at the intersection of
                beautiful aesthetics and robust engineering. As a UI/UX Designer and Frontend
                Developer, I bridge design and development.
              </p>
            </FadeUp>
            <FadeUp delay={0.35}>
              <p className="text-body-editorial max-w-md text-lg md:text-xl">
                Every pixel and line of code is guided by one focus: intuitive,
                high-performance interfaces that tell a compelling story and leave a lasting
                impression.
              </p>
            </FadeUp>
            <FadeUp delay={0.45}>
              <div className="mt-12 flex gap-12 border-t border-foreground/10 pt-10">
                <motion.div whileHover={{ y: -4 }} transition={{ ease: EASE_PREMIUM }}>
                  <p className="text-display-lg text-4xl font-bold text-accent md:text-5xl">4+</p>
                  <p className="text-label mt-2 text-foreground/50">Years Experience</p>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} transition={{ ease: EASE_PREMIUM }}>
                  <p className="text-display-lg text-4xl font-bold text-accent md:text-5xl">40+</p>
                  <p className="text-label mt-2 text-foreground/50">Projects Delivered</p>
                </motion.div>
              </div>
            </FadeUp>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
