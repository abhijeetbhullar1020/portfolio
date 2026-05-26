"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeUp } from "@/animations/wrappers";

const processes = [
  {
    title: "Research & Discovery",
    description:
      "Deep dive into user needs, market analysis, and business goals to set a solid foundation.",
  },
  {
    title: "Wireframing & UX",
    description:
      "Mapping user flows and creating low-fidelity wireframes to iterate on functionality.",
  },
  {
    title: "Design System",
    description:
      "Establishing a robust, scalable design system with consistent typography, colors, and components.",
  },
  {
    title: "Prototyping",
    description:
      "Bringing static designs to life with high-fidelity, interactive prototypes to validate interactions.",
  },
  {
    title: "Development",
    description:
      "Translating designs into clean, scalable, high-performance code using modern frameworks.",
  },
  {
    title: "Launch & QA",
    description:
      "Rigorous testing across devices followed by a smooth deployment to production.",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative w-full bg-background py-28 md:py-40">
      <motion.div className="mx-auto max-w-[1000px] px-6 md:px-12">
        <FadeUp>
          <p className="text-label mb-4 text-center text-accent">Process</p>
          <h2 className="text-display-lg mb-6 text-center text-[clamp(2.5rem,5vw,4rem)] font-bold uppercase">
            The Process<span className="text-accent">.</span>
          </h2>
          <p className="text-body-editorial mx-auto mb-20 max-w-xl text-center">
            A systematic approach to creating digital products that balance aesthetic beauty with
            functional excellence.
          </p>
        </FadeUp>

        <div ref={containerRef} className="relative">
          <div className="absolute top-0 bottom-0 left-4 hidden w-0.5 -translate-x-1/2 bg-foreground/10 md:left-1/2 md:block" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute top-0 bottom-0 left-4 hidden w-0.5 -translate-x-1/2 bg-accent md:left-1/2 md:block"
          />

          <div className="flex flex-col gap-12 md:gap-20">
            {processes.map((process, index) => {
              const isEven = index % 2 === 0;
              return (
                <FadeUp key={index} delay={0.05}>
                  <motion.div
                    className={`relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="hidden w-5/12 md:block" />
                    <div className="absolute top-0 left-0 z-10 hidden h-8 w-8 items-center justify-center rounded-full border-2 border-foreground/15 bg-background md:top-1/2 md:left-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2">
                      <motion.div className="h-2.5 w-2.5 rounded-full bg-accent" />
                    </div>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="w-full rounded-3xl border border-foreground/[0.06] bg-background-elevated p-8 transition-colors hover:border-accent/25 md:w-5/12"
                    >
                      <p className="mb-4 font-heading text-5xl font-bold text-accent/25">
                        0{index + 1}
                      </p>
                      <h3 className="mb-4 font-heading text-2xl font-semibold tracking-tight">
                        {process.title}
                      </h3>
                      <p className="text-body-editorial">{process.description}</p>
                    </motion.div>
                  </motion.div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
