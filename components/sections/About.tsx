"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-white/10"
    >
      <SectionHeading
        title="What This Is"
        subtitle="A buildathon for useful agent infrastructure"
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
        <motion.div
          className="rounded-lg border border-white/10 bg-white/[0.02] p-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-3 text-xl font-medium text-white">The brief</h3>
          <p className="text-base leading-relaxed text-white/60">
            Build something that makes agents easier to deploy, coordinate, or
            operate. It should solve a real technical bottleneck.
          </p>
        </motion.div>

        <motion.div
          className="rounded-lg border border-white/10 bg-white/[0.02] p-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="mb-3 text-xl font-medium text-white">Why now</h3>
          <p className="text-base leading-relaxed text-white/60">
            Agents are improving quickly, but the tooling around them is still
            fragmented. Good infrastructure is the gap.
          </p>
        </motion.div>

        <motion.div
          className="rounded-lg border border-white/10 bg-white/[0.02] p-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="mb-3 text-xl font-medium text-white">What good looks like</h3>
          <p className="text-base leading-relaxed text-white/60">
            Working software, clear use cases, and something another developer
            could adopt without a long setup process.
          </p>
        </motion.div>

        <motion.div
          className="rounded-lg border border-white/10 bg-white/[0.02] p-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="mb-3 text-xl font-medium text-white">Deployment</h3>
          <p className="text-base leading-relaxed text-white/60">
            Projects need to run on NEST or work cleanly with agents running on
            NEST.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
