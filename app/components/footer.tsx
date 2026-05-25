'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/contexts/language-context'
import { Heart, X } from 'lucide-react'

function FooterModal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8" onClick={(e: any) => e?.stopPropagation?.()}>
        <div className="flex items-center justify-between mb-4 border-b pb-2">
          <h3 className="font-heading text-xl text-charcoal font-semibold">{title}</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-beige-200 transition-colors">
            <X size={20} className="text-charcoal/60" />
          </button>
        </div>
        <div className="text-charcoal/75 text-sm leading-relaxed space-y-4">
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
  const disclaimerTR = '\u00c7al\u0131\u015fmalar\u0131m t\u0131bbi te\u015fhis oder tedavi yerine ge\u00e7mez, ancak ruhsal-enerjik d\u00fczeyde tamamlay\u0131c\u0131 bir destek sunar.'

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
                {t('Impressum', 'Künye')}
              </button>
              <span className="text-beige-700">|</span>
              <button onClick={() => setShowDatenschutz(true)} className="hover:text-gold-light transition-colors">
                {t('Datenschutz', 'Gizlilik Politikası')}
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
        <FooterModal title={t('Impressum', 'Künye')} onClose={() => setShowImpressum(false)}>
          <div>
            <h4 className="font-semibold text-charcoal text-base">
              {t('Angaben gemäß § 5 DDG:', 'Alman Dijital Hizmetler Yasası (DDG) § 5 uyarınca bilgiler:')}
            </h4>
            <p className="pl-2 border-l-2 border-gray-200 my-2">
              <strong>[Kiralayacağınız Resmi Ad Soyad]</strong><br />
              [Kiralık İşletme/Servis Adresi]<br />
              [Posta Kodu und Stadt / Şehir / Deutschland]
            </p>
            <h4 className="font-semibold text-charcoal text-base mt-4">
              {t('Kontakt:', 'İletişim:')}
            </h4>
            <p className="pl-2 border-l-2 border-gray-200 my-2">
              {t('Telefon:', 'Telefon:')} 0176 24003253<br />
              E-Mail: i.nelly@hotmail.de
            </p>
            <h4 className="font-semibold text-charcoal text-base mt-4">
              {t('Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:', 'MStV § 18 Abs. 2 uyarınca içerikten sorumlu kişi:')}
            </h4>
            <p className="pl-2 border-l-2 border-gray-200 my-2">
              <strong>[Kiralayacağınız Resmi Ad Soyad]</strong><br />
              [Kiralık İşletme/Servis Adresi]<br />
              [Posta Kodu und Stadt / Şehir / Deutschland]
            </p>
            <p className="text-gray-400 text-[11px] mt-6 pt-2 border-t">Quelle: e-recht24.de</p>
          </div>
        </FooterModal>
      )}

      {showDatenschutz && (
        <FooterModal title={t('Datenschutzerklärung', 'Gizlilik Politikası')} onClose={() => setShowDatenschutz(false)}>
          <div className="space-y-4 text-sm text-charcoal/80 leading-relaxed">
            <div>
              <h4 className="font-semibold text-charcoal text-base">
                {t('1. Datenschutz auf einen Blick', '1. Bir Bakışta Veri Koruma')}
              </h4>
              <p>
                {t(
                  'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO).',
                  'Bu sitenin işletmecisi kişisel verilerinizin korunmasını çok ciddiye almaktadır. Kişisel verilerinizi gizli tutuyor ve yasal veri koruma düzenlemelerine (GDPR/DSGVO) uygun olarak işliyoruz.'
                )}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal text-base mt-4">
                {t('2. Hosting und CDN (Cloudflare)', '2. Barındırma ve CDN (Cloudflare)')}
              </h4>
              <p>
                {t(
                  'Wir hosten unsere Website bei Cloudflare Pages. Anbieter ist die Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107, USA. Technisch wird der Informationsverkehr zwischen Ihrem Browser und unserer Website über das Netzwerk von Cloudflare geleitet, um die Sicherheit und Stabilität zu gewährleisten. Hierbei können Logfiles inklusive Ihrer IP-Adresse verarbeitet werden. Dies erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren Bereitstellung (Art. 6 Abs. 1 lit. f DSGVO).',
                  'Web sitemiz Cloudflare Pages (Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107, USA) üzerinde barındırılmaktadır. Sitenin güvenliğini ve hızını sağlamak adına tarayıcınız ile sitemiz arasındaki trafik Cloudflare ağı üzerinden iletilir. Bu işlem sırasında IP adresiniz dahil olmak üzere teknik log dosyaları işlenebilir. Bu, Art. 6 Abs. 1 lit. f DSGVO uyarınca meşru menfaatimize dayanmaktadır.'
                )}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal text-base mt-4">
                {t('3. Verantwortliche Stelle', '3. Sorumlu Kişi')}
              </h4>
              <p className="pl-2 border-l-2 border-gray-200 my-2">
                <strong>[Kiralayacağınız Resmi Ad Soyad]</strong><br />
                [Kiralık İşletme/Servis Adresi]<br />
                E-Mail: i.nelly@hotmail.de
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-charcoal text-base mt-4">
                {t('4. Ihre Rechte', '4. Haklarınız')}
              </h4>
              <p>
                {t(
                  'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten.',
                  'Kişisel verilerinizin kaynağı, alıcısı ve işlenme amacı hakkında her zaman ücretsiz bilgi alma, ayrıca bu verilerin düzeltilmesini veya silinmesini talep etme hakkına sahipsiniz.'
                )}
              </p>
            </div>
          </div>
        </FooterModal>
      )}
    </>
  )
}
