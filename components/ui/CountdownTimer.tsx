"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  label?: string;
}

export default function CountdownTimer({ targetDate, label }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) return null;

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="flex flex-col items-center gap-3">
      {label && (
        <span className="text-xs font-mono text-amber-500/70 uppercase tracking-widest">
          {label}
        </span>
      )}
      <div className="flex gap-3 sm:gap-4">
        {blocks.map((block) => (
          <div
            key={block.label}
            className="flex flex-col items-center px-4 py-3 sm:px-5 sm:py-4 bg-white/[0.03] border border-white/[0.08] rounded-lg min-w-[70px] sm:min-w-[80px]"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 font-mono tabular-nums">
              {String(block.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs text-white/40 font-mono uppercase tracking-wider mt-1">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
