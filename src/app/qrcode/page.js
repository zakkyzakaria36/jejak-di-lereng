'use client';

import Navigation from '@/components/Navigation';
import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

export default function QRCodePage() {
  const canvasRef = useRef(null);
  const [qrUrl, setQrUrl] = useState('https://jejak-di-lereng.vercel.app');

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        qrUrl,
        {
          errorCorrectionLevel: 'H',
          type: 'image/jpeg',
          quality: 0.95,
          margin: 2,
          width: 300,
          color: {
            dark: '#FF6B6B',
            light: '#FFFFFF'
          }
        },
        function (error) {
          if (error) console.error(error);
        }
      );
    }
  }, [qrUrl]);

  const downloadQR = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'qrcode_jejak_di_lereng.png';
      link.click();
    }
  };

  return (
    <div>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="main-header mb-8">
          <h1 className="text-3xl font-bold mb-2">🔗 QR Code untuk Poster</h1>
          <p className="opacity-90">Scan QR code di bawah dengan smartphone untuk akses dashboard interaktif</p>
        </div>

        {/* QR Code Display */}
        <div className="chart-container mb-8">
          <h3 className="font-bold text-lg mb-6">QR Code (300x300px)</h3>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <canvas ref={canvasRef} />
            </div>
            <button
              onClick={downloadQR}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-700 transition font-semibold"
            >
              📥 Download QR Code (PNG)
            </button>
          </div>
        </div>

        {/* URL Information */}
        <div className="chart-container mb-8">
          <h3 className="font-bold text-lg mb-4">🌐 Informasi URL</h3>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
            <p className="text-sm text-gray-600 mb-2">Dashboard dapat diakses melalui:</p>
            <p className="font-mono text-lg font-bold break-all">{qrUrl}</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(qrUrl);
                alert('URL copied to clipboard!');
              }}
              className="mt-3 px-4 py-2 bg-secondary text-white rounded hover:bg-purple-600 transition text-sm"
            >
              📋 Copy Link
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="info-box mb-8">
          <h3 className="font-bold text-lg mb-3">📱 Cara Menggunakan QR Code</h3>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <p className="font-semibold">Buka Camera Smartphone</p>
                <p className="text-gray-700">Arahkan kamera ke QR code yang sudah di-print di poster</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <p className="font-semibold">Tap Link yang Muncul</p>
                <p className="text-gray-700">Notifikasi akan muncul dengan link menuju dashboard</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <p className="font-semibold">Explore Data Interaktif</p>
                <p className="text-gray-700">Dashboard terbuka otomatis di browser smartphone</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">4️⃣</span>
              <div>
                <p className="font-semibold">Share ke Media Sosial</p>
                <p className="text-gray-700">Bagikan link atau tangkapan layar ke Instagram, TikTok, dll</p>
              </div>
            </div>
          </div>
        </div>

        {/* Poster Information */}
        <div className="success-box mb-8">
          <h3 className="font-bold text-lg mb-3">🖼️ Rekomendasi Penempatan QR Code di Poster</h3>
          <div className="space-y-3 text-sm">
            <p>
              <strong>Ukuran QR Code yang Disarankan:</strong> Minimal 2cm × 2cm (untuk kemudahan scanning)
            </p>
            <p>
              <strong>Lokasi di Poster:</strong>
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>📍 Bottom-right corner (sudut kanan bawah) - paling umum</li>
              <li>📍 Bottom-left corner (sudut kiri bawah) - alternatif</li>
              <li>📍 Top-right corner (sudut kanan atas) - eye-catching</li>
            </ul>
            <p>
              <strong>Kontras Warna:</strong> QR code merah (#FF6B6B) dengan background putih sudah optimal. Pastikan tidak ada warna gelap di sekitarnya agar mudah di-scan.
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="chart-container">
          <h3 className="font-bold text-lg mb-4">⚙️ Spesifikasi Teknis QR Code</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-700">Size</p>
              <p className="font-bold">300×300 px</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-700">Format</p>
              <p className="font-bold">PNG (transparent safe)</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-700">Error Correction</p>
              <p className="font-bold">High (30%)</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-700">Color Mode</p>
              <p className="font-bold">#FF6B6B on white</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-700">Version</p>
              <p className="font-bold">Auto (fits URL)</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-700">DPI for Print</p>
              <p className="font-bold">300 DPI (recommended)</p>
            </div>
          </div>
        </div>

        {/* Preview Info */}
        <div className="chart-container mt-8">
          <h3 className="font-bold text-lg mb-4">✨ Preview di Poster</h3>
          <p className="text-sm text-gray-600 mb-4">
            Contoh penempatan QR code di poster dengan teks tambahan:
          </p>
          <div className="bg-gray-50 p-6 rounded text-center border-2 border-dashed border-gray-300">
            <p className="text-xs text-gray-500 mb-2">📲 Scan untuk akses dashboard interaktif</p>
            <div className="inline-block bg-white p-3 rounded shadow-lg mb-2">
              <canvas ref={canvasRef} />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              <strong>Jejak di Lereng</strong>
              <br />
              jejak-di-lereng.vercel.app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
