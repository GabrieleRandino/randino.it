import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ServicesSection from './sections/ServicesSection'
import ContactSection from './sections/ContactSection'
import ParticleBackground from './components/ParticleBackground'
import CursorGlow from './components/CursorGlow'
import IntroOverlay from './components/IntroOverlay'
import SectionTransition from './components/SectionTransition'
import MusicPlayer from './components/MusicPlayer'
import LanguageContext from './context/LanguageContext'
import FeaturedWorksSection from './sections/FeaturedWorksSection'

export type Page = 'home' | 'projects' | 'about' | 'skills' | 'services' | 'contact'

export default function App() {
  const [lang, setLang] = useState<'it' | 'en'>('it')
  const [page, setPage] = useState<Page>('home')
  const [introReady, setIntroReady] = useState(false)
  const [transition, setTransition] = useState<{ from: Page | null; to: Page } | null>(null)

  const navigate = useCallback((p: Page) => {
    if (p === page) return
    const from = page
    setTransition({ from, to: p })
    setTimeout(() => {
      setPage(p)
      window.scrollTo({ top: 0 })
    }, 400)
    setTimeout(() => {
      setTransition(null)
    }, 900)
  }, [page])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <AnimatePresence>
        {introReady ? (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <ParticleBackground />
            <CursorGlow />
            <Header currentPage={page} onNavigate={navigate} />
            <MusicPlayer />

            <div style={{ overflowX: 'clip' }} className="relative z-10 bg-grid">
              {page === 'home' && (
                <>
                  <HeroSection />
                  <FeaturedWorksSection />
                </>
              )}
              {page === 'projects' && <ProjectsSection />}
              {page === 'about' && <AboutSection />}
              {page === 'skills' && <SkillsSection />}
              {page === 'services' && <ServicesSection />}
              {page === 'contact' && <ContactSection />}

            <footer className="border-t border-white/[0.04] py-12 sm:py-16 px-4 sm:px-8 md:px-12">
              <div className="max-w-6xl mx-auto">
                <div className="hidden md:grid grid-cols-3 items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/logo-footer.png"
                      alt="Randino Studios"
                      className="h-8 sm:h-10 w-auto opacity-60"
                    />
                    <span className="text-[#8B95A0]/50 text-xs uppercase tracking-widest font-light">
                      RANDINO<sup>®</sup>
                    </span>
                  </div>

                  <span className="text-[#8B95A0]/50 text-[10px] uppercase tracking-[0.2em] font-light text-center italic">
                    not an agency... just a creative mind
                  </span>

                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-[#8B95A0]/50 text-[11px] uppercase tracking-widest font-light">
                      GABRIELE RANDINO
                    </span>
                    <div className="flex items-center gap-5">
                      <a
                        href="mailto:gabrielerandino06@gmail.com"
                        className="text-[#8B95A0]/50 hover:text-[#0066FF] transition-colors"
                        aria-label="Email"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="M22 4L12 13L2 4" />
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com/randino.works"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B95A0]/50 hover:text-[#0066FF] transition-colors"
                        aria-label="Instagram"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" />
                          <circle cx="12" cy="12" r="5" />
                          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                        </svg>
                      </a>
                      <a
                        href="tel:+393883889663"
                        className="text-[#8B95A0]/50 hover:text-[#0066FF] transition-colors"
                        aria-label="Telefono"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </a>
                    </div>
                    <span className="text-[#8B95A0]/40 text-[10px] uppercase tracking-widest font-light">
                      Via Luigi Spazzapan, 2, Brindisi (BR) 72100
                    </span>
                    <span className="text-[#8B95A0]/35 text-[9px] uppercase tracking-widest font-light">
                      C.F. RNDGRL06M29B180H
                    </span>
                  </div>
                </div>

                <div className="md:hidden flex flex-col items-center gap-2 py-2">
                  <span className="text-[#8B95A0]/50 text-[11px] uppercase tracking-widest font-light">
                    GABRIELE RANDINO
                  </span>
                  <span className="text-[#8B95A0]/40 text-[9px] uppercase tracking-[0.15em] font-light text-center italic">
                    not an agency... just a creative mind
                  </span>
                  <div className="flex items-center gap-5 pt-1">
                    <a href="mailto:gabrielerandino06@gmail.com" className="text-[#8B95A0]/50 hover:text-[#0066FF] transition-colors" aria-label="Email">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13L2 4"/></svg>
                    </a>
                    <a href="https://instagram.com/randino.works" target="_blank" rel="noopener noreferrer" className="text-[#8B95A0]/50 hover:text-[#0066FF] transition-colors" aria-label="Instagram">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                    </a>
                    <a href="tel:+393883889663" className="text-[#8B95A0]/50 hover:text-[#0066FF] transition-colors" aria-label="Telefono">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </a>
                  </div>
                  <span className="text-[#8B95A0]/35 text-[8px] uppercase tracking-widest font-light">
                    C.F. RNDGRL06M29B180H
                  </span>
                </div>
              </div>
            </footer>
          </div>

          <AnimatePresence mode="wait">
            {transition && (
              <SectionTransition
                key={`${transition.from ?? ''}-${transition.to}`}
                from={transition.from}
                to={transition.to}
              />
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        <IntroOverlay key="intro" onComplete={() => setIntroReady(true)} />
      )}
    </AnimatePresence>
    </LanguageContext.Provider>
  )
}
