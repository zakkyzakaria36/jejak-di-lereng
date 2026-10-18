'use client'

import Image from 'next/image'

export default function PosterSection() {
  return (
    <section id="poster" className="container-main py-12">
      <h2 className="section-title">🎨 Poster Infografis Final</h2>
      
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <p className="text-gray-700 mb-6">
            Poster infografis lengkap "Jejak di Lereng" menampilkan visualisasi komprehensif meliputi:
            profil dampak, tren waktu kejadian, dinamika bencana, strategi mitigasi, dan rencana kesiapsiagaan bersama.
          </p>
          
          <div className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center min-h-96 mb-6">
            <div className="text-center text-gray-500">
              <p className="mb-4">📄 Poster akan ditampilkan di sini</p>
              <p className="text-sm">(File: 6.png - ukuran A1, 300 DPI, 8.2 MB)</p>
              <p className="text-xs mt-2 text-gray-400">Deploy ke Vercel akan menampilkan gambar</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-300">
              <h4 className="font-bold text-blue-900 mb-2">01. Profil Dampak</h4>
              <p className="text-sm text-blue-800">Breakdown dampak sosial dari 112 kejadian</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-300">
              <h4 className="font-bold text-orange-900 mb-2">02. Tren Temporal</h4>
              <p className="text-sm text-orange-800">Pola musiman dan tren 10 tahun</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-300">
              <h4 className="font-bold text-green-900 mb-2">03. Strategi Mitigasi</h4>
              <p className="text-sm text-green-800">Pendekatan bioengineering lereng</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-300">
              <h4 className="font-bold text-purple-900 mb-2">04. Kesiapsiagaan</h4>
              <p className="text-sm text-purple-800">Kolaborasi masyarakat & stakeholder</p>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-amber-800 font-semibold">📍 Sponsor & Atribusi</p>
            <p className="text-amber-700 text-sm mt-2">
              Proyek ini adalah kolaborasi antara BNPB (Badan Nasional Penanggulangan Bencana), 
              BPBD DIY (Badan Penanggulangan Bencana Daerah Yogyakarta), dan PB IPJI (Persatuan Belajar Ilmu Pegetahuan Jalanan Indonesia).
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Poster Siap untuk Print & Media</h3>
        <p className="mb-6">Format A1 (594×841mm), 300 DPI, color CMYK</p>
        <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-lg transition">
          Download Poster PDF →
        </button>
      </div>
    </section>
  )
}
