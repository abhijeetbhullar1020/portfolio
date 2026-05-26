"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/animations/wrappers";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechNova",
    text: "Abhijeet completely transformed our platform. The attention to detail and smooth animations brought our product to life in ways we didn't think possible.",
    initials: "SJ",
  },
  {
    name: "Marcus Cole",
    role: "Design Director, Lumina",
    text: "Working with Abhijeet was a masterclass in UI engineering. His ability to translate complex designs into butter-smooth frontend code is unmatched.",
    initials: "MC",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Articulate",
    text: "The Apple-level quality and cinematic feel he brought to our marketing site increased our conversions by 40%. A true professional.",
    initials: "ER",
  },
  {
    name: "David Chen",
    role: "Product Lead, StreamOS",
    text: "A rare hybrid of a talented designer and a brilliant frontend developer. Abhijeet understands how to build products that users love.",
    initials: "DC",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-background-dark py-28 text-white md:py-36">
      <div className="relative z-10 mx-auto mb-16 max-w-[1400px] px-6 md:mb-20 md:px-12">
        <FadeUp>
          <p className="text-label mb-4 text-center text-accent">Testimonials</p>
          <h2 className="text-display-lg text-center text-[clamp(2.5rem,5vw,4rem)] font-bold uppercase">
            Client Feedback<span className="text-accent">.</span>
          </h2>
        </FadeUp>
      </div>

      <div className="group relative flex w-full overflow-x-hidden">
        <motion.div
          className="flex gap-6 px-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="relative w-[340px] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-colors hover:border-accent/30 md:w-[420px]"
            >
              <Quote className="absolute top-8 right-8 h-10 w-10 text-accent opacity-10" />
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 font-heading text-sm font-bold text-accent">
                  {testimonial.initials}
                </span>
                <div>
                  <h4 className="font-heading text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
              <p className="font-light leading-relaxed whitespace-normal text-white/75">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
