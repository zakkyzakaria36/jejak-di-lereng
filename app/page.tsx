'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import DataOverview from '@/components/DataOverview'
import VisualizationSection from '@/components/VisualizationSection'
import PosterSection from '@/components/PosterSection'
import DataDownload from '@/components/DataDownload'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat data...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Header />
      <HeroSection />
      <DataOverview />
      <VisualizationSection />
      <PosterSection />
      <DataDownload />
      <Footer />
    </main>
  )
}
