'use client';

import Navigation from '@/components/Navigation';
import { useState } from 'react';

export default function Docs() {
  const [expandedSection, setExpandedSection] = useState('intro');

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="main-header mb-8">
          <h1 className="text-3xl font-bold mb-2">📄 Dokumentasi Project</h1>
          <p className="opacity-90">Informasi lengkap tentang metodologi, data, dan temuan penelitian</p>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-4">
          {/* Section 1: Pendahuluan */}
          <div className="chart-container cursor-pointer" onClick={() => toggleSection('intro')}>
            <h3 className="font-bold text-lg">📚 Bagian 1: Pendahuluan & Definisi Masalah</h3>
            {expandedSection === 'intro' && (
              <div className="mt-4 text-sm space-y-3">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Latar Belakang Masalah</h4>
                  <p>
                    Daerah Istimewa Yogyakarta (DIY) merupakan wilayah dengan tingkat kerentanan tinggi terhadap bencana tanah longsor. Sebagai daerah dengan topografi pegunungan, curah hujan tinggi, dan penggunaan lahan yang intensif, DIY mengalami rata-rata 1 kejadian longsor per bulan dengan rentang waktu Februari 2016 hingga Februari 2026 (112 kejadian total).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Permasalahan yang Diidentifikasi</h4>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Frekuensi tinggi tanpa pemahaman pola spasial-temporal yang jelas</li>
                    <li>Ketidaksesuaian antara intensitas kejadian dan fatality rate sejak 2020</li>
                    <li>Distribusi dampak yang tidak merata antar wilayah</li>
                    <li>Kurangnya visualisasi data yang mudah dipahami publik untuk edukasi mitigasi</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Tujuan Project</h4>
                  <p>
                    <strong>Tujuan Umum:</strong> Menganalisis dan memvisualisasikan pola distribusi spasial-temporal kejadian tanah longsor di DIY periode 2016-2026 untuk mendukung edukasi publik dan pengambilan keputusan mitigasi bencana.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Metodologi */}
          <div className="chart-container cursor-pointer" onClick={() => toggleSection('method')}>
            <h3 className="font-bold text-lg">🔬 Bagian 2: Metodologi Penelitian</h3>
            {expandedSection === 'method' && (
              <div className="mt-4 text-sm space-y-3">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Data Sources</h4>
                  <table className="w-full text-xs border-collapse">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">DIBI BNPB</td>
                        <td>112 kejadian longsor (Feb 2016 – Feb 2026)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">BPBD DIY</td>
                        <td>Program mitigasi & dampak detail (Annual reports)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">BMKG Yogyakarta</td>
                        <td>Curah hujan bulanan 2016-2026</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">Peta Rawan Bencana</td>
                        <td>Boundary & zona kerentanan DIY</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Metode Analisis</h4>
                  <ul className="list-disc ml-5 space-y-1">
                    <li><strong>Spatial Analysis:</strong> Choropleth mapping (GeoPandas)</li>
                    <li><strong>Temporal Analysis:</strong> Time series visualization (Matplotlib)</li>
                    <li><strong>Spatio-Temporal:</strong> Heatmap matrix (Seaborn)</li>
                    <li><strong>Comparative Analysis:</strong> Pre-post mitigasi (Pandas)</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Section 3: Temuan Utama */}
          <div className="chart-container cursor-pointer" onClick={() => toggleSection('findings')}>
            <h3 className="font-bold text-lg">📖 Bagian 3: Temuan Utama</h3>
            {expandedSection === 'findings' && (
              <div className="mt-4 text-sm space-y-3">
                <div className="bg-red-50 p-3 rounded">
                  <h4 className="font-semibold text-red-700 mb-2">Finding 1: Kulon Progo Hotspot</h4>
                  <ul className="list-disc ml-5 space-y-1 text-xs">
                    <li><strong>Data:</strong> 41 kejadian (36.6%) dari total 112</li>
                    <li><strong>Magnitude:</strong> 3.7x lebih tinggi dari Kota Yogyakarta</li>
                    <li><strong>Faktor:</strong> Topografi pegunungan, tanah lempung, deforestasi</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <h4 className="font-semibold text-orange-700 mb-2">Finding 2: Musim Hujan Dominan</h4>
                  <ul className="list-disc ml-5 space-y-1 text-xs">
                    <li><strong>Data:</strong> 96 dari 112 (86%) terjadi Oktober-Maret</li>
                    <li><strong>Puncak:</strong> Februari: 29 kejadian (26%)</li>
                    <li><strong>Mekanisme:</strong> Infiltrasi air → jenuh air → collapse</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <h4 className="font-semibold text-green-700 mb-2">Finding 3: Mitigasi Efektif</h4>
                  <ul className="list-disc ml-5 space-y-1 text-xs">
                    <li><strong>Pre-2020:</strong> 20 korban dari 44 kejadian (45.5% fatality)</li>
                    <li><strong>Post-2020:</strong> 0 korban dari 68 kejadian (0% fatality)</li>
                    <li><strong>Program:</strong> SMS warning + relokasi 2,500 KK + 45 talud penahan</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Section 4: Limitasi */}
          <div className="chart-container cursor-pointer" onClick={() => toggleSection('limitations')}>
            <h3 className="font-bold text-lg">⚠️ Bagian 4: Limitasi Penelitian</h3>
            {expandedSection === 'limitations' && (
              <div className="mt-4 text-sm space-y-2">
                <div>
                  <h4 className="font-semibold text-warning mb-1">Data Granularity</h4>
                  <p className="text-xs">Data hanya tingkat kejadian (frequency), tidak ada magnitude. Lokasi precision hanya desa/kecamatan level.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-warning mb-1">Temporal Coverage</h4>
                  <p className="text-xs">Data 2026 partial (hanya Februari) → proyeksi tahun full tidak akurat.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-warning mb-1">Confounding Variables</h4>
                  <p className="text-xs">Land use change & climate change trend tidak dianalisis secara mendalam.</p>
                </div>
              </div>
            )}
          </div>

          {/* Section 5: Referensi */}
          <div className="chart-container cursor-pointer" onClick={() => toggleSection('references')}>
            <h3 className="font-bold text-lg">📚 Bagian 5: Referensi & Sumber</h3>
            {expandedSection === 'references' && (
              <div className="mt-4 text-xs space-y-2">
                <div>
                  <h4 className="font-semibold mb-1">Publikasi Internasional</h4>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Guzzetti et al. (2008) - Rainfall intensity-duration control of shallow landslides</li>
                    <li>Froude & Petley (2018) - Global fatal landslide occurrence and conditioning factors</li>
                    <li>Hong et al. (2006) - Evaluation of TRMM multisatellite precipitation analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Sumber Data</h4>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>DIBI BNPB: https://dibi.bnpb.go.id</li>
                    <li>BMKG Yogyakarta: https://yogyakarta.bmkg.go.id</li>
                    <li>BPBD DIY: Laporan Tahunan 2016-2025</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="chart-container mt-8">
          <h3 className="font-bold text-lg mb-4">📊 Ringkasan Statistik Keseluruhan</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-primary">112</div>
              <div className="text-xs text-gray-600">Total Kejadian</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-secondary">10</div>
              <div className="text-xs text-gray-600">Tahun Data</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-warning">5</div>
              <div className="text-xs text-gray-600">Wilayah DIY</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded">
              <div className="text-2xl font-bold text-success">0</div>
              <div className="text-xs text-gray-600">Fatality 2020+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
