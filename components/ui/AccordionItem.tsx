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
        className="group flex w-full items-center justify-between rounded-md px-3 py-5 text-left transition-colors hover:bg-white/[0.02] sm:py-6"
      >
        <span className="pr-6 text-base font-medium text-white/88 sm:text-lg">
          {question}
        </span>
        <span className="flex-shrink-0 font-mono text-xl text-white/40 transition-colors group-hover:text-white/60">
          {isOpen ? "\u2212" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 sm:pb-6 px-3">
          <p className="text-base leading-relaxed text-white/58 sm:text-lg">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
