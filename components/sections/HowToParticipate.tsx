"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import { REQUIREMENTS } from "@/lib/constants";

export default function HowToParticipate() {
  return (
    <section
      id="participate"
      className="relative z-10 py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-white/10"
    >
      <SectionHeading
        title="How to Participate"
        subtitle="What your submission needs to include"
      />

      <div className="max-w-3xl mx-auto">
        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { step: "01", title: "Pick a Problem", desc: "Choose one of the 8 infrastructure problem areas that excites you most." },
            { step: "02", title: "Build It", desc: "Write code. Deploy it. Make sure other developers can actually use what you build." },
            { step: "03", title: "Submit", desc: "Upload your code, video demo, and slides before the deadline." },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              className="p-6 bg-white/[0.02] border border-white/[0.08] rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-amber-500/60 text-xs font-mono font-bold mb-3">
                {item.step}
              </div>
              <h3 className="text-lg font-medium text-white/90 mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Requirements */}
        <motion.div
          className="p-6 sm:p-8 bg-white/[0.02] border border-amber-500/10 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-medium text-white/90 mb-4">
            Requirements
          </h3>
          <ul className="space-y-3">
            {REQUIREMENTS.map((req, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="text-amber-500/60 mt-0.5 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-white/65 text-sm">{req}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
