'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100 mt-16">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Jejak di Lereng</h4>
            <p className="text-sm text-gray-400">
              Visualisasi pola longsor di DIY berdasarkan 112 kejadian (Feb 2016 - Feb 2026).
            </p>
          </div>

          {/* Data Sources */}
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Sumber Data</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• DIBI BNPB</li>
              <li>• BPBD DIY</li>
              <li>• BMKG Yogyakarta</li>
              <li>• Peta Rawan Bencana DIY</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Quick Links</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#overview" className="hover:text-orange-400 transition">Data Overview</a></li>
              <li><a href="#visualization" className="hover:text-orange-400 transition">Visualisasi</a></li>
              <li><a href="#poster" className="hover:text-orange-400 transition">Poster</a></li>
              <li><a href="#download" className="hover:text-orange-400 transition">Download</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Kontak & Info</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>📧 info@bpbd-diy.go.id</li>
              <li>📍 BPBD DIY</li>
              <li>🌐 GitHub: jejak-di-lereng</li>
              <li>📱 QR Code untuk akses</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            <p>© {currentYear} Jejak di Lereng Project - All Rights Reserved</p>
            <p className="mt-2">
              Kolaborasi: <span className="text-orange-400 font-semibold">BNPB</span> • 
              <span className="text-orange-400 font-semibold"> BPBD DIY</span> • 
              <span className="text-orange-400 font-semibold"> PB IPJI</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms of Use</a>
            <a href="#" className="hover:text-orange-400 transition">GitHub</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
          <p>
            Deployed on <span className="text-orange-400 font-semibold">Vercel</span> | 
            Built with <span className="text-orange-400 font-semibold">Next.js 14</span> | 
            Data visualized with <span className="text-orange-400 font-semibold">Recharts</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
