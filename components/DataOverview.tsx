'use client'

import { useState } from 'react'

export default function DataOverview() {
  const [activeTab, setActiveTab] = useState('spatial')

  const stats = {
    spatial: [
      { wilayah: 'Kulon Progo', kejadian: 41, persen: '36.6%', color: '#8B0000' },
      { wilayah: 'Sleman', kejadian: 25, persen: '22.3%', color: '#FF4500' },
      { wilayah: 'Gunungkidul', kejadian: 22, persen: '19.6%', color: '#FF6347' },
      { wilayah: 'Bantul', kejadian: 13, persen: '11.6%', color: '#FFA07A' },
      { wilayah: 'Kota Yogyakarta', kejadian: 11, persen: '9.8%', color: '#FFE4B5' },
    ],
    impact: [
      { kategori: 'Mengungsi', jumlah: 11141, persen: '97.3%' },
      { kategori: 'Rumah Rusak', jumlah: 268, persen: '2.3%' },
      { kategori: 'Luka-luka', jumlah: 25, persen: '0.2%' },
      { kategori: 'Korban Jiwa', jumlah: 20, persen: '0.2%' },
    ]
  }

  return (
    <section id="overview" className="container-main py-12">
      <h2 className="section-title">📊 Ringkasan Data (Feb 2016 - Feb 2026)</h2>
      
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab('spatial')}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === 'spatial' 
              ? 'bg-orange-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Distribusi Wilayah
        </button>
        <button 
          onClick={() => setActiveTab('impact')}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === 'impact' 
              ? 'bg-orange-600 text-white' 
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          Dampak Sosial
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          {activeTab === 'spatial' && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800">Sebaran Kejadian per Wilayah</h3>
              <div className="space-y-4">
                {stats.spatial.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-700">{item.wilayah}</span>
                        <span className="text-orange-600 font-bold">{item.persen}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all"
                          style={{ width: item.persen, backgroundColor: item.color }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">{item.kejadian} kejadian</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <p className="text-red-800 font-semibold">⚠️ Hotspot: Kulon Progo</p>
                <p className="text-red-700 text-sm mt-2">
                  Dengan 36.6% dari total kejadian, Kulon Progo memerlukan prioritas mitigasi tertinggi.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'impact' && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800">Total Dampak Sosial</h3>
              <div className="space-y-4">
                {stats.impact.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-semibold text-gray-700">{item.kategori}</span>
                        <span className="text-blue-600 font-bold">{item.persen}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-blue-500"
                          style={{ width: item.persen }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">{item.jumlah.toLocaleString('id-ID')} orang</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-800 font-semibold">ℹ️ Evakuasi Efektif</p>
                <p className="text-blue-700 text-sm mt-2">
                  97.3% dampak adalah displacement (evakuasi), menunjukkan early warning system yang efektif.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="card">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Pola Musiman (12 Bulan)</h3>
          <div className="space-y-3">
            {[
              { bulan: 'Januari', total: 14, musim: 'Hujan' },
              { bulan: 'Februari', total: 29, musim: 'Hujan ⭐ PUNCAK' },
              { bulan: 'Maret', total: 17, musim: 'Hujan' },
              { bulan: 'April', total: 9, musim: 'Transisi' },
              { bulan: 'Mei-Sep', total: 7, musim: 'Kemarau 🔥' },
              { bulan: 'Oktober', total: 8, musim: 'Transisi' },
              { bulan: 'November', total: 19, musim: 'Hujan' },
              { bulan: 'Desember', total: 9, musim: 'Hujan' },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-2 bg-gray-50 rounded hover:bg-gray-100 transition">
                <span className="font-medium text-gray-700">{item.bulan}</span>
                <div className="text-right">
                  <span className="inline-block bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">{item.total}</span>
                  <span className="text-xs text-gray-600 ml-2">{item.musim}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
