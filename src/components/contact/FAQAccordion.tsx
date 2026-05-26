"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "@/animations/wrappers";
import { EASE_PREMIUM } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: readonly FAQItem[];
  dark?: boolean;
  defaultOpen?: number;
}

export default function FAQAccordion({
  items,
  dark = false,
  defaultOpen = 0,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <motion.div className="flex flex-col gap-3">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <FadeUp key={faq.question} delay={index * 0.06}>
            <motion.div
              className={
                dark
                  ? "overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-accent/25"
                  : "overflow-hidden rounded-2xl border border-foreground/[0.08] bg-background-elevated transition-colors hover:border-accent/20"
              }
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:p-7"
                aria-expanded={isOpen}
              >
                <span
                  className={`pr-6 font-heading text-lg font-semibold tracking-tight md:text-xl ${
                    dark ? "text-white" : "text-foreground"
                  }`}
                >
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    dark ? "bg-white/5 text-white/60" : "bg-foreground/[0.04] text-foreground/60"
                  }`}
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE_PREMIUM }}
                  >
                    <p
                      className={`px-6 pb-6 font-light leading-relaxed md:px-7 md:pb-7 ${
                        dark ? "text-white/60" : "text-body-editorial"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </FadeUp>
        );
      })}
    </motion.div>
  );
}
