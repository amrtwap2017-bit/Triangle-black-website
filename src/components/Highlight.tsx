import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../data/content';

interface HighlightProps {
  t: Translation;
  currentLang: 'en' | 'ar' | 'fr';
}

export const Highlight: React.FC<HighlightProps> = ({ t, currentLang }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);
  const isRtl = currentLang === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-24 lg:py-32 bg-black overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >

      {/* ── Background ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.012] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#d4af37]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=60&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div ref={ref} className="w-[90%] max-w-[1300px] mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-[#d4af37]/50" />
            <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#d4af37] font-mono
                             bg-[#d4af37]/10 px-3 py-1.5 rounded-lg border border-[#d4af37]/20">
              {t.highlight.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white"
          >
            {t.highlight.heading.split(' ').slice(0, -1).join(' ')}{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.highlight.heading.split(' ').slice(-1)}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-sm sm:text-base font-light leading-relaxed max-w-xl mt-4"
          >
            {t.highlight.desc}
          </motion.p> 
        </div>

        {/* ══════════════════════════════════════ */}
        {/*  DESKTOP TIMELINE                     */}
        {/* ══════════════════════════════════════ */}
        <div className="hidden lg:block relative py-10">

          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
              className={`h-px bg-gradient-to-r from-[#d4af37]/60 via-[#d4af37]/40 to-[#d4af37]/60 ${
                isRtl ? 'origin-right' : 'origin-left'
              }`}
            />
          </div>

          {/* Items */}
          <div className="grid grid-cols-4 gap-6 relative" style={{ minHeight: '380px' }}>
            {t.highlight.timeline.map((item, i) => {
              const isTop = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Gold numbered dot */}
                  <div className="absolute top-1/2 -translate-y-1/2 z-20">
                    <div className="w-10 h-10 rounded-xl
                                    bg-gradient-to-br from-[#d4af37] to-[#b8962e]
                                    flex items-center justify-center
                                    shadow-lg shadow-[#d4af37]/30
                                    border border-[#d4af37]/50">
                      <span className="text-black font-bold text-sm font-serif">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`absolute px-2 w-full text-center ${
                      isTop ? 'bottom-[55%] mb-4' : 'top-[55%] mt-4'
                    }`}
                  >
                    {/* Year */}
                    <div className="mb-2">
                      <span
                        className="text-sm font-bold font-serif"
                        style={{
                          background: 'linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-5
                                    hover:border-[#d4af37]/30 transition-all duration-500 group
                                    backdrop-blur-sm relative overflow-hidden">

                      <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px
                                      bg-[#d4af37] transition-all duration-700" />

                      <h4 className="text-[10px] font-bold uppercase tracking-[0.15em]
                                     text-[#d4af37]/70 mb-2 font-mono">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-neutral-400 leading-relaxed font-light transition-all duration-500 ease-out hover:scale-105 hover:text-white hover:drop-shadow-[0_4px_12px_rgba(212,175,55,0.3)] transform-gpu cursor-default">
                        {item.description}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════ */}
        {/*  MOBILE TIMELINE                      */}
        {/* ══════════════════════════════════════ */}
        <div className="lg:hidden relative">

          {/* Vertical line */}
          <div className={`absolute ${isRtl ? 'right-5' : 'left-5'} top-0 bottom-0 w-px bg-[#d4af37]/20`} />

          <div className="space-y-8">
            {t.highlight.timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`relative ${isRtl ? 'pr-14' : 'pl-14'}`}
              >
                {/* Number dot */}
                <div className={`absolute ${isRtl ? 'right-0' : 'left-0'} top-0 z-10`}>
                  <div className="w-10 h-10 rounded-xl
                                  bg-gradient-to-br from-[#d4af37] to-[#b8962e]
                                  flex items-center justify-center
                                  shadow-lg shadow-[#d4af37]/30
                                  border border-[#d4af37]/50">
                    <span className="text-black font-bold text-sm font-serif">
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-5
                                hover:border-[#d4af37]/30 transition-all duration-500 group
                                relative overflow-hidden">

                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px
                                  bg-[#d4af37] transition-all duration-700" />

                  <span
                    className="text-sm font-bold font-serif block mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {item.year}
                  </span>

                  <h4 className="text-[10px] font-bold uppercase tracking-[0.15em]
                                 text-[#d4af37]/70 mb-2 font-mono">
                    {item.title}
                  </h4>

                  <p className="text-[12px] text-neutral-400 leading-relaxed font-light transition-all duration-500 ease-out hover:scale-105 hover:text-white hover:drop-shadow-[0_4px_12px_rgba(212,175,55,0.3)] transform-gpu cursor-default">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Founding philosophy quote ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="bg-neutral-900/40 border border-neutral-800/60 rounded-2xl p-6
                          hover:border-[#d4af37]/20 transition-all duration-500">
            <p className="text-xs text-neutral-400 italic leading-relaxed">
              <span className="text-[#d4af37] font-semibold not-italic">"</span>
              {t.highlight.quote}
              <span className="text-[#d4af37] font-semibold not-italic">"</span>
            </p>
            <p className="text-[10px] text-neutral-600 mt-3 font-mono uppercase tracking-widest">
              {t.highlight.quoteAuthor}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};