"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { FadeUp } from "@/animations/wrappers";
import { budgetOptions, serviceOptions } from "@/lib/contact-data";
import { cn, EASE_PREMIUM } from "@/lib/utils";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  serviceType: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget range"),
  details: z.string().min(20, "Please share more project details"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function FloatingField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex flex-col gap-1.5">
      <label htmlFor={id} className="text-label text-white/50">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-red-400"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass = (hasError: boolean) =>
  cn(
    "w-full rounded-2xl border bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-white/25 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25",
    hasError ? "border-red-500/60" : "border-white/10"
  );

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (_data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 6000);
  };

  return (
    <FadeUp delay={0.15}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md md:p-10">
        <motion.div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/15 blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: EASE_PREMIUM }}
              className="relative z-10 flex min-h-[420px] flex-col items-center justify-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <CheckCircle2 className="mb-6 h-16 w-16 text-accent" />
              </motion.div>
              <h3 className="font-heading text-3xl font-bold text-white">Message Sent</h3>
              <p className="mt-3 max-w-sm text-white/55">
                Thank you for reaching out. I&apos;ll get back to you within 24–48 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="relative z-10 flex flex-col gap-5"
            >
              <div className="mb-2">
                <h3 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Start a Project
                </h3>
                <p className="mt-2 text-white/50">
                  Tell me about your vision and I&apos;ll craft a premium digital experience.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <FloatingField id="fullName" label="Full Name" error={errors.fullName?.message}>
                  <input
                    id="fullName"
                    {...register("fullName")}
                    placeholder="Your name"
                    className={inputClass(!!errors.fullName)}
                  />
                </FloatingField>
                <FloatingField id="email" label="Email Address" error={errors.email?.message}>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="you@company.com"
                    className={inputClass(!!errors.email)}
                  />
                </FloatingField>
              </div>

              <FloatingField id="company" label="Company Name" error={errors.company?.message}>
                <input
                  id="company"
                  {...register("company")}
                  placeholder="Optional"
                  className={inputClass(!!errors.company)}
                />
              </FloatingField>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <FloatingField
                  id="serviceType"
                  label="Service Type"
                  error={errors.serviceType?.message}
                >
                  <select
                    id="serviceType"
                    {...register("serviceType")}
                    defaultValue=""
                    className={cn(inputClass(!!errors.serviceType), "appearance-none")}
                  >
                    <option value="" disabled className="bg-[#0a0a0a]">
                      Select service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-[#0a0a0a]">
                        {s}
                      </option>
                    ))}
                  </select>
                </FloatingField>
                <FloatingField id="budget" label="Budget Range" error={errors.budget?.message}>
                  <select
                    id="budget"
                    {...register("budget")}
                    defaultValue=""
                    className={cn(inputClass(!!errors.budget), "appearance-none")}
                  >
                    <option value="" disabled className="bg-[#0a0a0a]">
                      Select budget
                    </option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b} className="bg-[#0a0a0a]">
                        {b}
                      </option>
                    ))}
                  </select>
                </FloatingField>
              </div>

              <FloatingField
                id="details"
                label="Project Details"
                error={errors.details?.message}
              >
                <textarea
                  id="details"
                  rows={5}
                  {...register("details")}
                  placeholder="Goals, timeline, inspiration..."
                  className={cn(inputClass(!!errors.details), "resize-none")}
                />
              </FloatingField>

              <AnimatedButton
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-2xl disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Inquiry <Send className="h-4 w-4" />
                  </>
                )}
              </AnimatedButton>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}
