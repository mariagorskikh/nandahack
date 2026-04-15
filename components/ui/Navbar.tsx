"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav className="fixed left-0 right-0 top-0 z-50 px-5 pt-4 sm:px-8 md:px-12 lg:px-16" aria-label="Main navigation">
      <motion.div
        className="mx-auto flex max-w-6xl items-center justify-between"
        animate={scrolled ? "scrolled" : "top"}
        initial="top"
        variants={{
          top: {
            backgroundColor: "rgba(10,10,10,0.72)",
            borderColor: "rgba(255,255,255,0.08)",
            borderRadius: "14px",
            padding: "12px 16px",
          },
          scrolled: {
            backgroundColor: "rgba(10,10,10,0.92)",
            borderColor: "rgba(245,158,11,0.2)",
            borderRadius: "14px",
            padding: "10px 16px",
          },
        }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          backdropFilter: "blur(12px)",
        }}
      >
        <a href="#" className="flex items-center group" aria-label="NandaHack home">
          <span className="text-base font-semibold tracking-tight text-white transition-colors group-hover:text-amber-400 sm:text-lg">
            NandaHack
          </span>
        </a>

        <div className="hidden items-center space-x-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://forms.gle/HKCSitSChcFSqyzY8"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-amber-400"
          >
            Apply to Attend
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md border border-white/10 bg-white/5 p-2.5 text-white/80 transition-colors hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </motion.div>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div id="mobile-menu" role="menu" className="fixed left-4 right-4 top-20 z-50 rounded-2xl border border-white/10 bg-zinc-950 p-5 md:hidden sm:left-auto sm:right-4 sm:min-w-[280px]">
            <div className="space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl border border-white/10 px-4 py-3 text-sm text-white/80 transition-colors hover:border-amber-500/30 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://forms.gle/HKCSitSChcFSqyzY8"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-amber-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply to Attend
              </a>
            </div>
          </div>
        </>
      )}
    </motion.nav>
  );
}
