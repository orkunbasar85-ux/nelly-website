'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/contexts/language-context'
import { FadeInSection } from './fade-in-section'
import { Phone, Mail, MessageCircle, Send, User, AtSign, FileText, MessageSquare } from 'lucide-react'

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    setIsSubmitting(true)
    setSubmitError(false)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ce1d8d98-4c45-476d-a851-af97c15f7cf7',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Neue Kontaktanfrage von nellymedium.de',
          message: formData.message,
          from_name: 'Nelly Medium Website',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', subject: '', message: '' })
        }, 5000)
      } else {
        setSubmitError(true)
      }
    } catch (err: any) {
      console?.error?.('Form submission failed:', err)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="text-center mb-14">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              {t('Kontakt', 'İletişim')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mt-4 tracking-tight">
              {t('Dein Weg zu mir', 'Bana Ulaşmak İçin')}
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
            <p className="text-charcoal/70 mt-6 max-w-2xl mx-auto leading-relaxed">
              {t(
                'Du hast Fragen oder möchtest spüren, ob es passt? Du kannst mich auf Türkisch oder Deutsch kontaktieren. Ich freue mich auf deine Nachricht – und vielleicht auf unser baldiges Gespräch.',
                'Sorularınız mı var, yoksa enerjimizin uyumunu mu hissetmek istiyorsunuz? Benimle Türkçe veya Almanca dillerinde iletişime geçebilirsiniz. Mesajınızı sabırsızlıkla bekliyorum – belki de yakında görüşmek üzere.'
              )}
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <FadeInSection delay={100}>
            <div className="space-y-6">
              <a
                href="tel:+4917624003253"
                className="flex items-center gap-4 p-5 rounded-lg bg-beige-50 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-sm flex-shrink-0">
                  <Phone size={20} className="text-beige-50" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">{t('Telefon', 'Telefon')}</p>
                  <p className="text-charcoal font-medium group-hover:text-gold-dark transition-colors">0176 24003253</p>
                </div>
              </a>

              <a
                href="https://wa.me/4917624003253"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-lg bg-beige-50 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center shadow-sm flex-shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">WhatsApp</p>
                  <p className="text-charcoal font-medium group-hover:text-green-700 transition-colors">
                    {t('Nachricht senden', 'Mesaj gönder')}
                  </p>
                </div>
              </a>

              <a
                href="mailto:i.nelly@hotmail.de"
                className="flex items-center gap-4 p-5 rounded-lg bg-beige-50 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-sm flex-shrink-0">
                  <Mail size={20} className="text-beige-50" />
                </div>
                <div>
                  <p className="text-sm text-charcoal/60">E-Mail</p>
                  <p className="text-charcoal font-medium group-hover:text-gold-dark transition-colors">i.nelly@hotmail.de</p>
                </div>
              </a>
            </div>
          </FadeInSection>

          {/* Contact Form */}
          <FadeInSection delay={200}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
                <input
                  type="text"
                  required
                  placeholder={t('Dein Name', 'Adın')}
                  value={formData?.name ?? ''}
                  onChange={(e: any) => setFormData({ ...(formData ?? {}), name: e?.target?.value ?? '' })}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-beige-50 border border-beige-300/50 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all text-sm"
                />
              </div>
              <div className="relative">
                <AtSign size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
                <input
                  type="email"
                  required
                  placeholder={t('Deine E-Mail', 'E-posta adresin')}
                  value={formData?.email ?? ''}
                  onChange={(e: any) => setFormData({ ...(formData ?? {}), email: e?.target?.value ?? '' })}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-beige-50 border border-beige-300/50 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all text-sm"
                />
              </div>
              <div className="relative">
                <FileText size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
                <input
                  type="text"
                  placeholder={t('Betreff', 'Konu')}
                  value={formData?.subject ?? ''}
                  onChange={(e: any) => setFormData({ ...(formData ?? {}), subject: e?.target?.value ?? '' })}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-beige-50 border border-beige-300/50 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all text-sm"
                />
              </div>
              <div className="relative">
                <MessageSquare size={16} className="absolute left-4 top-4 text-gold/60" />
                <textarea
                  required
                  rows={5}
                  placeholder={t('Deine Nachricht', 'Mesajın')}
                  value={formData?.message ?? ''}
                  onChange={(e: any) => setFormData({ ...(formData ?? {}), message: e?.target?.value ?? '' })}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-beige-50 border border-beige-300/50 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all text-sm resize-none"
                />
              </div>

              {isSubmitted ? (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm text-center">
                  {t(
                    'Vielen Dank! Deine Nachricht wurde gesendet. Ich melde mich bald bei dir.',
                    'Teşekkürler! Mesajın gönderildi. En kısa sürede sana döneceğim.'
                  )}
                </div>
              ) : submitError ? (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm text-center">
                  {t(
                    'Leider konnte deine Nachricht nicht gesendet werden. Bitte versuche es erneut oder kontaktiere mich direkt per Telefon oder WhatsApp.',
                    'Mesajın gönderilemedi. Lütfen tekrar dene veya doğrudan telefon ya da WhatsApp ile iletişime geç.'
                  )}
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full gold-gradient text-beige-50 font-medium text-sm tracking-wide hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-beige-50/40 border-t-beige-50 rounded-full animate-spin" />
                      {t('Wird gesendet...', 'Gönderiliyor...')}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {t('Nachricht senden', 'Mesaj Gönder')}
                    </>
                  )}
                </button>
              )}

              {/* YASAL ONAY METNİ */}
              <p className="text-[11px] text-charcoal/50 text-center leading-relaxed mt-3">
                {t(
                  'Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß unserer Datenschutzerklärung einverstanden.',
                  'Formu göndererek, verilerinizin Gizlilik Politikası uyarınca işlenmesini kabul etmiş olursunuz.'
                )}
              </p>
            </form>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
