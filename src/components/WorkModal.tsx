import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Work } from '../data/works'

interface WorkModalProps {
  work: Work | null
  onClose: () => void
  hideDetails?: boolean
}

export default function WorkModal({ work, onClose, hideDetails }: WorkModalProps) {
  useEffect(() => {
    if (work) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
    return () => { document.documentElement.style.overflow = '' }
  }, [work])
  return createPortal(
    <AnimatePresence>
      {work && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-5xl bg-[#0F0F0F] border border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 transition-colors text-white/70 hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {work.type === 'video' && work.src ? (
              <div className="w-full flex items-center justify-center bg-black" style={{ maxHeight: '70vh' }}>
                <video
                  key={work.id}
                  className="w-full h-full object-contain"
                  src={work.src}
                  controls
                  autoPlay
                  playsInline
                  style={{ maxHeight: '70vh' }}
                />
              </div>
            ) : work.src ? (
              <img
                src={work.src}
                alt={work.title}
                className="w-full h-auto max-h-[70vh] object-contain bg-black"
              />
            ) : (
              <div className="w-full aspect-video bg-[#1a1a2e] flex items-center justify-center">
                <span className="text-white/20 text-6xl font-mono font-bold">{work.id}</span>
              </div>
            )}

            {!hideDetails && (
              <div className="p-5 sm:p-6">
                <h3 className="text-[#D7E2EA] text-lg sm:text-xl font-medium uppercase tracking-widest">
                  {work.title}
                </h3>
                <p className="text-[#8B95A0] text-sm font-light mt-1.5 leading-relaxed">
                  {work.description}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
