'use client'

import { LanguageProvider } from '@/app/contexts/language-context'
import { Navigation } from '@/app/components/navigation'
import { HeroSection } from '@/app/components/hero-section'
import { AboutSection } from '@/app/components/about-section'
import { ServicesSection } from '@/app/components/services-section'
import { DailyMessageSection } from '@/app/components/daily-message-section'
import { ContactSection } from '@/app/components/contact-section'
import { Footer } from '@/app/components/footer'

export default function Home() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DailyMessageSection />
        <ContactSection />
        </main>
      <Footer />
    </LanguageProvider>
  )
}
