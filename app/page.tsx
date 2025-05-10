import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { PerformanceSection } from '@/components/sections/performance-section'
import { TestimonialsSlider } from '@/components/ui/testimonials-slider'
import { testimonialsData } from '@/lib/data/testimonials'
import { SpecsSection } from '@/components/sections/specs-section'
import { ContactForm } from '@/components/ui/contact-form'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSlider testimonialsData={testimonialsData} />
      <PerformanceSection />
      <SpecsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}