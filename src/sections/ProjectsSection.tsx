import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import WorkModal from '../components/WorkModal'
import projects from '../data/projects'
import type { Project } from '../data/projects'

interface GroupConfig {
  category: string
  title: string
  shortDesc: string
  description: string
  layout?: 'masonry' | 'videos-row'
}

const groups: GroupConfig[] = [
  {
    category: 'Pic Nic',
    title: 'Pic Nic',
    shortDesc: 'Restaurant e Beach Club, Brindisi.',
    description: 'Contenuti fotografici per Pic Nic, ristorante storico sulla scogliera brindisina. Ogni scatto racconta gli interni curati, la vista mare e il mood unico del locale, pensato per la comunicazione social e la valorizzazione del brand.',
    layout: 'videos-row',
  },
  {
    category: 'Crianza Catering Pugliese',
    title: 'Crianza Catering Pugliese',
    shortDesc: 'Catering pugliese, tradizione e territorio.',
    description: 'Video per Crianza Catering Pugliese, un\'eccellenza gastronomica che porta in tavola i sapori autentici della tradizione pugliese. Ogni piatto è un viaggio nei prodotti locali, raccontato attraverso immagini che celebrano la materia prima e la passione artigianale.',
  },
  {
    category: 'Stars League',
    title: 'Stars League',
    shortDesc: 'Torneo estivo di calcio a Brindisi.',
    description: 'Copertura video per la Stars League, torneo estivo di calcio che ha animato Brindisi. Riprese dinamiche, trailer e contenuti social per raccontare l\'energia del torneo.',
  },
  {
    category: 'BrinMalte',
    title: 'BrinMalte',
    shortDesc: 'Personal brand per Gianmarco, rivenditore Sika. In collaborazione con templio.it.',
    description: 'Progetto di personal branding per BrinMalte, rivenditore ufficiale Sika. In collaborazione con templio.it, stiamo costruendo l\'identità digitale di Gianmarco, il proprietario, attraverso una comunicazione che unisce competenza tecnica e storytelling autentico. Ogni contenuto è pensato per posizionare il brand come punto di riferimento nel settore delle impermeabilizzazioni in Puglia, trasformando la conoscenza artigianale in autorità di mercato.',
  },
]

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [loaded, setLoaded] = useState(false)
  const isImage = project.type === 'image'

  return (
    <div
      className="group relative overflow-hidden rounded-sm bg-black cursor-pointer break-inside-avoid mb-2"
      onClick={onClick}
    >
      {isImage ? (
        <img
          src={project.src}
          alt={project.title}
          className={`w-full h-auto object-cover align-middle transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <div className="relative aspect-[9/16]">
          <video
            src={project.src}
            poster={project.cover || undefined}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setLoaded(true)}
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {project.title && (
        <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <p className="text-white/80 text-[10px] sm:text-xs font-medium truncate">{project.title}</p>
        </div>
      )}
    </div>
  )
}

function ProjectGroup({ config, onSelect }: { config: GroupConfig; onSelect: (p: Project) => void }) {
  const [open, setOpen] = useState(false)
  const items = projects.filter(p => p.category === config.category)

  const videos = config.layout === 'videos-row' ? items.filter(p => p.type === 'video') : []
  const photos = config.layout === 'videos-row' ? items.filter(p => p.type === 'image') : []

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-8 py-5 sm:py-6 border-t border-white/[0.06] hover:border-white/[0.12] transition-colors cursor-pointer text-left"
      >
        <div className="flex items-center gap-4">
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="text-white/30 text-lg sm:text-xl font-light leading-none"
          >
            →
          </motion.span>
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-medium tracking-wide">
            {config.title}
          </h3>
        </div>

        <p className="text-white/40 text-xs sm:text-sm leading-relaxed max-w-lg">
          {config.shortDesc}
        </p>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key={config.category}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6 sm:pt-8 pb-4 border-b border-white/[0.06]">
              <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-2xl">
                {config.description}
              </p>
            </div>

            {config.layout === 'videos-row' ? (
              <>
                <div
                  className="flex gap-3 overflow-x-auto pb-4 pt-6 sm:pt-8 scrollbar-thin"
                  style={{ scrollSnapType: 'x mandatory' }}
                >
                  {videos.map((project) => (
                    <div
                      key={project.id}
                      className="flex-shrink-0 w-[160px] sm:w-[200px]"
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      <ProjectCard
                        project={project}
                        onClick={() => onSelect(project)}
                      />
                    </div>
                  ))}
                </div>
                <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-2 pb-6 sm:pb-8">
                  {photos.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => onSelect(project)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-2 pt-6 sm:pt-8 pb-6 sm:pb-8">
                {items.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => onSelect(project)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <section id="projects" className="relative bg-[#0C0C0C] min-h-screen py-16 sm:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
          <FadeIn delay={0} y={30}>
            <div className="flex flex-col items-center gap-3 mb-6 sm:mb-8">
              <span className="section-label">Portfolio</span>
              <h2
                className="editorial-heading text-center"
                style={{ fontSize: 'clamp(2rem, 7vw, 72px)' }}
              >
                Progetti
              </h2>
            </div>
          </FadeIn>

          {groups.map(g => (
            <ProjectGroup key={g.category} config={g} onSelect={setSelected} />
          ))}

          <div className="border-t border-white/[0.06]" />
        </div>
      </section>

      {selected && (
        <WorkModal
          work={{
            id: selected.id,
            title: selected.title,
            description: selected.description || '',
            type: selected.type,
            cover: selected.cover || '',
            src: selected.src,
          }}
          onClose={() => setSelected(null)}
          hideDetails
        />
      )}
    </>
  )
}
