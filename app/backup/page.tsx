"use client"

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { BackupHero } from '@/components/sections/backup/hero-section'
import { WhyBackupSection } from '@/components/sections/backup/why-backup-section'
import { BackupFeatures } from '@/components/sections/backup/features-section'
// import { BackupBenefits } from '@/components/sections/backup/benefits-section'
import { SecuritySection } from '@/components/sections/backup/security-section'
import { HowItWorksSection } from '@/components/sections/backup/how-it-works-section'
import { BackupPricing } from '@/components/sections/backup/pricing-section'
import { TestimonialsSlider } from '@/components/ui/testimonials-slider'
import { testimonialsData } from '@/lib/data/testimonials'
import { BackupIntegrations } from '@/components/sections/backup/integrations-section'
import { BackupContactSection } from '@/components/sections/backup/contact-section'

export default function BackupPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BackupHero />
      <WhyBackupSection />
      <BackupFeatures />
      {/* <BackupBenefits /> */}
      <SecuritySection />
      <HowItWorksSection />
      <BackupPricing />
      <TestimonialsSlider testimonialsData={testimonialsData} />
      <BackupIntegrations />
      <BackupContactSection />
      <Footer />
    </main>
  )
}