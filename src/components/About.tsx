import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Translation, hospitalityClients } from '../data/content';
import { CheckCircle2, Target, Eye, Award, Settings } from 'lucide-react';

interface AboutProps {
  t: Translation;
  currentLang: 'en' | 'ar' | 'fr';
}

export const About: React.FC<AboutProps> = ({ t, currentLang }) => {
  const isRtl = currentLang === 'ar';

  const [isInView, setIsInView]   = useState<boolean>(false);
  const [isInView2, setIsInView2] = useState<boolean>(false);
  const [isInView3, setIsInView3] = useState<boolean>(false);

  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);

  /* ── Intersection Observers ── */
  useEffect(() => {
    const makeObserver = (
      ref: React.RefObject<HTMLDivElement | null>,
      setter: (v: boolean) => void
    ) => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setter(true); },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const o1 = makeObserver(ref1, setIsInView);
    const o2 = makeObserver(ref2, setIsInView2);
    const o3 = makeObserver(ref3, setIsInView3);

    return () => {
      o1.disconnect();
      o2.disconnect();
      o3.disconnect();
    };
  }, []);

  /* ── Value Pillars ── */
  const valuePillars = [
    { icon: Target, title: t.about.missionTitle, desc: t.about.missionDesc },
    { icon: Eye,    title: t.about.visionTitle,  desc: t.about.visionDesc  },
    { icon: Award,  title: t.about.valuesTitle,  desc: t.about.valuesDesc  },
  ];

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-neutral-950 overflow-hidden"
    >
      {/* ── Background Accents ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-neutral-900 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -right-40 top-20 w-[500px] h-[500px] rounded-full border border-[#d4af37]/5 opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.015] pointer-events-none" />

      <div className="w-[90%] max-w-[1300px] mx-auto relative z-10" dir={isRtl ? 'rtl' : 'ltr'}>

        {/* ── 1. Centered Section Header ── */}
        <div ref={ref1} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-5 mb-8"
          >
            <div className="h-px w-8 bg-[#d4af37]/50" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4af37] font-mono">
              {t.about.badge}
            </span>
            <div className="h-px w-8 bg-[#d4af37]/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xlfont-extrabold text-white font-serif leading-[1.1]"
          >
            {t.about.heading.split(' ').slice(0, -1).join(' ')}{' '}
            <span
              className="italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.about.heading.split(' ').slice(-1)}
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6"
          />
        </div>

        {/* ── 2. Split Layout: Image Left / Text Right ── */}
        <div
          ref={ref2}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24"
        >
          {/* ── Left: Image Block ── */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37] to-transparent rounded-2xl opacity-20 blur-xl transform translate-x-3 translate-y-3" />

            <div className="relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden p-2">
              <img
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80"
                alt="Triangle Black Facilities"
                className="w-full aspect-[4/5] object-cover rounded-xl filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />

              {/* Floating overlay card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-6 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                    <Settings className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-neutral-400 tracking-wider font-mono">
                      Operational Security
                    </div>
                    <div className="text-sm font-bold text-white font-serif">
                      Zero Mechanical Blindspots
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Gold vertical accent line */}
            <div className="absolute top-8 -left-4 w-px h-24 bg-gradient-to-b from-[#d4af37]/50 to-transparent hidden lg:block" />

            {/* Floating stats badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-6 -right-4 lg:-right-6 bg-neutral-900/95 border border-[#d4af37]/20 backdrop-blur-md p-5 rounded-2xl max-w-[200px] shadow-xl shadow-black/40"
            >
              <div
                className="text-3xl font-serif font-bold mb-1"
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                100%
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-white/50 font-mono">
                OEM Certified Engineering Partners
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 pt-2"
          >
            {/* Subheading */}
            <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-[1.1] text-white">
              Building the Backbone of{' '}
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Extraordinary
              </span>{' '}
              Experiences
            </h3>

            {/* Paragraphs */}
            <div className="space-y-5 text-neutral-400 font-light leading-relaxed text-sm sm:text-base">
              <p className="border-l-2 border-[#d4af37] pl-4 py-1 text-white/80 font-medium text-sm">
                {t.about.p1}
              </p>
              <p className="text-white/40">
                {t.about.p2}
              </p>
            </div>

            {/* KPI Stat Blocks */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
              {[
                { val: '100%',     label: 'OEM Certification'  },
                { val: '< 4 Hrs',  label: 'Emergency Dispatch' },
                { val: 'ISO 9001', label: 'Quality Compliant'  },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 hover:border-[#d4af37]/30 transition-all duration-300 group"
                >
                  <div
                    className="text-xl font-bold font-serif group-hover:scale-105 transition-transform duration-300"
                    style={
                      i % 2 === 0
                        ? {
                            background: 'linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }
                        : { color: '#ffffff' }
                    }
                  >
                    {m.val}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-1 font-mono uppercase tracking-wider">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── 3. Mission / Vision / Values Grid ── */}
        <div ref={ref3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#d4af37]/50" />
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#d4af37]/80 font-medium font-mono">
                Our Values
              </span>
              <div className="h-px w-8 bg-[#d4af37]/50" />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Principles That Define Us
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden mb-20">
            {valuePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="group bg-neutral-950 p-8 text-center hover:bg-neutral-900/50 transition-all duration-500 relative"
                >
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-[#d4af37] transition-all duration-700" />
                  <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-white/10 rounded-2xl bg-[#d4af37]/5 group-hover:border-[#d4af37]/30 group-hover:bg-[#d4af37]/10 transition-all duration-500">
                    <Icon size={24} className="text-white/30 group-hover:text-[#d4af37] transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-lg font-semibold mb-3 text-white group-hover:text-[#d4af37] transition-colors duration-500">
                    {pillar.title}
                  </h4>
                  <p className="text-white/30 text-sm font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── 4. Why Choose Us ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-8 sm:p-12 hover:border-[#d4af37]/20 transition-all duration-500"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-[#d4af37]/50" />
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold font-mono">
                  {t.about.whyChooseTitle}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-4">
                {t.about.whyChooseSub}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Hospitality infrastructure leaves no room for generic supply delays.
                Triangle Black implements targeted industrial inventory buffers tailored
                specifically for high-occupancy cycles.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-3">
                {t.about.whyChooseItems.map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView3 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                    className="flex gap-3 bg-black/40 p-4 rounded-xl border border-white/5 hover:border-[#d4af37]/20 transition-all duration-300 group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs text-neutral-300 leading-relaxed font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 5. Client Trust Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-neutral-900 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-6 font-mono">
            Supported Engineering Infrastructures & Client Sectors
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-40 hover:opacity-70 transition-opacity duration-500">
            {hospitalityClients.map((clientName: string, i: number) => (
              <span
                key={i}
                className="text-xs text-neutral-400 font-serif tracking-wider italic hover:text-[#d4af37]/70 transition-colors duration-300"
              >
                {clientName}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};