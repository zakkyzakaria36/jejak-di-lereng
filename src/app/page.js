'use client';

import Navigation from '@/components/Navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div>
      <Navigation />
      <div className="max-w-2xl mx-auto px-4 py-6 bg-white min-h-screen">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-dark mb-1">Jejak di Lereng</h1>
          <p className="text-sm text-gray-600">Analisis Longsor DIY 2016-2026</p>
          <p className="text-xs text-gray-500 mt-2">112 kejadian | 10 tahun data</p>
        </div>

        {/* Poster Image */}
        <div className="mb-6 rounded-lg overflow-hidden border border-gray-200">
          <img src="/images/6.png" alt="Poster" className="w-full h-auto" />
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === 'overview'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('docs')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === 'docs'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600'
            }`}
          >
            Dokumentasi
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === 'data'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600'
            }`}
          >
            Data
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-4 pb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-sm mb-3">Key Findings</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-primary">Kulon Progo</p>
                  <p className="text-gray-700">41 kejadian (36.6%) - hotspot dominan</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-secondary">Musim Hujan</p>
                  <p className="text-gray-700">96 kejadian (86%) - Oktober hingga Maret</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-success">Mitigasi 2020+</p>
                  <p className="text-gray-700">0 korban jiwa - dari 45.5% menjadi 0%</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-tertiary">
              <p className="text-sm text-gray-700">
                <strong>86% kejadian longsor di DIY</strong> terjadi pada musim hujan (Oktober-Maret). Kulon Progo dengan 41 kejadian adalah zona paling rawan, terutama bulan Februari.
              </p>
            </div>
          </div>
        )}

        {/* Dokumentasi Tab */}
        {activeTab === 'docs' && (
          <div className="space-y-4 pb-8">
            <div>
              <h3 className="font-semibold text-sm mb-2">Latar Belakang</h3>
              <p className="text-sm text-gray-700">
                DIY mengalami rata-rata 1 kejadian longsor per bulan. Frekuensi tinggi namun pola spasial-temporal belum terdokumentasi dengan baik dalam format visualisasi interaktif untuk publik.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2">Metodologi</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Data Sources:</strong>
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• DIBI BNPB: 112 kejadian longsor</li>
                <li>• BPBD DIY: Program mitigasi & dampak</li>
                <li>• BMKG: Curah hujan bulanan</li>
                <li>• Peta Rawan Bencana DIY: Boundary</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2">Analisis</h3>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Spatial: Choropleth mapping</li>
                <li>• Temporal: Time series analysis</li>
                <li>• Spatio-temporal: Heatmap matrix</li>
                <li>• Comparative: Pre-post mitigasi</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2">Tools & Tech</h3>
              <p className="text-sm text-gray-700">
                Next.js, Recharts, Tailwind CSS, QRCode library. Deployed di Vercel.
              </p>
            </div>
          </div>
        )}

        {/* Data Tab */}
        {activeTab === 'data' && (
          <div className="space-y-4 pb-8">
            <div>
              <h3 className="font-semibold text-sm mb-2">Distribusi Wilayah</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Kulon Progo</span>
                  <span className="font-semibold">41 (36.6%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Sleman</span>
                  <span className="font-semibold">25 (22.3%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Gunungkidul</span>
                  <span className="font-semibold">22 (19.6%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Bantul</span>
                  <span className="font-semibold">13 (11.6%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Kota Yogyakarta</span>
                  <span className="font-semibold">11 (9.8%)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2">Dampak Total</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Mengungsi</span>
                  <span className="font-semibold text-primary">11,141</span>
                </div>
                <div className="flex justify-between">
                  <span>Rumah Rusak</span>
                  <span className="font-semibold text-warning">268</span>
                </div>
                <div className="flex justify-between">
                  <span>Luka-luka</span>
                  <span className="font-semibold text-tertiary">25</span>
                </div>
                <div className="flex justify-between">
                  <span>Korban Jiwa</span>
                  <span className="font-semibold text-gray-700">20</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Credit */}
        <div className="border-t pt-6 mt-8">
          <p className="text-xs text-gray-500 text-center">
            Project: Jejak di Lereng<br/>
            By: Zakky Zakaria<br/>
            Instagram: @zkyzakariaa<br/>
            <a href="https://github.com/zakkyzakaria36/jejak-di-lereng" className="text-tertiary hover:underline">
              GitHub Repository
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
