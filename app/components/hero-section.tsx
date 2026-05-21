'use client'

import { useLanguage } from '@/app/contexts/language-context'
import { Phone, MessageCircle, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.abacus.ai/images/17ac3fab-724c-48a7-bb39-270515171c14.jpg"
          alt="Mystische goldene Lichtstrahlen – Spirituelle Atmosphäre"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center py-32">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-gold-light/60" />
          <span className="text-gold-light text-sm tracking-[0.3em] uppercase font-medium">
            Medium & {t('Spirituelle Begleitung', 'Spiritüel Rehberlik')}
          </span>
          <div className="h-px w-12 bg-gold-light/60" />
        </div>

        {/* Name */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-beige-50 mb-6 tracking-tight">
          Nelly
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-beige-200 max-w-3xl mx-auto mb-4 font-heading italic leading-relaxed">
          {t(
            'Willkommen auf meiner Seite – schön, dass du da bist!',
            'Sayfama Hoş Geldiniz – Burada Olmana Sevindim!'
          )}
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-beige-300/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t(
            'Ich bin Nelly, Medium, spirituelle Begleitung, Hellseherin, Wahrsagerin ohne Hilfsmittel und Coach in mehreren Bereichen.',
            'Ben Nelly\'yim – medyum, spiritüel rehber, araçsız öngörü ve sezgi ile çalışan bir danışman ve farklı alanlarda koçum.'
          )}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full gold-gradient text-beige-50 font-medium text-sm tracking-wide hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            <Phone size={18} />
            {t('Jetzt Kontakt aufnehmen', 'Şimdi İletişime Geç')}
          </a>
          <a
            href="https://wa.me/4917624003253"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-beige-200/40 text-beige-100 font-medium text-sm tracking-wide hover:bg-beige-100/10 transition-all duration-300 hover:border-beige-200/60"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown size={28} className="text-beige-300/60" />
        </div>
      </div>
    </section>
  )
}
