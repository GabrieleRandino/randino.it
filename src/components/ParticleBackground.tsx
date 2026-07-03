import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  size: number
  alpha: number
  color: string
  flicker: number
  flickerSpeed: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let scrollVelocity = 0
    let lastScrollY = window.scrollY
    let mouseX = -1000
    let mouseY = -1000
    const particles: Particle[] = []
    const PARTICLE_COUNT = 180

    const colors = ['#0066FF', '#0044CC', '#4488FF', '#FFFFFF', '#BBCCD7']

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function init() {
      resize()
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          z: Math.random() * 3,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -(Math.random() * 0.2 + 0.05),
          size: Math.random() * 2.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          flicker: Math.random() * Math.PI * 2,
          flickerSpeed: Math.random() * 0.02 + 0.005,
        })
      }
    }

    function draw() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const scrollBoost = Math.abs(scrollVelocity) * 0.5

      for (const p of particles) {
        p.flicker += p.flickerSpeed
        const flickerAlpha = Math.sin(p.flicker) * 0.3 + 0.7

        p.x += p.vx
        p.y += p.vy + scrollBoost * (0.3 + p.z * 0.2)
        p.vy += (Math.random() - 0.5) * 0.02

        if (p.y < -10) {
          p.y = canvas.height + 10
          p.x = Math.random() * canvas.width
          p.vy = -(Math.random() * 0.2 + 0.05)
        }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10

        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          p.vx -= (dx / dist) * 0.02 * (1 - dist / 120)
          p.vy -= (dy / dist) * 0.02 * (1 - dist / 120)
        }

        p.vx *= 0.998
        p.vy *= 0.998

        const depthScale = 1 + p.z * 0.4
        const drawSize = p.size * depthScale
        const drawAlpha = p.alpha * flickerAlpha * (0.5 + p.z * 0.2)

        ctx.beginPath()
        ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2)

        if (p.color === '#FFFFFF') {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, drawSize * 3)
          grad.addColorStop(0, `rgba(255, 255, 255, ${drawAlpha * 0.6})`)
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)')
          ctx.fillStyle = grad
        } else {
          ctx.fillStyle = p.color
          ctx.globalAlpha = drawAlpha * 0.25
        }
        ctx.fill()
        ctx.globalAlpha = 1

        if (scrollVelocity > 8) {
          const sparkCount = Math.floor(scrollVelocity / 4)
          for (let s = 0; s < Math.min(sparkCount, 3); s++) {
            const angle = Math.random() * Math.PI * 2
            const dist2 = Math.random() * 20
            ctx.beginPath()
            ctx.arc(
              p.x + Math.cos(angle) * dist2,
              p.y + Math.sin(angle) * dist2,
              drawSize * 0.3,
              0,
              Math.PI * 2
            )
            ctx.fillStyle = `rgba(255, 200, 100, ${drawAlpha * 0.8})`
            ctx.fill()
          }
        }
      }

      scrollVelocity *= 0.92
      animId = requestAnimationFrame(draw)
    }

    const handleScroll = () => {
      const currentY = window.scrollY
      scrollVelocity = Math.abs(currentY - lastScrollY) * 0.08
      lastScrollY = currentY
    }

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouse)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', resize)

    init()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouse)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ willChange: 'transform' }}
    />
  )
}
