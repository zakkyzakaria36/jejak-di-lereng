import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jejak di Lereng - Pola Longsor DIY',
  description: 'Membaca pola bencana longsor di Daerah Istimewa Yogyakarta (Feb 2016 - Feb 2026). 112 kejadian, 5 wilayah, data interaktif.',
  keywords: 'longsor, DIY, yogyakarta, bencana alam, infografis, data visualization',
  authors: [{ name: 'BNPB, BPBD DIY, PB IPJI' }],
  openGraph: {
    title: 'Jejak di Lereng - Pola Longsor DIY',
    description: 'Data visualization 112 landslide events in Yogyakarta',
    type: 'website',
    url: 'https://jejak-di-lereng.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          {children}
        </div>
      </body>
    </html>
  )
}
