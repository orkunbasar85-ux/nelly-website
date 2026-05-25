import React from 'react';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-gray-200">
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 border-b pb-4 mb-8">
          Datenschutzerklärung
        </h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Allgemeine Hinweise</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Datenerfassung auf dieser Website</h3>
            <p className="text-gray-600 leading-relaxed">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Impressum dieser Website entnehmen. Ihre Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Hosting und Content Delivery Networks (CDN)</h2>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Cloudflare Pages</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Wir hosten unsere Website bei Cloudflare Pages. Anbieter ist die Cloudflare Inc., 101 Townsend St., San Francisco, CA 94107, USA (nachfolgend „Cloudflare“).
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cloudflare bietet ein weltweit verteiltes Content Delivery Network mit DNS an. Technisch wird der Informationsverkehr zwischen Ihrem Browser und unserer Website über das Netzwerk von Cloudflare geleitet. Soweit für die Bereitstellung und Sicherheit des Dienstes erforderlich, erfasst Cloudflare Protokolldaten (Logfiles), die auch Ihre IP-Adresse enthalten können. Die Nutzung erfolgt auf Grundlage unseres berechtigten Interesses an einer sicheren Bereitstellung unseres Webangebotes (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 my-4 rounded-r">
              <p className="font-semibold text-gray-900">[Kiralayacağınız Resmi Ad Soyad]</p>
              <p className="text-gray-600">[Kiralık İşletme/Servis Adresi]</p>
              <p className="text-gray-600">[Posta Kodu ve Şehir / Almanya]</p>
              <p className="text-gray-600 mt-2">E-Mail: [E-Posta Adresiniz]</p>
              <p className="text-gray-600">Telefon: [Telefon Numaranız]</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Recht auf Auskunft, Löschung, Berichtigung</h2>
            <p className="text-gray-600 leading-relaxed">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
