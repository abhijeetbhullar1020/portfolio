const techIcons: Record<string, { label: string; color: string }> = {
  React: { label: "⚛", color: "#61DAFB" },
  "Next.js": { label: "N", color: "#ffffff" },
  "Tailwind CSS": { label: "T", color: "#38BDF8" },
  TypeScript: { label: "TS", color: "#3178C6" },
  "Framer Motion": { label: "FM", color: "#FF3400" },
  GSAP: { label: "G", color: "#88CE02" },
  "Node.js": { label: "N", color: "#68A063" },
  MongoDB: { label: "M", color: "#47A248" },
  Firebase: { label: "F", color: "#FFCA28" },
  Figma: { label: "Fi", color: "#F24E1E" },
};

export default function TechIcon({ name }: { name: string }) {
  const tech = techIcons[name] ?? { label: name[0], color: "#FF3400" };

  return (
    <span
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-heading text-xs font-bold"
      style={{ color: tech.color }}
    >
      {tech.label}
    </span>
  );
}
