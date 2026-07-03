import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import type { Page } from '../App'

interface SectionTransitionProps {
  from: Page | null
  to: Page
}

const pageImages: Partial<Record<Page, string>> = {
  about: '/images/section-headings/chisono.png',
  projects: '/images/section-headings/progetti.png',
  skills: '/images/section-headings/skills.png',
  services: '/images/section-headings/servizi.png',
  contact: '/images/section-headings/contatti.png',
}

const pageFallback: Record<Page, string> = {
  home: 'Home',
  projects: 'Progetti',
  about: 'Chi sono',
  skills: 'Skills',
  services: 'Servizi',
  contact: 'Contatti',
}

export default function SectionTransition({ from, to }: SectionTransitionProps) {
  const imgSrc = pageImages[to]

  const [faceFrame, setFaceFrame] = useState(0)
  const faceFrames = [
    '/images/face-sequence/2.png',
    '/images/face-sequence/4.png',
    '/images/face-sequence/5.png',
  ]

  useEffect(() => {
    if (to !== 'home') return
    setFaceFrame(0)
    const t1 = setTimeout(() => setFaceFrame(1), 500)
    const t2 = setTimeout(() => setFaceFrame(2), 700)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [to])

  const isHome = to === 'home'
  const isAbout = to === 'about'
  const imgSizeClass = isAbout
    ? 'w-[68vw] sm:w-[58vw] md:w-[48vw]'
    : 'max-w-[60vw] sm:max-w-[50vw] md:max-w-[40vw]'

  return (
    <motion.div
      key={`${from ?? ''}-${to}`}
      className="fixed inset-0 z-[9998] flex items-center justify-center spotted-overlay"
      initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 1 }}
      animate={{ clipPath: 'circle(75% at 50% 50%)', opacity: 1 }}
      exit={{ clipPath: 'circle(0% at 50% 50%)', opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {isHome ? (
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex items-center justify-center"
        >
          <img
            src={faceFrames[faceFrame]}
            alt=""
            className="w-[60vw] sm:w-[50vw] md:w-[40vw] h-auto object-contain"
          />
        </motion.div>
      ) : imgSrc ? (
        <motion.img
          src={imgSrc}
          alt={pageFallback[to]}
          className={`${imgSizeClass} h-auto object-contain`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        />
      ) : (
        <motion.span
          className="text-white/20 text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.3em]"
          style={{ fontFamily: 'Righteous, cursive' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {pageFallback[to]}
        </motion.span>
      )}
    </motion.div>
  )
}
