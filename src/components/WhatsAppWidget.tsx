import React, { useState } from 'react';
import { MessageCircle, X, Check, Clock } from 'lucide-react';
import { Translation, Lang } from '../data/content';

interface WhatsAppWidgetProps {
  t: Translation;
  currentLang: Lang;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ t, currentLang }) => {
  const [open, setOpen] = useState(false);
  const isRtl = currentLang === 'ar';

  const defaultMsg = "Hello Triangle Black Engineering, I would like to request technical spares and pricing for our hotel operations.";
  const encodedMsg = encodeURIComponent(defaultMsg);
  const targetNumber = "201000000000";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Expanded chat portal */}
      {open && (
        <div className="w-80 bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl mb-3 transition-all duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 text-black flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
                TB
              </div>
              <div>
                <span className="text-xs font-bold block leading-tight">{t.whatsapp.headerTitle}</span>
                <span className="text-[9px] text-black/80 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                  {t.whatsapp.headerSub}
                </span>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-black/10 rounded-full transition-colors text-black"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-neutral-900/90 space-y-3 min-h-[120px] text-xs">
            <p className="text-[10px] text-center text-neutral-500 my-1 font-mono">
              Today — Priority Response Target
            </p>

            <div className="bg-neutral-800/90 text-white p-3 rounded-2xl rounded-tl-none max-w-[85%] border border-neutral-700 relative">
              <p className="leading-relaxed font-light">
                {t.whatsapp.welcomeMsg}
              </p>
              <div className="text-[8px] text-neutral-400 text-right mt-1 font-mono">
                Now <Check className="w-2.5 h-2.5 inline text-[#25D366]" />
              </div>
            </div>

            {/* Action */}
            <div className="pt-2 space-y-1">
              <span className="text-[9px] uppercase font-mono tracking-wider text-neutral-500 block px-1">
                {t.whatsapp.actionLabel}
              </span>
              <a
                href={`https://wa.me/${targetNumber}?text=${encodedMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-2 bg-[#25D366] text-black font-bold text-[11px] rounded-xl hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-black" />
                <span>{t.whatsapp.launchBtn}</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="p-2.5 bg-neutral-950 border-t border-neutral-800 text-[9px] text-neutral-500 text-center font-mono flex items-center justify-center gap-2">
            <Clock className="w-3 h-3 text-[#d4af37]" />
            <span>{t.whatsapp.dispatchTime}</span>
          </div>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-black rounded-full flex items-center justify-center shadow-xl shadow-black/60 hover:scale-110 transition-transform duration-300 relative group focus:outline-none"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        
        {open ? (
          <X className="w-6 h-6 text-black transition-transform rotate-90" />
        ) : (
          <MessageCircle className="w-7 h-7 text-black fill-black transition-transform" />
        )}

        {/* Tooltip */}
        {!open && (
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-neutral-950 border border-neutral-800 text-white text-[10px] font-mono tracking-wider rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            {t.whatsapp.tooltip}
          </span>
        )}
      </button>
    </div>
  );
};
