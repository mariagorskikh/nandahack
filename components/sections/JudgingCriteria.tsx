"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { JUDGING_CRITERIA } from "@/lib/constants";

export default function JudgingCriteria() {
  return (
    <section
      id="judging"
      className="relative z-10 py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-white/10"
    >
      <SectionHeading
        title="Judging Criteria"
        subtitle="The judging is simple and weighted toward substance."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {JUDGING_CRITERIA.map((criteria, index) => (
          <motion.div
            key={criteria.label}
            className="rounded-lg border border-white/10 bg-white/[0.02] p-6 text-center sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-amber-500/30">
              <span className="text-2xl font-semibold text-amber-400">
                {criteria.weight}%
              </span>
            </div>

            <h3 className="mb-3 text-xl font-medium text-white">
              {criteria.label}
            </h3>
            <p className="text-sm leading-relaxed text-white/58">
              {criteria.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
