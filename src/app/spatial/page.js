'use client';

import Navigation from '@/components/Navigation';
import { BarChart, Bar, Heatmap, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, HeatMapChart } from 'recharts';
import { useEffect, useState } from 'react';
import { loadCSV } from '@/lib/dataLoader';

export default function Spatial() {
  const [petaData, setPetaData] = useState([]);
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const peta = await loadCSV('data_peta_choropleth.csv');
      const heatmap = await loadCSV('data_heatmap_wilayah_bulan.csv');
      
      setPetaData(peta.sort((a, b) => parseInt(b['Jumlah Kejadian']) - parseInt(a['Jumlah Kejadian'])));
      setHeatmapData(heatmap);
    };
    loadData();
  }, []);

  const colors = ['#8B0000', '#FF4500', '#FF6347', '#FFA07A', '#FFE4B5'];

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="main-header mb-8">
          <h1 className="text-3xl font-bold mb-2">🗺️ Peta Spasial: Distribusi Wilayah Rawan</h1>
          <p className="opacity-90">Identifikasi zona dengan frekuensi longsor tertinggi di DIY</p>
        </div>

        {/* Main Distribution Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="chart-container lg:col-span-2">
            <h3 className="font-bold text-lg mb-4">Distribusi Wilayah Rawan (Sorted)</h3>
            {petaData.length > 0 && (
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={petaData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 200 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="Wilayah" type="category" width={190} />
                  <Tooltip />
                  <Bar dataKey="Jumlah Kejadian" fill="#FF6B6B" radius={[0, 8, 8, 0]}>
                    {petaData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Statistics Table */}
          <div className="chart-container">
            <h3 className="font-bold text-lg mb-4">📊 Statistik Wilayah</h3>
            <div className="space-y-3">
              {petaData.map((row, idx) => (
                <div key={idx} className="pb-3 border-b last:border-b-0">
                  <div className="font-semibold text-sm">{row.Wilayah}</div>
                  <div className="text-2xl font-bold text-primary">{row['Jumlah Kejadian']}</div>
                  <div className="text-xs text-gray-500">{row.Persentase}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heatmap */}
        <div className="chart-container mb-8">
          <h3 className="font-bold text-lg mb-4">🔥 Heatmap: Wilayah × Bulan (Kombinasi Paling Rawan)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-center text-sm border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-2 text-left">Wilayah</th>
                  {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'].map(month => (
                    <th key={month} className="px-2 py-2">{month}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {heatmapData.map((row, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="px-2 py-2 text-left font-semibold text-xs">{row.Wilayah}</td>
                    {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'].map(month => {
                      const value = parseInt(row[month]) || 0;
                      const intensity = Math.min(value * 25, 255);
                      const bgColor = `rgba(255, 107, 107, ${value > 0 ? value / 10 : 0})`;
                      return (
                        <td
                          key={`${row.Wilayah}-${month}`}
                          className="px-2 py-3 font-bold text-xs"
                          style={{ backgroundColor: bgColor }}
                        >
                          {value > 0 ? value : '-'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Interpretasi:</strong></p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li><strong>Zona Merah (kombinasi paling bahaya):</strong> Kulon Progo di bulan Februari</li>
              <li><strong>Pola Clear:</strong> Semua wilayah menunjukkan peak di Februari-Maret</li>
              <li><strong>Musim Kemarau (Apr-Sep):</strong> Warna terang (frekuensi rendah)</li>
            </ul>
          </div>
        </div>

        {/* Key Finding */}
        <div className="success-box">
          <h3 className="font-bold text-lg mb-2">🎯 Key Finding: Kulon Progo Hotspot Dominan</h3>
          <p className="mb-3">
            <strong>Data:</strong> 41 kejadian (36.6% dari 112 total) | <strong>3.7x lebih tinggi</strong> dari Kota Yogyakarta
          </p>
          <p className="text-sm">
            <strong>Kausal Factors:</strong>
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
            <li>Topografi: Pegunungan Menoreh dengan lereng {'>'}40°</li>
            <li>Geologi: Tanah lempung residual dengan kohesi rendah</li>
            <li>Land Use: Deforestasi 120 ha/tahun (2015-2020) → hilangnya root reinforcement</li>
            <li>Curah Hujan: Rata-rata 300mm/bulan saat musim hujan (BMKG data)</li>
          </ul>
          <p className="mt-3 text-sm font-semibold">💡 Implikasi: Kulon Progo memerlukan prioritas mitigasi tertinggi</p>
        </div>
      </div>
    </div>
  );
}
