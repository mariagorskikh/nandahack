"use client";

import { useState } from "react";
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
      <div className="mx-auto mb-10 flex max-w-4xl items-center justify-between sm:mb-12">
        <h2 className="flex-1 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          FAQ
        </h2>
        <button
          onClick={() => {
            setAllExpanded(!allExpanded);
            setExpandedFaq(null);
          }}
          className="text-sm font-mono text-white/45 transition-colors hover:text-white/70"
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
