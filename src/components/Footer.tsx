import React from 'react';
import { Translation } from '../data/content';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/Logo.png';

interface FooterProps {
  t: Translation;
  setActiveTab: (tab: string) => void;
  currentLang: 'en' | 'ar' | 'fr';
}

const serviceLinks = [
  'HVAC Systems & Spare Parts',
  'Procurement Outsourcing',
  'Continuous Maintenance SLA',
  'Kitchen & Laundry OEM',
  'Energy Solutions',
  'Renovation Supervision',
];

const resourceLinks = [
  'Case Studies',
  'Technical Specs',
  'SLA Documentation',
  'FAQs',
];

export const Footer: React.FC<FooterProps> = ({ t, setActiveTab, currentLang }) => {
  const isRtl = currentLang === 'ar';

  /* ── Scroll helpers ── */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (id: string) => {
    setActiveTab(id);
    if (id === 'home') {
      scrollToTop();
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home',     label: t.nav.home     },
    { id: 'about',    label: t.nav.about    },
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact',  label: t.nav.contact  },
  ];

  return (
    <footer
      className="relative bg-black pt-0 pb-0 overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >

      {/* ══════════════════════════════════════ */}
      {/*  CTA BANNER                            */}
      {/* ══════════════════════════════════════ */}
      <div className="relative bg-neutral-950 border-t border-white/5">
        <div className="w-[90%] max-w-[1300px] mx-auto py-16 lg:py-20">
          <div className="relative overflow-hidden rounded-3xl p-8 lg:p-14
                          border border-white/5
                          bg-gradient-to-r from-neutral-900/80 to-neutral-950/80">

            {/* Accent lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#d4af37]/40 via-[#d4af37]/10 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-[#d4af37]/30 to-transparent" />

            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-3 text-white leading-tight">
                  Ready to Start Your{' '}
                  <span
                    className="italic"
                    style={{
                      background: 'linear-gradient(135deg, #d4af37 0%, #f0d060 50%, #d4af37 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Project
                  </span>
                  ?
                </h3>
                <p className="text-white/40 font-light max-w-lg text-sm leading-relaxed">
                  Let's discuss how Triangle Black can engineer the perfect
                  foundation for your next hospitality development.
                </p>
              </div>

              <button
                onClick={() => handleNav('contact')}
                className="group relative flex items-center gap-3 px-10 py-4
                           bg-[#d4af37] text-black text-[11px] tracking-[0.2em]
                           uppercase font-bold rounded-xl overflow-hidden
                           hover:bg-[#ecc344] hover:shadow-lg hover:shadow-[#d4af37]/20
                           transition-all duration-300 shrink-0"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Start a Conversation</span>
                <ArrowUpRight
                  size={14}
                  className="relative transition-transform duration-300
                             group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════ */}
      {/*  MAIN FOOTER                           */}
      {/* ══════════════════════════════════════ */}
      <div className="relative bg-black border-t border-white/5">

        {/* Background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.01] pointer-events-none" />

        <div className="w-[90%] max-w-[1300px] mx-auto pt-16 pb-8">

          {/* ── Footer Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/5">

            {/* ── Col 1: Brand ── */}
            <div className="lg:col-span-4 space-y-5">

              {/* Logo */}
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Triangle Black Logo"
                  className="w-auto h-24 object-contain
                            drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold tracking-[0.25em] text-[#d4af37] uppercase font-serif">
                    {t.title}
                  </span>
                  <span className="text-[8px] tracking-[0.3em] uppercase text-white/50 font-medium">
                    {t.subtitle}
                  </span>
                </div>
              </div>
              {/* Description */}
              <p className="text-white/30 text-sm font-light leading-relaxed max-w-sm">
                Premium mechanical supplies, lifecycle inventory optimization, and
                round-the-clock maintenance protocols crafted exclusively for
                5-star operations.
              </p>

              {/* OEM Badge */}
              <div>
                <span className="text-[9px] bg-neutral-900 text-neutral-400 px-3 py-1.5 rounded-lg
                                 border border-neutral-800 inline-block font-mono uppercase tracking-wider">
                  Authorized Original Equipment Sourcing Hub
                </span>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                {['LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-[9px] tracking-[0.15em] uppercase text-white/25
                               hover:text-[#d4af37] border border-white/8
                               hover:border-[#d4af37]/30 px-3 py-1.5 rounded-lg
                               transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Col 2: Navigation ── */}
            <div className="lg:col-span-2">
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#d4af37]/60 font-bold font-mono mb-5">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNav(item.id)}
                      className="text-[11px] text-white/30 hover:text-white/70
                                 uppercase tracking-wider font-light
                                 transition-colors duration-300
                                 hover:translate-x-0.5 transform inline-block"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Services ── */}
            <div className="lg:col-span-3">
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#d4af37]/60 font-bold font-mono mb-5">
                Services
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleNav('services')}
                      className="text-[11px] text-white/30 hover:text-white/70
                                 font-light transition-colors duration-300"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4: Contact ── */}
            <div className="lg:col-span-3">
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#d4af37]/60 font-bold font-mono mb-5">
                Official Switchboard
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:info@triangleblack.com"
                  className="flex items-center gap-3 text-white/40 hover:text-[#d4af37]
                             text-xs transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800
                                  flex items-center justify-center flex-shrink-0
                                  group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/30
                                  transition-all duration-300">
                    <Mail size={13} className="text-[#d4af37]/60" />
                  </div>
                  <div>
                    <span className="block font-mono text-xs">info@triangleblack.com</span>
                    <span className="block text-[9px] text-neutral-600 mt-0.5">SLA Response: &lt; 2 hours</span>
                  </div>
                </a>

                <a
                  href="tel:+20100000000"
                  className="flex items-center gap-3 text-white/40 hover:text-[#d4af37]
                             text-xs transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800
                                  flex items-center justify-center flex-shrink-0
                                  group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/30
                                  transition-all duration-300">
                    <Phone size={13} className="text-[#d4af37]/60" />
                  </div>
                  <div>
                    <span className="block font-mono text-xs">+20 XXX XXX XXXX</span>
                    <span className="block text-[9px] text-neutral-600 mt-0.5">24/7 Operations Dispatch</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-white/40 text-xs">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800
                                  flex items-center justify-center flex-shrink-0">
                    <MapPin size={13} className="text-[#d4af37]/60" />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-400">Cairo • Red Sea Coast • Luxor</span>
                    <span className="block text-[9px] text-neutral-600 mt-0.5">Regional Operations Base</span>
                  </div>
                </div>
              </div>

              {/* Resources mini-list */}
              <div className="mt-6 pt-5 border-t border-white/5">
                <h4 className="text-[10px] tracking-[0.25em] uppercase text-[#d4af37]/60 font-bold font-mono mb-3">
                  Resources
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resourceLinks.map((link) => (
                    <span
                      key={link}
                      className="text-[9px] text-neutral-500 px-2.5 py-1 rounded-lg
                                 border border-neutral-800 hover:border-[#d4af37]/20
                                 hover:text-neutral-300 transition-all duration-300
                                 cursor-pointer font-mono"
                    >
                      {link}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ── Bottom Bar ── */}
          <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">

            {/* Left */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <p className="text-[10px] text-white/20 tracking-wider font-mono">
                © {new Date().getFullYear()} TRIANGLE BLACK CORP. All rights reserved.
              </p>
              <div className="flex gap-4">
                {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[10px] text-white/15 hover:text-white/35
                               transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-[9px] text-neutral-700 font-mono uppercase tracking-wider">
                Engineered for luxury operations
              </span>
              <button
                onClick={scrollToTop}
                className="group p-2.5 rounded-xl bg-neutral-900 border border-neutral-800
                           text-neutral-500 hover:text-[#d4af37]
                           hover:bg-neutral-900 hover:border-[#d4af37]/30
                           transition-all duration-300
                           flex items-center gap-1.5"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                <span className="text-[8px] uppercase tracking-wider hidden sm:inline font-mono">
                  Top
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
};