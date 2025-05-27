"use client"

import { motion } from 'framer-motion'
import { CircleCheck, ChevronRight, Settings, Cpu, Network, Zap, Shield, Server, Monitor, Play, CheckCircle, Activity } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function VmHowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: <Settings />,
      title: "Configuração Personalizada",
      description: "Defina especificações precisas: CPU Intel Xeon, memória RAM, armazenamento SSD NVMe e configurações de rede para sua infraestrutura crítica."
    },
    {
      icon: <Cpu />,
      title: "Provisionamento Inteligente",
      description: "Nossa plataforma aloca automaticamente recursos físicos otimizados, configurando hipervisores de última geração com isolamento completo."
    },
    {
      icon: <Network />,
      title: "Configuração de Rede",
      description: "Implementação de redes virtuais seguras, firewalls dedicados, balanceamento de carga e conectividade redundante para máxima disponibilidade."
    },
    {
      icon: <Zap />,
      title: "Deployment Acelerado",
      description: "Ativação automática da VM com SO pré-configurado, patches de segurança atualizados e ferramentas de monitoramento já instaladas."
    },
    {
      icon: <Shield />,
      title: "Monitoramento Enterprise",
      description: "Supervisão 24/7 com alertas proativos, métricas de performance em tempo real e SLA garantido para operações mission-critical."
    }
  ];
  
  return (
    <section id="como-funciona-vm" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Dynamic background element */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] -z-10 transition-all duration-700 ease-in-out"
        style={{
          background: `radial-gradient(circle, hsla(var(--primary)/0.12) 0%, hsla(var(--secondary)/0.06) 70%, transparent 100%)`,
          left: `${10 + (activeStep * 12)}%`,
          top: `${45 + (activeStep % 2 === 0 ? -15 : 15)}%`
        }}
      />
      
      {/* Additional floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-secondary/40 to-accent/40 rounded-full"
            style={{
              left: `${25 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Como Funciona o <span className="text-accent">Deployment</span> de VMs
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Processo enterprise automatizado para provisionamento de infraestrutura virtual de alto desempenho em minutos.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          {/* Step indicators */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="space-y-1">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className={cn(
                    "p-4 rounded-lg cursor-pointer transition-all duration-300 relative group",
                    activeStep === index 
                      ? "bg-card border border-primary/20 shadow-lg" 
                      : "hover:bg-card/80"
                  )}
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="flex items-center">
                    <div className={cn(
                      "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300",
                      activeStep === index 
                        ? "bg-primary text-primary-foreground shadow-lg" 
                        : "bg-muted/50 text-muted-foreground"
                    )}>
                      <span className="font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-base">{step.title}</h3>
                    </div>
                    <ChevronRight className={cn(
                      "w-5 h-5 transition-all duration-300",
                      activeStep === index ? "text-primary translate-x-1" : "text-muted-foreground",
                      "group-hover:translate-x-1"
                    )} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Step detail view */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <motion.div 
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden h-full shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full relative">
                {/* Step visualization area */}
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <div className="mb-6 flex items-center">
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center mr-4 shadow-lg bg-gradient-to-br from-primary to-secondary"
                    )}>
                      <div className="text-white">
                        {steps[activeStep].icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">{steps[activeStep].title}</h3>
                  </div>
                  
                  <p className="text-lg mb-8 text-muted-foreground leading-relaxed">{steps[activeStep].description}</p>
                  
                  <div className="flex-grow relative">
                    <VmStepVisualization stepIndex={activeStep} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Custom visualization for each VM step
const VmStepVisualization = ({ stepIndex }: { stepIndex: number }) => {
  const visualizations = [
    // Step 1: Configuration
    <motion.div 
      key="config" 
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full max-w-lg bg-background/90 rounded-xl border border-border p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="font-bold text-lg">Configuração de VM</h4>
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">CPU (vCPUs)</label>
              <div className="h-10 bg-muted rounded-lg flex items-center px-3">
                <motion.span 
                  className="font-mono text-primary"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  32 cores
                </motion.span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">RAM</label>
              <div className="h-10 bg-muted rounded-lg flex items-center px-3">
                <motion.span 
                  className="font-mono text-secondary"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  128 GB
                </motion.span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Armazenamento</label>
            <div className="h-10 bg-muted rounded-lg flex items-center px-3">
              <motion.span 
                className="font-mono text-accent"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                2TB SSD NVMe
              </motion.span>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <motion.div 
              className="h-10 w-32 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Provisionar
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </motion.div>,
    
    // Step 2: Provisioning
    <motion.div 
      key="provisioning" 
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative max-w-lg w-full">
        <div className="flex flex-col items-center space-y-8">
          {/* Physical Server Representation */}
          <motion.div 
            className="w-64 h-32 bg-card rounded-lg border border-border p-4 relative"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Servidor Físico</span>
              <Activity className="w-4 h-4 text-secondary" />
            </div>
            
            <div className="grid grid-cols-4 gap-2 mb-3">
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="h-3 bg-muted rounded"
                  animate={{ 
                    backgroundColor: i < 3 ? 'hsl(var(--primary))' : 'hsl(var(--muted))'
                  }}
                  transition={{ delay: i * 0.2 }}
                />
              ))}
            </div>
            
            <div className="text-xs text-muted-foreground">
              Intel Xeon E5-2699 v4
            </div>
          </motion.div>
          
          {/* Arrow */}
          <motion.div 
            className="flex flex-col items-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary"></div>
            <div className="w-3 h-3 bg-secondary rotate-45 -mt-1"></div>
          </motion.div>
          
          {/* Virtual Machine */}
          <motion.div 
            className="w-48 h-24 bg-background/90 rounded-lg border-2 border-primary/50 p-3 relative"
            animate={{ 
              scale: [0.9, 1, 0.9],
              borderColor: ['hsl(var(--primary)/0.3)', 'hsl(var(--primary))', 'hsl(var(--primary)/0.3)']
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">VM Enterprise</span>
              <motion.div 
                className="w-2 h-2 rounded-full bg-secondary"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
            <div className="text-xs space-y-1">
              <div>32 vCPUs • 128GB RAM</div>
              <div className="text-muted-foreground">Provisionando...</div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2 bg-background/80 px-4 py-2 rounded-full border border-border/50">
            <motion.div 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-sm">Alocando recursos: 78%</span>
          </div>
        </div>
      </div>
    </motion.div>,
    
    // Step 3: Network Configuration
    <motion.div 
      key="network" 
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative max-w-lg w-full">
        <div className="grid grid-cols-3 gap-6 items-center">
          {/* VM */}
          <motion.div 
            className="bg-card rounded-lg border border-border p-4 text-center"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Server className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-sm font-medium">VM</div>
          </motion.div>
          
          {/* Network Hub */}
          <div className="relative">
            <motion.div 
              className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Network className="w-8 h-8 text-white" />
            </motion.div>
            
            {/* Connection lines */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent -z-10"></div>
            <div className="absolute top-1/2 left-1/2 w-0.5 h-20 bg-gradient-to-b from-transparent via-secondary to-transparent -z-10 transform -translate-x-1/2 -translate-y-10"></div>
          </div>
          
          {/* Internet */}
          <motion.div 
            className="bg-card rounded-lg border border-border p-4 text-center"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <Network className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-sm font-medium">Internet</div>
          </motion.div>
          
          {/* Firewall */}
          <div></div>
          <motion.div 
            className="bg-card rounded-lg border border-border p-3 text-center"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <Shield className="w-6 h-6 text-secondary mx-auto mb-1" />
            <div className="text-xs font-medium">Firewall</div>
          </motion.div>
          <div></div>
        </div>
        
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-background/80 px-4 py-2 rounded-full border border-border/50">
            <motion.div 
              className="w-2 h-2 rounded-full bg-secondary"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-sm">Configurando rede segura</span>
          </div>
        </div>
      </div>
    </motion.div>,
    
    // Step 4: Deployment
    <motion.div 
      key="deployment" 
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative max-w-md w-full">
        <motion.div 
          className="bg-background/90 rounded-xl border border-border p-6 shadow-lg"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold">Deployment Progress</h4>
            <motion.div 
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Play className="w-4 h-4 text-white" />
            </motion.div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Sistema Operacional</span>
                <span className="text-secondary">✓ Instalado</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full">
                <motion.div 
                  className="h-full bg-secondary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Patches de Segurança</span>
                <span className="text-secondary">✓ Aplicados</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full">
                <motion.div 
                  className="h-full bg-secondary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Ferramentas de Monitoramento</span>
                <motion.span 
                  className="text-primary"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Configurando...
                </motion.span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full">
                <motion.div 
                  className="h-full bg-primary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="text-2xl font-bold text-primary">92%</div>
            <div className="text-sm text-muted-foreground">Deployment quase concluído</div>
          </div>
        </motion.div>
      </div>
    </motion.div>,
    
    // Step 5: Monitoring
    <motion.div 
      key="monitoring" 
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative max-w-lg w-full">
        <motion.div 
          className="bg-background/90 rounded-xl border border-border p-6 shadow-lg"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold">VM Dashboard</h4>
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs text-muted-foreground">Online - SLA 99.95%</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-card/50 rounded-lg p-3">
              <div className="text-sm text-muted-foreground">CPU Usage</div>
              <div className="text-lg font-bold text-primary">23%</div>
              <motion.div 
                className="w-full h-1 bg-muted rounded-full mt-2"
                initial={{ opacity: 0.6 }}
              >
                <motion.div 
                  className="h-full bg-primary rounded-full"
                  animate={{ width: ['0%', '23%'] }}
                  transition={{ duration: 1.5 }}
                />
              </motion.div>
            </div>
            
            <div className="bg-card/50 rounded-lg p-3">
              <div className="text-sm text-muted-foreground">Memory</div>
              <div className="text-lg font-bold text-secondary">67%</div>
              <motion.div 
                className="w-full h-1 bg-muted rounded-full mt-2"
                initial={{ opacity: 0.6 }}
              >
                <motion.div 
                  className="h-full bg-secondary rounded-full"
                  animate={{ width: ['0%', '67%'] }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />
              </motion.div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Sistema Operacional</span>
              </div>
              <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">Saudável</span>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Conectividade de Rede</span>
              </div>
              <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">Ótima</span>
            </div>
            
            <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Armazenamento</span>
              </div>
              <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">Normal</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            scale: { duration: 2, repeat: Infinity },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" }
          }}
        >
          <Monitor className="w-5 h-5 text-white" />
        </motion.div>
      </div>
    </motion.div>
  ];
  
  return visualizations[stepIndex];
}; 