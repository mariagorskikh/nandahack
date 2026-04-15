"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TRACKS } from "@/lib/constants";

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="relative z-10 py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-white/10"
    >
      <SectionHeading
        title="Tracks"
        subtitle="Choose the path that fits how you want to build."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {TRACKS.map((track, index) => (
          <motion.div
            key={track.name}
            className="rounded-lg border border-white/10 bg-white/[0.02] p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-md">
                <span className="text-amber-400 text-xs font-mono uppercase tracking-wider">
                  Track {index + 1}
                </span>
              </div>
            </div>

            <h3 className="mb-3 text-2xl font-medium text-white sm:text-3xl">
              {track.name}
            </h3>
            <p className="mb-6 text-base leading-relaxed text-white/60">
              {track.description}
            </p>

            <ul className="space-y-3">
              {track.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="text-amber-500/60 mt-0.5 flex-shrink-0 font-mono text-sm">
                    +
                  </span>
                  <span className="text-sm text-white/72">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
