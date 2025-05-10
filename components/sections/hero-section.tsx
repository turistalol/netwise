"use client"

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Server, Shield, Zap, Database } from 'lucide-react'

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Variantes para os ícones flutuantes
  const floatingIconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
        delay: 0.8 + i * 0.15, // Delay escalonado
      }
    })
  };

  // Card Visual que será mostrado tanto em mobile (centralizado) quanto em desktop (à direita)
  const CardVisual = () => (
    <div className="relative w-full max-w-md lg:max-w-xl mx-auto">
      <div className="animated-border rounded-2xl">
        <div className="glass-effect bg-card rounded-xl shadow-xl overflow-hidden p-4 sm:p-6 lg:p-8">
          <div className="relative aspect-[16/9] lg:aspect-[16/10] w-full rounded-lg overflow-hidden lg:min-h-[430px]">
            {/* Servidor visual - pode ser substituído por uma imagem depois */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-background/80 to-card">
              <Image src="/images/banner-10.webp" alt="Servidor" layout="fill" objectFit="cover" priority className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Ícones Flutuantes */}
      <motion.div
        className="absolute -top-5 -left-5 p-3 glass-effect rounded-full shadow-lg"
        variants={floatingIconVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <Server size={24} className="text-icon" />
      </motion.div>

      <motion.div
        className="absolute -bottom-5 -right-5 p-3 glass-effect rounded-full shadow-lg"
        variants={floatingIconVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <Shield size={24} className="text-icon" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-7 transform -translate-y-1/2 p-3 glass-effect rounded-full shadow-lg"
        variants={floatingIconVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <Zap size={24} className="text-icon" />
      </motion.div>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-24 lg:min-h-screen lg:flex lg:items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 items-center">
          <div className="flex flex-col text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
                Infraestrutura de <span className="text-accent">alta performance</span> para sua empresa
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Soluções de VPS e VPN seguras, rápidas e confiáveis para impulsionar
                o crescimento da sua empresa com tecnologia de ponta.
              </p>
            </motion.div>

            {/* Card centralizado que aparece apenas no mobile */}
            <motion.div
              className="my-8 sm:my-10 lg:hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <CardVisual />
            </motion.div>

            <motion.div
              className="mt-0 sm:mt-0 lg:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-accent hover:bg-secondary text-accent-foreground font-medium">
                  Começar agora <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-foreground">
                  Agendar demonstração
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-center sm:justify-start">
                <div className="flex-shrink-0 mr-3">
                  <Server className="h-6 w-6 text-icon" />
                </div>
                <p className="text-sm text-muted-foreground">
                  99.9% de uptime garantido
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="flex-shrink-0 mr-3">
                  <Zap className="h-6 w-6 text-icon" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Alta velocidade e desempenho
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="flex-shrink-0 mr-3">
                  <Shield className="h-6 w-6 text-icon" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Segurança de dados avançada
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Card no lado direito que aparece apenas no desktop */}
          <motion.div
            className="relative hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "circOut" }}
          >
            <CardVisual />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}