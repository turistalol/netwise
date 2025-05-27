"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CircleCheck, FileCheck, Lock, Server, ShieldCheck, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const securityFeatures = [
  { icon: <Lock className="w-6 h-6 text-icon" /> },
  { icon: <Shield className="w-6 h-6 text-icon" /> },
  { icon: <FileCheck className="w-6 h-6 text-icon" /> },
  { icon: <Server className="w-6 h-6 text-icon" /> },
  { icon: <ShieldCheck className="w-6 h-6 text-icon" /> },
];

const securityFeatureGroups = [
  {
    title: "Segurança de Dados",
    features: [
      "Criptografia AES-256 em trânsito e em repouso",
      "Autenticação para acesso",
      "Isolamento completo dos dados por cliente",
      "Chaves de criptografia gerenciadas",
      "Verificação de integridade automatizada",
      "Proteções integradas"
    ]
  },
  {
    title: "Infraestrutura Confiável",
    features: [
      "Data centers Tier III",
      "Redundância geográfica em múltiplas regiões",
      "Uptime garantido de 99.982%",
      "Monitoramento 24/7 por equipe especializada",
      "Testes de recuperação automáticos",
      "Backups imutáveis contra modificações"
    ]
  }
];

export function SecuritySection() {
  return (
    <section id="seguranca" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Segurança e <span className="text-accent">Confiabilidade</span> Inigualáveis
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A solução Netwise BaaS foi projetada desde o início com segurança como prioridade absoluta.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Security Shield Visual */}
          <motion.div 
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Central shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-[20px]"
                    animate={{ 
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                  <div className="relative w-40 h-40 md:w-48 md:h-48 p-8 bg-secondary/95 border border-border flex items-center justify-center rounded-full">
                    <Shield className="w-16 h-16 md:w-20 md:h-20 text-icon" />
                  </div>
                </div>
              </div>
              
              {/* Orbiting security features */}
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  style={{
                    left: `${50 + 40 * Math.cos(((2 * Math.PI) / securityFeatures.length) * index)}%`,
                    top: `${50 + 40 * Math.sin(((2 * Math.PI) / securityFeatures.length) * index)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <motion.div 
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 border border-border shadow-md"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Security Features List */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {securityFeatureGroups.map((group, groupIndex) => (
                <motion.div 
                  key={groupIndex}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px"}}
                  transition={{ duration: 0.4, delay: 0.1 * groupIndex }}
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className={cn(
                      "inline-flex items-center justify-center w-8 h-8 rounded-full mr-3",
                      "bg-icon"
                    )}>
                      {groupIndex === 0 ? <Lock className="w-4 h-4 text-primary" /> : <Server className="w-4 h-4 text-primary" />}
                    </span>
                    {group.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {group.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200"
                      >
                        <CircleCheck className="w-5 h-5 mt-0.5 text-icon flex-shrink-0" />
                        <div>
                          <p className="font-medium">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-background/50 border border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <ShieldCheck className="w-5 h-5 text-icon" />
                    <h4 className="font-bold">Certificações e Compliance</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['ISO 27001', 'LGPD', 'SOC 2', 'HIPAA'].map((cert, index) => (
                      <div key={index} className="px-3 py-2 bg-secondary/50 rounded text-center text-sm font-medium">
                        {cert}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-muted-foreground">
                    Ao contratar nossa infraestrutura, sua empresa passará a ter os certificados de segurança necessários para operar no mercado.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        
        {/* CTA */}
        <motion.div 
          className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Segurança Não é Opcional</h3>
          <p className="text-muted-foreground mb-8">
            Proteja seus dados empresariais com a solução de backup que milhares de empresas já confiam para manter seus negócios seguros.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-secondary text-accent-foreground font-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Fale com um Especialista em Segurança
          </Button>
        </motion.div>
      </div>
    </section>
  )
}