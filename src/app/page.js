'use client';

import Navigation from '@/components/Navigation';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useEffect, useState } from 'react';
import { loadCSV } from '@/lib/dataLoader';

export default function Dashboard() {
  const [petaData, setPetaData] = useState([]);
  const [bulananData, setBulananData] = useState([]);
  const [tahunData, setTahunData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const peta = await loadCSV('data_peta_choropleth.csv');
      const bulanan = await loadCSV('data_line_bulanan.csv');
      const tahun = await loadCSV('data_bar_tahunan.csv');
      
      setPetaData(peta);
      setBulananData(bulanan);
      setTahunData(tahun);
    };
    loadData();
  }, []);

  const colors = ['#8B0000', '#FF4500', '#FF6347', '#FFA07A', '#FFE4B5'];

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="main-header mb-8">
          <h1 className="text-4xl font-bold mb-2">🏔️ Jejak di Lereng</h1>
          <h2 className="text-2xl mb-4">Membaca Pola Longsor di Daerah Istimewa Yogyakarta</h2>
          <p className="text-lg opacity-90">Analisis Spasial-Temporal 112 Kejadian Tanah Longsor (Feb 2016 – Feb 2026)</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="metric-card">
            <div className="stat-number">112</div>
            <div className="stat-label">🗓️ Total Kejadian</div>
            <div className="text-xs text-gray-500 mt-1">10 tahun (2016-2026)</div>
          </div>
          <div className="metric-card">
            <div className="stat-number">41</div>
            <div className="stat-label">📍 Kulon Progo</div>
            <div className="text-xs text-gray-500 mt-1">36.6% tertinggi</div>
          </div>
          <div className="metric-card">
            <div className="stat-number">96</div>
            <div className="stat-label">🌧️ Musim Hujan</div>
            <div className="text-xs text-gray-500 mt-1">86% kejadian</div>
          </div>
          <div className="metric-card">
            <div className="stat-number">24</div>
            <div className="stat-label">📈 Puncak 2023</div>
            <div className="text-xs text-gray-500 mt-1">tahun terparah</div>
          </div>
          <div className="metric-card">
            <div className="stat-number">0</div>
            <div className="stat-label">✅ Fatality 2020+</div>
            <div className="text-xs text-gray-500 mt-1">mitigasi efektif</div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="info-box">
          <h3 className="font-bold text-lg mb-2">💡 Key Insight</h3>
          <p>
            <strong>86% kejadian longsor di DIY terjadi pada musim hujan (Oktober–Maret).</strong> Kulon Progo dengan 41 kejadian (36.6%) 
            adalah zona paling rawan, terutama pada bulan Februari. Namun sejak 2020, sistem peringatan dini dan relokasi 
            warga mencapai 0 korban jiwa dari 68 kejadian—peningkatan signifikan dari 45.5% fatality rate pre-2020.
          </p>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Wilayah Paling Rawan */}
          <div className="chart-container lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">📍 Wilayah Paling Rawan</h3>
            {petaData.length > 0 && (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={petaData}
                    dataKey="Jumlah Kejadian"
                    nameKey="Wilayah"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={50}
                    label
                  >
                    {petaData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Pola Bulanan */}
          <div className="chart-container lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">🌧️ Pola Bulanan</h3>
            {bulananData.length > 0 && (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={bulananData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Bulan" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Jumlah Kejadian" fill="#FF6B6B" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Tren Tahunan */}
          <div className="chart-container lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">📈 Tren Tahunan</h3>
            {tahunData.length > 0 && (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={tahunData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Tahun" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="Jumlah Kejadian" 
                    stroke="#A855F7" 
                    strokeWidth={2}
                    dot={{ fill: '#A855F7', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Data Summary Table */}
        <div className="chart-container mt-8">
          <h3 className="font-bold text-lg mb-4">📊 Ringkasan Data per Wilayah</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Wilayah</th>
                  <th className="px-4 py-2 text-center">Jumlah Kejadian</th>
                  <th className="px-4 py-2 text-center">Persentase</th>
                </tr>
              </thead>
              <tbody>
                {petaData.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{row.Wilayah}</td>
                    <td className="px-4 py-2 text-center font-bold">{row['Jumlah Kejadian']}</td>
                    <td className="px-4 py-2 text-center">{row.Persentase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
