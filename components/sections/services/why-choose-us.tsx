"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Users, Award } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: "Maior cobertura regional"
  },
  {
    icon: Clock,
    title: "Mais de 26 anos de experiência"
  },
  {
    icon: Users,
    title: "Parcerias estratégicas com líderes globais"
  },
  {
    icon: Award,
    title: "Atendimento especializado e suporte 24/7"
  }
]

export function WhyChooseUs() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-[right_40%_center] sm:bg-center bg-fixed"
        style={{ 
          backgroundImage: "url(/images/banner-03.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que escolher a <span className="text-accent">Netwise</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12">
            Somos pioneiros em conectividade, com uma trajetória de excelência que conecta pessoas e empresas. 
            Da maior cobertura regional à transição para serviços corporativos robustos, nossa história é 
            marcada por inovação e liderança.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-icon" />
                </div>
                <h3 className="text-lg font-semibold">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-secondary/90 text-black"
              onClick={() => window.location.href = 'https://netwise.com.br/sobre-nos/'}
            >
              Sobre Nós
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}