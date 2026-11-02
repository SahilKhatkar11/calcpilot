import React, { useMemo } from 'react';

interface DisplayScreenProps {
  displayValue: string;
  displayHistory: string;
}

export const DisplayScreen: React.FC<DisplayScreenProps> = ({
  displayValue,
  displayHistory,
}) => {
  // Dynamically calculate font size to prevent wrapping
  const fontSizeRem = useMemo(() => {
    const textLength = displayValue.length;
    if (textLength <= 7) return 2.8;
    return Math.max(1.15, 2.8 - (textLength - 7) * 0.18);
  }, [displayValue]);

  return (
    <div className="mb-2 sm:mb-3.5 p-3 sm:p-4 rounded-[18px] sm:rounded-[24px] bg-black/40 border border-white/[0.04] shadow-inner relative overflow-hidden flex flex-col justify-end h-[clamp(92px,15.6dvh,180px)] min-h-[92px] select-all">
      <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/[0.015] to-transparent pointer-events-none" />

      {/* Formula/Equation History line */}
      <div className="text-right text-[11px] sm:text-xs text-gray-500/80 font-mono tracking-wide h-4 sm:h-5 overflow-hidden truncate whitespace-nowrap mb-0.5 sm:mb-1">
        {displayHistory}
      </div>

      {/* Main dynamic value */}
      <div
        className="text-right font-light tracking-tight text-white transition-all duration-150 pr-1 break-all"
        style={{ fontSize: `clamp(1.35rem, ${fontSizeRem * 1.15}rem, 3.3rem)`, lineHeight: 1.05 }}
      >
        {displayValue || '0'}
      </div>
    </div>
  );
};
