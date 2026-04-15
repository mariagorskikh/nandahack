"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/lib/constants";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative z-10 py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-white/10"
    >
      <SectionHeading
        title="Timeline"
        subtitle="Four clear dates from launch to awards."
      />

      <div className="max-w-3xl mx-auto space-y-8">
        {TIMELINE.map((phase, index) => (
          <motion.div
            key={phase.phase}
            className="relative border-l-2 border-amber-500/30 pl-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-500 rounded-full border-2 border-black" />

            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="text-amber-400 text-xs font-mono uppercase tracking-wider font-bold">
                  {phase.phase}
                </span>
                <span className="text-white/30 hidden sm:inline">|</span>
                <span className="text-white/50 text-sm font-mono">
                  {phase.dates}
                </span>
              </div>

              <h3 className="mb-4 text-xl font-medium text-white sm:text-2xl">
                {phase.title}
              </h3>

              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-amber-500/50 mt-0.5 flex-shrink-0 font-mono text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-white/62">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
