import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'

interface Tool {
  name: string
  category: string
  level: number
  description: string
  src?: string
  icon?: React.ReactNode
}

function CapCutLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M13.8 2.4C13.8 1.1 12.7 0 11.4 0H2.4C1.1 0 0 1.1 0 2.4v19.2C0 22.9 1.1 24 2.4 24h19.2c1.3 0 2.4-1.1 2.4-2.4V2.4C24 1.1 22.9 0 21.6 0h-6.6c1.3 0 2.4 1.1 2.4 2.4v2.4c0 4.4-3.6 8-8 8-3.5 0-6.5-2.3-7.6-5.4v10.2h13.2c4.4 0 8-3.6 8-8V4.8c0-1.3-1.1-2.4-2.4-2.4h-6.6Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  )
}

const tools: Tool[] = [
  { name: 'Blender', category: '3D Modeling', level: 75, description: 'Modellazione 3D, texturing e rendering per visual branding e contenuti promozionali.', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/blender.svg' },
  { name: 'After Effects', category: 'Motion Design', level: 85, description: 'Motion graphics, compositing e animazioni per video pubblicitari e social content.', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/adobeaftereffects.svg' },
  { name: 'Premiere Pro', category: 'Video Editing', level: 90, description: 'Montaggio video professionale, color grading e post-produzione per brand e agenzie.', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/adobepremierepro.svg' },
  { name: 'CapCut', category: 'Video Editing', level: 80, description: 'Editing rapido per contenuti social, reel e short form video con trend attuali.', icon: <CapCutLogo /> },
  { name: 'VS Code', category: 'Development', level: 60, description: 'Sviluppo web con HTML, CSS, JavaScript e React per siti vetrina e portfolio.', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'AI Tools', category: 'AI-Assisted', level: 70, description: 'Utilizzo di intelligenza artificiale per generazione contenuti, ottimizzazione creativa e automazione.', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg' },
]

const toolColors = ['#0066FF', '#8B5CF6', '#EF4444', '#10B981', '#F59E0B', '#EC4899']

export default function SkillsSection() {
  const [selected, setSelected] = useState<string | null>(null)
  const selectedTool = tools.find((t) => t.name === selected)

  return (
    <section id="skills" className="bg-[#0C0C0C] px-4 sm:px-8 md:px-12 py-20 sm:py-28 md:py-36 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={30}>
          <div className="flex flex-col items-center gap-3 mb-12 sm:mb-16 md:mb-20">
            <span className="section-label">Skills</span>
            <h2
              className="editorial-heading text-center text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2rem, 7vw, 72px)' }}
            >
              Skills
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
          {tools.map((tool, i) => (
            <FadeIn key={tool.name} delay={i * 0.06} y={15}>
              <motion.div
                className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-sm border border-white/[0.04] bg-white/[0.02] cursor-pointer relative overflow-hidden"
                onClick={() => setSelected(selected === tool.name ? null : tool.name)}
                whileHover={{ scale: 1.05, y: -4, borderColor: 'rgba(0,102,255,0.2)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Glow on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${toolColors[i]}15 0%, transparent 60%)`,
                  }}
                />
                <motion.div
                  className="relative z-10 transition-all duration-300 group-hover:scale-110 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {tool.src ? (
                    <img
                      src={tool.src}
                      alt={tool.name}
                      className="w-full h-full object-contain"
                      style={{ filter: 'brightness(0) invert(0.85)' }}
                    />
                  ) : (
                    tool.icon
                  )}
                </motion.div>
                <span className="text-[#D7E2EA] font-medium text-[0.6rem] sm:text-xs text-center leading-tight relative z-10">
                  {tool.name}
                </span>
                <span className="text-[#8B95A0] font-light text-[0.5rem] sm:text-[0.65rem] text-center leading-tight -mt-0.5 hidden sm:block relative z-10">
                  {tool.category}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <AnimatePresence>
          {selectedTool && (
            <motion.div
              className="mt-8 sm:mt-10 rounded-sm border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-5">
                <h3
                  className="text-lg sm:text-xl font-semibold uppercase tracking-wider"
                  style={{ color: toolColors[tools.indexOf(selectedTool)] }}
                >
                  {selectedTool.name}
                </h3>
                <span className="text-[#8B95A0] text-[10px] uppercase tracking-widest font-light">
                  {selectedTool.category}
                </span>
              </div>

              <div className="flex flex-col gap-2 mb-5">
                <div className="flex items-center justify-between text-[#8B95A0] text-[10px] uppercase tracking-widest">
                  <span>Livello</span>
                  <span>{selectedTool.level}%</span>
                </div>
                <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: toolColors[tools.indexOf(selectedTool)] }}
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedTool.level}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  />
                </div>
              </div>

              <p className="text-[#8B95A0] text-sm font-light leading-relaxed">
                {selectedTool.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
