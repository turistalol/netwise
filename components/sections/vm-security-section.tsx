"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CircleCheck, Shield, Lock, Monitor, Network, Cpu, Server, Activity, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

const vmSecurityFeatures = [
  { icon: <Shield className="w-6 h-6 text-icon" /> },   // Firewall
  { icon: <Lock className="w-6 h-6 text-icon" /> },     // Encryption
  { icon: <Monitor className="w-6 h-6 text-icon" /> },  // Monitoring
  { icon: <Network className="w-6 h-6 text-icon" /> },  // Network Security
  { icon: <Cpu className="w-6 h-6 text-icon" /> },      // Hardware Security
];

const vmSecurityFeatureGroups = [
  {
    title: "Segurança de Infraestrutura",
    features: [
      "Isolamento de hipervisor de nível enterprise",
      "Firewalls dedicados por VM com regras customizáveis",
      "Criptografia de disco em nível de hardware",
      "Acesso via chaves SSH e MFA obrigatório",
      "Patches de segurança automáticos sem downtime",
      "Auditoria completa de acesso e modificações"
    ]
  },
  {
    title: "Disponibilidade e Performance",
    features: [
      "SLA de 99.95% com garantia de uptime",
      "Redundância ativa em múltiplos data centers",
      "Balanceamento de carga automático",
      "Backup contínuo com restore point-in-time",
      "Monitoramento proativo 24/7/365",
      "Disaster recovery com RTO < 15 minutos"
    ]
  }
];

const liveMetrics = [
  { label: "Uptime Atual", value: "99.97%", trend: "up" },
  { label: "VMs Protegidas", value: "1,247", trend: "up" },
  { label: "Incidents (30d)", value: "0", trend: "neutral" },
  { label: "Avg Response", value: "< 2min", trend: "up" }
];

export function VmSecuritySection() {
  return (
    <section id="seguranca-vm" className="py-24 md:py-32 relative overflow-hidden">
      {/* Enhanced background for infrastructure feel */}
      <div className="absolute inset-0 z-0">
        {/* Dense grid pattern simulating data center */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        {/* Metallic gradients */}
        <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/15 to-transparent rounded-full blur-3xl opacity-40" />
        
        {/* Data streams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 12}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            />
          ))}
        </div>
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
            Infraestrutura <span className="text-accent">Enterprise</span> Blindada
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Suas Virtual Machines executam em ambiente de segurança militar com isolamento completo, 
            monitoramento 24/7 e compliance enterprise.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Enhanced Security Server Visual */}
          <motion.div 
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Central server with security layers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Security field animation */}
                  <motion.div 
                    className="absolute -inset-6 border-2 border-primary/30 rounded-full"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Inner security glow */}
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-[20px]"
                    animate={{ 
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                  
                  {/* Central server */}
                  <div className="relative w-40 h-40 md:w-48 md:h-48 p-8 bg-card/90 backdrop-blur-sm border border-primary/30 flex items-center justify-center rounded-2xl shadow-2xl">
                    <div className="relative">
                      <Server className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                      {/* Security shield overlay */}
                      <motion.div 
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          scale: { duration: 2, repeat: Infinity },
                          rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                        }}
                      >
                        <Shield className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Scan lines effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-1 rounded-full"
                    animate={{ y: [-80, 80] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </div>
              
              {/* Orbiting security features with data streams */}
              {vmSecurityFeatures.map((feature, index) => {
                const angle = ((2 * Math.PI) / vmSecurityFeatures.length) * index;
                const radius = 42;
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    style={{
                      left: `${50 + radius * Math.cos(angle)}%`,
                      top: `${50 + radius * Math.sin(angle)}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Data stream to center */}
                    <motion.div 
                      className="absolute w-0.5 bg-gradient-to-r from-primary/40 to-transparent"
                      style={{
                        height: `${radius * 0.8}px`,
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'top',
                        transform: `translate(-50%, -50%) rotate(${angle + Math.PI}rad)`
                      }}
                      animate={{ opacity: [0.2, 0.8, 0.2] }}
                      transition={{ 
                        duration: 2 + index * 0.3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <motion.div 
                      className="relative flex items-center justify-center w-16 h-16 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/20 shadow-lg"
                      whileHover={{ 
                        scale: 1.15,
                        borderColor: 'hsl(var(--primary))',
                        boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {feature.icon}
                      
                      {/* Activity indicator */}
                      <motion.div 
                        className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
          {/* Security Features List */}
          <div className="lg:col-span-7">
            {/* Live Metrics Bar */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                <div className="flex items-center mb-3">
                  <Activity className="w-4 h-4 text-secondary mr-2" />
                  <span className="text-sm font-medium text-muted-foreground">Métricas em Tempo Real</span>
                  <motion.div 
                    className="w-2 h-2 bg-secondary rounded-full ml-2"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {liveMetrics.map((metric, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <div className="text-lg font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-8">
              {vmSecurityFeatureGroups.map((group, groupIndex) => (
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
                      "bg-primary/10 border border-primary/20"
                    )}>
                      {groupIndex === 0 ? 
                        <Lock className="w-4 h-4 text-primary" /> : 
                        <Monitor className="w-4 h-4 text-primary" />
                      }
                    </span>
                    {group.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {group.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-card/50 transition-colors duration-200 group"
                        whileHover={{ x: 2 }}
                      >
                        <CircleCheck className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0 group-hover:text-primary transition-colors" />
                        <div>
                          <p className="font-medium group-hover:text-primary transition-colors">{feature}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced Compliance Card */}
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-card/30 backdrop-blur-sm border border-border/50 overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Animated border */}
                  <motion.div 
                    className="absolute inset-0 border border-primary/20 rounded-lg"
                    animate={{ 
                      borderColor: ['hsl(var(--primary) / 0.2)', 'hsl(var(--primary) / 0.4)', 'hsl(var(--primary) / 0.2)']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <ShieldCheck className="w-5 h-5 text-secondary" />
                    <h4 className="font-bold">Certificações e Compliance Enterprise</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {['ISO 27001', 'LGPD', 'SOC 2', 'PCI DSS'].map((cert, index) => (
                      <motion.div 
                        key={index} 
                        className="px-3 py-2 bg-primary/10 border border-primary/20 rounded-lg text-center text-sm font-medium hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {cert}
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Nossa infraestrutura de VMs é auditada por entidades independentes e atende aos mais rigorosos 
                    padrões de segurança para operações mission-critical e dados sensíveis.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced CTA */}
        <motion.div 
          className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Infraestrutura Crítica Exige Segurança <span className="text-accent">Inigualável</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Suas operações mission-critical merecem a proteção enterprise que apenas a Netwise oferece. 
            Isolamento completo, monitoramento 24/7 e SLA garantido.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Fale com um Arquiteto de Infraestrutura
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 font-medium px-8"
              onClick={() => document.getElementById('como-funciona-vm')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Como Funciona
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 