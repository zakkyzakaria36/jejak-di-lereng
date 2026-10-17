'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { loadCSV } from '@/lib/dataLoader';

export default function Dashboard() {
  const [petaData, setPetaData] = useState([]);
  const [bulananData, setBulananData] = useState([]);
  const [tahunData, setTahunData] = useState([]);
  const [dampakData, setDampakData] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setPetaData(await loadCSV('data_peta_choropleth.csv'));
      setBulananData(await loadCSV('data_line_bulanan.csv'));
      setTahunData(await loadCSV('data_bar_tahunan.csv'));
      setDampakData(await loadCSV('dampak_longsor_diy.csv'));
    };
    loadData();
  }, []);

  const chartColors = ['#FF6B6B', '#A855F7', '#3B82F6', '#4ADE80', '#F59E0B'];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'spatial', label: 'Spatial', icon: '🗺️' },
    { id: 'temporal', label: 'Temporal', icon: '📈' },
    { id: 'impact', label: 'Impact', icon: '💥' }
  ];

  return (
    <div className="flex h-screen bg-0A0E1A text-e2e8f0">
      {/* SIDEBAR */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-1a1a2e border-r border-1e293b transition-all duration-300`}>
        <div className="p-4 border-b border-1e293b flex items-center justify-between">
          <h1 className={`font-bold text-FF6B6B transition-all ${sidebarOpen ? 'text-lg' : 'text-xs text-center w-full'}`}>
            {sidebarOpen ? 'Jejak' : 'J'}
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-64748b hover:text-FF6B6B transition"
          >
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded transition ${
                activeTab === tab.id
                  ? 'bg-FF6B6B text-0A0E1A font-semibold'
                  : 'text-cbd5e1 hover:bg-1e293b'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {sidebarOpen && <span className="text-sm">{tab.label}</span>}
            </button>
          ))}
        </nav>

        <div className={`absolute bottom-4 ${sidebarOpen ? 'left-4 right-4' : 'left-2 right-2'} text-xs text-64748b`}>
          <p className={sidebarOpen ? '' : 'text-center'}>112 Events</p>
          <p className={`text-FF6B6B font-semibold ${sidebarOpen ? '' : 'text-center'}`}>2016-2026</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TOP BAR */}
        <div className="bg-1a1a2e border-b border-1e293b px-8 py-4">
          <h2 className="text-2xl font-bold text-FF6B6B">
            {tabs.find(t => t.id === activeTab)?.label} Analysis
          </h2>
          <p className="text-sm text-cbd5e1 mt-1">Jejak di Lereng - Pola Longsor DIY</p>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-auto px-8 py-6">
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-6 max-w-6xl">
              {/* Metrics */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-1a1a2e p-4 rounded-lg border-l-4 border-FF6B6B">
                  <p className="text-sm text-cbd5e1">Total Kejadian</p>
                  <p className="text-3xl font-bold text-FF6B6B mt-2">112</p>
                  <p className="text-xs text-64748b mt-1">2016-2026</p>
                </div>
                <div className="bg-1a1a2e p-4 rounded-lg border-l-4 border-A855F7">
                  <p className="text-sm text-cbd5e1">Hotspot</p>
                  <p className="text-3xl font-bold text-A855F7 mt-2">41</p>
                  <p className="text-xs text-64748b mt-1">Kulon Progo</p>
                </div>
                <div className="bg-1a1a2e p-4 rounded-lg border-l-4 border-3B82F6">
                  <p className="text-sm text-cbd5e1">Musim Hujan</p>
                  <p className="text-3xl font-bold text-3B82F6 mt-2">96</p>
                  <p className="text-xs text-64748b mt-1">86% kejadian</p>
                </div>
                <div className="bg-1a1a2e p-4 rounded-lg border-l-4 border-4ADE80">
                  <p className="text-sm text-cbd5e1">Fatality 2020+</p>
                  <p className="text-3xl font-bold text-4ADE80 mt-2">0</p>
                  <p className="text-xs text-64748b mt-1">Mitigasi efektif</p>
                </div>
              </div>

              {/* Insight */}
              <div className="bg-0f172a p-6 rounded-lg border-l-4 border-FF6B6B">
                <h3 className="text-lg font-bold text-FF6B6B mb-3">Key Finding</h3>
                <p className="text-cbd5e1 leading-relaxed">
                  <strong>86% kejadian terjadi musim hujan (Okt-Mar).</strong> Kulon Progo dengan 41 kejadian adalah hotspot dominan. 
                  Program mitigasi 2020+ (early warning + relokasi) mencapai <strong>0 korban dari 68 kejadian</strong> - 
                  improvement dari 45.5% fatality rate pre-2020.
                </p>
              </div>

              {/* Two Charts */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-1a1a2e p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-FF6B6B mb-4">Distribusi Wilayah</h3>
                  {petaData.length > 0 && (
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={petaData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="Wilayah" angle={-45} textAnchor="end" height={80} tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                        <YAxis tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #FF6B6B', borderRadius: '4px' }} />
                        <Bar dataKey="Jumlah Kejadian" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>

                <div className="bg-1a1a2e p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-FF6B6B mb-4">Pola Musiman</h3>
                  {bulananData.length > 0 && (
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={bulananData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="Bulan" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                        <YAxis tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #A855F7', borderRadius: '4px' }} />
                        <Line type="monotone" dataKey="Jumlah Kejadian" stroke="#A855F7" strokeWidth={2} dot={{ fill: '#A855F7' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* SPATIAL TAB */}
          {activeTab === 'spatial' && (
            <div className="space-y-6 max-w-6xl">
              <div className="bg-1a1a2e p-6 rounded-lg">
                <h3 className="text-lg font-bold text-FF6B6B mb-4">Wilayah Distribution</h3>
                {petaData.length > 0 && (
                  <div>
                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart data={petaData} layout="vertical" margin={{ left: 100 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis type="number" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                        <YAxis dataKey="Wilayah" type="category" width={90} tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                        <Tooltip contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #FF6B6B' }} />
                        <Bar dataKey="Jumlah Kejadian" fill="#FF6B6B" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>

                    {/* Detail Cards */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {petaData.map((d, idx) => (
                        <div key={idx} className="bg-0f172a p-4 rounded-lg border-l-4 border-A855F7">
                          <p className="font-semibold text-cbd5e1">{d.Wilayah}</p>
                          <p className="text-2xl font-bold text-FF6B6B mt-2">{d['Jumlah Kejadian']}</p>
                          <p className="text-xs text-64748b mt-1">{d.Persentase}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Doc */}
              <div className="bg-0f172a p-4 rounded-lg border-l-4 border-FF6B6B text-sm">
                <p className="text-cbd5e1">
                  <strong>Kulon Progo Hotspot:</strong> 41 kejadian (36.6%), 3.7x lebih tinggi dari wilayah lain. 
                  Faktor: topografi pegunungan, tanah lempung rendah kohesi, deforestasi.
                </p>
              </div>
            </div>
          )}

          {/* TEMPORAL TAB */}
          {activeTab === 'temporal' && (
            <div className="space-y-6 max-w-6xl">
              <div className="bg-1a1a2e p-6 rounded-lg">
                <h3 className="text-lg font-bold text-FF6B6B mb-4">Tren Tahunan (2016-2026)</h3>
                {tahunData.length > 0 && (
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={tahunData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="Tahun" angle={-45} textAnchor="end" height={80} tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                      <YAxis tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #A855F7' }} />
                      <Line type="monotone" dataKey="Jumlah Kejadian" stroke="#A855F7" strokeWidth={3} 
                        dot={({ cx, cy, payload }) => {
                          const fill = payload.Highlight === 'Puncak' ? '#FF6B6B' : '#A855F7';
                          const r = payload.Highlight === 'Puncak' ? 6 : 4;
                          return <circle cx={cx} cy={cy} r={r} fill={fill} />;
                        }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-0f172a p-4 rounded-lg border-l-4 border-FF6B6B">
                  <p className="text-sm text-cbd5e1 font-semibold">Puncak 2021</p>
                  <p className="text-2xl font-bold text-FF6B6B mt-2">24 events</p>
                  <p className="text-xs text-64748b mt-1">Highest year, then decline</p>
                </div>
                <div className="bg-0f172a p-4 rounded-lg border-l-4 border-A855F7">
                  <p className="text-sm text-cbd5e1 font-semibold">Musim Hujan Pattern</p>
                  <p className="text-2xl font-bold text-A855F7 mt-2">86%</p>
                  <p className="text-xs text-64748b mt-1">Okt-Mar, very consistent</p>
                </div>
              </div>

              <div className="bg-1a1a2e p-6 rounded-lg">
                <h3 className="text-lg font-bold text-FF6B6B mb-4">Pola Bulanan</h3>
                {bulananData.length > 0 && (
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={bulananData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="Bulan" angle={-45} textAnchor="end" height={80} tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                      <YAxis tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #A855F7' }} />
                      <Bar dataKey="Jumlah Kejadian" fill="#A855F7" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          )}

          {/* IMPACT TAB */}
          {activeTab === 'impact' && (
            <div className="space-y-6 max-w-6xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-1a1a2e p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-FF6B6B mb-4">Dampak Breakdown</h3>
                  {dampakData.length > 0 && (
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie data={dampakData} dataKey="Jumlah" nameKey="Dampak" cx="50%" cy="50%" outerRadius={70} innerRadius={35} label>
                          {dampakData.map((_, idx) => <Cell key={idx} fill={chartColors[idx]} />)}
                        </Pie>
                        <Tooltip formatter={(v) => v.toLocaleString('id-ID')} contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #FF6B6B' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  )}
                </div>

                <div className="space-y-3">
                  {dampakData.map((d, idx) => (
                    <div key={idx} className="bg-0f172a p-4 rounded-lg border-l-4" style={{ borderLeftColor: chartColors[idx] }}>
                      <p className="text-sm text-cbd5e1">{d.Dampak}</p>
                      <p className="text-2xl font-bold mt-2" style={{ color: chartColors[idx] }}>
                        {parseInt(d.Jumlah).toLocaleString('id-ID')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mitigasi Impact */}
              <div className="bg-0f172a p-6 rounded-lg border-l-4 border-4ADE80">
                <h3 className="text-lg font-bold text-4ADE80 mb-4">Efektivitas Mitigasi 2020+</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-cbd5e1">Pre-2020</p>
                    <p className="text-FF6B6B font-bold mt-2">44 events → 20 deaths</p>
                    <p className="text-64748b text-xs mt-1">45.5% fatality</p>
                  </div>
                  <div>
                    <p className="text-cbd5e1">Post-2020</p>
                    <p className="text-4ADE80 font-bold mt-2">68 events → 0 deaths</p>
                    <p className="text-64748b text-xs mt-1">0% fatality</p>
                  </div>
                  <div>
                    <p className="text-cbd5e1">Improvement</p>
                    <p className="text-4ADE80 font-bold mt-2">+45.5%</p>
                    <p className="text-64748b text-xs mt-1">Reduction</p>
                  </div>
                </div>
              </div>

              {/* Programs */}
              <div className="bg-1a1a2e p-6 rounded-lg">
                <h3 className="text-lg font-bold text-FF6B6B mb-4">Mitigasi Programs</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-0f172a p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-3B82F6">15K</p>
                    <p className="text-xs text-cbd5e1 mt-2">SMS Warning</p>
                  </div>
                  <div className="bg-0f172a p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-F59E0B">2.5K</p>
                    <p className="text-xs text-cbd5e1 mt-2">Relocation</p>
                  </div>
                  <div className="bg-0f172a p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-4ADE80">45</p>
                    <p className="text-xs text-cbd5e1 mt-2">Walls Built</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
