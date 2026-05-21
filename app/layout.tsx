import './globals.css'

export const metadata = {
  title: 'Nelly – Medium & Spirituelle Begleitung',
  description: 'Nelly ist ein erfahrenes Medium und spirituelle Begleiterin. Hellsehen, Wahrsagen, Energiearbeit, Jenseitskontakte und mehr. Sitzungen auf Deutsch und Türkisch.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Nelly – Medium & Spirituelle Begleitung',
    description: 'Spirituelle Begleitung, Hellsehen, Energiearbeit & Jenseitskontakte. Erfahrenes Medium seit 2006.',
    images: ['/og-image.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
