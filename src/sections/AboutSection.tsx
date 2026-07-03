import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import ContactModal from '../components/ContactModal'

const accordionLabel = "text-[#0066FF] text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold"

interface AccordionSectionProps {
  label: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function AccordionSection({ label, isOpen, onToggle, children }: AccordionSectionProps) {
  return (
    <div className="border-b border-white/[0.06] pb-6 sm:pb-8">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between group cursor-pointer py-2"
      >
        <span className={accordionLabel}>{label}</span>
        <motion.span
          className="text-[#0066FF] text-xl sm:text-2xl font-light"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 sm:gap-5 pt-4 sm:pt-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AboutSection() {
  const [smiling, setSmiling] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const toggle = (name: string) => setOpenSection(prev => prev === name ? null : name)

  useEffect(() => {
    const onTouchStart = () => setSmiling(true)
    const onTouchEnd = () => setSmiling(false)
    const isTouch = 'ontouchstart' in window
    if (isTouch) {
      window.addEventListener('touchstart', onTouchStart, { passive: true })
      window.addEventListener('touchend', onTouchEnd, { passive: true })
    }
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-12 py-20 sm:py-24 overflow-hidden"
    >
      <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 z-10 w-full max-w-6xl">
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col items-center gap-3">
            <span className="section-label">About</span>
            <h2
              className="editorial-heading text-center"
              style={{ fontSize: 'clamp(2rem, 7vw, 72px)' }}
            >
              Chi sono
            </h2>
          </div>
        </FadeIn>

        {/* Face */}
        <FadeIn delay={0.15} y={30}>
          <div className="flex items-center justify-center">
            <motion.div
              className="relative cursor-pointer"
              onMouseEnter={() => setSmiling(true)}
              onMouseLeave={() => setSmiling(false)}
              onTouchStart={() => setSmiling(true)}
              onTouchEnd={() => setSmiling(false)}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  width: 'clamp(350px, 45vw, 650px)',
                  height: 'clamp(350px, 45vw, 650px)',
                  background: 'radial-gradient(circle, rgba(0,102,255,0.2) 0%, transparent 60%)',
                  borderRadius: '50%',
                  filter: 'blur(60px)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img
                src="/images/face-3d-sm.png"
                alt="Gabriele"
                className="w-[180px] sm:w-[280px] md:w-[360px] max-w-full relative z-10"
                style={{
                  borderRadius: '50%',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  filter: 'drop-shadow(0 0 80px rgba(0,102,255,0.35))',
                }}
                animate={{ opacity: smiling ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="/images/face-smile.png"
                alt="Gabriele"
                className="absolute inset-0 w-[180px] sm:w-[280px] md:w-[360px] max-w-full z-10"
                style={{
                  borderRadius: '50%',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  filter: 'drop-shadow(0 0 80px rgba(0,102,255,0.35))',
                }}
                animate={{ opacity: smiling ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </FadeIn>

        {/* Accordion sections */}
        <div className="w-full max-w-3xl mx-auto flex flex-col gap-2">
          <FadeIn delay={0.2} y={20}>
            <AccordionSection
              label="MI PRESENTO"
              isOpen={openSection === 'presento'}
              onToggle={() => toggle('presento')}
            >
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Sono <span className="text-[#0066FF] font-medium">Gabriele Randino</span>, un <span className="text-[#0066FF] font-medium">creativo digitale</span> con la fissa di trasformare idee in contenuti che funzionano davvero.
              </p>
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Nonostante la mia giovane età, ho già maturato esperienze concrete collaborando con brand, aziende e professionisti in contesti diversi e stimolanti. Questo mi ha permesso di sviluppare una visione pratica della comunicazione: non solo estetica, ma <span className="text-[#0066FF] font-medium">strategia, impatto e risultati</span>.
              </p>
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Nel tempo ho costruito un approccio basato sulla <span className="text-[#0066FF] font-medium">sperimentazione continua</span>, sull'<span className="text-[#0066FF] font-medium">attenzione ai dettagli</span> e sulla capacità di adattarmi a ogni progetto. Ogni lavoro per me è un'opportunità per creare qualcosa che non sia solo bello da vedere, ma che abbia un senso, una direzione e un obiettivo chiaro.
              </p>
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Oggi aiuto aziende e professionisti a costruire una <span className="text-[#0066FF] font-medium">presenza digitale solida e riconoscibile</span>, combinando creatività e metodo per ottenere risultati concreti e misurabili.
              </p>
            </AccordionSection>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <AccordionSection
              label="LE MIE COMPETENZE"
              isOpen={openSection === 'competenze'}
              onToggle={() => toggle('competenze')}
            >
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Mi occupo di <span className="text-[#0066FF] font-medium">comunicazione visiva a 360°</span>, unendo creatività, tecnica e strategia.
              </p>
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Realizzo <span className="text-[#0066FF] font-medium">video pensati per i social</span>, progettati per catturare l'attenzione e generare engagement. Sviluppo <span className="text-[#0066FF] font-medium">identità visive complete</span>, capaci di distinguere un brand e renderlo riconoscibile nel tempo. Creo <span className="text-[#0066FF] font-medium">strategie editoriali mirate</span>, basate su obiettivi reali e risultati concreti. Progetto e sviluppo <span className="text-[#0066FF] font-medium">siti web su misura</span>, dove estetica e performance lavorano insieme.
              </p>
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Lavoro quotidianamente con software professionali per garantire il massimo della qualità in ogni fase del progetto, dalla produzione alla post-produzione. Integro strumenti di <span className="text-[#0066FF] font-medium">intelligenza artificiale</span> nei miei processi per ottimizzare tempi, migliorare le performance e spingere ancora di più il lato creativo.
              </p>
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Affianco a tutto questo anche competenze nello <span className="text-[#0066FF] font-medium">sviluppo web</span>, permettendomi di offrire soluzioni complete e coerenti sotto ogni aspetto.
              </p>
            </AccordionSection>
          </FadeIn>

          <FadeIn delay={0.4} y={20}>
            <AccordionSection
              label="ESPERIENZE"
              isOpen={openSection === 'esperienze'}
              onToggle={() => toggle('esperienze')}
            >
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Nel mio percorso ho avuto modo di collaborare con realtà diverse, accumulando esperienza sul campo e confrontandomi con esigenze e obiettivi differenti.
              </p>
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Ho lavorato con squadre di calcio come <span className="text-[#0066FF] font-medium">l'UG Manduria 1926</span>, storica matricola del calcio pugliese, contribuendo alla creazione di contenuti e alla valorizzazione della loro immagine.
              </p>
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Ho seguito la rinascita comunicativa di <span className="text-[#0066FF] font-medium">Pic Nic</span>, storico ristorante sul litorale brindisino, curando la creazione dei contenuti e contribuendo a dare nuova vita alla sua presenza digitale.
              </p>
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Ho realizzato contenuti per <span className="text-[#0066FF] font-medium">Brinmate</span>, rivenditore ufficiale <span className="text-[#0066FF] font-medium">Sika</span> con oltre 20 anni di esperienza nel settore, supportando la comunicazione visiva e il posizionamento online.
              </p>
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Oltre a queste collaborazioni, ho lavorato con altri brand, aziende e professionisti su progetti che spaziano dai <span className="text-[#0066FF] font-medium">cortometraggi</span> alle <span className="text-[#0066FF] font-medium">campagne social</span>, fino alla creazione di <span className="text-[#0066FF] font-medium">identità visive</span> e <span className="text-[#0066FF] font-medium">siti web su misura</span>.
              </p>
              <p className="text-[#D7E2EA] font-light leading-[1.7]" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}>
                Ogni esperienza mi ha permesso di crescere, migliorare e costruire un metodo di lavoro sempre più solido ed efficace.
              </p>
            </AccordionSection>
          </FadeIn>
        </div>

        <FadeIn delay={0.5} y={15}>
          <motion.div
            onMouseEnter={() => setSmiling(true)}
            onMouseLeave={() => setSmiling(false)}
          >
            <ContactButton label="Lavoriamo insieme" onClick={() => setModalOpen(true)} />
          </motion.div>
        </FadeIn>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
