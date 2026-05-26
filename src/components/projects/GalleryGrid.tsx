"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";
import { StaggerContainer, StaggerItem } from "@/animations/wrappers";
import { EASE_PREMIUM } from "@/lib/utils";

interface GalleryGridProps {
  project: Project;
}

const aspectClass = {
  landscape: "md:col-span-2 aspect-[16/10]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export default function GalleryGrid({
  project,
}: GalleryGridProps) {
  const [active, setActive] = useState<string | null>(null);

  const activeItem = project.gallery.find(
    (g) => g.id === active
  );

  return (
    <>
      <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {project.gallery.map((item, i) => (
          <StaggerItem
            key={item.id}
            className={aspectClass[item.aspect]}
          >
            <motion.button
              type="button"
              onClick={() => setActive(item.id)}
              whileHover={{ scale: 1.02 }}
              transition={{ ease: EASE_PREMIUM }}
              className={`group relative w-full overflow-hidden rounded-2xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${aspectClass[item.aspect]}`}
            >
              {/* IMAGE */}
              <div className="relative h-full w-full">
                <Image
                  src={`/projects/${project.slug}/${item.id}.jpg`}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Number */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-heading text-sm text-white/50">
                  0{i + 1}
                </span>
              </div>

              {/* Hover Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 z-10">
                <span className="rounded-full bg-accent/90 px-4 py-2 text-xs font-medium text-white">
                  View
                </span>
              </div>

              {/* Label */}
              <p className="absolute bottom-4 left-4 z-10 text-sm font-medium text-white/80">
                {item.label}
              </p>
            </motion.button>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* MODAL */}
      <AnimatePresence>
        {active && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            {/* Close Button */}
            <motion.button
              type="button"
              aria-label="Close preview"
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white z-50"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </motion.button>

            {/* Modal Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ ease: EASE_PREMIUM }}
              className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={`/projects/${project.slug}/${activeItem.id}.jpg`}
                  alt={activeItem.label}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}