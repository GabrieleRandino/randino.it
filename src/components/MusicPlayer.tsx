import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations'

export default function MusicPlayer() {
  const { lang } = useLanguage()
  const t = translations
  const [playing, setPlaying] = useState(false)
  const ref = useRef<HTMLAudioElement>(null)
  const fadeRef = useRef<number | null>(null)

  const toggle = () => {
    const audio = ref.current
    if (!audio) return
    if (playing) {
      if (fadeRef.current) cancelAnimationFrame(fadeRef.current)
      audio.pause()
      setPlaying(false)
    } else {
      audio.currentTime = 54
      audio.volume = 0
      audio.play().then(() => {
        setPlaying(true)
        const target = 0.3
        const duration = 2000
        const t0 = performance.now()
        const fade = () => {
          const elapsed = performance.now() - t0
          const t = Math.min(elapsed / duration, 1)
          audio.volume = t * target
          if (t < 1) fadeRef.current = requestAnimationFrame(fade)
        }
        fadeRef.current = requestAnimationFrame(fade)
      }).catch(() => {})
    }
  }

  return (
    <>
      <audio ref={ref} src="/music/background.mp3?v=3" loop preload="auto" />
      <motion.button
        onClick={toggle}
        className="fixed bottom-6 left-6 z-50 px-4 py-2.5 sm:px-3 sm:py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-colors cursor-pointer touch-manipulation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#8B95A0] text-[11px] sm:text-[10px] uppercase tracking-[0.15em] font-light whitespace-nowrap font-medium">
          sound mood {playing ? t.music.on[lang] : t.music.off[lang]}
        </span>
      </motion.button>
    </>
  )
}
