import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Translation, Lang } from '../data/content';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  t: Translation;
  setActiveTab: (tab: string) => void;
  currentLang: Lang;
}

const backgroundOptions = [
  {
    id: 'corridor',
    nameKey: 'sceneDelivery',
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'hvac',
    nameKey: 'sceneQuality',
    url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 'lounge',
    nameKey: 'sceneTrusted',
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85',
  },
];

const SLIDE_DURATION = 9000;

export const Hero: React.FC<HeroProps> = ({ t, setActiveTab, currentLang }) => {
  const [activeBg, setActiveBg] = useState(0);
  const [, setProgress] = useState(0);

  const isRtl = currentLang === 'ar';

  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 50);

    const slideTimer = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % backgroundOptions.length);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideTimer);
    };
  }, [activeBg]);

  function handleBgChange(index: number) {
    setActiveBg(index);
    setProgress(0);
  }

  function handleNav(id: string) {
    setActiveTab(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  const getSceneName = (key: string) => {
    return t.hero[key as keyof typeof t.hero] || key;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Layers */}
      {backgroundOptions.map((bg, idx) => (
        <div
          key={bg.id}
          style={{ transition: 'opacity 1200ms ease-in-out, transform 1200ms ease-in-out' }}
          className={`absolute inset-0 ${
            idx === activeBg
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={bg.url}
            alt={getSceneName(bg.nameKey)}
            className="w-full h-full object-cover object-center"
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] z-[15] pointer-events-none" />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#d4af37]/5 rounded-full pointer-events-none z-[15]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-[#d4af37]/8 rounded-full pointer-events-none z-[15] animate-[spin_60s_linear_infinite]" />

      {/* Left scroll label */}
      <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-20">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-[#d4af37]/40" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 [writing-mode:vertical-lr] rotate-180">
          {t.hero.scrollLabel}
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-[#d4af37]/40 to-transparent" />
      </div>

      {/* Scene label top right */}
      <div className="absolute top-28 right-8 z-20 hidden lg:flex flex-col items-end gap-1.5">
        <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-600 font-mono">
          {t.hero.activeScene}
        </span>
        <span className="text-[11px] text-[#d4af37]/70 font-medium tracking-wider">
          {getSceneName(backgroundOptions[activeBg].nameKey)}
        </span>
        <div className="flex gap-1.5 mt-0.5">
          {backgroundOptions.map((_, i) => (
            <button
              key={i}
              onClick={() => handleBgChange(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeBg
                  ? 'w-5 h-1 bg-[#d4af37]'
                  : 'w-1 h-1 bg-neutral-700 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        className="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 text-center pt-24 pb-32 w-full"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <div className="h-px w-8 bg-[#d4af37]/50" />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          bg-neutral-900/80 border border-[#d4af37]/25
                          text-[#d4af37] text-[10px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3 h-3" />
            <span>{t.hero.badge}</span>
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
            </span>
          </div>
          <div className="h-px w-8 bg-[#d4af37]/50" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8"
        >
          <span className="text-white">{t.hero.headline.split(' ').slice(0, -2).join(' ')}</span>{' '}
          <span
            className="italic"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t.hero.headline.split(' ').slice(-2).join(' ')}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-white/70 mb-10 leading-relaxed"
        >
          {t.hero.desc}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => handleNav('contact')}
            className="group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#e6ca65] text-black font-bold text-sm uppercase tracking-wider rounded-full transition-all hover:shadow-xl hover:shadow-[#d4af37]/25 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button
            onClick={() => handleNav('projects')}
            className="px-8 py-4 border border-white/20 hover:border-[#d4af37]/50 text-white hover:text-[#d4af37] font-bold text-sm uppercase tracking-wider rounded-full transition-all"
          >
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

        {/* KPI Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { val: t.hero.kpi1, sub: t.hero.kpi1Sub },
            { val: t.hero.kpi2, sub: t.hero.kpi2Sub },
            { val: t.hero.kpi3, sub: t.hero.kpi3Sub },
            { val: t.hero.kpi4, sub: t.hero.kpi4Sub },
          ].map((kpi, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#d4af37] font-serif">{kpi.val}</div>
              <div className="text-[10px] text-white/50 uppercase tracking-wider mt-1">{kpi.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 text-white/30 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
