import '../globals.css';

export const metadata = {
  title: 'Jejak di Lereng - Analisis Longsor DIY',
  description: 'Analisis Spasial-Temporal 112 Kejadian Tanah Longsor (Feb 2016 – Feb 2026)',
  keywords: 'longsor, DIY, yogyakarta, bencana, mitigasi, analisis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
