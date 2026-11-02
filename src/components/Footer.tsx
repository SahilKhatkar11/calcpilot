import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="mt-1.5 sm:mt-2.5 text-center flex justify-center shrink-0">
      <div className="footnote-pill group">
        <span>Crafted with Passion by</span>
        <a
          href="https://github.com/SahilKhatkar11"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold bg-gradient-to-r from-[#ff9f0a] via-[#ffb340] to-[#38bdf8] bg-clip-text text-transparent group-hover:brightness-125 transition-all underline decoration-[#ff9f0a]/30 decoration-1 underline-offset-2 relative z-10 inline-block"
          style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Sahil Khatkar
        </a>
      </div>
    </div>
  );
};
