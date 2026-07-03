import { useState } from 'react'
import ContactButton from '../components/ContactButton'
import ContactModal from '../components/ContactModal'
import FadeIn from '../components/FadeIn'

export default function ContactSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-4 sm:px-8 md:px-12 text-center min-h-screen flex flex-col items-center justify-center py-12 sm:py-28 md:py-36"
    >
      <div className="max-w-4xl mx-auto w-full">
        <FadeIn delay={0} y={30}>
          <span className="section-label justify-center">Contatti</span>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2
            className="editorial-heading mt-4 sm:mt-6 leading-[0.85]"
            style={{ fontSize: 'clamp(2rem, 7vw, 72px)' }}
          >
            Lavoriamo<br />
            <span className="text-[#0066FF]">insieme</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p className="text-[#8B95A0] font-light max-w-lg mx-auto mt-5 sm:mt-8 mb-7 sm:mb-10" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)' }}>
            Raccontami il tuo progetto. Creiamo qualcosa che funzioni davvero.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <ContactButton onClick={() => setModalOpen(true)} />
        </FadeIn>
      </div>

      <FadeIn delay={0.4} y={15}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 mt-12 sm:mt-20">
          <a
            href="mailto:gabrielerandino06@gmail.com"
            className="flex items-center gap-2.5 text-[#8B95A0] hover:text-[#0066FF] transition-colors text-xs uppercase tracking-widest font-light no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13L2 4" />
            </svg>
            gabrielerandino06@gmail.com
          </a>

          <a
            href="https://instagram.com/randino.works"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-[#8B95A0] hover:text-[#0066FF] transition-colors text-xs uppercase tracking-widest font-light no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            @randino.works
          </a>

          <a
            href="tel:+393883889663"
            className="flex items-center gap-2.5 text-[#8B95A0] hover:text-[#0066FF] transition-colors text-xs uppercase tracking-widest font-light no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +39 388 388 9663
          </a>
        </div>
      </FadeIn>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
