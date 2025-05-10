"use client"

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ServicesHero } from '@/components/sections/services/hero-section'
import { ServicesGrid } from '@/components/sections/services/services-grid'
import { WhyChooseUs } from '@/components/sections/services/why-choose-us'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}