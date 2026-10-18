'use client'

import { useState } from 'react'

export default function DataDownload() {
  const [downloaded, setDownloaded] = useState<string | null>(null)

  const csvFiles = [
    {
      name: 'data_peta_choropleth.csv',
      desc: 'Distribusi kejadian per wilayah (5 kabupaten/kota)',
      size: '185 bytes'
    },
    {
      name: 'data_heatmap_wilayah_bulan.csv',
      desc: 'Matrix spatio-temporal: 5 wilayah × 12 bulan',
      size: '231 bytes'
    },
    {
      name: 'data_line_bulanan.csv',
      desc: 'Data bulanan dengan flag musim (rainy/dry season)',
      size: '266 bytes'
    },
    {
      name: 'data_bar_tahunan.csv',
      desc: 'Tren tahunan 2016-2026 dengan highlight 2021',
      size: '226 bytes'
    },
    {
      name: 'dampak_longsor_diy.csv',
      desc: 'Breakdown dampak sosial (displaced, houses, injuries, deaths)',
      size: '74 bytes'
    }
  ]

  const handleDownload = (filename: string) => {
    setDownloaded(filename)
    setTimeout(() => setDownloaded(null), 3000)
  }

  return (
    <section id="download" className="container-main py-12">
      <h2 className="section-title">📥 Download Data & Assets</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* CSV Downloads */}
        <div className="card">
          <h3 className="text-xl font-bold mb-6 text-gray-800">📊 CSV Data Files</h3>
          <p className="text-gray-600 mb-4">
            Dataset lengkap dalam format CSV untuk analisis lebih lanjut atau reimplementasi visualisasi.
          </p>
          <div className="space-y-3">
            {csvFiles.map((file, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-orange-400 transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{file.name}</h4>
                    <p className="text-sm text-gray-600">{file.desc}</p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{file.size}</span>
                </div>
                <button
                  onClick={() => handleDownload(file.name)}
                  className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                >
                  {downloaded === file.name ? '✓ Downloaded' : 'Download'}
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6">
            💡 Semua file dapat diakses via public `/public/data/` folder di repository GitHub.
          </p>
        </div>

        {/* Documentation & Resources */}
        <div className="card">
          <h3 className="text-xl font-bold mb-6 text-gray-800">📚 Dokumentasi & Referensi</h3>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-300">
              <h4 className="font-semibold text-purple-900 mb-2">📖 Dokumentasi Proses</h4>
              <p className="text-sm text-purple-800 mb-3">
                Panduan lengkap metodologi, data acquisition, analisis, hingga visualisasi.
              </p>
              <button className="text-sm bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition">
                Baca Dokumentasi →
              </button>
            </div>

            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-300">
              <h4 className="font-semibold text-orange-900 mb-2">📊 Data Dictionary</h4>
              <p className="text-sm text-orange-800 mb-3">
                Penjelasan setiap kolom CSV, tipe data, dan konteks nilai.
              </p>
              <button className="text-sm bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition">
                Lihat Data Dictionary →
              </button>
            </div>

            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-300">
              <h4 className="font-semibold text-green-900 mb-2">🔗 GitHub Repository</h4>
              <p className="text-sm text-green-800 mb-3">
                Source code, data files, dan dokumentasi dalam satu tempat.
              </p>
              <button className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition">
                Buka GitHub Repo →
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-800 font-semibold text-sm mb-2">💾 Reproducible Research</p>
            <p className="text-blue-700 text-xs">
              Semua data dan kode tersedia untuk memastikan reprodusibilitas dan transparansi penelitian.
            </p>
          </div>
        </div>
      </div>

      {/* Bulk Download */}
      <div className="mt-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Download Semua Assets Sekaligus</h3>
        <p className="text-gray-700 mb-6">Dapatkan poster, CSV, dokumentasi, dan sponsor logos dalam satu paket.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition">
            📦 Download Complete Package (.zip)
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg transition">
            🔗 Clone dari GitHub
          </button>
        </div>
      </div>
    </section>
  )
}
