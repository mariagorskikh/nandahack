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
        title="What is BANDA?"
        subtitle="A competition to build the missing infrastructure layer for AI agents"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
        <motion.div
          className="border-l-2 border-amber-500/30 pl-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-light text-white/90 mb-3">
            The Challenge
          </h3>
          <p className="text-white/55 text-base sm:text-lg leading-relaxed">
            Build a system, tool, or layer that fixes a real bottleneck in how AI
            agents are deployed, coordinated, or scaled. Not another chatbot.
            Not another wrapper. Real infrastructure.
          </p>
        </motion.div>

        <motion.div
          className="border-l-2 border-amber-500/30 pl-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl sm:text-2xl font-light text-white/90 mb-3">
            Why It Matters
          </h3>
          <p className="text-white/55 text-base sm:text-lg leading-relaxed">
            The agent ecosystem is growing fast, but the infrastructure
            hasn&apos;t kept up. Coordination is ad-hoc. Memory is siloed.
            Communication is fragmented. We need builders who fix the plumbing.
          </p>
        </motion.div>

        <motion.div
          className="border-l-2 border-amber-500/30 pl-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl sm:text-2xl font-light text-white/90 mb-3">
            What We&apos;re Looking For
          </h3>
          <p className="text-white/55 text-base sm:text-lg leading-relaxed">
            Working software that other developers can actually use. Not
            slideware. Not vaporware. Code that runs, deploys, and shows clear
            improvement over the status quo.
          </p>
        </motion.div>

        <motion.div
          className="border-l-2 border-amber-500/30 pl-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl font-light text-white/90 mb-3">
            Built on NEST
          </h3>
          <p className="text-white/55 text-base sm:text-lg leading-relaxed">
            All agents are deployed on NEST infrastructure. Your solution should
            be compatible with and deployable on the NEST platform, ensuring
            real-world usability from day one.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
