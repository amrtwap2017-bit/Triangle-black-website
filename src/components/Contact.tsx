import React, { useState, useEffect } from 'react';
import { Translation, Lang, servicesData } from '../data/content';
import { Send, Mail, Phone, Building, CheckCircle } from 'lucide-react';

interface ContactProps {
  t: Translation;
  currentLang: Lang;
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({ t, currentLang, prefilledService }) => {
  const isRtl = currentLang === 'ar';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: prefilledService || '',
    message: '',
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  };

  const serviceOptions = servicesData.map((s) => s.title[currentLang]);

  return (
    <section className="py-24 bg-neutral-950 relative" id="contact" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="w-[90%] max-w-[1300px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37] block mb-3 font-mono">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif leading-tight mb-4">
            {t.contact.heading}
          </h2>
          <p className="text-sm text-neutral-400 font-light max-w-xl mx-auto">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted && (
              <div className="mb-6 flex items-center gap-3 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <div>
                  <span className="text-sm text-[#d4af37] font-medium block">{t.contact.successTitle}</span>
                  <span className="text-xs text-neutral-400">{t.contact.successDesc}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.formName}
                  className="w-full bg-black border border-neutral-800 rounded-xl px-5 py-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#d4af37]/50 transition-colors"
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contact.formEmail}
                  className="w-full bg-black border border-neutral-800 rounded-xl px-5 py-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#d4af37]/50 transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder={t.contact.formCompany}
                  className="w-full bg-black border border-neutral-800 rounded-xl px-5 py-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#d4af37]/50 transition-colors"
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.contact.formPhone}
                  className="w-full bg-black border border-neutral-800 rounded-xl px-5 py-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#d4af37]/50 transition-colors"
                  dir="ltr"
                />
              </div>

              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-black border border-neutral-800 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#d4af37]/50 transition-colors appearance-none"
              >
                <option value="" className="text-neutral-600">
                  {t.contact.formService}
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>

              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.contact.formMsg}
                className="w-full bg-black border border-neutral-800 rounded-xl px-5 py-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#d4af37]/50 transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#e6ca65] hover:shadow-lg hover:shadow-[#d4af37]/25 text-black font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.submitBtn}</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-white font-serif mb-4">{t.contact.directContact}</h3>

            <div className="bg-black border border-neutral-900 rounded-2xl p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <Building className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium block mb-1">
                    {t.contact.headquarters}
                  </span>
                  <span className="text-sm text-white font-medium">TRIANGLE BLACK CORP</span>
                  <span className="text-xs text-neutral-500 block">{t.contact.headquartersSub}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium block mb-1">
                    {t.contact.emailLabel}
                  </span>
                  <a href="mailto:info@triangleblack.com" className="text-sm text-white hover:text-[#d4af37] transition-colors">
                    info@triangleblack.com
                  </a>
                  <span className="text-xs text-neutral-500 block">{t.contact.emailSub}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium block mb-1">
                    {t.contact.phoneLabel}
                  </span>
                  <a href="tel:+20100000000" className="text-sm text-white hover:text-[#d4af37] transition-colors" dir="ltr">
                    +20 10 XXXX XXXX
                  </a>
                  <span className="text-xs text-neutral-500 block">{t.contact.phoneSub}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
