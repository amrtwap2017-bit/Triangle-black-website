import { useState, useRef, useCallback, useEffect } from 'react'
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
  const tickingRef = useRef(false);
  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;  

    // Calculate how far down the page (0 to 1)
    const scrollProgress = scrollY / (documentHeight - windowHeight);

    // This allows CSS to know scroll position for effects
    document.documentElement.style.setProperty(
      '--scroll-progress',
      scrollProgress.toString()
    );

    // Add class to navbar when user scrolls down
    if (scrollY > 80) {
      document.documentElement.classList.add('scrolled');
    } else {
      document.documentElement.classList.remove('scrolled');
    }

    // Find all sections and animate them in when visible
    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const offset = windowHeight * 0.85;

      if (rect.top <= offset) {
        section.classList.add('is-visible');
      }
    });

    tickingRef.current = false;}, []);

  const handleScroll = useCallback(() => {
    if (!tickingRef.current) {
      window.requestAnimationFrame(updateActiveSection);
      tickingRef.current = true;
    }
  }, [updateActiveSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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
