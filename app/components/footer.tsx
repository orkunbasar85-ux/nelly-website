'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/contexts/language-context'
import { Heart, X } from 'lucide-react'

function FooterModal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-beige-50 rounded-lg shadow-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8" onClick={(e: any) => e?.stopPropagation?.()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading text-xl text-charcoal">{title}</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-beige-200 transition-colors">
            <X size={20} className="text-charcoal/60" />
          </button>
        </div>
        <div className="text-charcoal/75 text-sm leading-relaxed space-y-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  const { t } = useLanguage()
  const [showImpressum, setShowImpressum] = useState(false)
  const [showDatenschutz, setShowDatenschutz] = useState(false)

  const quoteDE = '\u201eMan sieht nur mit dem Herzen gut \u2013 das Wesentliche ist f\u00fcr die Augen unsichtbar.\u201c'
  const quoteTR = '\u201e\u0130nsan ancak kalbiyle iyi g\u00f6rebilir. Ger\u00e7ek olan\u0131 g\u00f6zler g\u00f6remez.\u201c'

  const disclaimerDE = 'Meine Arbeit dient der energetischen und spirituellen Begleitung. Sie ersetzt keine medizinische Behandlung oder Diagnose, sondern versteht sich als Erg\u00e4nzung auf seelisch-energetischer Ebene.'
  const disclaimerTR = '\u00c7al\u0131\u015fmalar\u0131m t\u0131bbi te\u015fhis veya tedavi yerine ge\u00e7mez, ancak ruhsal-enerjik d\u00fczeyde tamamlay\u0131c\u0131 bir destek sunar.'

  return (
    <>
      <footer className="bg-beige-900 text-beige-200 py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="font-heading text-lg sm:text-xl italic text-gold-light/80 max-w-2xl mx-auto leading-relaxed">
              {t(quoteDE, quoteTR)}
            </p>
            <p className="text-beige-400 text-sm mt-3">{'\u2013 Antoine de Saint-Exup\u00e9ry'}</p>
          </div>

          <div className="w-16 h-px bg-gold/30 mx-auto mb-10" />

          <div className="text-center mb-10">
            <p className="text-beige-400 text-xs sm:text-sm max-w-3xl mx-auto leading-relaxed">
              {t(disclaimerDE, disclaimerTR)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-beige-800">
            <div className="flex items-center gap-4 text-xs text-beige-500">
              <button onClick={() => setShowImpressum(true)} className="hover:text-gold-light transition-colors">
                {t('Impressum', 'K\u00fcnye')}
              </button>
              <span className="text-beige-700">|</span>
              <button onClick={() => setShowDatenschutz(true)} className="hover:text-gold-light transition-colors">
                {t('Datenschutz', 'Gizlilik Politikas\u0131')}
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-beige-500">
              <span>{t('Mit', '')}</span>
              <Heart size={12} className="text-gold-light/70" />
              <span>{t('Eure Nelly', 'Sevgiyle, Nelly')}</span>
            </div>
          </div>
        </div>
      </footer>

      {showImpressum && (
        <FooterModal title={t('Impressum', 'K\u00fcnye')} onClose={() => setShowImpressum(false)}>
          <p><strong>Nelly</strong></p>
          <p>{t('Medium & Spirituelle Begleitung', 'Medyum & Spirit\u00fcel Rehberlik')}</p>
          <p>{t('Telefon', 'Telefon')}: 0176 24003253</p>
          <p>E-Mail: info@nellymedium.de</p>
          <p className="mt-4 text-xs text-charcoal/50">
            {t(
              'Angaben gem\u00e4\u00df \u00a7 5 TMG. Inhaltlich Verantwortliche: Nelly. Die vollst\u00e4ndigen Impressumsdaten werden nach Fertigstellung der Seite erg\u00e4nzt.',
              'TMG \u00a7 5 uyar\u0131nca bilgiler. Sorumlu ki\u015fi: Nelly. Tam k\u00fcnye bilgileri sayfa tamamland\u0131ktan sonra eklenecektir.'
            )}
          </p>
        </FooterModal>
      )}

      {showDatenschutz && (
        <FooterModal title={t('Datenschutzerkl\u00e4rung', 'Gizlilik Politikas\u0131')} onClose={() => setShowDatenschutz(false)}>
          <p>
            {t(
              'Der Schutz deiner pers\u00f6nlichen Daten ist mir wichtig. Diese Website erhebt und speichert personenbezogene Daten nur im Rahmen von Kontaktanfragen. Es werden keine Cookies zu Tracking-Zwecken verwendet.',
              'Ki\u015fisel verilerinin korunmas\u0131 benim i\u00e7in \u00f6nemlidir. Bu web sitesi, yaln\u0131zca ileti\u015fim talepleri kapsam\u0131nda ki\u015fisel verileri toplar ve saklar. Takip ama\u00e7l\u0131 \u00e7erezler kullan\u0131lmaz.'
            )}
          </p>
          <p>
            {t(
              'Kontaktformular: Wenn du mir \u00fcber das Kontaktformular eine Nachricht sendest, werden deine Angaben (Name, E-Mail, Nachricht) zwecks Bearbeitung gespeichert.',
              '\u0130leti\u015fim formu: Bana ileti\u015fim formu \u00fczerinden bir mesaj g\u00f6nderdi\u011finde, bilgilerin (ad, e-posta, mesaj) i\u015fleme al\u0131nmak \u00fczere saklan\u0131r.'
            )}
          </p>
          <p className="mt-4 text-xs text-charcoal/50">
            {t(
              'Die vollst\u00e4ndige Datenschutzerkl\u00e4rung wird nach Fertigstellung der Seite erg\u00e4nzt.',
              'Tam gizlilik politikas\u0131 sayfa tamamland\u0131ktan sonra eklenecektir.'
            )}
          </p>
        </FooterModal>
      )}
    </>
  )
}
