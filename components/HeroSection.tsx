'use client'

export default function HeroSection() {
  return (
    <section className="container-main py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Jejak di Lereng: Membaca Pola Longsor di DIY
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            <strong>112 kejadian longsor</strong> tercatat dari Februari 2016 hingga Februari 2026 di Daerah Istimewa Yogyakarta. 
            Visualisasi data ini mengungkap pola spasial, temporal, dan dampak sosial dari bencana alam berulang ini.
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-600 p-4 mb-6">
            <p className="text-orange-800 font-semibold">
              📊 86% kejadian terkonsentrasi dalam musim hujan (Nov-Apr)
            </p>
            <p className="text-orange-700 mt-2">
              Pola yang dapat diprediksi dan memerlukan strategi mitigasi proaktif
            </p>
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Jelajahi Data →
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold">112</div>
              <div className="text-sm mt-2">Kejadian Tercatat</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold">5</div>
              <div className="text-sm mt-2">Wilayah DIY</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold">11.1K</div>
              <div className="text-sm mt-2">Orang Mengungsi</div>
            </div>
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold">10</div>
              <div className="text-sm mt-2">Tahun Data</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
