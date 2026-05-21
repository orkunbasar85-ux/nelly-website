'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

type Language = 'de' | 'tr'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (de: string, tr: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'de',
  setLang: () => {},
  t: (de: string) => de,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('de')

  const t = useCallback(
    (de: string, tr: string) => (lang === 'de' ? de : tr),
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
