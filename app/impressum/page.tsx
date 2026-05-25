import React from 'react';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-gray-200">
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 border-b pb-4 mb-8">
          Impressum
        </h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Angaben gemäß § 5 DDG</h2>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 my-4 rounded-r space-y-1">
              <p className="font-semibold text-gray-900">[Kiralayacağınız Resmi Ad Soyad]</p>
              <p className="text-gray-600">[Kiralık İşletme/Servis Adresi]</p>
              <p className="text-gray-600">[Posta Kodu ve Şehir / Almanya]</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Kontakt</h2>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 my-4 rounded-r space-y-1">
              <p className="text-gray-600">Telefon: [Telefon Numaranız]</p>
              <p className="text-gray-600">E-Mail: [E-Posta Adresiniz]</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 my-4 rounded-r space-y-1">
              <p className="font-semibold text-gray-900">[Kiralayacağınız Resmi Ad Soyad]</p>
              <p className="text-gray-600">[Kiralık İşletme/Servis Adresi]</p>
              <p className="text-gray-600">[Posta Kodu ve Şehir / Almanya]</p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 text-sm text-gray-500">
            <p>Quelle: Erstellt mit dem Impressum-Generator von e-recht24.de</p>
          </div>
        </section>
      </main>
    </div>
  );
}
