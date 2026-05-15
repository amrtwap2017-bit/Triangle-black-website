import React, { useState } from 'react';
import { Translation, Lang, servicesData, ServiceItem } from '../data/content';
import { Wrench, Truck, ShieldCheck, Cpu, Layers, Sliders, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  t: Translation;
  currentLang: Lang;
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ t, currentLang, onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'supplies' | 'procurement' | 'maintenance' | 'renovations'>('all');
  const isRtl = currentLang === 'ar';

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#d4af37]' };
    switch (iconName) {
      case 'Wrench': return <Wrench {...props} />;
      case 'Truck': return <Truck {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Sliders': return <Sliders {...props} />;
      default: return <Wrench {...props} />;
    }
  };

  const filteredServices = activeFilter === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeFilter);

  const filters = [
    { id: 'all' as const, label: t.services.filterAll },
    { id: 'supplies' as const, label: t.services.filterSupplies },
    { id: 'procurement' as const, label: t.services.filterProcurement },
    { id: 'maintenance' as const, label: t.services.filterMaintenance },
    { id: 'renovations' as const, label: t.services.filterRenovation },
  ];

  return (
    <section className="py-24 bg-black relative" id="services">
      {/* Decorative vertical divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#d4af37]/30 to-transparent pointer-events-none" />

      <div className="w-[90%] max-w-[1300px] mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
        {/* Title Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37] block mb-3 font-mono">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif leading-tight mb-4">
            {t.services.heading}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl mx-auto">
            {t.services.subheading}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-16 max-w-4xl mx-auto p-1.5 bg-neutral-950 rounded-2xl border border-neutral-900">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2.5 text-xs uppercase tracking-wider font-medium rounded-xl transition-all ${
                activeFilter === f.id
                  ? 'bg-[#d4af37] text-black font-bold shadow-md shadow-[#d4af37]/10'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-neutral-950/80 border border-neutral-900 rounded-3xl p-8 hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative"
            >
              {/* Top glow indicator */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent group-hover:via-[#d4af37] transition-all duration-500" />

              <div>
                {/* Header: Icon + Category tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest border border-neutral-800 px-2 py-0.5 rounded">
                    {service.category}
                  </span>
                </div>

                {/* Title - Translated */}
                <h3 className="text-xl font-bold text-white font-serif mb-3 group-hover:text-[#d4af37] transition-colors">
                  {service.title[currentLang]}
                </h3>

                {/* Description - Translated */}
                <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-light">
                  {service.desc[currentLang]}
                </p>

                {/* Sub-systems - Translated */}
                <div className="mb-6 space-y-2">
                  <span className="text-[10px] uppercase font-mono text-neutral-500 tracking-wider block">
                    {t.services.subsystemsLabel}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.systems[currentLang].map((sys, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-neutral-900 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-800"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features - Translated */}
                <div className="space-y-1.5 mb-8 pt-4 border-t border-neutral-900/60">
                  {service.features[currentLang].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-[#d4af37] flex-shrink-0" />
                      <span className="text-xs text-neutral-400 font-light">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title[currentLang])}
                className="w-full py-3 bg-neutral-900 hover:bg-[#d4af37] text-neutral-300 hover:text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn"
              >
                <span>{t.services.requestBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Note Banner */}
        <div className="mt-16 bg-neutral-950 border border-neutral-900 rounded-2xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-xs text-neutral-400">
            <span className="text-[#d4af37] font-semibold">{t.services.customNoteTitle}</span>{' '}
            {t.services.customNoteDesc}
          </p>
        </div>
      </div>
    </section>
  );
};
