"use client";

import { FadeUp } from "@/animations/wrappers";

interface SectionHeadingProps {
  label?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  accent,
  description,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <FadeUp className={className}>
      {label && <p className="text-label mb-4 text-accent">{label}</p>}
      <h2
        className={`text-display-lg text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] ${alignClass} ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
        {accent && <span className="text-accent">{accent}</span>}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-xl text-lg font-light leading-relaxed ${alignClass} ${
            dark ? "text-white/55" : "text-body-editorial"
          }`}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
