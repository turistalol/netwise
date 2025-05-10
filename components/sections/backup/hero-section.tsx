"use client"

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Database, Clock, CloudLightning, ShieldCheck } from 'lucide-react'

export function BackupHero() {
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

  const CardVisual = () => (
    // Contêiner relativo para posicionar os ícones flutuantes
    <div className="relative w-full max-w-md lg:max-w-xl mx-auto">
      {/* Aplicando a borda animada e o efeito de vidro */}
      <div className="animated-border rounded-2xl"> {/* Padding da borda vem da classe CSS */}
        {/* O conteúdo do card com o efeito de vidro e fundo próprio */}
        <div className="glass-effect bg-card rounded-xl shadow-xl overflow-hidden p-4 sm:p-6 lg:p-8">
          <div className="relative aspect-[16/9] lg:aspect-[16/10] w-full rounded-lg overflow-hidden lg:min-h-[400px]">
            <Image
              src="/images/banner-03.webp"
              alt="Painel de controle do Backup as a Service"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Ícones Flutuantes */}
      <motion.div
        className="absolute -top-5 -left-5 p-3 glass-effect rounded-full shadow-lg"
        variants={floatingIconVariants}
        initial="hidden"
        animate="visible"
        custom={0} // Para delay escalonado
      >
        <Database size={24} className="text-icon" /> {/* Usando sua cor --secondary */}
      </motion.div>

      <motion.div
        className="absolute -bottom-5 -right-5 p-3 glass-effect rounded-full shadow-lg"
        variants={floatingIconVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <ShieldCheck size={24} className="text-icon" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-7 transform -translate-y-1/2 p-3 glass-effect rounded-full shadow-lg"
        variants={floatingIconVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <CloudLightning size={24} className="text-icon" />
      </motion.div>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-24 lg:min-h-screen lg:flex lg:items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 grid-pattern opacity-[0.03] sm:opacity-5" />
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Backup Empresarial <span className="text-accent">Sem Complicações</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Proteja os dados da sua empresa com nossa solução de Backup as a Service.
                Segurança garantida, recuperação rápida e zero dor de cabeça.
              </p>
            </motion.div>

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
                <Link href="/agendar-demonstracao" passHref legacyBehavior>
                  <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-foreground">
                    <a>Agendar demonstração</a>
                  </Button>
                </Link>
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
                  <Shield className="h-6 w-6 text-icon" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Criptografia de ponta a ponta
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="flex-shrink-0 mr-3">
                  <Database className="h-6 w-6 text-icon" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Armazenamento redundante
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="flex-shrink-0 mr-3">
                  <Clock className="h-6 w-6 text-icon" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Backup automático 24/7
                </p>
              </div>
            </motion.div>
          </div>
          
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