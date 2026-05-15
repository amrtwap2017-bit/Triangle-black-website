import React, { useEffect, useState } from 'react';

import logo from '../assets/Logo.png';

interface LoadingScreenProps {
  onFinish: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFading(true);
            setTimeout(() => onFinish(), 600);
          }, 300);
          return 100;
        }
        // Speed up the simulation randomly for an engaging experience
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-60 flex flex-col items-center justify-center bg-black transition-opacity duration-700 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background premium decorative gradient lines */}
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Dynamic logo icon */}
        <div className="relative mb-10 flex items-center justify-center">
          <div className="absolute w-28 h-28 border border-[#d4af37]/20 rounded-full animate-pulse" />
          <div className="absolute w-36 h-36 border border-[#d4af37]/10 rounded-full animate-ping duration-1000" />
          <div className="absolute w-24 h-24 sm:w-28 sm:h-28 bg-[#d4af37]/5 rounded-full blur-md" />
          <img
            src={logo}
            alt="Company logo"
            className="relative z-10 w-auto h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 object-contain select-none transition-all duration-300 hover:scale-105 hover:brightness-110 drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]"
          />
        </div>

        <h2 className="text-2xl tracking-[0.3em] font-bold text-[#d4af37] font-serif uppercase mb-2">
          TRIANGLE BLACK
        </h2>
        
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8 font-light">
          Hospitality Engineering Initialization
        </p>

        {/* Progress bar */}
        <div className="w-64 h-[2px] bg-neutral-900 rounded-full overflow-hidden relative mb-3">
          <div 
            className="h-full bg-gradient-to-r from-[#d4af37]/40 via-[#d4af37] to-[#ffe58f] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between w-64 text-[10px] text-neutral-500 font-mono tracking-wider">
          <span>SYSTEMS SECURED</span>
          <span className="text-[#d4af37] font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
