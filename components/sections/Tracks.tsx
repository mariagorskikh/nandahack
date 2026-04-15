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
        subtitle="Choose a track that fits your approach. All agents deployed on NEST."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {TRACKS.map((track, index) => (
          <motion.div
            key={track.name}
            className="p-6 sm:p-8 bg-white/[0.02] border border-white/[0.12] rounded-lg hover:border-amber-500/30 transition-all duration-300"
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

            <h3 className="text-2xl sm:text-3xl font-light text-white/90 mb-3">
              {track.name}
            </h3>
            <p className="text-white/55 text-base leading-relaxed mb-6">
              {track.description}
            </p>

            <ul className="space-y-3">
              {track.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="text-amber-500/60 mt-0.5 flex-shrink-0 font-mono text-sm">
                    +
                  </span>
                  <span className="text-white/70 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
