"use client"

import { motion } from 'framer-motion'
import { 
  Server, 
  Shield, 
  Zap, 
  Clock, 
  Headphones, 
  Globe,
  Database,
  Lock,
  Wifi,
  Monitor,
  Cloud,
  BarChart
} from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    name: 'Servidores VPS de Alto Desempenho',
    description: 'CPUs de última geração, armazenamento SSD NVMe e alta largura de banda para máxima velocidade.',
    icon: Server,
    color: 'from-primary to-primary/60',
    delay: 0.1,
    category: 'vps'
  },
  {
    name: 'Conexões VPN Seguras',
    description: 'Criptografia avançada com túneis VPN dedicados e isolados para proteção total dos dados.',
    icon: Shield,
    color: 'from-secondary to-secondary/60',
    delay: 0.2,
    category: 'vpn'
  },
  {
    name: 'Rede Ultrarrápida',
    description: 'Infraestrutura de rede otimizada com baixa latência e alta taxa de transferência de dados.',
    icon: Zap,
    color: 'from-chart-3 to-chart-3/60',
    delay: 0.3,
    category: 'vps'
  },
  {
    name: 'Disponibilidade 24/7',
    description: 'SLA com garantia de uptime de 99.9% e monitoramento constante do sistema.',
    icon: Clock,
    color: 'from-chart-4 to-chart-4/60',
    delay: 0.4,
    category: 'vpn'
  },
  {
    name: 'Suporte Técnico Especializado',
    description: 'Equipe de especialistas disponível 24/7 para resolver qualquer problema com rapidez.',
    icon: Headphones,
    color: 'from-chart-5 to-chart-5/60',
    delay: 0.5,
    category: 'vps'
  },
  {
    name: 'Conectividade Global',
    description: 'Servidores distribuídos em múltiplas localizações para conexões otimizadas em todo o mundo.',
    icon: Globe,
    color: 'from-primary to-primary/60',
    delay: 0.6,
    category: 'vpn'
  },
  {
    name: 'Backups Automáticos',
    description: 'Sistema de backups programados com retenção flexível para garantir a segurança dos seus dados.',
    icon: Database,
    color: 'from-secondary to-secondary/60',
    delay: 0.7,
    category: 'vps'
  },
  {
    name: 'Múltiplos Protocolos VPN',
    description: 'Suporte para OpenVPN, WireGuard, IPSec e outros protocolos para máxima compatibilidade.',
    icon: Lock,
    color: 'from-chart-3 to-chart-3/60',
    delay: 0.8,
    category: 'vpn'
  },
  {
    name: 'Redes Privadas',
    description: 'Conexões entre servidores com latência ultrabaixa em rede isolada e segura.',
    icon: Wifi,
    color: 'from-chart-4 to-chart-4/60',
    delay: 0.9,
    category: 'vps'
  },
  {
    name: 'Painel de Controle Intuitivo',
    description: 'Interface amigável para gerenciar servidores, usuários, acessos e monitorar o desempenho.',
    icon: Monitor,
    color: 'from-chart-5 to-chart-5/60',
    delay: 1.0,
    category: 'vpn'
  },
  {
    name: 'Escalabilidade Instantânea',
    description: 'Aumente recursos conforme necessário para atender a picos de demanda sem interrupções.',
    icon: Cloud,
    color: 'from-primary to-primary/60',
    delay: 1.1,
    category: 'vps'
  },
  {
    name: 'Relatórios Detalhados',
    description: 'Estatísticas de uso, desempenho e segurança para otimizar sua infraestrutura de TI.',
    icon: BarChart,
    color: 'from-secondary to-secondary/60',
    delay: 1.2,
    category: 'vpn'
  },
]

type Category = 'vps' | 'vpn' | 'all';

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Recursos <span className="text-accent">poderosos</span> para sua empresa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nossa infraestrutura oferece o melhor em performance, segurança e 
            confiabilidade para impulsionar seus projetos.
          </p>
        </div>
        
        <FeaturesGrid features={features} category="all" />
      </div>
    </section>
  )
}

function FeaturesGrid({ 
  features, 
  category 
}: { 
  features: typeof features, 
  category: Category 
}) {
  const filteredFeatures = category === 'all' 
    ? features 
    : features.filter(feature => feature.category === category);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {filteredFeatures.map((feature, idx) => (
        <FeatureCard
          key={feature.name}
          feature={feature}
          index={idx}
        />
      ))}
    </div>
  )
}

function FeatureCard({ 
  feature, 
  index 
}: { 
  feature: typeof features[0], 
  index: number 
}) {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true, margin: "-50px" }}
      className="card-glow group bg-card rounded-lg p-6 hover:bg-card/80 transition-all duration-300"
    >
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
        "bg-secondary/50"
      )}>
        <Icon className="w-6 h-6 text-icon" />
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
        {feature.name}
      </h3>
      <p className="text-muted-foreground text-sm">
        {feature.description}
      </p>
    </motion.div>
  )
}