"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { 
  Monitor, 
  Zap, 
  Shield, 
  Clock, 
  Settings,
  CheckCircle,
  Download,
  ArrowRight
} from "lucide-react"

const operatingSystems = [
  {
    name: "Ubuntu Server LTS",
    version: "22.04.3 LTS",
    description: "Distribuição mais popular para servidores empresariais",
    icon: "🐧",
    color: "from-orange-500 to-orange-600",
    category: "linux",
    features: ["Suporte até 2027", "Kernel 5.15", "Boot < 25s"],
    popular: true,
    stats: { usage: "72%", deployments: "2.1k" }
  },
  {
    name: "Windows Server 2022",
    version: "21H2",
    description: "Última versão do Windows Server com suporte empresarial",
    icon: "🪟",
    color: "from-blue-500 to-blue-600",
    category: "windows",
    features: ["Licenciamento incluso", "Active Directory", "Boot < 45s"],
    popular: false,
    stats: { usage: "38%", deployments: "654" }
  },
  {
    name: "Red Hat Enterprise",
    version: "9.3",
    description: "Suporte empresarial oficial da Red Hat",
    icon: "🎩",
    color: "from-red-600 to-red-700",
    category: "linux",
    features: ["Suporte oficial", "Certificações", "Boot < 35s"],
    popular: false,
    stats: { usage: "23%", deployments: "367" }
  },
  {
    name: "Imagens Customizadas",
    version: "Sob demanda",
    description: "Ambientes personalizados para suas necessidades",
    icon: "⚙️",
    color: "from-gray-500 to-gray-600",
    category: "custom",
    features: ["100% personalizado", "Pré-configurado", "SLA garantido"],
    popular: false,
    stats: { usage: "12%", deployments: "178" }
  }
];

const osCategories = [
  { id: "all", name: "Todos", count: operatingSystems.length },
  { id: "linux", name: "Linux", count: operatingSystems.filter(os => os.category === "linux").length },
  { id: "windows", name: "Windows", count: operatingSystems.filter(os => os.category === "windows").length },
  { id: "custom", name: "Custom", count: operatingSystems.filter(os => os.category === "custom").length }
];

export function VmOperatingSystemsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSystems = activeCategory === 'all' 
    ? operatingSystems 
    : operatingSystems.filter(os => os.category === activeCategory);

  return (
    <section id="sistemas-operacionais" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with OS-themed elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/12 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/12 to-transparent rounded-full blur-3xl opacity-40" />
        
        {/* Floating code elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['$', '>', '#', '~'].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/20 font-mono text-2xl font-bold"
              style={{
                left: `${15 + i * 25}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.6, 0.2],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Sistemas Operacionais <span className="text-accent">Enterprise-Ready</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Imagens otimizadas, pré-configuradas e sempre atualizadas para máxima performance, 
            segurança e compatibilidade com seus ambientes de produção.
          </motion.p>
          
          {/* Stats bar */}
          <motion.div 
            className="flex justify-center items-center space-x-8 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>Boot médio &lt; 30s</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Patches automáticos</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>100% testado</span>
            </div>
          </motion.div>
        </div>

        {/* Category tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex space-x-2 bg-card/30 backdrop-blur-sm p-2 rounded-xl border border-border/50">
            {osCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "hover:bg-card/80 text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* OS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {filteredSystems.map((os, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <OperatingSystemCard os={os} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Não encontrou seu ambiente ideal?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Criamos imagens personalizadas com suas configurações específicas, aplicações pré-instaladas 
              e otimizações customizadas para seu stack tecnológico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Settings className="w-4 h-4 mr-2" />
                Solicitar Imagem Personalizada
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function OperatingSystemCard({ os }: { os: typeof operatingSystems[0] }) {
  return (
    <motion.div 
      className="group relative overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full bg-card/40 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 relative overflow-hidden">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${os.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
        
        <CardContent className="p-6 relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${os.color} flex items-center justify-center text-2xl shadow-lg`}>
                {os.icon}
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors">
                    {os.name}
                  </h3>
                  {os.popular && (
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      Popular
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground font-mono">
                  {os.version}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground/80 transition-colors">
            {os.description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {os.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs">
                <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
              <Monitor className="w-3 h-3" />
              <span>Uso: {os.stats.usage}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="w-3 h-3" />
              <span>{os.stats.deployments} deploys</span>
            </div>
          </div>

          {/* Action */}
          <motion.button 
            className="w-full py-2 px-4 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-lg text-sm font-medium text-primary transition-all duration-200 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Deploy Agora</span>
            <ArrowRight className="w-3 h-3" />
          </motion.button>
        </CardContent>

        {/* Hover glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${os.color} opacity-0 group-hover:opacity-10 blur-xl scale-110 transition-all duration-500 -z-10`} />
      </Card>
    </motion.div>
  )
} 