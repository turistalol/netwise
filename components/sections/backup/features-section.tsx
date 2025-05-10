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
  FileCheck
} from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    name: 'Backup Automatizado',
    description: 'Agendamento flexível de backups com execução automática e notificações em tempo real.',
    icon: Clock,
    color: 'from-primary to-primary/60',
    delay: 0.1
  },
  {
    name: 'Criptografia Avançada',
    description: 'Proteção AES-256 para dados em trânsito e em repouso, garantindo máxima segurança.',
    icon: Shield,
    color: 'from-secondary to-secondary/60',
    delay: 0.2
  },
  {
    name: 'Armazenamento Redundante',
    description: 'Múltiplas cópias dos seus dados distribuídas em diferentes data centers.',
    icon: Database,
    color: 'from-accent to-accent/60',
    delay: 0.3
  },
  {
    name: 'Backup na Nuvem',
    description: 'Acesso aos seus dados de qualquer lugar, com sincronização automática.',
    icon: Cloud,
    color: 'from-primary to-primary/60',
    delay: 0.4
  },
  {
    name: 'Controle de Acesso',
    description: 'Gestão granular de permissões e autenticação em dois fatores.',
    icon: Lock,
    color: 'from-secondary to-secondary/60',
    delay: 0.5
  },
  {
    name: 'Retenção Flexível',
    description: 'Políticas personalizáveis de retenção de dados e versionamento.',
    icon: History,
    color: 'from-accent to-accent/60',
    delay: 0.6
  },
  {
    name: 'Busca Avançada',
    description: 'Localização rápida de arquivos com busca por metadados e conteúdo.',
    icon: Search,
    color: 'from-primary to-primary/60',
    delay: 0.7
  },
  {
    name: 'Recuperação Rápida',
    description: 'Restauração instantânea de arquivos com tecnologia de snapshot.',
    icon: Zap,
    color: 'from-secondary to-secondary/60',
    delay: 0.8
  },
  {
    name: 'Backup de Servidores',
    description: 'Suporte para servidores físicos e virtuais com agentes otimizados.',
    icon: Server,
    color: 'from-accent to-accent/60',
    delay: 0.9
  },
  {
    name: 'Configuração Simples',
    description: 'Interface intuitiva para configuração e monitoramento dos backups.',
    icon: Settings,
    color: 'from-primary to-primary/60',
    delay: 1.0
  },
  {
    name: 'Backup Incremental',
    description: 'Economia de banda e espaço com backup apenas das alterações.',
    icon: RefreshCw,
    color: 'from-secondary to-secondary/60',
    delay: 1.1
  },
  {
    name: 'Validação Automática',
    description: 'Verificação automática da integridade dos backups realizados.',
    icon: FileCheck,
    color: 'from-accent to-accent/60',
    delay: 1.2
  },
]

export function BackupFeatures() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos <span className="text-accent">avançados</span> de backup
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nossa solução oferece um conjunto completo de funcionalidades para 
            garantir a segurança e disponibilidade dos seus dados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-glow group bg-card rounded-lg p-6 hover:bg-card/80 transition-all duration-300"
            >
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br",
                "bg-secondary/50"
              )}>
                <feature.icon className="w-6 h-6 text-icon" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors">
                {feature.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}