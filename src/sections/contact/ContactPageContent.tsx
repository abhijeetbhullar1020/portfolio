"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem, TextReveal } from "@/animations/wrappers";
import ContactCard from "@/components/contact/ContactCard";
import SocialCard from "@/components/contact/SocialCard";
import ContactForm from "@/components/contact/ContactForm";
import FAQAccordion from "@/components/contact/FAQAccordion";
import CTASection from "@/components/CTASection";
import Footer from "@/sections/Footer";
import { contactInfo, contactFaqs, socialLinks } from "@/lib/contact-data";
import { EASE_PREMIUM } from "@/lib/utils";

export default function ContactPageContent() {
  const infoCards = [
    { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: contactInfo.location },
    { icon: Sparkles, label: "Availability", value: contactInfo.availability },
    { icon: Clock, label: "Working Hours", value: contactInfo.hours },
  ];

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-white">
      {/* Hero */}
      <section className="noise-overlay relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40">
        <motion.div
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[140px]"
          />
        </motion.div>

        <motion.div className="relative z-10 mx-auto max-w-[1000px] px-6 text-center md:px-12">
          <FadeUp>
            <p className="text-label mb-6 text-accent">Contact</p>
          </FadeUp>
          <h1 className="text-display-xl text-[clamp(2.75rem,8vw,6rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em]">
            <TextReveal>Let&apos;s Create</TextReveal>
            <br />
            <TextReveal delay={0.1}>Something</TextReveal>{" "}
            <span className="text-accent">
              <TextReveal delay={0.2}>Meaningful</TextReveal>
            </span>
          </h1>
          <FadeUp delay={0.3}>
            <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-white/55 md:text-xl">
              Available for freelance projects, collaborations, and premium digital experiences.
            </p>
          </FadeUp>
        </motion.div>
      </section>

      {/* Contact info */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <FadeUp>
            <p className="text-label mb-4 text-accent">Reach out</p>
            <h2 className="text-display-lg mb-14 text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase">
              Contact Details<span className="text-accent">.</span>
            </h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {infoCards.map((card) => (
              <StaggerItem key={card.label}>
                <ContactCard {...card} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Social */}
      <section className="relative border-t border-white/5 py-20 md:py-28">
        <motion.div
          className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-accent/8 blur-[120px]"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
          <FadeUp>
            <p className="text-label mb-4 text-accent">Connect</p>
            <h2 className="text-display-lg mb-4 text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase">
              Social Presence<span className="text-accent">.</span>
            </h2>
            <p className="text-body-editorial mb-14 max-w-lg text-white/50">
              Follow along for design insights, work-in-progress, and creative experiments.
            </p>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((social) => (
              <StaggerItem key={social.name}>
                <SocialCard {...social} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Form */}
      <section className="relative border-t border-white/5 py-20 md:py-28">
        <motion.div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <motion.div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
            <motion.div className="lg:col-span-5">
              <FadeUp>
                <p className="text-label mb-4 text-accent">Inquiry</p>
                <h2 className="text-display-lg text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase leading-[0.95]">
                  Tell Me About
                  <br />
                  Your Project<span className="text-accent">.</span>
                </h2>
                <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/50">
                  Share your goals, timeline, and vision. I&apos;ll respond with thoughtful next
                  steps within 24–48 hours.
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <motion.ul className="mt-10 space-y-4">
                  {["Premium UI & motion", "End-to-end delivery", "Global collaboration"].map(
                    (item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, ease: EASE_PREMIUM }}
                        className="flex items-center gap-3 text-white/60"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </motion.li>
                    )
                  )}
                </motion.ul>
              </FadeUp>
            </motion.div>
            <motion.div className="lg:col-span-7">
              <ContactForm />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="relative border-t border-white/5 bg-background py-20 text-foreground md:py-28">
        <div className="mx-auto max-w-[800px] px-6 md:px-12">
          <FadeUp>
            <p className="text-label mb-4 text-center text-accent">FAQ</p>
            <h2 className="text-display-lg mb-14 text-center text-[clamp(2rem,4vw,3rem)] font-bold uppercase">
              Common Questions<span className="text-accent">.</span>
            </h2>
          </FadeUp>
          <FAQAccordion items={contactFaqs} dark={false} />
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        dark
        label="Ready when you are"
        heading="Your Vision Deserves a"
        headingAccent="Premium Digital Experience"
        subheading="Let's turn ambitious ideas into cinematic, high-performance products that users remember."
        primaryCta={{ label: "Start a Project", href: "mailto:hello@abhijeet.dev" }}
        secondaryCta={{ label: "Schedule a Call", href: `tel:${contactInfo.phone.replace(/\s/g, "")}` }}
        className="border-t border-white/5"
      />
      <Footer />
    </main>
  );
}
