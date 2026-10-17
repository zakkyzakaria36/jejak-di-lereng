# 🏔️ Jejak di Lereng - Dashboard Interaktif Longsor DIY

Analisis Spasial-Temporal 112 Kejadian Tanah Longsor di Daerah Istimewa Yogyakarta (Feb 2016 – Feb 2026)

## 📋 Deskripsi Project

Dashboard interaktif yang memvisualisasikan pola distribusi kejadian tanah longsor di DIY dengan:
- 📊 Analisis spasial (peta distribusi wilayah)
- 📈 Analisis temporal (tren & pola musiman)
- 💥 Analisis dampak & efektivitas mitigasi
- 🔗 QR Code untuk poster (akses mobile-friendly)

## 🎯 Key Findings

| Temuan | Data |
|--------|------|
| **Hotspot Dominan** | Kulon Progo: 41 kejadian (36.6%) - 3.7x lebih tinggi dari wilayah lain |
| **Musim Rawan** | Oktober-Maret: 96 kejadian (86%) - Puncak Februari: 29 kejadian |
| **Mitigasi Efektif** | Pre-2020: 45.5% fatality rate → Post-2020: 0% fatality rate |
| **Dampak Terbesar** | Displacement: 11,141 jiwa (97.3%) |

## 🚀 Features

- ✅ Dashboard dengan 5 main pages
- ✅ Interactive charts (Recharts)
- ✅ Responsive design (mobile-first)
- ✅ Dark theme dengan warna dari poster
- ✅ QR Code generator untuk print
- ✅ CSV data loading
- ✅ Dokumentasi lengkap

## 📱 Pages

1. **🏠 Dashboard** - Overview metrics & key insights
2. **🗺️ Peta Spasial** - Distribusi wilayah rawan + heatmap
3. **📈 Analisis Temporal** - Tren tahunan + pola musiman + mitigasi comparison
4. **💥 Dampak & Mitigasi** - Breakdown dampak + efektivitas program
5. **📄 Dokumentasi** - Metodologi, temuan, limitasi, referensi
6. **🔗 QR Code** - Download QR code untuk poster

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 14
- **UI Library:** Recharts (charts), Tailwind CSS (styling)
- **Data:** CSV files in `/public/data`
- **QR Code:** qrcode library
- **Deployment:** Vercel

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/zakkyzakaria36/jejak-di-lereng.git
cd jejak-di-lereng

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Akses di: `http://localhost:3000`

## 📊 Data Sources

| Sumber | Data | Periode |
|--------|------|---------|
| **DIBI BNPB** | 112 kejadian longsor | Feb 2016 – Feb 2026 |
| **BPBD DIY** | Program mitigasi & dampak detail | Annual reports 2016-2025 |
| **BMKG Yogyakarta** | Curah hujan bulanan | 2016-2026 |
| **Peta Rawan Bencana** | Boundary & zona kerentanan | DIY 2023 |

## 🌐 Deployment

### Deploy ke Vercel

```bash
# 1. Push ke GitHub
git add .
git commit -m "Initial commit"
git push -u origin main

# 2. Buka https://vercel.com
# 3. New Project → Select repository → Deploy
# 4. URL otomatis: https://jejak-di-lereng.vercel.app
```

## 📲 QR Code untuk Poster

1. Buka halaman `/qrcode`
2. Download QR code (PNG 300×300px)
3. Print di poster dengan ukuran minimal 2cm × 2cm
4. Penempatan: corner kanan bawah (recommended)

**Scan dengan smartphone → Dashboard terbuka otomatis**

## 📖 Struktur Folder

```
jejak-di-lereng/
├── public/
│   ├── data/              # CSV files
│   │   ├── data_peta_choropleth.csv
│   │   ├── data_heatmap_wilayah_bulan.csv
│   │   ├── data_line_bulanan.csv
│   │   ├── data_bar_tahunan.csv
│   │   └── dampak_longsor_diy.csv
│   └── images/            # Gambar & logo (optional)
├── src/
│   ├── app/
│   │   ├── page.js        # Dashboard (/)
│   │   ├── spatial/       # Peta spasial (/spatial)
│   │   ├── temporal/      # Analisis temporal (/temporal)
│   │   ├── impact/        # Dampak & mitigasi (/impact)
│   │   ├── docs/          # Dokumentasi (/docs)
│   │   ├── qrcode/        # QR Code (/qrcode)
│   │   └── layout.js      # Root layout
│   ├── components/
│   │   └── Navigation.js  # Navbar
│   ├── lib/
│   │   └── dataLoader.js  # CSV loader utility
│   └── globals.css        # Global styles
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

## 🎨 Color Palette

```
Primary (Danger):     #FF6B6B   (Red - longsor, fatality)
Secondary (Mystery):  #A855F7   (Purple - temporal trend)
Tertiary (Water):     #3B82F6   (Blue - water-related)
Success (Hope):       #4ADE80   (Green - mitigation)
Warning (Attention):  #F59E0B   (Orange - peak year)
Dark (Background):    #0A0E1A   (Almost black)
Light (Text):         #F5F5F5   (Off-white)
```

## 📚 Referensi

### Jurnal Internasional
- Guzzetti et al. (2008) - Rainfall intensity-duration control
- Froude & Petley (2018) - Global fatal landslide occurrence
- Hong et al. (2006) - TRMM precipitation analysis

### Publikasi Lokal
- BNPB (2021) - Strategi Nasional PRB 2015-2029
- BPBD DIY (2020-2025) - Laporan Tahunan

## 📝 Dokumentasi Lengkap

Untuk dokumentasi project yang lebih lengkap (metodologi, temuan detail, limitasi, rekomendasi), buka halaman **Dokumentasi** di dashboard atau lihat file `/docs` di app.

## 🤝 Kontribusi

Silakan submit issues atau pull requests untuk improvement:
- Bug fixes
- Feature enhancements
- Documentation updates
- Data accuracy improvements

## 📄 Lisensi

MIT License - Feel free to use for educational & humanitarian purposes

## 👨‍💻 Author

**Zakky Zakaria** (zakkyzakaria36)
- GitHub: [@zakkyzakaria36](https://github.com/zakkyzakaria36)
- Project: Lomba Infografis Kebencanaan 2026

## 📞 Feedback

Untuk feedback, suggestion, atau pertanyaan, silakan hubungi:
- GitHub Issues
- Email (if available)

---

**Jejak di Lereng** - *Membaca Pola Longsor di DIY melalui Data & Visualisasi* 🏔️
