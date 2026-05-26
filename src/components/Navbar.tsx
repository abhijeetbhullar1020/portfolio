"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn, EASE_PREMIUM } from "@/lib/utils";

const homeLinks = [
  { name: "Work", href: "/portfolio" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 40);
  });

  useEffect(() => {
    if (!isHome) return;

    const sections = homeLinks.map((l) => l.href.split("#")[1]);
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  const isContactActive = pathname === "/contact";
  const isPortfolioActive = pathname.startsWith("/portfolio");

  const navClass = cn(
    "flex w-full max-w-2xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 md:px-6 md:py-3",
    isScrolled || !isHome
      ? "border border-foreground/[0.06] bg-background-elevated/80 shadow-[0_8px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-background-dark/80"
      : "bg-background-elevated/50 backdrop-blur-md dark:bg-background-dark/50"
  );

  const linkClass = (active: boolean) =>
    cn(
      "relative text-sm font-medium transition-colors duration-300",
      active
        ? "text-accent"
        : "text-foreground/70 hover:text-foreground dark:text-white/70 dark:hover:text-white"
    );

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-120%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: EASE_PREMIUM }}
        className="fixed top-0 right-0 left-0 z-40 flex justify-center px-4 pt-5 md:pt-6"
      >
        <motion.div layout className={navClass}>
          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-[-0.04em] md:text-xl dark:text-white"
          >
            ABHIJEET<span className="text-accent">.</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {homeLinks.map((link) => {
              const isHash = link.href.includes("#");
              const id = isHash ? link.href.split("#")[1] : "";
              const isActive =
                link.name === "Work"
                  ? isPortfolioActive
                  : isHome && isHash && activeSection === id;
              return (
                <li key={link.name}>
                  <Link href={link.href} className={linkClass(isActive)}>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent"
                        transition={{ ease: EASE_PREMIUM }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/contact" className={linkClass(isContactActive)}>
                Contact
                {isContactActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent"
                    transition={{ ease: EASE_PREMIUM }}
                  />
                )}
              </Link>
            </li>
          </ul>

          <Link
            href="/contact"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-white shadow-[0_4px_24px_rgba(255,52,0,0.35)] transition-all hover:bg-accent/90 hover:shadow-[0_8px_32px_rgba(255,52,0,0.45)] md:inline-flex"
          >
            Let&apos;s Talk
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-foreground dark:bg-white"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-foreground dark:bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-foreground dark:bg-white"
            />
          </button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ ease: EASE_PREMIUM }}
            className="fixed inset-x-4 top-20 z-30 rounded-3xl border border-foreground/[0.06] bg-background-elevated/95 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-background-dark/95 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {[...homeLinks, { name: "Contact", href: "/contact" }].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-2xl font-semibold tracking-tight dark:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex w-full items-center justify-center rounded-full bg-accent py-3 text-sm font-medium text-white"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
