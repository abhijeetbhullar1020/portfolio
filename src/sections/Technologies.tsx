"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/animations/wrappers";
import TechIcon from "@/components/TechIcon";
import { EASE_PREMIUM } from "@/lib/utils";

const technologies = [
  "Figma",
  "HTML/CSS",
  "Bootstrap",
  "Photoshop",
  "Wordpress",
  "Webflow",
  "Hubspot",
  "Kajabi",
  "Shopify",
  "Wix Studio",
  "React Js",
  "GSAP",
];

export default function Technologies() {
  return (
    <section className="noise-overlay relative w-full overflow-hidden bg-background-dark py-28 text-white md:py-40">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <FadeUp>
          <p className="text-label mb-4 text-center text-accent">Stack</p>
          <h2 className="text-display-lg mb-20 text-center text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase">
            Technologies I Work With<span className="text-accent">.</span>
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5">
          {technologies.map((tech) => (
            <StaggerItem key={tech}>
              <motion.div
                whileHover={{ scale: 1.06, y: -6 }}
                transition={{ duration: 0.45, ease: EASE_PREMIUM }}
                className="group relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl p-6 glass-dark"
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(255,52,0,0.4), 0 0 40px rgba(255,52,0,0.15)",
                  }}
                />
                <TechIcon name={tech} />
                <span className="relative z-10 text-center text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                  {tech}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
