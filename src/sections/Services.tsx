"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/animations/wrappers";
import { PenTool, Layout, Code, Smartphone, Zap, MonitorSmartphone } from "lucide-react";
import { EASE_PREMIUM } from "@/lib/utils";

const services = [
  {
    title: "UI Design",
    description:
      "Crafting beautiful, intuitive interfaces with a strong focus on aesthetics and user-centered design principles.",
    icon: Layout,
  },
  {
    title: "UX Research",
    description:
      "Understanding user behaviors and needs through deep research to create meaningful, impactful experiences.",
    icon: Smartphone,
  },
  {
    title: "Web Design",
    description:
      "Designing responsive, high-converting websites that perfectly balance form and function.",
    icon: MonitorSmartphone,
  },
  {
    title: "Frontend Development",
    description:
      "Building scalable, high-performance web applications using React, Next.js, and modern tooling.",
    icon: Code,
  },
  {
    title: "Interaction Design",
    description:
      "Adding life to interfaces through buttery smooth micro-interactions and cinematic motion design.",
    icon: Zap,
  },
  {
    title: "Branding",
    description:
      "Creating cohesive visual identities that tell your unique story and resonate with your audience.",
    icon: PenTool,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full bg-background-elevated py-28 md:py-40"
    >
      <motion.div
        className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[120px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <FadeUp>
          <p className="text-label mb-4 text-accent">Services</p>
          <h2 className="text-display-lg mb-20 text-[clamp(2.5rem,5vw,4.5rem)] font-bold uppercase">
            Expertise<span className="text-accent">.</span>
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: EASE_PREMIUM }}
                className="group relative h-full overflow-hidden rounded-[1.75rem] border border-foreground/[0.05] bg-background p-8 md:p-9"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <motion.div
                    className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-foreground/10 bg-background-elevated transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_28px_rgba(255,52,0,0.2)]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ ease: EASE_PREMIUM }}
                  >
                    <service.icon className="h-6 w-6 text-foreground/60 transition-colors duration-500 group-hover:text-accent" />
                  </motion.div>

                  <h3 className="mb-4 font-heading text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-body-editorial text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
