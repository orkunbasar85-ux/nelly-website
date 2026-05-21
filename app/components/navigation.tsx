'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/app/contexts/language-context'
import { Menu, X, Globe } from 'lucide-react'

export function Navigation() {
  const { lang, setLang, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 50)
    }
    window?.addEventListener?.('scroll', handleScroll)
    return () => window?.removeEventListener?.('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: t('Startseite', 'Ana Sayfa') },
    { href: '#about', label: t('Über mich', 'Hakkımda') },
    { href: '#services', label: t('Angebote', 'Hizmetler') },
    { href: '#daily-message', label: t('Tagesbotschaft', 'Günlük Mesaj') },
    { href: '#contact', label: t('Kontakt', 'İletişim') },
  ]

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const el = document?.querySelector?.(href)
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-beige-50/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="font-heading text-xl sm:text-2xl font-semibold tracking-tight"
            style={{ color: isScrolled ? '#2C2C2C' : '#FAF7F2' }}
          >
            Nelly
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems?.map?.((item: any) => (
              <button
                key={item?.href}
                onClick={() => scrollToSection(item?.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gold/10 ${
                  isScrolled ? 'text-charcoal hover:text-gold-dark' : 'text-beige-50 hover:text-gold-light'
                }`}
              >
                {item?.label}
              </button>
            )) ?? []}

            {/* Language Switcher */}
            <div className="ml-3 flex items-center gap-1 rounded-full border border-gold/30 p-1">
              <button
                onClick={() => setLang('de')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                  lang === 'de'
                    ? 'bg-gold text-beige-50'
                    : isScrolled
                    ? 'text-charcoal hover:bg-beige-200'
                    : 'text-beige-100 hover:bg-white/10'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLang('tr')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                  lang === 'tr'
                    ? 'bg-gold text-beige-50'
                    : isScrolled
                    ? 'text-charcoal hover:bg-beige-200'
                    : 'text-beige-100 hover:bg-white/10'
                }`}
              >
                TR
              </button>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center gap-1 rounded-full border border-gold/30 p-1">
              <button
                onClick={() => setLang('de')}
                className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  lang === 'de' ? 'bg-gold text-beige-50' : isScrolled ? 'text-charcoal' : 'text-beige-100'
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLang('tr')}
                className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  lang === 'tr' ? 'bg-gold text-beige-50' : isScrolled ? 'text-charcoal' : 'text-beige-100'
                }`}
              >
                TR
              </button>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-charcoal' : 'text-beige-50'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-beige-50/98 backdrop-blur-lg border-t border-beige-300/30">
          <div className="px-4 py-4 space-y-1">
            {navItems?.map?.((item: any) => (
              <button
                key={item?.href}
                onClick={() => scrollToSection(item?.href)}
                className="block w-full text-left px-4 py-3 rounded-lg text-charcoal font-medium hover:bg-beige-200 transition-colors"
              >
                {item?.label}
              </button>
            )) ?? []}
          </div>
        </div>
      )}
    </nav>
  )
}
