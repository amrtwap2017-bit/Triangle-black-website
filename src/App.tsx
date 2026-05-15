import { useState, useEffect, useCallback } from 'react';
import { translations, Lang } from './data/content';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlight } from './components/Highlight';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  // ═══════════════════════ STATE ═══════════════════════
  const [currentLang, setCurrentLang] = useState<Lang>('en');
  const [activeTab, setActiveTab] = useState('home');
  const [initialLoading, setInitialLoading] = useState(true);
  const [prefilledService, setPrefilledService] = useState('');

  const t = translations[currentLang];

  // ═══════════════════════ HTML DIR & LANG ═══════════════════════
  useEffect(() => {
    const html = document.documentElement;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    html.lang = currentLang;
  }, [currentLang]);

  // ═══════════════════════ SCROLL TRACKING ═══════════════════════
  useEffect(() => {
    let ticking = false;
    const sections = ['home', 'about', 'services', 'projects', 'contact'];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 250;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveTab(id);
          break;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ═══════════════════════ NAV HANDLER ═══════════════════════
  const handleSetTab = useCallback((tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(tabId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // ═══════════════════════ SERVICE SELECT ═══════════════════════
  const handleSelectService = useCallback((serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setActiveTab('contact');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // ═══════════════════════ RENDER ═══════════════════════
  return (
    <div className="bg-black min-h-screen text-white">
      {/* LOADING SCREEN */}
      {initialLoading && (
        <LoadingScreen onComplete={() => setInitialLoading(false)} />
      )}

      {/* NAVBAR */}
      <Navbar
        currentLang={currentLang}
        setLang={setCurrentLang}
        activeTab={activeTab}
        setActiveTab={handleSetTab}
        t={t}
      />

      {/* MAIN CONTENT */}
      <main>
        <Hero t={t} setActiveTab={handleSetTab} currentLang={currentLang} />
        <Highlight t={t} currentLang={currentLang} />
        <About t={t} currentLang={currentLang} />
        <Services t={t} currentLang={currentLang} onSelectService={handleSelectService} />
        <Projects t={t} currentLang={currentLang} />
        <Testimonials t={t} currentLang={currentLang} />
        <Contact t={t} currentLang={currentLang} prefilledService={prefilledService} />
      </main>

      {/* FOOTER */}
      <Footer t={t} currentLang={currentLang} setActiveTab={handleSetTab} />

      {/* WHATSAPP FLOAT */}
      <WhatsAppWidget t={t} currentLang={currentLang} />
    </div>
  );
}
