"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  AlertTriangle,
  Bomb,
  Bug,
  FileX,
  HardDrive,
  Laptop2,
  Shield,
  CheckCircle2,
  Clock,
  CloudOff,
  ArrowRight,
  Zap
} from 'lucide-react'

const risks = [
  {
    icon: Bomb,
    title: "Ataques Cibernéticos",
    description: "Ransomware e malware podem criptografar ou destruir dados críticos",
    color: "text-red-500"
  },
  {
    icon: HardDrive,
    title: "Falhas de Hardware",
    description: "Discos rígidos e servidores podem falhar inesperadamente",
    color: "text-red-400"
  },
  {
    icon: Bug,
    title: "Erros Humanos",
    description: "Exclusão acidental de arquivos e configurações importantes",
    color: "text-red-500"
  },
  {
    icon: CloudOff,
    title: "Desastres Naturais",
    description: "Incêndios, inundações e outros eventos podem danificar equipamentos",
    color: "text-red-400"
  },
  {
    icon: FileX,
    title: "Corrupção de Dados",
    description: "Arquivos podem ser corrompidos por falhas de software",
    color: "text-red-500"
  },
  {
    icon: AlertTriangle,
    title: "Conformidade Legal",
    description: "Não conformidade com regulamentações de proteção de dados",
    color: "text-red-400"
  }
]

const solutions = [
  {
    icon: Shield,
    title: "Proteção Contínua",
    description: "Backup automático de dados críticos em tempo real",
    color: "text-emerald-500"
  },
  {
    icon: CheckCircle2,
    title: "Recuperação Garantida",
    description: "Restauração rápida e confiável quando necessário",
    color: "text-emerald-400"
  },
  {
    icon: Clock,
    title: "Histórico Completo",
    description: "Versões anteriores de arquivos sempre disponíveis",
    color: "text-emerald-500"
  },
  {
    icon: Laptop2,
    title: "Acesso Remoto",
    description: "Dados acessíveis de qualquer lugar com segurança",
    color: "text-emerald-400"
  },
  {
    icon: Zap,
    title: "Alta Disponibilidade",
    description: "Seus dados sempre disponíveis quando precisar",
    color: "text-emerald-500"
  },
  {
    icon: Shield,
    title: "Conformidade Total",
    description: "Atendimento a requisitos regulatórios de proteção",
    color: "text-emerald-400"
  }
]

export function WhyBackupSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que sua empresa precisa de <span className="text-accent">Backup em Nuvem</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Em um mundo digital, a proteção dos dados é crucial para a continuidade 
            dos negócios. Conheça os riscos e nossas soluções.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Riscos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-destructive/20">
              <h3 className="text-2xl font-semibold mb-6 text-red-400">
                Riscos aos seus dados
              </h3>
              <div className="space-y-4">
                {risks.map((risk, index) => (
                  <motion.div
                    key={risk.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 border border-destructive/10"
                  >
                    <div className={`${risk.color} p-2 rounded-lg bg-red-500/10`}>
                      <risk.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{risk.title}</h4>
                      <p className="text-sm text-muted-foreground">{risk.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Soluções */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20">
              <h3 className="text-2xl font-semibold mb-6 text-secondary">
                Nossas soluções
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 border border-emerald-500/10"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10">
                      <solution.icon className="w-5 h-5 text-icon" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{solution.title}</h4>
                      <p className="text-sm text-muted-foreground">{solution.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Button 
                className="w-full mt-6 bg-accent hover:bg-secondary text-accent-foreground font-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Proteja seus dados agora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}