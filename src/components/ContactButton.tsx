interface ContactButtonProps {
  className?: string
  onClick?: () => void
  label?: string
}

export default function ContactButton({ className, onClick, label = 'Contattami' }: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base ${className ?? ''}`}
      style={{
        background: 'linear-gradient(135deg, #0044CC, #0066FF)',
        boxShadow: '0 4px 20px rgba(0, 102, 255, 0.3)',
      }}
    >
      {label}
    </button>
  )
}
