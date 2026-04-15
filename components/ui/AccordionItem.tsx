"use client";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full py-5 sm:py-6 flex items-center justify-between text-left group transition-colors rounded-md px-3 hover:bg-white/[0.03]"
      >
        <span className="text-white/85 text-base sm:text-lg font-medium pr-6">
          {question}
        </span>
        <span className="text-white/40 flex-shrink-0 font-mono text-xl group-hover:text-white/60 transition-colors">
          {isOpen ? "\u2212" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 sm:pb-6 px-3">
          <p className="text-white/55 text-base sm:text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
