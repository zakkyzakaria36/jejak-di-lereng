'use client';

import Navigation from '@/components/Navigation';
import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export default function QRCodePage() {
  const canvasRef = useRef(null);
  const qrUrl = 'https://jejak-di-lereng.vercel.app';

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        qrUrl,
        {
          errorCorrectionLevel: 'H',
          type: 'image/jpeg',
          quality: 0.95,
          margin: 1,
          width: 300,
          color: {
            dark: '#FF6B6B',
            light: '#FFFFFF'
          }
        }
      );
    }
  }, []);

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
      <div className="max-w-2xl mx-auto px-4 py-8 bg-white min-h-screen">
        
        <h1 className="text-2xl font-bold text-dark mb-2">QR Code</h1>
        <p className="text-sm text-gray-600 mb-8">Scan untuk akses dashboard</p>

        {/* QR Code Display */}
        <div className="flex flex-col items-center gap-6 bg-gray-50 p-8 rounded-lg">
          <div className="bg-white p-4 rounded-lg shadow">
            <canvas ref={canvasRef} />
          </div>
          <button
            onClick={downloadQR}
            className="px-6 py-2 bg-primary text-white rounded-lg font-medium text-sm hover:bg-red-700 transition"
          >
            Download QR Code
          </button>
        </div>

        {/* Usage Info */}
        <div className="mt-8 space-y-4">
          <div>
            <h3 className="font-semibold text-sm mb-2">Cara Menggunakan</h3>
            <ol className="text-sm text-gray-700 space-y-2 ml-4 list-decimal">
              <li>Download QR code di atas</li>
              <li>Print dan letakkan di poster (minimal 2cm × 2cm)</li>
              <li>Scan dengan smartphone → dashboard terbuka</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-xs text-gray-600">
              <strong>URL:</strong> {qrUrl}
            </p>
          </div>
        </div>

        {/* Credit */}
        <div className="border-t mt-8 pt-6">
          <p className="text-xs text-gray-500 text-center">
            Instagram: @zkyzakariaa
          </p>
        </div>
      </div>
    </div>
  );
}
