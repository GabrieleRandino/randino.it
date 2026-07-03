import { useRef, useState, useEffect, useCallback } from 'react'
import WorkModal from '../components/WorkModal'
import works from '../data/works'
import type { Work } from '../data/works'

export default function FeaturedWorksSection() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)
  const [visibleIndex, setVisibleIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const handlePlay = useCallback((work: Work) => {
    setSelectedWork(work)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    html.style.scrollSnapType = 'y mandatory'
    html.style.scrollPaddingTop = '0px'
    return () => {
      html.style.scrollSnapType = ''
      html.style.scrollPaddingTop = ''
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'))
            if (!isNaN(idx)) {
              setVisibleIndex(idx)
            }
          }
        }
      },
      { threshold: 0.6 }
    )

    const videos = sectionRef.current?.querySelectorAll('[data-index]')
    videos?.forEach((v) => observer.observe(v))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === visibleIndex) {
        video.play().catch(() => {})
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [visibleIndex])

  return (
    <>
      <div ref={sectionRef} className="bg-[#080808]">
        {works.map((work, i) => (
          <div
            key={work.id}
            data-index={i}
            className="relative w-full snap-start snap-always flex items-center justify-center bg-black overflow-hidden"
            style={{ height: '100dvh', maxHeight: '100dvh' }}
          >
            <video
              ref={(el) => { videoRefs.current[i] = el }}
              src={work.src}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              loop
              muted
              playsInline
              onClick={() => handlePlay(work)}
            />

            <button
              onClick={() => handlePlay(work)}
              className="absolute inset-0 w-full h-full cursor-pointer bg-transparent border-0"
              aria-label={`Play ${work.title}`}
            />

            <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 md:left-12 right-4 sm:right-8 md:right-12 flex items-end justify-between pointer-events-none">
              <div className="text-left">
                <h3 className="text-white text-sm sm:text-base md:text-lg font-medium uppercase tracking-widest">
                  {work.title}
                </h3>
                <p className="text-white/50 text-[10px] sm:text-xs font-light mt-0.5 max-w-md">
                  {work.description}
                </p>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); handlePlay(work) }}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 pointer-events-auto flex-shrink-0 cursor-pointer"
                aria-label="Play"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-0.5">
                  <polygon points="8,5 19,12 8,19" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
    </>
  )
}
