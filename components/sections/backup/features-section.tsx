"use client"

import { motion } from 'framer-motion'
import { 
  Shield, 
  Clock, 
  Database,
  Cloud,
  Lock,
  History,
  Search,
  Zap,
  Server,
  Settings,
  RefreshCw,
  FileCheck,
  Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Definindo o tipo para um único feature
type Feature = {
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  delay: number;
  position: 'main' | 'side' | 'bottom';
  category: 'security' | 'automation' | 'performance';
};

const features: Feature[] = [
  // Main Feature (Left - Large)
  {
    name: 'Criptografia Avançada AES-256',
    description: 'Proteção militar de última geração para dados em trânsito e em repouso, garantindo máxima segurança com criptografia de ponta a ponta e chaves de criptografia gerenciadas automaticamente.',
    icon: Shield,
    color: 'from-primary via-secondary to-accent',
    delay: 0.1,
    position: 'main',
    category: 'security'
  },
  // Side Features (Right - Small stacked)
  {
    name: 'Backup Automatizado',
    description: 'Agendamento inteligente com execução automática e notificações em tempo real.',
    icon: Clock,
    color: 'from-secondary to-primary',
    delay: 0.2,
    position: 'side',
    category: 'automation'
  },
  {
    name: 'Recuperação Instantânea',
    description: 'Restauração ultra-rápida com tecnologia de snapshot avançada.',
    icon: Zap,
    color: 'from-accent to-secondary',
    delay: 0.3,
    position: 'side',
    category: 'performance'
  },
  // Bottom Features (Bottom row)
  {
    name: 'Armazenamento Redundante',
    description: 'Múltiplas cópias distribuídas em data centers geograficamente separados.',
    icon: Database,
    color: 'from-chart-1 to-chart-2',
    delay: 0.4,
    position: 'bottom',
    category: 'security'
  },
  {
    name: 'Backup Incremental Inteligente',
    description: 'Economia de banda e espaço com deduplicação avançada e compressão.',
    icon: RefreshCw,
    color: 'from-chart-2 to-accent',
    delay: 0.5,
    position: 'bottom',
    category: 'performance'
  },
  {
    name: 'Validação Automática',
    description: 'Verificação contínua da integridade com relatórios detalhados.',
    icon: FileCheck,
    color: 'from-primary to-chart-1',
    delay: 0.6,
    position: 'bottom',
    category: 'automation'
  }
]

export function BackupFeatures() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Background with Starlink-style elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/10 to-chart-1/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid pattern with enhanced opacity */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Recursos <span className="text-accent">avançados</span> de backup
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nossa solução oferece um conjunto completo de funcionalidades para 
            garantir a segurança e disponibilidade dos seus dados.
          </p>
        </motion.div>
        
        <AsymmetricBackupGrid features={features} />
      </div>
    </section>
  )
}

function AsymmetricBackupGrid({ features }: { features: Feature[] }) {
  const mainFeature = features.find(f => f.position === 'main')!;
  const sideFeatures = features.filter(f => f.position === 'side');
  const bottomFeatures = features.filter(f => f.position === 'bottom');

  return (
    <div className="space-y-8">
      {/* Top Section - Asymmetric Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Left - Main Feature (spans 2 columns) */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: mainFeature.delay, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <MainBackupFeatureCard feature={mainFeature} />
        </motion.div>

        {/* Right - Side Features (stacked) */}
        <div className="flex flex-col gap-6">
          {sideFeatures.map((feature, idx) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: feature.delay,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <SideBackupFeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Row - Even Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {bottomFeatures.map((feature, idx) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: feature.delay,
              ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <BottomBackupFeatureCard feature={feature} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function MainBackupFeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  
  return (
    <div className="group relative overflow-hidden">
      {/* Animated border gradient */}
      <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-full h-full bg-background rounded-[calc(1rem-1px)]" />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      {/* Main content */}
      <div className="relative bg-card/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8 lg:p-12 h-full group-hover:bg-card/60 transition-all duration-500">
        {/* Large Icon with enhanced effects */}
        <motion.div 
          className={cn(
            "w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br shadow-2xl relative overflow-hidden",
            feature.color
          )}
          whileHover={{ 
            scale: 1.05,
            rotate: [0, -5, 5, 0],
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Icon size={40} className="text-white lg:w-12 lg:h-12 relative z-10" />
          
          {/* Sparkle effect */}
          <motion.div
            className="absolute top-2 right-2"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles size={12} className="text-white/80" />
          </motion.div>
        </motion.div>
        
        {/* Title with gradient */}
        <h3 className="text-2xl lg:text-3xl font-bold mb-6 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {feature.name}
        </h3>
        
        {/* Description */}
        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/90 transition-colors duration-300">
          {feature.description}
        </p>
        
        {/* Enhanced Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 text-white font-medium text-sm backdrop-blur-sm">
          Military-Grade Security
        </div>
      </div>
    </div>
  )
}

function SideBackupFeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  
  return (
    <motion.div 
      className="group relative overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle border gradient */}
      <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-full h-full bg-background rounded-[calc(0.75rem-1px)]" />
      </div>
      
      {/* Hover glow */}
      <div className={cn(
        "absolute inset-0 rounded-xl blur-xl scale-110 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-br",
        feature.color
      )} />
      
      {/* Main content */}
      <div className="relative bg-card/30 backdrop-blur-md rounded-xl border border-white/5 p-6 h-full group-hover:bg-card/50 group-hover:border-white/10 transition-all duration-300">
        {/* Icon with enhanced animation */}
        <motion.div 
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br shadow-lg relative overflow-hidden",
            feature.color
          )}
          whileHover={{ 
            scale: 1.15, 
            rotate: [0, -10, 10, 0] 
          }}
          transition={{ duration: 0.4 }}
        >
          <Icon size={20} className="text-white relative z-10" />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
          {feature.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

function BottomBackupFeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  
  return (
    <motion.div 
      className="group relative overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Enhanced border gradient */}
      <div className="absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-full h-full bg-background rounded-[calc(0.75rem-1px)]" />
      </div>
      
      {/* Hover glow */}
      <div className={cn(
        "absolute inset-0 rounded-xl blur-xl scale-110 opacity-0 group-hover:opacity-20 transition-all duration-500 bg-gradient-to-br",
        feature.color
      )} />
      
      {/* Main content */}
      <div className="relative bg-card/35 backdrop-blur-lg rounded-xl border border-white/8 p-6 h-full group-hover:bg-card/55 group-hover:border-white/15 transition-all duration-300">
        {/* Icon with enhanced animation */}
        <motion.div 
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br shadow-xl relative overflow-hidden",
            feature.color
          )}
          whileHover={{ 
            scale: 1.15, 
            rotate: [0, -10, 10, 0] 
          }}
          transition={{ duration: 0.4 }}
        >
          <Icon size={24} className="text-white relative z-10" />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {feature.name}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/85 transition-colors duration-300">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}