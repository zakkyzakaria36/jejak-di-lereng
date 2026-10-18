# 🗻 Jejak di Lereng: Membaca Pola Longsor di DIY

**Interactive Data Visualization & Infographic** | 112 Landslide Events (Feb 2016 - Feb 2026)

![Status](https://img.shields.io/badge/Status-Production-green) ![Framework](https://img.shields.io/badge/Framework-Next.js%2014-blue) ![Deployment](https://img.shields.io/badge/Deployment-Vercel-000)

---

## 📌 Tentang Proyek

**Jejak di Lereng** adalah proyek visualisasi data bencana longsor di Daerah Istimewa Yogyakarta yang komprehensif. Proyek ini mengkonsolidasikan **112 kejadian longsor** dari Feb 2016 hingga Feb 2026 menjadi visualisasi geospasial dan temporal yang actionable.

### 🎯 Temuan Utama

- **Hotspot Geografis**: Kulon Progo mengalami 36.6% (41 dari 112) peristiwa longsor
- **Pola Musiman Kuat**: 86% kejadian terkonsentrasi dalam musim hujan (Nov-Apr)
- **Puncak Bulan**: Februari mencatat 29 kejadian (tertinggi dalam 10 tahun)
- **Dampak Dominan**: 97.3% dampak adalah displacement persons (11,141 orang)

---

## 📊 Data & Visualisasi

### CSV Dataset (5 files)

```
data_peta_choropleth.csv        → Distribusi per wilayah (5 kab/kota)
data_heatmap_wilayah_bulan.csv  → Matrix spatio-temporal (5×12)
data_line_bulanan.csv           → Pola bulanan + seasonal flags
data_bar_tahunan.csv            → Tren tahunan 2016-2026
dampak_longsor_diy.csv          → Breakdown dampak sosial (4 kategori)
```

### Visualisasi Interaktif

- **Bar Chart**: Tren tahunan dengan highlight tahun puncak (2021, 2023)
- **Line Chart**: Pola bulanan dengan seasonal color coding (Hujan=Red, Kemarau=Gray)
- **Pie Chart**: Breakdown dampak sosial (Mengungsi, Rumah Rusak, Luka-luka, Korban Jiwa)
- **Heatmap**: Distribusi spatio-temporal (Wilayah × Bulan)
- **Peta Choropleth**: Sebaran geografis dengan color intensity (YlOrRd gradient)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ dan **npm** atau **yarn**
- **Git** untuk version control

### Installation

```bash
# 1. Clone repository
git clone https://github.com/yourusername/jejak-di-lereng.git
cd jejak-di-lereng

# 2. Install dependencies
npm install
# atau
yarn install

# 3. Jalankan development server
npm run dev
# atau
yarn dev
```

Akses di: **http://localhost:3000**

---

## 📦 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework dengan server-side rendering |
| **React 18** | UI components |
| **Recharts** | Interactive data visualization charts |
| **Tailwind CSS** | Styling & responsive design |
| **TypeScript** | Type safety |
| **Vercel** | Deployment platform |

---

## 📁 Project Structure

```
jejak-di-lereng/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero banner
│   ├── DataOverview.tsx    # Data tabs & statistics
│   ├── VisualizationSection.tsx  # Interactive charts
│   ├── PosterSection.tsx   # Poster display
│   ├── DataDownload.tsx    # Download section
│   └── Footer.tsx          # Footer
├── public/
│   ├── data/               # CSV files
│   │   ├── data_peta_choropleth.csv
│   │   ├── data_heatmap_wilayah_bulan.csv
│   │   ├── data_line_bulanan.csv
│   │   ├── data_bar_tahunan.csv
│   │   └── dampak_longsor_diy.csv
│   └── images/             # PNG files & logos
│       ├── 1.png           # BNPB logo
│       ├── 2.png           # BPBD DIY logo
│       ├── 3.png           # PB IPJI logo
│       └── 6.png           # Poster final
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts      # (auto-generated)
└── README.md
```

---

## 🌐 Deployment ke Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI (jika belum)
npm i -g vercel

# 2. Login ke Vercel
vercel login

# 3. Deploy
vercel

# Jawab pertanyaan:
# - Scope? → Your Vercel account
# - Project name? → jejak-di-lereng
# - Framework? → Next.js
# - Codebase located in? → ./
# - Want to modify? → N
```

### Option 2: GitHub Integration (Recommended untuk CI/CD)

```bash
# 1. Push ke GitHub
git remote add origin https://github.com/yourusername/jejak-di-lereng.git
git branch -M main
git push -u origin main

# 2. Ke Vercel Dashboard
# - Go to vercel.com/dashboard
# - Click "Add New..." → "Project"
# - Select GitHub repository "jejak-di-lereng"
# - Framework: Next.js
# - Deploy!

# Auto-deploy pada setiap push ke main branch
```

### Option 3: Manual Upload via Vercel Dashboard

1. Buka [vercel.com](https://vercel.com)
2. Sign up / Login
3. Click "Add New..." → "Project"
4. Upload project folder
5. Framework: Next.js
6. Deploy

---

## 🔗 Environment Variables (Optional)

Buat `.env.local` untuk development:

```bash
# Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS=G_XXXXX

# API endpoints (untuk future updates)
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 📊 Menggunakan Data CSV

### Cara mengakses CSV dari frontend:

```typescript
// components/DataComponent.tsx
'use client'

import { useEffect, useState } from 'react'
import Papa from 'papaparse'

export default function DataComponent() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/data/data_peta_choropleth.csv')
      .then(res => res.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          complete: (results) => setData(results.data)
        })
      })
  }, [])

  return (
    <div>
      {/* Render data */}
    </div>
  )
}
```

---

## 🎨 Customization

### Mengubah Warna

Edit di `components/VisualizationSection.tsx`:

```typescript
const COLORS = ['#3B82F6', '#F97316', '#FBBF24', '#EF4444']
```

### Menambah Section Baru

```bash
# 1. Create component
touch components/NewSection.tsx

# 2. Edit app/page.tsx untuk import & render
# 3. Add styling dengan Tailwind CSS
```

---

## ✅ Checklist Sebelum Deploy

- [x] All dependencies installed (`npm install`)
- [x] Local development tested (`npm run dev`)
- [x] Build successfully (`npm run build`)
- [x] No console errors
- [x] GitHub repository created & pushed
- [x] Vercel account created
- [x] `.env` variables configured (if needed)
- [x] CSV files in `public/data/`
- [x] Logo files in `public/images/`

---

## 📝 Build & Production

```bash
# Build untuk production
npm run build

# Start production server (local testing)
npm start

# Lint code
npm run lint
```

---

## 🤝 Kontribusi

Saran & perbaikan sangat diterima! 

1. Fork repository
2. Create feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push ke branch (`git push origin feature/improvement`)
5. Open Pull Request

---

## 📜 Lisensi & Attribution

**Kolaborasi:**
- 🏛️ **BNPB** - Badan Nasional Penanggulangan Bencana
- 🏛️ **BPBD DIY** - Badan Penanggulangan Bencana Daerah Yogyakarta
- 🏛️ **PB IPJI** - Persatuan Belajar Ilmu Pengetahuan Jalanan Indonesia

**Sumber Data:**
- DIBI BNPB (Primary)
- BPBD DIY Reports
- BMKG Yogyakarta
- Peta Rawan Bencana DIY

---

## 🐛 Troubleshooting

### Issue: Vercel deployment gagal

```bash
# 1. Pastikan Node version compatible
node --version  # Should be 18+

# 2. Clear cache
rm -rf .next node_modules
npm install

# 3. Rebuild
npm run build

# 4. Deploy lagi
vercel --prod
```

### Issue: CSV tidak terbaca

```bash
# 1. Pastikan file di public/data/
# 2. Check file permissions
# 3. Verify CORS headers (next.config.js)
```

---

## 📞 Kontak & Support

- **Email**: info@bpbd-diy.go.id
- **GitHub Issues**: [Report Bug](https://github.com/yourusername/jejak-di-lereng/issues)
- **Documentation**: [Lihat Dokumentasi Proses](./DOKUMENTASI_PROSES_JEJAK_DI_LERENG.md)

---

## 🎯 Roadmap

- [ ] Add real-time data updates (API integration)
- [ ] Interactive map dengan zoom/pan
- [ ] Mobile app version
- [ ] Data export (CSV, PDF)
- [ ] Multilingual support (EN, ID)
- [ ] Advanced filtering & search
- [ ] Predictive analytics (next year forecast)

---

**Last Updated**: October 2026  
**Status**: ✅ Production Ready  
**Live Demo**: https://jejak-di-lereng.vercel.app (coming soon)

---

Made with ❤️ for data transparency & disaster mitigation awareness
