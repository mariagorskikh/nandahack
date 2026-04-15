"use client";

import { motion } from "motion/react";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { BUILDATHON_DATE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative z-10 border-b border-white/10 px-6 pb-12 pt-28 sm:px-10 sm:pb-16 sm:pt-36 md:px-16 lg:px-24">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          NandaHack: Agentic AI Hackathon
        </h1>

        <p className="mb-3 text-lg font-medium text-amber-400 sm:text-xl md:text-2xl">
          HCLTech and MIT Media Lab
        </p>

        <p className="mb-8 text-sm text-white/55 sm:mb-10 sm:text-base">
          Credit Sponsors: OpenAI Codex
        </p>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/72 sm:mb-12 sm:text-xl md:text-2xl">
          Build a system, tool, or layer that fixes a real bottleneck in how AI agents are deployed, coordinated, or scaled.
        </p>

        <p className="mb-8 text-sm font-mono text-white/45">March 27 &ndash; May 7, 2026</p>

        <div className="mb-10">
          <CountdownTimer
            targetDate={BUILDATHON_DATE}
            label="NandaHack: Agentic AI Hackathon"
          />
        </div>

        <div className="flex justify-center gap-8 sm:gap-12 mb-10">
          {[
            { value: "5", label: "Arenas" },
            { value: "2", label: "Tracks" },
            { value: "Apr 11", label: "Buildathon" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-semibold text-amber-400 sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-mono uppercase tracking-wider text-white/45">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

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
            className="inline-flex items-center justify-center rounded-md bg-amber-500 px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-amber-400 sm:px-10"
          >
            Apply to Attend
          </a>
          <a
            href="https://forms.gle/ziXo4WHMQei7B9rf9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/15 px-8 py-4 text-base font-medium text-white transition-colors hover:border-amber-500/40 hover:text-amber-400 sm:px-10"
          >
            Volunteer
          </a>
          <a
            href="#arenas"
            className="inline-flex items-center justify-center rounded-md border border-white/15 px-8 py-4 text-base font-medium text-white transition-colors hover:border-amber-500/40 hover:text-amber-400 sm:px-10"
          >
            Explore the Arenas
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
