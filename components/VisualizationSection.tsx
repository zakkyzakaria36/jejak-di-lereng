'use client'

import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function VisualizationSection() {
  const barData = [
    { tahun: 2016, kejadian: 12 },
    { tahun: 2017, kejadian: 14 },
    { tahun: 2018, kejadian: 12 },
    { tahun: 2019, kejadian: 6 },
    { tahun: 2020, kejadian: 7 },
    { tahun: 2021, kejadian: 17, highlight: true },
    { tahun: 2022, kejadian: 4 },
    { tahun: 2023, kejadian: 24 },
    { tahun: 2024, kejadian: 5 },
    { tahun: 2025, kejadian: 9 },
    { tahun: 2026, kejadian: 2 },
  ]

  const lineData = [
    { bulan: 'Jan', kejadian: 14, musim: 'Hujan' },
    { bulan: 'Feb', kejadian: 29, musim: 'Hujan' },
    { bulan: 'Mar', kejadian: 17, musim: 'Hujan' },
    { bulan: 'Apr', kejadian: 9, musim: 'Transisi' },
    { bulan: 'Mei', kejadian: 2, musim: 'Kemarau' },
    { bulan: 'Jun', kejadian: 1, musim: 'Kemarau' },
    { bulan: 'Jul', kejadian: 1, musim: 'Kemarau' },
    { bulan: 'Agu', kejadian: 1, musim: 'Kemarau' },
    { bulan: 'Sep', kejadian: 2, musim: 'Kemarau' },
    { bulan: 'Okt', kejadian: 8, musim: 'Transisi' },
    { bulan: 'Nov', kejadian: 19, musim: 'Hujan' },
    { bulan: 'Des', kejadian: 9, musim: 'Hujan' },
  ]

  const pieData = [
    { name: 'Mengungsi', value: 97.3 },
    { name: 'Rumah Rusak', value: 2.3 },
    { name: 'Luka-luka', value: 0.2 },
    { name: 'Korban Jiwa', value: 0.2 },
  ]

  const COLORS = ['#3B82F6', '#F97316', '#FBBF24', '#EF4444']

  return (
    <section id="visualization" className="container-main py-12">
      <h2 className="section-title">📈 Visualisasi Data Interaktif</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Bar Chart */}
        <div className="chart-container">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Tren Tahunan (2016-2026)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tahun" />
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
                formatter={(value) => `${value} kejadian`}
              />
              <Bar dataKey="kejadian" fill="#8884d8" radius={[8, 8, 0, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.highlight ? '#F59E0B' : '#8884d8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-4">
            <strong>2021 & 2023</strong> merupakan tahun puncak dengan 17 dan 24 kejadian. Warna kuning menandai tahun referensi untuk mitigasi.
          </p>
        </div>

        {/* Line Chart */}
        <div className="chart-container">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Pola Bulanan (Musim Hujan vs Kemarau)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bulan" />
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
                formatter={(value) => `${value} kejadian`}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="kejadian" 
                stroke="#EF4444" 
                strokeWidth={2}
                dot={{ fill: '#EF4444', r: 4 }}
                activeDot={{ r: 6 }}
                name="Kejadian/Bulan"
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-4">
            <strong>86% kejadian</strong> terjadi dalam musim hujan (Nov-Apr). Februari mencapai puncak dengan 29 kejadian.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="chart-container">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Breakdown Dampak Sosial Total</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-4">
            <strong>11,141 orang</strong> mengungsi (97.3%), 268 rumah rusak, 25 luka-luka, 20 korban jiwa.
          </p>
        </div>

        {/* Heatmap Info */}
        <div className="chart-container">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Distribusi Spatio-Temporal (Wilayah × Bulan)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Wilayah</th>
                  <th className="p-2 text-center">Jan</th>
                  <th className="p-2 text-center">Feb</th>
                  <th className="p-2 text-center">Mar</th>
                  <th className="p-2 text-center">...</th>
                  <th className="p-2 text-center">Des</th>
                  <th className="p-2 text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2 font-semibold">Kulon Progo</td>
                  <td className="p-2 text-center bg-red-100">7</td>
                  <td className="p-2 text-center bg-red-300">10</td>
                  <td className="p-2 text-center bg-red-200">9</td>
                  <td className="p-2 text-center">...</td>
                  <td className="p-2 text-center bg-red-100">4</td>
                  <td className="p-2 text-center font-bold text-red-600">41</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-semibold">Sleman</td>
                  <td className="p-2 text-center bg-orange-100">2</td>
                  <td className="p-2 text-center bg-orange-300">8</td>
                  <td className="p-2 text-center bg-orange-100">4</td>
                  <td className="p-2 text-center">...</td>
                  <td className="p-2 text-center bg-orange-100">2</td>
                  <td className="p-2 text-center font-bold text-orange-600">25</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-semibold">Gunungkidul</td>
                  <td className="p-2 text-center bg-yellow-100">1</td>
                  <td className="p-2 text-center bg-yellow-200">4</td>
                  <td className="p-2 text-center bg-yellow-100">3</td>
                  <td className="p-2 text-center">...</td>
                  <td className="p-2 text-center bg-yellow-100">1</td>
                  <td className="p-2 text-center font-bold text-yellow-600">22</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Pola intensitas warna menunjukkan konsentrasi kejadian. Feb × Kulon Progo = zona risiko tertinggi.
          </p>
        </div>
      </div>
    </section>
  )
}
