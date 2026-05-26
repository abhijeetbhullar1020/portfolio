"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Globe } from "lucide-react";
import Link from "next/link";
import { EASE_PREMIUM } from "@/lib/utils";
import { contactInfo } from "@/lib/contact-data";

const footerLinks = [
  { name: "Work", href: "/portfolio" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/5 bg-background-dark py-14 text-white md:py-16">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[200px] w-[600px] -translate-x-1/2 rounded-[100%] bg-accent/8 blur-[100px]" />

      <motion.div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="font-heading text-2xl font-bold tracking-tight"
            >
              ABHIJEET<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-white/45">
              High-end UI/UX design & frontend development with cinematic motion.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6 md:gap-8">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              {contactInfo.email}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/35">© {currentYear} Abhijeet. All rights reserved.</p>
          <motion.div className="flex items-center gap-5">
            <motion.a
              href={`mailto:${contactInfo.email}`}
              whileHover={{ y: -2 }}
              transition={{ ease: EASE_PREMIUM }}
              className="text-white/40 transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ y: -2 }}
              transition={{ ease: EASE_PREMIUM }}
              className="text-white/40 transition-colors hover:text-accent"
              aria-label="Contact page"
            >
              <Globe className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
