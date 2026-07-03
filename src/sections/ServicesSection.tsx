import { motion } from 'framer-motion'
import {
  Clapperboard,
  Palette,
  Share2,
  Monitor,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'

const services = [
  {
    number: '01',
    name: 'Videomaking & Montaggio',
    description:
      'Produzione video professionale per brand. Dalla regia al montaggio, realizzo contenuti promozionali, social clip e corti pensati per comunicare con impatto.',
    icon: Clapperboard,
    color: '#EF4444',
  },
  {
    number: '02',
    name: 'Brand Identity & Graphic Design',
    description:
      'Costruzione e sviluppo dell\'identità visiva completa: logo, palette, tipografia, linee guida e contenuti visivi per social, stampa e digitale. Ogni elemento studiato per un brand coerente.',
    icon: Palette,
    color: '#8B5CF6',
  },
  {
    number: '03',
    name: 'Social Media Strategy',
    description:
      'Gestione strategica dei social media. Pianificazione editoriale, creazione contenuti e ottimizzazione per engagement, crescita e risultati misurabili.',
    icon: Share2,
    color: '#10B981',
  },
  {
    number: '04',
    name: 'Siti Web & Web Design',
    description:
      'Siti web moderni e performanti per aziende e professionisti. Design curato, esperienza utente ottimizzata e presenza digitale efficace.',
    icon: Monitor,
    color: '#F59E0B',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#0F0F0F] px-4 sm:px-8 md:px-12 py-20 sm:py-28 md:py-36 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30}>
          <div className="flex flex-col items-center gap-3 mb-16 sm:mb-20 md:mb-24">
            <span className="section-label">Servizi</span>
            <h2
              className="editorial-heading text-center"
              style={{ fontSize: 'clamp(2rem, 7vw, 72px)' }}
            >
              Cosa <span className="text-[#0066FF]">faccio</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.1} y={15}>
              <motion.div
                whileHover="hover"
                className="group relative cursor-default h-full"
              >
                <motion.div
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative p-6 sm:p-7 rounded-xl border border-white/[0.04] bg-white/[0.02] overflow-hidden h-full flex flex-col"
                >
                  {/* Animated gradient border on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none rounded-xl"
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      padding: 1,
                      background: `linear-gradient(135deg, ${service.color}00, ${service.color}44, ${service.color}00)`,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  {/* Hover bg glow */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: `linear-gradient(135deg, ${service.color}10, transparent 60%)`,
                    }}
                  />

                  <div className="flex flex-col gap-4 sm:gap-5 relative z-10 h-full">
                    {/* Icon + number row */}
                    <div className="flex items-center justify-between">
                      <motion.div
                        variants={{ hover: { scale: 1.1, rotate: -5 } }}
                        transition={{ duration: 0.3 }}
                        className="w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-lg flex items-center justify-center"
                        style={{
                          background: `${service.color}18`,
                          border: `1px solid ${service.color}22`,
                        }}
                      >
                        <service.icon
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          style={{ color: service.color }}
                        />
                      </motion.div>
                      <span
                        className="font-mono text-xs sm:text-sm font-medium"
                        style={{ color: service.color }}
                      >
                        {service.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-[#D7E2EA] font-semibold"
                      style={{ fontSize: 'clamp(1rem, 1.6vw, 1.35rem)' }}
                    >
                      {service.name}
                    </h3>

                    {/* Description always visible */}
                    <p
                      className="text-[#8B95A0] font-light leading-relaxed mt-auto"
                      style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
