"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/animations/wrappers";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your typical design process?",
    answer: "My process starts with deep research and understanding your business goals. I then move to wireframing and prototyping to validate concepts before crafting the final high-fidelity designs and developing the frontend."
  },
  {
    question: "Do you only do design, or also development?",
    answer: "I am a hybrid designer and developer. I handle the entire product lifecycle from the initial UI/UX design in Figma to the final frontend implementation using Next.js, React, and Framer Motion."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary depending on project scope. A standard landing page might take 2-3 weeks, while a comprehensive web application could take 2-3 months from design to deployment."
  },
  {
    question: "What technologies do you prefer?",
    answer: "For design, I rely on Figma. For development, my stack of choice is Next.js, React, TypeScript, Tailwind CSS, and Framer Motion for premium animations."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-32 bg-background" id="faq">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tighter">
              Questions<span className="text-[#FF3400]">.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="border border-foreground/10 rounded-2xl overflow-hidden bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors">
                  <button 
                    onClick={() => toggleOpen(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <span className="font-heading font-semibold text-lg md:text-xl pr-8">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-foreground/5 text-foreground/70"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 md:px-8 pb-8 text-foreground/60 font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
