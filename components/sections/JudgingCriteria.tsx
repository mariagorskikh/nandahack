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
        subtitle="We value working software over fancy presentations"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {JUDGING_CRITERIA.map((criteria, index) => (
          <motion.div
            key={criteria.label}
            className="p-6 sm:p-8 bg-white/[0.02] border border-white/[0.08] rounded-lg text-center hover:border-amber-500/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Weight circle */}
            <div className="w-20 h-20 mx-auto mb-5 rounded-full border-2 border-amber-500/30 flex items-center justify-center">
              <span className="text-3xl font-light text-amber-500">
                {criteria.weight}%
              </span>
            </div>

            <h3 className="text-xl font-medium text-white/90 mb-3">
              {criteria.label}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {criteria.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
