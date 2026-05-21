'use client'

import { useLanguage } from '@/app/contexts/language-context'
import { FadeInSection } from './fade-in-section'
import { Sparkles, Heart, Eye } from 'lucide-react'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="text-center mb-14">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              {t('Über mich', 'Hakkımda')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mt-4 tracking-tight">
              {t('Meine Geschichte', 'Benim Hikayem')}
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
        </FadeInSection>

        <div className="max-w-3xl mx-auto">
          <FadeInSection delay={100}>
            <div className="space-y-6">
              <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg">
                {t(
                  'Schon früh spürte ich, dass es mehr gibt als das Sichtbare. Die Verbindung zur geistigen Welt war für mich nie weit entfernt – sie war immer da. Diese Gabe habe ich seit meinem 6. Lebensjahr. Mit der Zeit wurde aus meinem inneren Wissen eine klare Berufung: Menschen als Medium zu begleiten. Dies mache ich seit 2006 beruflich.',
                  'Daha çok küçük yaşlarda görünenden fazlası olduğunu hissetmeye başladım. Ruhsal alemle bağlantım hiç uzak olmadı – her zaman oradaydı. Bu yeteneğim 6 yaşından beri benimle. Zamanla içsel bilgeliğim bir çağrıya dönüştü: İnsanlara bir medyum olarak rehberlik etmek. 2006 yılından bu yana bu işi profesyonel olarak yapıyorum.'
                )}
              </p>
              <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg">
                {t(
                  'Ich arbeite mit Einfühlungsvermögen, Respekt und Vertrauen – stets in tiefer Verbindung mit der geistigen Welt. Hierbei helfen mir Greisseelen.',
                  'Çalışmalarımda empati, saygı ve güven ön plandadır – her zaman ruhsal alemle derin bir bağ içindeyim. Bana burada ışık varlıklar ve kadim ruhsal daireler rehberlik ediyor.'
                )}
              </p>
              <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg">
                {t(
                  'Mein Ziel ist es, nicht nur Botschaften zu übermitteln, sondern Herzen zu berühren und die Zukunft zu zeigen. Ich nutze meine hellsichtigen Fähigkeiten, um zukünftige Tendenzen zu erkennen und begleite Menschen dabei, ihre Zukunft aktiv und bewusst zu beeinflussen.',
                  'Amacım yalnızca mesajları aktarmak değil, aynı zamanda kalplere dokunmak ve geleceği görünür kılmaktır. Öngörü yeteneğim sayesinde gelecekteki olasılıkları algılıyor, insanlara bu yönlerini bilinçli bir şekilde şekillendirmelerinde destek oluyorum.'
                )}
              </p>
              <p className="text-charcoal/80 leading-relaxed text-base sm:text-lg">
                {t(
                  'Ich bin umgeben von lichtvollen Wesen und uralten Seelenkreisen, die durch göttliche Fügung zu mir treten. Als ihr Sprachrohr wirke ich zwischen den Welten – empfange Botschaften aus einer höheren, nicht sichtbaren Ebene, übermittle heilende Impulse und öffne Tore zu verborgenen Ebenen des Seins.',
                  'Işık varlıkları ve ilahi düzenle bana ulaşan eski ruhlar çevremde. Ben bu dünyalar arasında bir köprüyüm – görünmeyen boyutlardan mesajlar alıyor, şifalındırıcı enerjiler aktarıyor ve varoluşun derin seviyelerine kapılar açıyorum.'
                )}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { icon: Sparkles, de: 'Seit 2006', tr: '2006\'dan beri' },
                  { icon: Heart, de: 'Mit Herz', tr: 'Kalpten' },
                  { icon: Eye, de: 'Hellsichtig', tr: 'Sezgisel' },
                ]?.map?.((item: any, i: number) => (
                  <div key={i} className="text-center p-4 rounded-lg bg-beige-100/50">
                    <item.icon size={24} className="mx-auto mb-2 text-gold" />
                    <span className="text-sm font-medium text-charcoal">{t(item?.de ?? '', item?.tr ?? '')}</span>
                  </div>
                )) ?? []}
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Working method */}
        <FadeInSection delay={200}>
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-3xl text-charcoal mb-6">
              {t('Meine Arbeitsweise', 'Çalışma Şeklim')}
            </h3>
            <p className="text-gold font-heading text-lg italic mb-4">
              {t('Mit Respekt. Mit Demut. Mit Herz.', 'Saygıyla. Alçakgönüllülükle. Kalpten.')}
            </p>
            <p className="text-charcoal/75 leading-relaxed">
              {t(
                'Jede Sitzung ist einzigartig – getragen von Achtsamkeit, Stille und Vertrauen. Ich öffne einen geschützten Raum, in dem du dich gesehen und gehalten fühlen darfst. Meine Aufgabe ist es nicht, zu urteilen – sondern zu übersetzen: die feinen Botschaften der geistigen Welt, die oft genau das sagen, was wir gerade brauchen.',
                'Her seans eşsizdir – farkındalık, sessizlik ve güvenle desteklenir. Senin için güvenli bir alan açıyorum; burada kendini görülmüş ve desteklenmiş hissedebilirsin. Benim görevim yargılamak değil – çevirmek: Ruhsal dünyanın ince mesajlarını, tam da şu anda duymaya ihtiyacın duyduğun şekilde.'
              )}
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
