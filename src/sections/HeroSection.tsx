import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col overflow-x-clip pt-0 sm:pt-20 snap-start">
      {/* Centered Logo */}
      <div className="flex items-center justify-center px-4 sm:px-8 md:px-12 h-full">
        <FadeIn delay={0.2} y={30}>
          <div className="-mt-16 sm:mt-0">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/images/logo.png"
              alt="Randino Studios"
              className="w-[320px] sm:w-[450px] md:w-[580px] lg:w-[700px] max-w-full mx-auto"
              style={{
                filter: 'drop-shadow(0 0 60px rgba(0,102,255,0.2))',
                display: 'block',
              }}
            />
          </motion.div>
        </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-32 sm:bottom-12 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center justify-center gap-2 sm:gap-3"
        >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-white/40">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-light whitespace-nowrap">
          scroll for my works
        </span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-white/40">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
