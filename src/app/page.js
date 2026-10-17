'use client';

import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { loadCSV } from '@/lib/dataLoader';

export default function Dashboard() {
  const [petaData, setPetaData] = useState([]);
  const [bulananData, setBulananData] = useState([]);
  const [tahunData, setTahunData] = useState([]);
  const [dampakData, setDampakData] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedWilayah, setSelectedWilayah] = useState('all');

  useEffect(() => {
    const loadData = async () => {
      const peta = await loadCSV('data_peta_choropleth.csv');
      const bulanan = await loadCSV('data_line_bulanan.csv');
      const tahun = await loadCSV('data_bar_tahunan.csv');
      const dampak = await loadCSV('dampak_longsor_diy.csv');
      
      setPetaData(peta);
      setBulananData(bulanan);
      setTahunData(tahun);
      setDampakData(dampak);
    };
    loadData();
  }, []);

  const wilayahColors = {
    'Kulon Progo': '#2d5016',
    'Sleman': '#3d6b2f',
    'Gunungkidul': '#5a8c4a',
    'Bantul': '#7ba95a',
    'Kota Yogyakarta': '#9bc65a'
  };

  const dampakColors = ['#d4a574', '#8b6f47', '#5a4f3f', '#3d6b2f'];

  const filteredWilayah = selectedWilayah === 'all' 
    ? petaData 
    : petaData.filter(d => d.Wilayah === selectedWilayah);

  return (
    <div>
      <Navigation />
      
      {/* HERO SECTION */}
      <div className="relative h-96 bg-gradient-to-br from-2d5016 via-3d6b2f to-5a8c4a overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-d4a574 rounded-full mix-blend-multiply filter blur-3xl animation-pulse"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-4">Jejak di Lereng</h1>
          <p className="text-xl text-gray-100 mb-2">Membaca Pola Longsor di Daerah Istimewa Yogyakarta</p>
          <p className="text-sm text-gray-200">Analisis Spasial-Temporal 112 Kejadian (2016-2026)</p>
        </div>
      </div>

      {/* POSTER SHOWCASE */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-d4a574 bg-white">
          <img src="/images/6.png" alt="Poster Jejak di Lereng" className="w-full h-auto" />
        </div>
      </div>

      {/* TABS NAVIGATION */}
      <div className="sticky top-16 bg-white shadow-md z-40 border-b-2 border-3d6b2f">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: 'overview', label: '📊 Overview', icon: '📊' },
              { id: 'spatial', label: '🗺️ Spasial', icon: '🗺️' },
              { id: 'temporal', label: '📈 Temporal', icon: '📈' },
              { id: 'impact', label: '💥 Dampak', icon: '💥' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold transition border-b-4 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-3d6b2f border-3d6b2f'
                    : 'text-95b3a6 border-transparent hover:text-3d6b2f'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12 pb-24">
        
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Kejadian', value: '112', subtext: '10 tahun data', icon: '📍' },
                { label: 'Hotspot', value: '41', subtext: 'Kulon Progo (36.6%)', icon: '🔴' },
                { label: 'Musim Hujan', value: '96', subtext: '86% kejadian', icon: '🌧️' },
                { label: 'Fatality 2020+', value: '0', subtext: 'Mitigasi efektif', icon: '✅' }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-3d6b2f hover:shadow-xl transition">
                  <div className="text-3xl mb-2">{card.icon}</div>
                  <div className="text-4xl font-bold text-3d6b2f mb-2">{card.value}</div>
                  <div className="text-sm text-2d3436 font-semibold">{card.label}</div>
                  <div className="text-xs text-95b3a6 mt-1">{card.subtext}</div>
                </div>
              ))}
            </div>

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-e8f5e9 to-fff3cd p-8 rounded-xl shadow-lg border-l-4 border-3d6b2f">
              <h3 className="text-2xl font-bold text-3d6b2f mb-4">💡 Key Insight</h3>
              <p className="text-2d3436 leading-relaxed text-lg">
                <strong>86% kejadian longsor di DIY terjadi pada musim hujan (Oktober-Maret).</strong> 
                Kulon Progo dengan 41 kejadian adalah zona paling rawan. Program mitigasi sejak 2020 
                (early warning + relokasi preventif) berhasil menurunkan fatality rate dari <strong>45.5% menjadi 0%</strong> 
                - peningkatan signifikan dalam 68 kejadian post-2020.
              </p>
            </div>

            {/* Two Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-2d3436 mb-4">Distribusi Wilayah</h3>
                {petaData.length > 0 && (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={petaData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis dataKey="Wilayah" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip contentStyle={{ backgroundColor: '#faf8f5', border: '1px solid #3d6b2f' }} />
                      <Bar dataKey="Jumlah Kejadian" fill="#3d6b2f" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-2d3436 mb-4">Pola Musiman</h3>
                {bulananData.length > 0 && (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={bulananData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis dataKey="Bulan" angle={-45} textAnchor="end" height={80} />
                      <YAxis />
                      <Tooltip contentStyle={{ backgroundColor: '#faf8f5', border: '1px solid #d4a574' }} />
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
          <div className="space-y-8">
            {/* Filter */}
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setSelectedWilayah('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedWilayah === 'all' 
                    ? 'bg-3d6b2f text-white' 
                    : 'bg-gray-200 text-2d3436 hover:bg-3d6b2f hover:text-white'
                }`}
              >
                Semua Wilayah
              </button>
              {petaData.map(d => (
                <button
                  key={d.Wilayah}
                  onClick={() => setSelectedWilayah(d.Wilayah)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedWilayah === d.Wilayah
                      ? 'bg-d4a574 text-white'
                      : 'bg-gray-200 text-2d3436 hover:bg-d4a574 hover:text-white'
                  }`}
                >
                  {d.Wilayah}
                </button>
              ))}
            </div>

            {/* Chart */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-2d3436 mb-6">Distribusi Kejadian per Wilayah</h3>
              {filteredWilayah.length > 0 && (
                <div>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={filteredWilayah} layout="vertical" margin={{ left: 120 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis type="number" />
                      <YAxis dataKey="Wilayah" type="category" width={110} />
                      <Tooltip contentStyle={{ backgroundColor: '#faf8f5', border: '1px solid #3d6b2f' }} />
                      <Bar dataKey="Jumlah Kejadian" fill="#3d6b2f" radius={[0, 8, 8, 0]} />
                    </BarChart>
                  </ResponsiveContainer>

                  {/* Detail Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {filteredWilayah.map((row, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-faf8f5 to-fff3cd p-4 rounded-lg border-l-4 border-3d6b2f">
                        <p className="font-bold text-2d3436">{row.Wilayah}</p>
                        <p className="text-3xl font-bold text-3d6b2f mt-2">{row['Jumlah Kejadian']}</p>
                        <p className="text-sm text-95b3a6 mt-1">{row.Persentase}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Finding */}
            <div className="bg-e8f5e9 p-6 rounded-xl border-l-4 border-3d6b2f">
              <h4 className="font-bold text-3d6b2f text-lg mb-2">🎯 Kulon Progo: Hotspot Dominan</h4>
              <p className="text-2d3436">Dengan 41 kejadian (36.6% dari 112), Kulon Progo adalah zona paling rawan longsor di DIY. Faktor utama: topografi pegunungan curam, tanah lempung rendah kohesi, dan deforestasi 120 ha/tahun.</p>
            </div>
          </div>
        )}

        {/* TEMPORAL TAB */}
        {activeTab === 'temporal' && (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-2d3436 mb-6">Tren Tahunan (2016-2026)</h3>
              {tahunData.length > 0 && (
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={tahunData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="Tahun" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: '#faf8f5', border: '1px solid #d4a574' }} />
                    <Line 
                      type="monotone" 
                      dataKey="Jumlah Kejadian" 
                      stroke="#d4a574" 
                      strokeWidth={3} 
                      dot={({ cx, cy, payload }) => {
                        const fill = payload.Highlight === 'Puncak' ? '#8b6f47' : '#d4a574';
                        const r = payload.Highlight === 'Puncak' ? 8 : 5;
                        return <circle cx={cx} cy={cy} r={r} fill={fill} />;
                      }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-fff3cd p-6 rounded-xl border-l-4 border-d4a574">
                <h4 className="font-bold text-d4a574 text-lg mb-2">📍 Puncak 2021</h4>
                <p className="text-2d3436">Tahun 2021 mencatat 24 kejadian - puncak tertinggi dalam 10 tahun. Setelah itu, tren menurun signifikan berkat implementasi program mitigasi yang efektif.</p>
              </div>

              <div className="bg-e8f5e9 p-6 rounded-xl border-l-4 border-3d6b2f">
                <h4 className="font-bold text-3d6b2f text-lg mb-2">🌧️ Musim Hujan</h4>
                <p className="text-2d3436">96 dari 112 kejadian (86%) terjadi Oktober-Maret. Pola musiman sangat konsisten, memungkinkan sistem peringatan dini yang efektif.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-2d3436 mb-6">Pola Bulanan (All Years)</h3>
              {bulananData.length > 0 && (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bulananData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="Bulan" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip contentStyle={{ backgroundColor: '#faf8f5', border: '1px solid #d4a574' }} />
                    <Bar dataKey="Jumlah Kejadian" fill="#d4a574" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        )}

        {/* IMPACT TAB */}
        {activeTab === 'impact' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-2d3436 mb-6">Breakdown Dampak (2016-2026)</h3>
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
                          <Cell key={`cell-${index}`} fill={dampakColors[index % dampakColors.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => value.toLocaleString('id-ID')} />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="space-y-3">
                {dampakData.length > 0 && dampakData.map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl shadow border-l-4" style={{ borderLeftColor: dampakColors[idx] }}>
                    <p className="text-sm text-95b3a6">{item.Dampak}</p>
                    <p className="text-3xl font-bold mt-2" style={{ color: dampakColors[idx] }}>
                      {parseInt(item.Jumlah).toLocaleString('id-ID')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-c8e6c9 to-fff3cd p-8 rounded-xl border-l-4 border-3d6b2f">
              <h4 className="font-bold text-3d6b2f text-lg mb-4">✅ Efektivitas Mitigasi (2020+)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="text-sm text-95b3a6 font-semibold">Pre-2020</p>
                  <p className="text-2xl font-bold text-2d3436 mt-2">44 kejadian</p>
                  <p className="text-sm text-95b3a6 mt-1">20 korban (45.5% fatality)</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="text-sm text-95b3a6 font-semibold">Post-2020</p>
                  <p className="text-2xl font-bold text-3d6b2f mt-2">68 kejadian</p>
                  <p className="text-sm text-95b3a6 mt-1">0 korban (0% fatality)</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="text-sm text-95b3a6 font-semibold">Improvement</p>
                  <p className="text-2xl font-bold text-3d6b2f mt-2">+45.5%</p>
                  <p className="text-sm text-95b3a6 mt-1">Fatality reduction</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-2d3436 mb-6">Program Mitigasi 2020+</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-6 bg-e8f5e9 rounded-xl">
                  <p className="text-4xl font-bold text-3d6b2f">15K</p>
                  <p className="text-sm text-2d3436 mt-2 font-semibold">Warga SMS Warning</p>
                  <p className="text-xs text-95b3a6 mt-1">Real-time notification</p>
                </div>
                <div className="text-center p-6 bg-fff3cd rounded-xl">
                  <p className="text-4xl font-bold text-d4a574">2.5K</p>
                  <p className="text-sm text-2d3436 mt-2 font-semibold">Keluarga Relokasi</p>
                  <p className="text-xs text-95b3a6 mt-1">Preventive transfer</p>
                </div>
                <div className="text-center p-6 bg-e8f5e9 rounded-xl">
                  <p className="text-4xl font-bold text-3d6b2f">45</p>
                  <p className="text-sm text-2d3436 mt-2 font-semibold">Tembok Penahan</p>
                  <p className="text-xs text-95b3a6 mt-1">92% survival rate</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-2d5016 to-3d6b2f text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Jejak di Lereng</h3>
          <p className="text-gray-200 mb-4">Analisis Spasial-Temporal Tanah Longsor DIY 2016-2026</p>
          <p className="text-sm text-gray-300">
            Data: DIBI BNPB | BPBD DIY | BMKG | Peta Rawan Bencana DIY
          </p>
          <p className="text-sm text-gray-300 mt-3">
            Instagram: <span className="font-semibold">@zkyzakariaa</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
