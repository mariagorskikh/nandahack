"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AccordionItem from "@/components/ui/AccordionItem";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [allExpanded, setAllExpanded] = useState(false);

  return (
    <section
      id="faq"
      className="relative z-10 py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-white/10"
    >
      <div className="flex items-center justify-between mb-10 sm:mb-14 max-w-4xl mx-auto">
        <h2 className="text-center flex-1 text-3xl sm:text-5xl md:text-6xl font-light text-white/95">
          FAQ
        </h2>
        <button
          onClick={() => {
            setAllExpanded(!allExpanded);
            setExpandedFaq(null);
          }}
          className="text-sm text-white/50 hover:text-white/70 font-mono transition-colors"
        >
          {allExpanded ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div className="space-y-0 max-w-4xl mx-auto">
        {FAQS.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={allExpanded || expandedFaq === index}
            onToggle={() => {
              if (allExpanded) {
                setAllExpanded(false);
                setExpandedFaq(expandedFaq === index ? null : index);
              } else {
                setExpandedFaq(expandedFaq === index ? null : index);
              }
            }}
          />
        ))}
      </div>
    </section>
  );
}
