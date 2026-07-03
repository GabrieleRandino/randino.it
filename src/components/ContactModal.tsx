import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

const privacyTextComponents = [
  { label: 'INFORMATIVA PRIVACY (artt. 13-14 GDPR 2016/679)', isTitle: true },
  { label: '1. TITOLARE DEL TRATTAMENTO', isTitle: true },
  { label: 'Gabriele Randino — CF: RNDGRL06M29B180H — Via Luigi Spazzapan 2, 72100 Brindisi — gabrielerandino06@gmail.com' },
  { label: '2. DATI PERSONALI RACCOLTI', isTitle: true },
  { label: 'Il presente sito raccoglie i dati personali conferiti volontariamente dall\'utente tramite il modulo di contatto: Nome e Cognome, Azienda (se fornita), Indirizzo email e/o numero di telefono, Contenuto del messaggio.' },
  { label: '3. FINALITÀ E BASE GIURIDICA DEL TRATTAMENTO', isTitle: true },
  { label: 'I dati sono trattati per: a) rispondere alle richieste di contatto (art. 6.1.b GDPR); b) adempiere obblighi di legge (art. 6.1.c GDPR); c) invio comunicazioni promozionali con consenso (art. 6.1.a GDPR).' },
  { label: '4. MODALITÀ DEL TRATTAMENTO', isTitle: true },
  { label: 'Il trattamento è effettuato con strumenti manuali, informatici e telematici, garantendo sicurezza e riservatezza dei dati.' },
  { label: '5. PERIODO DI CONSERVAZIONE', isTitle: true },
  { label: 'Dati di contatto: 12 mesi. Dati contabili/fiscali: 10 anni (art. 2220 c.c.). Dati per marketing: fino alla revoca del consenso.' },
  { label: '6. COMUNICAZIONE E DIFFUSIONE DEI DATI', isTitle: true },
  { label: 'I dati potranno essere comunicati a terzi solo per adempimenti di legge o per esecuzione del rapporto. I dati non saranno diffusi.' },
  { label: '7. TRASFERIMENTO DATI EXTRA-UE', isTitle: true },
  { label: 'I dati non saranno trasferiti al di fuori dello Spazio Economico Europeo.' },
  { label: '8. DIRITTI DELL\'INTERESSATO', isTitle: true },
  { label: 'Accesso (art. 15), Rettifica (art. 16), Cancellazione (art. 17), Limitazione (art. 18), Portabilità (art. 20), Opposizione (art. 21). Per esercitarli: gabrielerandino06@gmail.com.' },
  { label: '9. DIRITTO DI RECLAMO', isTitle: true },
  { label: 'L\'interessato può proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).' },
  { label: '10. NATURA DEL CONFERIMENTO', isTitle: true },
  { label: 'Il conferimento dei dati è necessario per ricevere riscontro. Il mancato conferimento impedisce di ottenere quanto richiesto.' },
  { label: '11. PROCESSI DECISIONALI AUTOMATIZZATI', isTitle: true },
  { label: 'Non vengono effettuati processi decisionali automatizzati né profilazione.' },
  { label: '12. AGGIORNAMENTI', isTitle: true },
  { label: 'La presente informativa può essere soggetta a modifiche. Si invita l\'utente a consultarla periodicamente.' },
]

const budgets = [
  { label: '0 — 300 €', value: '0-300' },
  { label: '300 — 600 €', value: '300-600' },
  { label: '600 — 1.300 €', value: '600-1300' },
  { label: '1.300 € +', value: '1300+' },
]

const API_URL = 'https://api.callmebot.com/whatsapp.php'
const PHONE = '393883889663'
const APIKEY = '8478929'

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [budget, setBudget] = useState('')
  const [contact, setContact] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    const companyText = company ? `%0AAzienda: ${encodeURIComponent(company)}` : ''
    const text = `Nuova richiesta dal sito%0ANome: ${encodeURIComponent(name)}${companyText}%0A%0AMessaggio: ${encodeURIComponent(message)}%0ABudget: ${encodeURIComponent(budget)}%0ARecapito: ${encodeURIComponent(contact)}%0APrivacy: acconsentito`
    const url = `${API_URL}?phone=${PHONE}&text=${text}&apikey=${APIKEY}`

    new Image().src = url
    setSent(true)
    setSending(false)
    setTimeout(() => {
      setName('')
      setCompany('')
      setMessage('')
      setBudget('')
      setContact('')
      setPrivacy(false)
      setSent(false)
      onClose()
    }, 1500)
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg bg-[#0F0F0F] border border-white/[0.06] rounded-2xl p-6 sm:p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-11 h-11 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white/[0.04] hover:bg-white/[0.08] transition-colors text-[#8B95A0]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h3 className="editorial-heading text-[#D7E2EA] mb-6" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)' }}>
              Parlami del tuo progetto
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Nome e Cognome */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#8B95A0] text-xs uppercase tracking-[0.15em] font-medium">
                  Nome e Cognome
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[#D7E2EA] text-sm font-light outline-none focus:border-[#0066FF]/50 transition-colors placeholder:text-[#8B95A0]/40"
                  placeholder="Il tuo nome e cognome"
                />
              </div>

              {/* Azienda */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#8B95A0] text-xs uppercase tracking-[0.15em] font-medium">
                  Azienda <span className="text-[#8B95A0]/40">(opzionale)</span>
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[#D7E2EA] text-sm font-light outline-none focus:border-[#0066FF]/50 transition-colors placeholder:text-[#8B95A0]/40"
                  placeholder="La tua azienda"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#8B95A0] text-xs uppercase tracking-[0.15em] font-medium">
                  Descrivi cosa ti serve
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[#D7E2EA] text-sm font-light resize-none outline-none focus:border-[#0066FF]/50 transition-colors placeholder:text-[#8B95A0]/40"
                  placeholder="Raccontami il tuo progetto..."
                />
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#8B95A0] text-xs uppercase tracking-[0.15em] font-medium">
                  Budget indicativo
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[#D7E2EA] text-sm font-light outline-none focus:border-[#0066FF]/50 transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238B95A0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                  }}
                >
                  <option value="" disabled>Seleziona un budget</option>
                  {budgets.map((b) => (
                    <option key={b.value} value={b.value} className="bg-[#0F0F0F]">{b.label}</option>
                  ))}
                </select>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#8B95A0] text-xs uppercase tracking-[0.15em] font-medium">
                  Cellulare o email
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-[#D7E2EA] text-sm font-light outline-none focus:border-[#0066FF]/50 transition-colors placeholder:text-[#8B95A0]/40"
                  placeholder="Il tuo numero o la tua email"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer mt-2">
                <input
                  type="checkbox"
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#0066FF]"
                />
                <span className="text-[#8B95A0] text-[10px] sm:text-[11px] font-light leading-relaxed text-left">
                  Acconsento al trattamento dei miei dati personali secondo la <button type="button" onClick={() => setShowPrivacy(true)} className="text-[#0066FF] underline bg-transparent border-0 cursor-pointer p-0 text-[10px] sm:text-[11px] font-light">privacy policy</button>
                </span>
              </label>

              <button
                type="submit"
                disabled={sending || sent || !privacy}
                className="w-full rounded-xl py-3.5 text-white font-medium uppercase tracking-widest text-xs mt-2 disabled:opacity-50"
                style={{
                  background: 'linear-gradient(135deg, #0044CC, #0066FF)',
                  boxShadow: '0 4px 20px rgba(0, 102, 255, 0.3)',
                }}
              >
                {sent ? 'Inviato ✓' : sending ? 'Invio in corso...' : 'Invia richiesta'}
              </button>
              <p className="text-[#8B95A0]/50 text-[10px] uppercase tracking-[0.15em] font-light text-center mt-3">
                {sent ? 'Richiesta ricevuta, ti ricontatterò al più presto' : 'Verrai ricontattato in 24 ore'}
              </p>
            </form>

            {/* Privacy modal overlay */}
            <AnimatePresence>
              {showPrivacy && (
                <motion.div
                  className="absolute inset-0 z-10 bg-[#0F0F0F] rounded-2xl p-6 sm:p-8 flex flex-col"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[#D7E2EA] text-sm uppercase tracking-widest font-medium">
                      Privacy Policy
                    </h4>
                    <button
                      onClick={() => setShowPrivacy(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.04] hover:bg-white/[0.08] transition-colors text-[#8B95A0]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto text-[#8B95A0] text-[11px] font-light leading-relaxed">
                    {privacyTextComponents.map(({ label, isTitle }, i) => (
                      <p
                        key={i}
                        className={`${
                          isTitle && i === 0
                            ? 'text-[#D7E2EA] text-xs font-semibold tracking-wider mb-3'
                            : isTitle
                            ? 'text-[#0066FF] text-[10px] font-medium tracking-wider mt-3'
                            : ''
                        }`}
                      >
                        {label}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
