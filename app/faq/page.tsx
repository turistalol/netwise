"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { FaqContent } from '@/components/sections/faq/faq-content'
import { FaqHero } from '@/components/sections/faq/faq-hero'

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className="min-h-screen">
      <Header />
      <FaqHero 
        searchTerm={searchTerm} 
        onSearchTermChange={setSearchTerm}
      />
      <FaqContent 
        searchTerm={searchTerm}
      />
      <Footer />
    </main>
  )
}