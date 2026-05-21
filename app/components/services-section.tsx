'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/contexts/language-context'
import { FadeInSection } from './fade-in-section'
import {
  Zap,
  Brain,
  Compass,
  Shield,
  Eye,
  HeartHandshake,
  Users,
  RotateCcw,
  Activity,
  ChevronDown,
} from 'lucide-react'

interface ServiceItem {
  icon: any
  titleDe: string
  titleTr: string
  descDe: string
  descTr: string
}

const services: ServiceItem[] = [
  {
    icon: Zap,
    titleDe: 'Energiearbeit & Blockadenlösung',
    titleTr: 'Enerji Çalışması & Blokajların Temizlenmesi',
    descDe: 'Alles ist Energie – manchmal gerät sie aus dem Fluss. Wenn Körper, Geist und Seele im Einklang schwingen, fließt das Leben leichter. Mit feinen energetischen Impulsen und Energiearbeit, spüre ich Blockaden auf und löse sie sanft. So entsteht wieder Raum für Lebenskraft, emotionale Ausgeglichenheit und innere Ruhe.',
    descTr: 'Her şey enerjidir – bazen bu enerji akış dışına çıkar. Beden, zihin ve ruh uyum içinde olduğunda, yaşam daha kolay akar. Nazik enerji çalışmaları ile blokajları tespit ediyor ve yumuşak bir şekilde çözüyorum. Böylece yaşam enerjisi, duygusal denge ve içsel huzur yeniden alan bulur.',
  },
  {
    icon: Brain,
    titleDe: 'Arbeit mit dem Unterbewusstsein',
    titleTr: 'Bilinçaltı ile Çalışma',
    descDe: 'Viele unsere Themen und Ängste liegen nicht im Sichtbaren, sondern tief im Unterbewusstsein verborgen. Gemeinsam tauchen wir in diese inneren Räume ein, um alte Muster zu erkennen, aufzulösen und neue Wege zu eröffnen.',
    descTr: 'Sorunlarımızın ve korkularımızın çoğu görünmeyen bilinçaltında saklıdır. Birlikte bu derin alanlara dalarak eski kalıpları fark edip dönüştürüyor ve yeni yollar açıyoruz.',
  },
  {
    icon: Compass,
    titleDe: 'Spirituelle Lebensberatung',
    titleTr: 'Spiritüel Yaşam Danışmanlığı',
    descDe: 'Manchmal braucht es nicht nur eine Antwort, sondern einen Weg. Ich begleite dich mit medialer Intuition und praktischer Weisheit durch Veränderung, Krisen oder auf deiner spirituellen Reise. Mit Einfühlungsvermögen und spiritueller Klarheit unterstütze ich dich dabei, Ängste / Probleme zu verstehen, energetisch zu transformieren und dich wieder sicher in dir selbst zu fühlen.',
    descTr: 'Bazen yalnızca bir cevap değil, bir yol gerekir. Seni spiritüel sezgi ve pratik bilgelikle değişim süreçlerinde, krizlerde ya da kişisel gelişim yolunda destekliyorum. Empati ve ruhsal netlikle korkuları/anlamları çözümlemende ve dönüşümünde sana eşlik ediyorum.',
  },
  {
    icon: Shield,
    titleDe: 'Aurareinigung & energetische Klärung',
    titleTr: 'Aura Temizliği & Enerji Arınması',
    descDe: 'Die Aura ist unser Schutzfeld. Durch Reinigung und Harmonisierung dieses Feldes können sich emotionale Lasten, Fremdenergien oder alte Anhaftungen lösen – damit du dich wieder leicht, klar und zentriert fühlst.',
    descTr: 'Aura, bizim koruma alanımızdır. Bu alanın arındırılması ve dengelenmesi ile duygusal yükler, negatif enerjiler ya da eski bağlar çözülebilir – böylece kendini yeniden hafif, net ve merkezde hissedersin.',
  },
  {
    icon: Eye,
    titleDe: 'Wahrsagen und Hellsicht',
    titleTr: 'Kehanet ve Sezgi ile Gelecek Okuma',
    descDe: 'Als mediale Wegbegleiterin nutze ich meine hellsichtigen Fähigkeiten, um die Einblicke in zukünftige Entwicklungen zu geben.',
    descTr: 'Bir medyum olarak sezgisel yeteneklerimi kullanarak, senin için olası gelecek gelişmelerine dair içgörüler sunuyorum.',
  },
  {
    icon: HeartHandshake,
    titleDe: 'Spirituelle Lebensberatung / Coach',
    titleTr: 'Spiritüel Yaşam Koçluğu',
    descDe: 'Ich begleite dich mit Herz, Intuition und göttlicher Führung durch Lebensphasen deines Lebens. Ob beruflich, privat oder seelisch – gemeinsam finden wir Klarheit, Sinn und neue Ausrichtung auf deinem Seelenweg.',
    descTr: 'Seni kalbimle, sezgimle ve ilahi rehberlikle yaşam yolculuğunda destekliyorum. İster mesleki, ister kişisel ya da ruhsal olsun – birlikte netlik, anlam ve yön buluyoruz.',
  },
  {
    icon: Users,
    titleDe: 'Jenseitskontakte',
    titleTr: 'Ahiret Bağlantıları (Ruhlarla İletişim)',
    descDe: 'Der Verlust eines geliebten Menschen hinterlässt oft offene Fragen und eine große Leere. Ein Jenseitskontakt kann Trost spenden und zeigen: Die Liebe bleibt – über den Tod hinaus.',
    descTr: 'Sevdiğimiz birini kaybetmek büyük bir boşluk ve birçok cevapsız soru bırakabilir. Bir ruhsal bağlantı, teselli olabilir ve şu gerçeği gösterebilir: Sevgi ölümü aşar, sonsuza dek kalır.',
  },
  {
    icon: RotateCcw,
    titleDe: 'Rückführungen',
    titleTr: 'Geçmiş Yaşamlara Yolculuk',
    descDe: 'Manche Herzen gehören zusammen – auch wenn das Leben sie trennt. Mit spiritueller Energiearbeit und medialer Führung helfe ich dir, alte Blockaden zu lösen, die seelische Verbindung zu stärken und – wenn es der Seelenweg erlaubt – einen neuen Raum für die Liebe zu öffnen. Wo echte Liebe besteht, ist Rückkehr möglich.',
    descTr: 'Bazı ruhlar birbirine aittir – hayat ayırsa da. Spiritüel enerji çalışmaları ve medyumlukla, eski blokajları çözüp ruhsal bağları güçlendiriyorum. Eğer ruhsal yol izin veriyorsa, sevgi için yeni bir alan açmak mümkün. Gerçek sevgi varsa, dönüş mümkündür.',
  },
  {
    icon: Activity,
    titleDe: 'Spirituelle / mediale Wahrnehmung des gesundheitlichen Zustand',
    titleTr: 'Sağlık Durumunun Ruhsal & Medyumlukla Algılanması',
    descDe: 'In meiner medialen Arbeit nehme ich energetische und seelische Informationen wahr, die Aufschluss über den aktuellen Gesundheitszustand geben können.',
    descTr: 'Medyumluk çalışmamda, mevcut sağlık durumu hakkında ruhsal ve enerjik bilgiler alıyorum. Çalışmalarım tıbbi teşhis veya tedavi yerine geçmez, ancak ruhsal-enerjik düzeyde tamamlayıcı bir destek sunar.',
  },
]

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()
  const Icon = service?.icon

  return (
    <FadeInSection delay={index * 80}>
      <div
        className={`group bg-beige-50 rounded-lg p-6 transition-all duration-500 cursor-pointer hover:shadow-lg ${
          isExpanded ? 'shadow-lg ring-1 ring-gold/20' : 'shadow-sm'
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shadow-sm">
            {Icon && <Icon size={22} className="text-beige-50" />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-heading text-lg sm:text-xl text-charcoal group-hover:text-gold-dark transition-colors leading-tight">
                {t(service?.titleDe ?? '', service?.titleTr ?? '')}
              </h3>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-gold transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-charcoal/75 leading-relaxed text-sm sm:text-base">
                {t(service?.descDe ?? '', service?.descTr ?? '')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 sm:py-28 bg-beige-100/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="text-center mb-14">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              {t('Angebote', 'Hizmetler')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mt-4 tracking-tight">
              {t('Was ich anbiete', 'Neler Sunuyorum')}
            </h2>
            <p className="text-charcoal/60 mt-4 max-w-2xl mx-auto">
              {t(
                'Mediale Einzelsitzungen in verschiedenen Bereichen',
                'Farklı Alanlarda Medyumluk Seansları'
              )}
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
        </FadeInSection>

        <div className="grid gap-4 max-w-4xl mx-auto">
          {services?.map?.((service: ServiceItem, index: number) => (
            <ServiceCard key={index} service={service} index={index} />
          )) ?? []}
        </div>
      </div>
    </section>
  )
}
