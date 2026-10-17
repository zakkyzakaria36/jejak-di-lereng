'use client';

import Navigation from '@/components/Navigation';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { useEffect, useState } from 'react';
import { loadCSV } from '@/lib/dataLoader';

export default function Impact() {
  const [dampakData, setDampakData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const dampak = await loadCSV('dampak_longsor_diy.csv');
      setDampakData(dampak);
    };
    loadData();
  }, []);

  const colors = ['#FF6B6B', '#F59E0B', '#3B82F6', '#4ADE80'];

  const calculatePercentages = () => {
    if (dampakData.length === 0) return [];
    const total = dampakData.reduce((sum, item) => sum + parseInt(item.Jumlah || 0), 0);
    return dampakData.map(item => ({
      ...item,
      percentage: ((parseInt(item.Jumlah) / total) * 100).toFixed(1)
    }));
  };

  const dataWithPercentages = calculatePercentages();

  return (
    <div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="main-header mb-8">
          <h1 className="text-3xl font-bold mb-2">💥 Dampak & Mitigasi</h1>
          <p className="opacity-90">Analisis dampak bencana dan efektivitas sistem peringatan dini 2020+</p>
        </div>

        {/* Dampak Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="chart-container">
            <h3 className="font-bold text-lg mb-4">Proporsi Dampak (2016-2026)</h3>
            {dampakData.length > 0 && (
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={dataWithPercentages}
                    dataKey="Jumlah"
                    nameKey="Dampak"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={50}
                    label={({ percentage }) => `${percentage}%`}
                  >
                    {dataWithPercentages.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} jiwa/unit`} />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="chart-container">
            <h3 className="font-bold text-lg mb-4">📊 Breakdown Dampak Lengkap</h3>
            <div className="space-y-4">
              {dataWithPercentages.map((item, idx) => (
                <div key={idx} className="pb-4 border-b last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{item.Dampak}</span>
                    <span className="text-2xl font-bold" style={{ color: colors[idx] }}>
                      {parseInt(item.Jumlah).toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.percentage}% dari total dampak
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: colors[idx]
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mitigasi Success Story */}
        <div className="success-box mb-8">
          <h3 className="font-bold text-2xl mb-4">🎉 KEBERHASILAN MITIGASI: 0 KORBAN JIWA SEJAK 2020</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded border-l-4 border-success">
              <div className="font-bold text-lg mb-2">📱 SMS Early Warning</div>
              <div className="text-3xl font-bold text-success mb-2">15,000</div>
              <p className="text-sm">warga zona merah dapat notifikasi real-time BPBD</p>
            </div>

            <div className="bg-green-50 p-4 rounded border-l-4 border-success">
              <div className="font-bold text-lg mb-2">🏘️ Preventive Relocation</div>
              <div className="text-3xl font-bold text-success mb-2">2,500</div>
              <p className="text-sm">keluarga dipindahkan dari zona merah (2019-2020)</p>
            </div>

            <div className="bg-green-50 p-4 rounded border-l-4 border-success">
              <div className="font-bold text-lg mb-2">🛡️ Structural Mitigation</div>
              <div className="text-3xl font-bold text-success mb-2">45</div>
              <p className="text-sm">tembok penahan lereng (survival rate 92%)</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded">
            <h4 className="font-bold mb-3">📊 Hasil Kuantitatif:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-red-600 mb-2">⚠️ Pre-2020</p>
                <p className="text-sm">44 kejadian → <strong>20 korban jiwa</strong></p>
                <p className="text-sm">Fatality rate: <strong>45.5%</strong></p>
              </div>
              <div>
                <p className="font-semibold text-green-600 mb-2">✅ Post-2020</p>
                <p className="text-sm">68 kejadian → <strong>0 korban jiwa</strong></p>
                <p className="text-sm">Fatality rate: <strong>0%</strong></p>
              </div>
            </div>
            <p className="mt-4 font-bold text-lg">
              💚 <span className="text-success">Peningkatan: 45.5 percentage point reduction dalam fatality</span>
            </p>
          </div>
        </div>

        {/* Dampak Breakdown Detail */}
        <div className="chart-container mb-8">
          <h3 className="font-bold text-lg mb-4">Distribusi Dampak per Kategori</h3>
          {dampakData.length > 0 && (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={dataWithPercentages}
                layout="vertical"
                margin={{ left: 150, right: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="Dampak" type="category" width={140} />
                <Tooltip formatter={(value) => value.toLocaleString('id-ID')} />
                <Bar dataKey="Jumlah" fill="#FF6B6B" radius={[0, 8, 8, 0]}>
                  {dataWithPercentages.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="info-box">
            <h4 className="font-bold text-lg mb-3">🔍 Finding: Displacement Massal Dominan</h4>
            <p className="text-sm mb-2">
              <strong>11,141 orang (97.3%) mengalami displacement</strong> adalah dampak terbesar, jauh melampaui korban jiwa atau luka-luka.
            </p>
            <p className="text-sm">
              💡 <strong>Implicasi:</strong> Mitigasi harus fokus pada relokasi dan temporary shelter infrastructure, bukan hanya early warning.
            </p>
          </div>

          <div className="info-box">
            <h4 className="font-bold text-lg mb-3">📈 Efektivitas Program 2020+</h4>
            <p className="text-sm mb-2">
              Meskipun frekuensi longsor <strong>meningkat 54.5%</strong> (44 → 68 kejadian), fatality rate turun dari <strong>45.5% ke 0%</strong>.
            </p>
            <p className="text-sm">
              💡 <strong>Kesuksesan:</strong> Sistem peringatan dini + relokasi preventif berhasil save lives, bukan prevent landslides.
            </p>
          </div>
        </div>

        {/* Recommendations */}
        <div className="chart-container">
          <h3 className="font-bold text-lg mb-4">💭 Rekomendasi Mitigasi Berkelanjutan</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <p className="font-semibold">Perkuat Infrastruktur Penahan Lereng</p>
                <p className="text-sm text-gray-600">45 tembok yang ada perlu maintenance berkelanjutan + ekspansi ke 100+ lokasi rawan</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <p className="font-semibold">Expand Early Warning Network</p>
                <p className="text-sm text-gray-600">15,000 warga saat ini → target 50,000 warga zona merah dengan IoT sensors (real-time soil moisture monitoring)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <p className="font-semibold">Community Resilience Training</p>
                <p className="text-sm text-gray-600">Annual drills & evacuation practice di Kulon Progo, Sleman (70% target coverage)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">4️⃣</span>
              <div>
                <p className="font-semibold">Climate Adaptation Planning</p>
                <p className="text-sm text-gray-600">Long-term reforestation (1,000 ha/tahun) + agricultural diversification untuk reduce runoff & slope destabilization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
