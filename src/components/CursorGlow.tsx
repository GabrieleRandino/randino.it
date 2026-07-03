import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })

  useEffect(() => {
    let frame: number
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY })
      })
    }
    const onLeave = () => setPos({ x: -200, y: -200 })

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: pos.x - 150,
        top: pos.y - 150,
        width: 300,
        height: 300,
        background: 'radial-gradient(circle, rgba(0,102,255,0.08) 0%, rgba(0,102,255,0.03) 40%, transparent 70%)',
        borderRadius: '50%',
        transform: 'translate3d(0,0,0)',
        willChange: 'left, top',
      }}
    />
  )
}
