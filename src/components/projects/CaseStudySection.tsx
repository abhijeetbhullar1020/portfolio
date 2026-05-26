"use client";

import { ReactNode } from "react";
import { FadeUp } from "@/animations/wrappers";
import SectionHeading from "./SectionHeading";

interface CaseStudySectionProps {
  label?: string;
  title: string;
  accent?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
  id?: string;
}

export default function CaseStudySection({
  label,
  title,
  accent = ".",
  children,
  dark = true,
  className = "",
  id,
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 ${dark ? "text-white" : "text-foreground bg-background"} ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <SectionHeading label={label} title={title} accent={accent} dark={dark} />
        <FadeUp delay={0.15} className="mt-12 md:mt-16">
          {children}
        </FadeUp>
      </div>
    </section>
  );
}
