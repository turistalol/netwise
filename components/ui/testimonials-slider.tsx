"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type TestimonialItem } from '@/lib/data/testimonials'

// Props para o componente TestimonialsSlider
interface TestimonialsSliderProps {
  title?: string;
  subtitle?: string;
  testimonialsData: TestimonialItem[];
  brandsTitle?: string;
  showBrands?: boolean;
}

const DEFAULT_TITLE = "Clientes <span class='text-accent'>satisfeitos</span> compartilham suas experiências";
const DEFAULT_SUBTITLE = "Veja o que nossos clientes dizem sobre nossas soluções de VPS e VPN.";
const DEFAULT_BRANDS_TITLE = "Empresas que confiam na Netwise";

export function TestimonialsSlider({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  testimonialsData,
  brandsTitle = DEFAULT_BRANDS_TITLE,
  showBrands = true,
}: TestimonialsSliderProps): JSX.Element | null {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    if (!isAutoPlaying || testimonialsData.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialsData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialsData]);
  
  const handleNext = () => {
    if (testimonialsData.length === 0) return;
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current + 1) % testimonialsData.length);
  };
  
  const handlePrev = () => {
    if (testimonialsData.length === 0) return;
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current - 1 + testimonialsData.length) % testimonialsData.length);
  };
  
  const handleDotClick = (index: number) => {
    if (testimonialsData.length === 0) return;
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  if (testimonialsData.length === 0) {
    return null; 
  }
  
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Mantido o blur da versão original, pode ser customizado se necessário */}
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          {/* Usando dangerouslySetInnerHTML para permitir o span no título. Cuidado com XSS se o title vier de fontes não confiáveis. */}
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        </div>
        
        <div className="mt-8 relative">
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <div className="mt-10 flex items-center justify-center space-x-6">
            <button
              onClick={handlePrev}
              className="rounded-full p-2 bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Anterior depoimento"
              disabled={testimonialsData.length <= 1}
            >
              <ChevronLeft className="h-5 w-5 text-icon" />
            </button>
            
            <div className="flex space-x-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    idx === activeIndex 
                      ? "w-8 bg-accent"
                      : "w-2 bg-muted hover:bg-muted/80"
                  )}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="rounded-full p-2 bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Próximo depoimento"
              disabled={testimonialsData.length <= 1}
            >
              <ChevronRight className="h-5 w-5 text-icon" />
            </button>
          </div>
        </div>
        
        {showBrands && (
          <div className="mt-20">
            <h3 className="text-xl font-semibold text-center mb-10">
              {brandsTitle}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {testimonialsData.map((testimonial, idx) => (
                testimonial.logo && ( // Renderiza somente se o logo existir
                  <div 
                    key={idx}
                    className="flex items-center justify-center p-4 bg-card rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300 border border-border"
                  >
                    <img 
                      src={testimonial.logo} 
                      alt={`Logo da empresa do depoimento de ${testimonial.author}`} 
                      className="max-h-12 w-auto"
                    />
                  </div>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// Componente interno para o card de depoimento
// A prop 'testimonial' agora usa o tipo TestimonialItem importado
function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-xl p-6 md:p-8 shadow-lg relative card-glow" // Mantido card-glow, pode ser customizado
    >
      <div className="absolute -top-5 -left-5 text-icon/30">
        <Quote className="h-16 w-16" />
      </div>
      
      <div className="relative z-10">
        <p className="text-lg md:text-xl italic">"{testimonial.content}"</p>
        
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={testimonial.image}
              alt={testimonial.author}
            />
          </div>
          <div className="ml-4">
            <div className="text-base font-semibold">{testimonial.author}</div>
            <div className="text-sm text-muted-foreground">{testimonial.title}</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 