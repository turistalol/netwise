import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { TestimonialsSlider } from '@/components/ui/testimonials-slider'
import { testimonialsData } from '@/lib/data/testimonials'
import { ContactForm } from '@/components/ui/contact-form'
import { VmHowItWorksSection } from '@/components/sections/vm-how-it-works-section'
import { VmSecuritySection } from '@/components/sections/vm-security-section'
import { VmOperatingSystemsSection } from '@/components/sections/vm-operating-systems-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <VmSecuritySection />
      <VmHowItWorksSection />
      <TestimonialsSlider testimonialsData={testimonialsData} />
      <PricingSection />
      <VmOperatingSystemsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}