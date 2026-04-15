"use client";

import { motion } from "motion/react";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { BUILDATHON_DATE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative z-10 pt-28 sm:pt-36 px-6 sm:px-10 md:px-16 lg:px-24 pb-12 sm:pb-20 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-4 sm:mb-6 text-slate-900">
          NandaHack: Agentic AI Hackathon
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 mb-3 sm:mb-4">
          HCLTech and MIT Media Lab
        </p>

        <p className="text-sm sm:text-base md:text-lg text-slate-500 mb-8 sm:mb-10">
          Credit Sponsors: OpenAI Codex
        </p>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 sm:mb-12 max-w-3xl mx-auto">
          Build a system, tool, or layer that fixes a real bottleneck in how AI agents are deployed, coordinated, or scaled.
        </p>

        <p className="text-slate-500 text-sm font-mono mb-8">March 27 &ndash; May 7, 2026</p>

        {/* Countdown */}
        <div className="mb-10">
          <CountdownTimer
            targetDate={BUILDATHON_DATE}
            label="NandaHack: Agentic AI Hackathon"
          />
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 sm:gap-12 mb-10">
          {[
            { value: "5", label: "Arenas" },
            { value: "2", label: "Tracks" },
            { value: "Apr 11", label: "Buildathon" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-brand-600">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://forms.gle/HKCSitSChcFSqyzY8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-brand-600 to-blue-600 text-white text-lg sm:text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30"
          >
            Apply to Attend
          </a>
          <a
            href="https://forms.gle/ziXo4WHMQei7B9rf9"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white border-2 border-brand-200 hover:border-brand-400 rounded-xl text-brand-700 hover:text-brand-800 text-lg sm:text-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Volunteer
          </a>
          <a
            href="#arenas"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white border-2 border-brand-200 hover:border-brand-400 rounded-xl text-brand-700 hover:text-brand-800 text-lg sm:text-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore the Arenas
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
