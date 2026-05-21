'use client'

import { useState, useCallback, useEffect } from 'react'
import { useLanguage } from '@/app/contexts/language-context'
import { FadeInSection } from './fade-in-section'
import { Sparkles, RefreshCw } from 'lucide-react'

const messagesDE = [
  'Vertraue heute deiner Intuition – sie kennt den Weg.',
  'Lass alte Energien los und mache Platz für Neues.',
  'Du bist stärker, als du denkst – die geistige Welt steht hinter dir.',
  'Heute ist ein guter Tag, um inneren Frieden zu finden.',
  'Deine Seele weiß, was du brauchst – höre auf sie.',
  'Öffne dein Herz für die Zeichen um dich herum.',
  'Heilung beginnt, wenn du dir erlaubst, loszulassen.',
  'Die Antworten, die du suchst, liegen bereits in dir.',
  'Umgib dich heute mit positiver Energie und Licht.',
  'Jeder neue Tag ist eine Chance, deinem wahren Selbst näher zu kommen.',
  'Glaube an die Kraft der Liebe – sie überwindet alles.',
  'Stille ist die Sprache der Seele – nimm dir heute Zeit dafür.',
  'Du bist nicht allein – lichvolle Wesen begleiten dich.',
  'Dein inneres Licht leuchtet heller, als du ahnst.',
  'Heute darfst du einfach sein – ohne Erwartungen.',
  'Verbinde dich mit der Erde unter deinen Füßen und spüre die Kraft.',
  'Die geistige Welt sendet dir heute Zeichen – sei aufmerksam.',
  'Lass Dankbarkeit dein Herz erfüllen – sie öffnet Türen.',
  'Deine Energie ist wertvoll – schütze sie heute besonders.',
  'Alles, was du brauchst, kommt zur richtigen Zeit zu dir.',
  'Vertraue dem Prozess – auch wenn du den Weg noch nicht siehst.',
  'Dein Atem ist deine Brücke zur inneren Ruhe.',
  'Heute ist ein Tag der Transformation – sei offen dafür.',
  'Die Liebe deiner Ahnen umgibt dich – spüre sie.',
  'Mut beginnt dort, wo Angst aufhört.',
  'Du darfst dir erlauben, glücklich zu sein.',
  'Jede Herausforderung trägt ein Geschenk in sich.',
  'Dein Seelenweg entfaltet sich mit jedem Schritt.',
  'Spüre die Verbindung zu allem, was ist.',
  'Heute ist ein Tag voller Möglichkeiten – öffne dich.',
  'Die Sterne leuchten auch für dich – schaue nach oben.',
  'Deine Gedanken formen deine Realität – wähle sie weise.',
]

const messagesTR = [
  'Bugün sezgilerine güven – onlar yolu biliyor.',
  'Eski enerjileri bırak ve yeniye alan aç.',
  'Düşündüğünden daha güçlüsün – ruhsal alem arkanızda.',
  'Bugün iç huzuru bulmak için güzel bir gün.',
  'Ruhun neye ihtiyacın olduğunu biliyor – onu dinle.',
  'Kalbini etrafındaki işaretlere aç.',
  'Şifa, bırakmaya izin verdiğinde başlar.',
  'Aradığın cevaplar zaten içinde.',
  'Bugün kendini pozitif enerji ve ışıkla çevrele.',
  'Her yeni gün, gerçek benliğine yaklaşmak için bir fırsat.',
  'Sevginin gücüne inan – o her şeyi aşar.',
  'Sessizlik ruhun dilidir – bugün ona zaman ayır.',
  'Yalnız değilsin – ışık varlıkları sana eşlik ediyor.',
  'İçindeki ışık tahmin ettiğinden daha parlak.',
  'Bugün sadece ol – beklentisiz.',
  'Ayağının altındaki toprakla bağlan ve gücü hisset.',
  'Ruhsal alem bugün sana işaretler gönderiyor – dikkatli ol.',
  'Minnettarlık kalbini doldursun – o kapılar açar.',
  'Enerjin değerli – bugün onu özellikle koru.',
  'İhtiyacın olan her şey doğru zamanda sana gelecek.',
  'Sürece güven – yolu henüz görmesen bile.',
  'Nefesin iç huzura açılan köprün.',
  'Bugün dönüşüm günü – açık ol.',
  'Atalarının sevgisi seni sarıyor – onu hisset.',
  'Cesaret, korkunun bittiği yerde başlar.',
  'Mutlu olmana izin verebilirsin.',
  'Her zorluk içinde bir hediye taşır.',
  'Ruh yolculuğun her adımda açılıyor.',
  'Var olan her şeyle bağlantını hisset.',
  'Bugün olanakların günü – kendini aç.',
  'Yıldızlar senin için de parlıyor – yukarı bak.',
  'Düşüncelerin gerçekliğini şekillendirir – onları bilgece seç.',
]

export function DailyMessageSection() {
  const { lang, t } = useLanguage()
  const [message, setMessage] = useState<string>('')
  const [isRevealing, setIsRevealing] = useState(false)

  // Mesajı sadece tarayıcıda yükle (Hydration hatasını engellemek için)
  useEffect(() => {
    const msgs = lang === 'de' ? messagesDE : messagesTR
    setMessage(msgs[Math.floor(Math.random() * msgs.length)])
  }, [lang])

  const revealMessage = useCallback(() => {
    setIsRevealing(true)
    const msgs = lang === 'de' ? messagesDE : messagesTR
    setTimeout(() => {
      setMessage(msgs[Math.floor(Math.random() * msgs.length)])
      setIsRevealing(false)
    }, 1200)
  }, [lang])

  return (
    <section id="daily-message" className="py-20 sm:py-28 bg-beige-100/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeInSection>
          <div className="text-center mb-12">
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              {t('Tagesbotschaft', 'Günlük Mesaj')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mt-4 tracking-tight">
              {t('Deine Botschaft für heute', 'Bugünkü Mesajın')}
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
        </FadeInSection>

        <FadeInSection delay={150}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-beige-50 rounded-lg p-8 sm:p-12 text-center shadow-sm min-h-[250px] flex flex-col items-center justify-center">
              <div className="animate-fade-in">
                <Sparkles size={32} className="text-gold mx-auto mb-6" />
                <p className="font-heading text-xl sm:text-2xl text-charcoal leading-relaxed italic">
                  {message ? `„${message}“` : '...'}
                </p>
                <button
                  onClick={revealMessage}
                  disabled={isRevealing}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold/30 text-gold-dark text-sm font-medium hover:bg-gold/5 transition-all duration-300"
                >
                  {isRevealing ? <RefreshCw size={14} className="animate-spin" /> : <RefreshCw size={14} />}
                  {t('Neue Botschaft', 'Yeni Mesaj')}
                </button>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}