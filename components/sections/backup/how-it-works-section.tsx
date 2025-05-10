"use client"

import { motion } from 'framer-motion'
import { CircleCheck, ChevronRight, Download, RotateCw, Settings, Upload, Cloud, Laptop } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: <Settings />,
      title: "Configuração Simples",
      description: "Configure em minutos com nossa interface intuitiva. Selecione os dados a serem protegidos e defina a frequência de backup desejada."
    },
    {
      icon: <Upload />,
      title: "Backup Seguro",
      description: "Seus dados são criptografados localmente antes de serem transmitidos com segurança para nossos data centers através de conexão SSL/TLS."
    },
    {
      icon: <RotateCw />,
      title: "Monitoramento Contínuo",
      description: "Nossa plataforma monitora constantemente a integridade dos seus backups, alertando sobre qualquer anomalia ou problema potencial."
    },
    {
      icon: <Download />,
      title: "Restauração Confiável",
      description: "Quando necessário, restaure rapidamente arquivos específicos ou sistemas completos através da nossa interface ou ferramentas de recuperação."
    },
    {
      icon: <CircleCheck />,
      title: "Validação e Relatórios",
      description: "Receba relatórios detalhados sobre o status dos seus backups e validação automática para garantir que seus dados estão seguros e prontos para recuperação."
    }
  ];
  
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Dynamic background element */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] -z-10 transition-all duration-700 ease-in-out"
        style={{
          background: `radial-gradient(circle, hsla(var(--primary)/0.1) 0%, hsla(var(--secondary)/0.05) 70%, transparent 100%)`,
          left: `${15 + (activeStep * 10)}%`,
          top: `${50 + (activeStep % 2 === 0 ? -10 : 10)}%`
        }}
      />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Como <span className="text-accent">Funciona</span> o Backup em Nuvem
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Um processo simples e eficiente para proteger os dados da sua empresa em apenas cinco etapas.
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
                      ? "bg-card border border-primary/20" 
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
                        ? "bg-icon text-primary"
                        : "bg-muted/50 text-muted-foreground"
                    )}>
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                    <ChevronRight className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      activeStep === index ? "text-icon" : "text-muted-foreground",
                      activeStep === index ? "translate-x-0" : "translate-x-0 group-hover:translate-x-1"
                    )} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Step detail view */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <motion.div 
              className="bg-card border border-border rounded-xl overflow-hidden h-full"
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
                      "w-14 h-14 rounded-full flex items-center justify-center mr-4",
                      "bg-icon"
                    )}>
                      {steps[activeStep].icon}
                    </div>
                    <h3 className="text-2xl font-bold">{steps[activeStep].title}</h3>
                  </div>
                  
                  <p className="text-lg mb-8">{steps[activeStep].description}</p>
                  
                  <div className="flex-grow relative">
                    <StepVisualization stepIndex={activeStep} />
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

// Custom visualization for each step
const StepVisualization = ({ stepIndex }: { stepIndex: number }) => {
  // Different visualizations based on step
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
      <div className="relative w-full max-w-sm aspect-video bg-background/80 rounded-lg border border-border p-4 shadow-lg">
        <div className="mb-3 flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-secondary"></div>
          <div className="w-3 h-3 rounded-full bg-muted"></div>
        </div>
        
        <div className="space-y-3">
          <div className="h-4 w-3/4 bg-muted rounded"></div>
          
          <div className="flex space-x-2">
            <div className="w-5 h-5 bg-primary/30 rounded flex-shrink-0"></div>
            <div className="h-5 w-1/2 bg-muted/50 rounded"></div>
          </div>
          
          <div className="flex space-x-2">
            <div className="w-5 h-5 bg-primary/30 rounded flex-shrink-0"></div>
            <div className="h-5 w-2/3 bg-muted/50 rounded"></div>
          </div>
          
          <div className="flex space-x-2">
            <div className="w-5 h-5 bg-primary/30 rounded flex-shrink-0"></div>
            <div className="h-5 w-3/5 bg-muted/50 rounded"></div>
          </div>
          
          <div className="flex justify-end mt-6">
            <div className="h-8 w-28 bg-accent rounded"></div>
          </div>
        </div>
        
        <motion.div 
          className="absolute right-4 bottom-4 w-8 h-8 rounded-full bg-icon flex items-center justify-center text-primary"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Settings className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.div>,
    
    // Step 2: Backup
    <motion.div 
      key="backup" 
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative max-w-lg w-full">
        <div className="flex items-center justify-between">
          <motion.div 
            className="w-32 h-24 bg-background/80 rounded-lg border border-border flex items-center justify-center"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Laptop className="w-16 h-16 text-primary" />
          </motion.div>
          
          <div className="flex-1 mx-6 h-1 bg-gradient-to-r from-primary to-secondary relative">
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2"
              animate={{ x: [0, 200, 200, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div 
                className="w-3 h-3 bg-secondary rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="w-32 h-24 bg-card rounded-lg border border-border flex flex-col items-center justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Cloud className="w-10 h-10 text-icon mb-2" />
            <div className="text-xs font-medium">Data Center</div>
          </motion.div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2 bg-background/50 px-4 py-2 rounded-full border border-border/50">
            <motion.div 
              className="w-2 h-2 rounded-full bg-secondary"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            />
            <span className="text-sm">Backup em andamento: 65%</span>
          </div>
        </div>
      </div>
    </motion.div>,
    
    // Step 3: Monitoring
    <motion.div 
      key="monitoring" 
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative max-w-md w-full bg-background/80 rounded-lg border border-border p-6">
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-bold">Status do Backup</h4>
          <div className="flex items-center space-x-2">
            <motion.div 
              className="w-2 h-2 rounded-full bg-secondary"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-muted-foreground">Atualizado há 3 min</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
              <span className="text-sm">Servidor Principal</span>
            </div>
            <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">Completo</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-secondary mr-2"></div>
              <span className="text-sm">Banco de Dados</span>
            </div>
            <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">Completo</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <motion.div 
                className="w-2 h-2 rounded-full bg-primary mr-2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-sm">Arquivos de Usuário</span>
            </div>
            <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Em andamento</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-muted mr-2"></div>
              <span className="text-sm">Servidor de Email</span>
            </div>
            <span className="text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded-full">Agendado</span>
          </div>
        </div>
        
        <motion.div 
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <RotateCw className="w-4 h-4 text-background" />
        </motion.div>
      </div>
    </motion.div>,
    
    // Step 4: Restoration
    <motion.div 
      key="restoration" 
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative max-w-lg w-full">
        <div className="flex items-center justify-between">
          <motion.div 
            className="w-32 h-24 bg-card rounded-lg border border-border flex flex-col items-center justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Cloud className="w-10 h-10 text-icon mb-2" />
            <div className="text-xs font-medium">Data Center</div>
          </motion.div>
          
          <div className="flex-1 mx-6 h-1 bg-gradient-to-r from-secondary to-primary relative">
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2"
              animate={{ x: [200, 0, 0, 200] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div 
                className="w-3 h-3 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="w-32 h-24 bg-background/80 rounded-lg border border-border flex items-center justify-center"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Laptop className="w-16 h-16 text-primary" />
          </motion.div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="flex items-center space-x-2 bg-background/50 px-4 py-2 rounded-full border border-border/50">
            <motion.div 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            />
            <span className="text-sm">Restauração em andamento: 42%</span>
          </div>
        </div>
      </div>
    </motion.div>,
    
    // Step 5: Validation
    <motion.div 
      key="validation" 
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative max-w-md w-full bg-background/80 rounded-lg border border-border p-6">
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-bold">Relatório de Backup</h4>
          <span className="text-xs text-muted-foreground">20/06/2025</span>
        </div>
        
        <div className="space-y-5">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Arquivos Protegidos</span>
              <span className="text-sm font-bold">168,524</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-secondary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Espaço Utilizado</span>
              <span className="text-sm font-bold">425.8 GB</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "65%" }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
            </div>
          </div>
          
          <div className="flex space-x-3 items-center mt-6">
            <div className="flex-shrink-0 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
              <CircleCheck className="w-5 h-5 text-secondary" />
            </div>
            
            <div>
              <h5 className="font-bold text-sm">Verificação de Integridade</h5>
              <p className="text-xs text-muted-foreground">Todos os arquivos foram verificados e estão íntegros</p>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="absolute top-6 right-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center">
            <CircleCheck className="w-6 h-6 text-secondary" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  ];
  
  return visualizations[stepIndex];
};