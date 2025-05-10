"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const services = [
  {
    image: "/images/banner-04.webp",
    title: "Cloud",
    description: "Armazenamento escalável e seguro para sua empresa.",
  },
  {
    image: "/images/banner-06.webp",
    title: "Link Dedicado",
    description: "Conexão exclusiva com máxima estabilidade.",
  },
  {
    image: "/images/banner-08.webp",
    title: "Backup as a Service",
    description: "Segurança e recuperação rápida para seus dados.",
  },
  {
    image: "/images/banner-05.webp",
    title: "Colocation",
    description: "Hospede seus servidores com segurança.",
  },
  {
    image: "/images/banner-07.webp",
    title: "Lan to Lan",
    description: "Integração segura entre suas filiais.",
  },
  {
    image: "/images/banner-09.webp",
    title: "Videomonitoramento Inteligente",
    description: "Segurança em tempo real para seu negócio.",
  }
]

export function ServicesGrid() {
  const handleWhatsAppClick = (service: string) => {
    const message = `Olá! Gostaria de saber mais sobre o serviço de ${service}.`
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-accent">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluções completas para impulsionar o crescimento do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden card-glow group hover:bg-card/80 transition-all duration-300"
            >
              <div className="relative aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Button
                  className="w-full bg-accent hover:bg-secondary/90 text-black"
                  onClick={() => {
                    if (service.title === "Backup as a Service") {
                      window.location.href = '/backup';
                    } else {
                      handleWhatsAppClick(service.title);
                    }
                  }}
                >
                  Saiba mais
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
