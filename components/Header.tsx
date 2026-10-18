'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-main flex justify-between items-center py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">🗻</span>
          </div>
          <h1 className="text-xl font-bold text-gray-800">Jejak di Lereng</h1>
        </div>
        <div className="flex gap-4">
          <a href="#overview" className="text-gray-600 hover:text-orange-600 transition">Data</a>
          <a href="#visualization" className="text-gray-600 hover:text-orange-600 transition">Visualisasi</a>
          <a href="#poster" className="text-gray-600 hover:text-orange-600 transition">Poster</a>
          <a href="#download" className="text-gray-600 hover:text-orange-600 transition">Download</a>
        </div>
      </nav>
    </header>
  )
}
