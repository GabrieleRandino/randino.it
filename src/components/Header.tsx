import { useCallback, useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { Page } from '../App'

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: 'Chi sono', page: 'about' },
  { label: 'Skills', page: 'skills' },
  { label: 'Servizi', page: 'services' },
  { label: 'Progetti', page: 'projects' },
  { label: 'Contatti', page: 'contact' },
]

interface HeaderProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

const FACE_FRAMES = [
  '/images/face-sequence/2.png',
  '/images/face-sequence/4.png',
  '/images/face-sequence/5.png',
]

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [winking, setWinking] = useState(false)
  const [faceFrame, setFaceFrame] = useState(0)
  const scrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const body = document.body
    if (menuOpen) {
      scrollY.current = window.scrollY
      body.style.overflow = 'hidden'
      body.style.position = 'fixed'
      body.style.top = `-${scrollY.current}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'
    } else {
      body.style.overflow = ''
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      window.scrollTo(0, scrollY.current)
    }
    return () => {
      body.style.overflow = ''
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
    }
  }, [menuOpen])

  const scrollToTop = useCallback(() => {
    const html = document.documentElement
    const snap = html.style.scrollSnapType
    html.style.scrollSnapType = ''
    html.scrollTop = 0
    document.body.scrollTop = 0
    window.scroll(0, 0)
    requestAnimationFrame(() => {
      html.scrollTop = 0
      document.body.scrollTop = 0
      window.scroll(0, 0)
      html.style.scrollSnapType = snap
    })
  }, [])

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    if (currentPage === 'home') {
      scrollY.current = 0
      setMenuOpen(false)
      scrollToTop()
      setFaceFrame(0)
      setWinking(true)
    } else {
      setMenuOpen(false)
      onNavigate('home')
    }
  }, [currentPage, onNavigate, scrollToTop])

  useEffect(() => {
    if (!winking) return
    const t1 = setTimeout(() => setFaceFrame(1), 500)
    const t2 = setTimeout(() => setFaceFrame(2), 700)
    const t3 = setTimeout(() => {
      setWinking(false)
    }, 1200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [winking])

  const handleNav = useCallback((page: Page) => (e: React.MouseEvent) => {
    e.preventDefault()
    onNavigate(page)
    setMenuOpen(false)
  }, [onNavigate])

  const navContent = (
    <nav className="flex items-center px-4 sm:px-8 md:px-12 h-16 sm:h-20">
      <a href="#" className="flex-shrink-0" onClick={handleLogoClick}>
        <img
          src="/images/logo.png"
          alt="Randino Studios"
            className="h-12 sm:h-16 md:h-20 w-auto"
        />
      </a>
      <div className="hidden md:flex items-center gap-8 lg:gap-12 mx-auto">
        {NAV_ITEMS.map(({ label, page }) => (
          <a
            key={label}
            href="#"
            onClick={handleNav(page)}
            className={`font-medium uppercase tracking-widest text-sm transition-colors duration-200 ${
              currentPage === page ? 'text-[#0066FF]' : 'text-[#D7E2EA] hover:text-[#0066FF]'
            }`}
          >
            {label}
          </a>
        ))}
      </div>
      <button
        className="md:hidden ml-auto relative w-10 h-10 flex items-center justify-center cursor-pointer bg-transparent border-0"
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Menu"
      >
        <div className="flex flex-col items-center justify-center gap-[5px] w-5">
          <motion.span
            className="block h-[1.5px] w-full bg-[#D7E2EA] rounded-full"
            animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-[1.5px] w-full bg-[#D7E2EA] rounded-full"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block h-[1.5px] w-full bg-[#D7E2EA] rounded-full"
            animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </button>
    </nav>
  )

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[99999] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
        }}
      >
        {navContent}
      </header>

      {createPortal(
        <AnimatePresence>
          {winking && (
            <motion.div
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#080808]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                src={FACE_FRAMES[faceFrame]}
                alt=""
                className="w-[60vw] sm:w-[50vw] md:w-[40vw] h-auto object-contain"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </motion.div>
          )}
          {menuOpen && (
            <motion.div
              className="fixed inset-0 z-[9999] bg-[#080808]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            >
              {NAV_ITEMS.map(({ label, page }, i) => (
                <motion.a
                  key={label}
                  href="#"
                  onClick={(e) => { handleNav(page)(e); setMenuOpen(false) }}
                  className={`text-2xl uppercase tracking-[0.25em] font-medium transition-colors duration-200 ${
                    currentPage === page ? 'text-[#0066FF]' : 'text-[#D7E2EA] hover:text-[#0066FF]'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
