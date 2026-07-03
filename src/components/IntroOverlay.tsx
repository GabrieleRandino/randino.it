import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface IntroOverlayProps {
  onComplete: () => void
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const called = useRef(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!called.current) {
        called.current = true
        onComplete()
      }
    }, 1400)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#080808]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.3, filter: 'blur(20px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img
          src="/images/logo.png"
          alt="Randino"
          className="w-[300px] sm:w-[450px] md:w-[580px] lg:w-[700px] max-w-full mx-auto"
          style={{
            display: 'block',
            filter: 'drop-shadow(0 0 80px rgba(0,102,255,0.3))',
          }}
        />
      </motion.div>
    </motion.div>
  )
}
