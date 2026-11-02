import React from 'react';
import { History, Copy, Check } from 'lucide-react';

interface HeaderProps {
  dotState: { red: boolean; yellow: boolean; green: boolean };
  onToggleHistory: () => void;
  onCopy: () => void;
  isCopied: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  dotState,
  onToggleHistory,
  onCopy,
  isCopied,
}) => {
  return (
    <div className="flex justify-between items-center mb-2 sm:mb-3.5 px-1 shrink-0">
      {/* Left: App Logo + App Name + Dots directly below */}
      <div className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer">
        {/* CalcPilot Logo */}
        <img
          src="https://i.ibb.co/L2bpcpY/Calc-Pilot-logo.webp"
          alt="CalcPilot Logo"
          className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 object-contain hover:scale-105 transition-transform duration-200 select-none"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const fallbackSrc = `${import.meta.env.BASE_URL}logo.webp`;
            if (e.currentTarget.src !== fallbackSrc) {
              e.currentTarget.src = fallbackSrc;
            }
          }}
        />

        {/* Brand Text */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-black text-lg sm:text-2xl tracking-tight text-white font-sans">
              Calc<span className="text-blue-500">Pilot</span>
            </span>
          </div>
          <div className="flex gap-1.5 items-center mt-0.5">
            <div
              className={`w-2.5 h-2.5 rounded-full dot-red ${
                dotState.red ? 'glow-active-red' : ''
              }`}
            />
            <div
              className={`w-2.5 h-2.5 rounded-full dot-yellow ${
                dotState.yellow ? 'glow-active-yellow' : ''
              }`}
            />
            <div
              className={`w-2.5 h-2.5 rounded-full dot-green ${
                dotState.green ? 'glow-active-green' : ''
              }`}
            />
          </div>
        </div>
      </div>

      {/* Right: Action Buttons (Copy + History Log) */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onCopy}
          className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-gray-400 hover:text-white flex items-center justify-center relative active:scale-95 cursor-pointer"
          title="Copy Expression / Result to Clipboard"
        >
          {isCopied ? (
            <Check className="w-3.5 h-3.5 text-green-500" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>

        {/* History Toggle Button */}
        <button
          onClick={onToggleHistory}
          className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-gray-400 hover:text-white flex items-center justify-center cursor-pointer"
          title="Calculation History"
        >
          <History className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
