'use client';

import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { loadCSV } from '@/lib/dataLoader';

export default function Dashboard() {
  const [petaData, setPetaData] = useState([]);
  const [bulananData, setBulananData] = useState([]);
  const [tahunData, setTahunData] = useState([]);
  const [dampakData, setDampakData] = useState([]);
  const [heatmapData, setHeatmapData] = useState([]);
  
  const [selectedWilayah, setSelectedWilayah] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const loadData = async () => {
      const peta = await loadCSV('data_peta_choropleth.csv');
      const bulanan = await loadCSV('data_line_bulanan.csv');
      const tahun = await loadCSV('data_bar_tahunan.csv');
      const dampak = await loadCSV('dampak_longsor_diy.csv');
      const heatmap = await loadCSV('data_heatmap_wilayah_bulan.csv');
      
      setPetaData(peta);
      setBulananData(bulanan);
      setTahunData(tahun);
      setDampakData(dampak);
      setHeatmapData(heatmap);
    };
    loadData();
  }, []);

  const colors = ['#3d6b2f', '#5a8c4a', '#7ba95a', '#9bc65a', '#b8d961'];
  const dampaakColors = ['#d4a574', '#8b6f47', '#5a4f3f', '#3d6b2f'];

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-faf8f5 to-f5f3f0">
        
        {/* HERO SECTION */}
        <div className="bg-gradient-to-r from-3d6b2f to-5a8c4a text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-3">Jejak di Lereng</h1>
            <p className="text-lg opacity-90">Membaca Pola Longsor di Daerah Istimewa Yogyakarta</p>
            <p className="text-sm opacity-75 mt-2">112 Kejadian • 10 Tahun Data (2016-2026)</p>
          </div>
        </div>

        {/* POSTER IMAGE */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="rounded-lg overflow-hidden shadow-lg mb-8 bg-white">
            <img src="/images/6.png" alt="Poster Jejak di Lereng" className="w-full h-auto" />
          </div>
        </div>

        {/* TABS */}
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <div className="flex gap-4 border-b border-d4a574">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'spatial', label: 'Spasial (Wilayah)' },
              { id: 'temporal', label: 'Temporal (Waktu)' },
              { id: 'impact', label: 'Dampak' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition ${
                  activeTab === tab.id
                    ? 'text-3d6b2f border-b-2 border-3d6b2f'
                    : 'text-64748b hover:text-3d6b2f'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-3d6b2f">
                  <div className="text-3xl font-bold text-3d6b2f">112</div>
                  <div className="text-sm text-64748b mt-2">Total Kejadian</div>
                  <div className="text-xs text-95b3a6 mt-1">2016-2026</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-d4a574">
                  <div className="text-3xl font-bold text-d4a574">41</div>
                  <div className="text-sm text-64748b mt-2">Kulon Progo (Hotspot)</div>
                  <div className="text-xs text-95b3a6 mt-1">36.6% tertinggi</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-5a8c4a">
                  <div className="text-3xl font-bold text-5a8c4a">96</div>
                  <div className="text-sm text-64748b mt-2">Musim Hujan</div>
                  <div className="text-xs text-95b3a6 mt-1">86% kejadian</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-8b6f47">
                  <div className="text-3xl font-bold text-8b6f47">0</div>
                  <div className="text-sm text-64748b mt-2">Fatality 2020+</div>
                  <div className="text-xs text-95b3a6 mt-1">Mitigasi efektif</div>
                </div>
              </div>

              {/* Insight Box */}
              <div className="bg-gradient-to-r from-e8f5e9 to-fff3cd p-6 rounded-lg border-l-4 border-3d6b2f">
                <h3 className="font-bold text-lg text-3d6b2f mb-3">Key Finding</h3>
                <p className="text-2d3436 leading-relaxed">
                  <strong>86% kejadian longsor di DIY terjadi pada musim hujan (Oktober-Maret).</strong> Kulon Progo dengan 41 kejadian adalah zona paling rawan. 
                  Sejak 2020, program mitigasi (early warning + relokasi) mencapai 0 korban jiwa - peningkatan signifikan dari 45.5% pre-2020.
                </p>
              </div>

              {/* 2 Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-bold text-lg text-2d3436 mb-4">Distribusi Wilayah</h3>
                  {petaData.length > 0 && (
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={petaData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="Wilayah" angle={-45} textAnchor="end" height={80} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Jumlah Kejadian" fill="#3d6b2f" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-bold text-lg text-2d3436 mb-4">Pola Musiman</h3>
                  {bulananData.length > 0 && (
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={bulananData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="Bulan" angle={-45} textAnchor="end" height={80} />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="Jumlah Kejadian" stroke="#d4a574" strokeWidth={3} dot={{ fill: '#d4a574', r: 5 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* SPATIAL TAB */}
          {activeTab === 'spatial' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-2d3436 mb-4">Distribusi Kejadian per Wilayah</h3>
                {petaData.length > 0 && (
                  <div>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={petaData} layout="vertical" margin={{ left: 120 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis type="number" />
                        <YAxis dataKey="Wilayah" type="category" width={110} />
                        <Tooltip />
                        <Bar dataKey="Jumlah Kejadian" fill="#3d6b2f" radius={[0, 8, 8, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                    
                    <div className="mt-6 space-y-3">
                      {petaData.map((row, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-40">
                            <p className="font-semibold text-2d3436">{row.Wilayah}</p>
                          </div>
                          <div className="flex-1 h-8 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-3d6b2f to-5a8c4a"
                              style={{ width: `${(parseInt(row['Jumlah Kejadian']) / 41) * 100}%` }}
                            />
                          </div>
                          <div className="text-right w-20">
                            <p className="font-bold text-3d6b2f">{row['Jumlah Kejadian']}</p>
                            <p className="text-xs text-64748b">{row.Persentase}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-e8f5e9 p-6 rounded-lg border-l-4 border-3d6b2f">
                <h4 className="font-bold text-3d6b2f mb-2">Kulon Progo: Hotspot Dominan</h4>
                <p className="text-2d3436 text-sm">
                  Dengan 41 kejadian (36.6% dari 112 total), Kulon Progo adalah zona paling rawan. 
                  Faktor: topografi pegunungan, tanah lempung rendah kohesi, dan deforestasi.
                </p>
              </div>
            </div>
          )}

          {/* TEMPORAL TAB */}
          {activeTab === 'temporal' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-2d3436 mb-4">Tren Tahunan (2016-2026)</h3>
                {tahunData.length > 0 && (
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={tahunData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis dataKey="Tahun" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="Jumlah Kejadian" stroke="#d4a574" strokeWidth={3} dot={({ cx, cy, payload }) => {
                        const fill = payload.Highlight === 'Puncak' ? '#8b6f47' : '#d4a574';
                        const r = payload.Highlight === 'Puncak' ? 8 : 5;
                        return <circle cx={cx} cy={cy} r={r} fill={fill} />;
                      }} />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-fff3cd to-ffe0b2 p-6 rounded-lg border-l-4 border-d4a574">
                  <h4 className="font-bold text-d4a574 mb-2">Puncak 2021</h4>
                  <p className="text-2d3436 text-sm">
                    Tahun 2021 mencatat 24 kejadian - puncak tertinggi dalam 10 tahun. 
                    Setelah itu, tren menurun signifikan berkat program mitigasi efektif.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-e8f5e9 to-c8e6c9 p-6 rounded-lg border-l-4 border-3d6b2f">
                  <h4 className="font-bold text-3d6b2f mb-2">Musim Hujan: 86% Kejadian</h4>
                  <p className="text-2d3436 text-sm">
                    96 dari 112 kejadian terjadi Oktober-Maret. Pola musiman sangat konsisten, 
                    memungkinkan early warning system yang efektif.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-2d3436 mb-4">Pola Bulanan (All Years)</h3>
                {bulananData.length > 0 && (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={bulananData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis dataKey="Bulan" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="Jumlah Kejadian" fill="#d4a574" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          )}

          {/* IMPACT TAB */}
          {activeTab === 'impact' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-bold text-lg text-2d3436 mb-4">Breakdown Dampak</h3>
                  {dampakData.length > 0 && (
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={dampakData}
                          dataKey="Jumlah"
                          nameKey="Dampak"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          innerRadius={40}
                          label
                        >
                          {dampakData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={dampaakColors[index % dampaakColors.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => value.toLocaleString('id-ID')} />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </div>

                <div className="space-y-3">
                  {dampakData.length > 0 && dampakData.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow border-l-4" style={{ borderLeftColor: dampaakColors[idx] }}>
                      <p className="font-semibold text-2d3436">{item.Dampak}</p>
                      <p className="text-2xl font-bold" style={{ color: dampaakColors[idx] }}>
                        {parseInt(item.Jumlah).toLocaleString('id-ID')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-c8e6c9 to-fff3cd p-6 rounded-lg border-l-4 border-3d6b2f">
                <h4 className="font-bold text-3d6b2f mb-3">Efektivitas Mitigasi (2020+)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-64748b">Pre-2020</p>
                    <p className="font-bold text-2d3436">44 kejadian → 20 korban (45.5%)</p>
                  </div>
                  <div>
                    <p className="text-64748b">Post-2020</p>
                    <p className="font-bold text-3d6b2f">68 kejadian → 0 korban (0%)</p>
                  </div>
                  <div>
                    <p className="text-64748b">Improvement</p>
                    <p className="font-bold text-3d6b2f">+45.5 percentage point</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg text-2d3436 mb-4">Program Mitigasi</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-e8f5e9 rounded-lg">
                    <p className="text-3xl font-bold text-3d6b2f">15,000</p>
                    <p className="text-sm text-2d3436 mt-2">Warga mendapat SMS warning real-time</p>
                  </div>
                  <div className="text-center p-4 bg-fff3cd rounded-lg">
                    <p className="text-3xl font-bold text-d4a574">2,500</p>
                    <p className="text-sm text-2d3436 mt-2">Keluarga relokasi preventif</p>
                  </div>
                  <div className="text-center p-4 bg-e8f5e9 rounded-lg">
                    <p className="text-3xl font-bold text-3d6b2f">45</p>
                    <p className="text-sm text-2d3436 mt-2">Tembok penahan lereng (92% survival)</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="bg-3d6b2f text-white py-8 px-4 text-center">
          <p className="mb-2"><strong>Jejak di Lereng</strong></p>
          <p className="text-sm opacity-90 mb-3">Analisis Spasial-Temporal Tanah Longsor DIY (2016-2026)</p>
          <p className="text-xs opacity-75">Instagram: @zkyzakariaa | Data: DIBI BNPB, BPBD DIY, BMKG</p>
        </div>
      </div>
    </div>
  );
}
