import { createContext, useContext } from 'react'

type Lang = 'it' | 'en'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'it',
  setLang: () => {},
})

export const useLanguage = () => useContext(LanguageContext)
export default LanguageContext
