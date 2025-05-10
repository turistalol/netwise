"use client"

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

// Definindo a interface de props
interface FaqHeroProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
}

export function FaqHero({ searchTerm, onSearchTermChange }: FaqHeroProps) { // Recebendo props
  return (
    <section className="pt-24 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute left-1/4 top-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Perguntas <span className="text-accent">Frequentes</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Encontre respostas para suas dúvidas sobre nossos serviços de VPS, VPN e Backup em Nuvem
          </motion.p>

          <motion.div 
            className="max-w-lg mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="search"
              placeholder="Buscar pergunta..."
              className="pl-10 bg-card/50 backdrop"
              value={searchTerm} // Ligando ao estado
              onChange={(e) => onSearchTermChange(e.target.value)} // Atualizando o estado
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}