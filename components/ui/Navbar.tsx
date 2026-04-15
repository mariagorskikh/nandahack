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
    <motion.nav className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 md:px-16 lg:px-24 pt-4 sm:pt-6" aria-label="Main navigation">
      <motion.div
        className="mx-auto flex items-center justify-between"
        animate={scrolled ? "scrolled" : "top"}
        initial="top"
        variants={{
          top: {
            backgroundColor: "rgba(255,255,255,0)",
            borderColor: "rgba(255,255,255,0)",
            borderRadius: "0px",
            padding: "0px",
            backdropFilter: "blur(0px)",
            maxWidth: "100%",
          },
          scrolled: {
            backgroundColor: "rgba(255,255,255,0.85)",
            borderColor: "rgba(79,110,247,0.12)",
            borderRadius: "12px",
            padding: "8px 20px",
            backdropFilter: "blur(20px)",
            maxWidth: "85%",
          },
        }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "transparent",
        }}
      >
        <a href="#" className="flex items-center group" aria-label="NandaHack home">
          <span className="text-brand-700 font-bold text-lg tracking-tight group-hover:text-brand-800 transition-colors">
            NandaHack
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-brand-600 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://forms.gle/HKCSitSChcFSqyzY8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-brand-600 to-blue-600 text-white rounded-lg text-sm font-semibold hover:from-brand-700 hover:to-blue-700 transition-all shadow-sm"
          >
            Apply to Attend
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-3 bg-white/80 backdrop-blur-xl rounded-md text-slate-600 hover:text-brand-600 transition-all border border-slate-200"
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
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div id="mobile-menu" role="menu" className="fixed top-20 right-4 left-4 sm:left-auto sm:right-4 bg-white/95 backdrop-blur-xl border border-brand-100 rounded-2xl p-6 z-50 md:hidden sm:min-w-[280px] shadow-2xl">
            <div className="space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 bg-slate-50 hover:bg-brand-50 border border-slate-200 hover:border-brand-200 rounded-xl text-slate-700 hover:text-brand-700 text-sm transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#submit"
                className="block px-4 py-3 bg-brand-50 hover:bg-brand-100 border border-brand-200 hover:border-brand-300 rounded-xl text-brand-700 hover:text-brand-800 text-sm font-medium transition-all"
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
