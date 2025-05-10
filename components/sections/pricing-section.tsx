"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from '@/lib/utils'
import { PricingCard } from '@/components/ui/pricing-card'

type PricingPeriod = 'monthly' | 'yearly';
type PricingCategory = 'vps' | 'vpn';

const plans = {
  vps: [
    {
      name: 'Startup',
      id: 'startup',
      description: 'Ideal para pequenas empresas em crescimento',
      price: "A consultar",
      features: [
        '2 vCPUs',
        '4GB RAM',
        '80GB SSD NVMe',
        '1TB de Tráfego',
        'Backup Semanal',
        'Painel de Controle',
        'Suporte por Email',
        'Uptime de 99.9%',
      ],
      missingFeatures: [
        'Escalonamento Automático',
        'IP Dedicado',
        'Suporte 24/7',
      ],
      buttonText: "Solicitar proposta"
    },
    {
      name: 'Business',
      id: 'business',
      description: 'Perfeito para empresas de médio porte',
      price: "A consultar",
      popular: true,
      features: [
        '4 vCPUs',
        '8GB RAM',
        '160GB SSD NVMe',
        '3TB de Tráfego',
        'Backup Diário',
        'Painel de Controle',
        'IP Dedicado',
        'Suporte por Email e Chat',
        'Uptime de 99.95%',
      ],
      missingFeatures: [
        'Escalonamento Automático',
        'Suporte 24/7',
      ],
      buttonText: "Solicitar proposta"
    },
    {
      name: 'Enterprise',
      id: 'enterprise',
      description: 'Solução robusta para grandes corporações',
      price: "A consultar",
      features: [
        '8 vCPUs',
        '16GB RAM',
        '320GB SSD NVMe',
        '5TB de Tráfego',
        'Backup Diário',
        'Painel de Controle',
        'IP Dedicado',
        'Suporte por Email e Chat',
        'Escalonamento Automático',
        'Suporte 24/7 Prioritário',
        'Uptime de 99.99%',
      ],
      missingFeatures: [],
      buttonText: "Solicitar proposta"
    },
  ],
  vpn: [
    {
      name: 'Básico',
      id: 'basic',
      description: 'Conexão VPN segura para pequenas equipes',
      price: "A consultar",
      features: [
        '5 Usuários Simultâneos',
        '3 Localizações',
        'Largura de Banda Ilimitada',
        'Criptografia AES-256',
        'Suporte para OpenVPN',
        'Painel Administrativo',
        'Suporte por Email',
      ],
      missingFeatures: [
        'Suporte para IP Dedicado',
        'Acesso a Todas Localizações',
        'Suporte 24/7',
      ],
      buttonText: "Solicitar proposta"
    },
    {
      name: 'Profissional',
      id: 'professional',
      description: 'VPN corporativa com recursos avançados',
      price: "A consultar",
      popular: true,
      features: [
        '25 Usuários Simultâneos',
        '10 Localizações',
        'Largura de Banda Ilimitada',
        'Criptografia AES-256',
        'Suporte para OpenVPN e WireGuard',
        'IP Dedicado',
        'Painel Administrativo',
        'Suporte por Email e Chat',
      ],
      missingFeatures: [
        'Acesso a Todas Localizações',
        'Suporte 24/7',
      ],
      buttonText: "Solicitar proposta"
    },
    {
      name: 'Corporativo',
      id: 'corporate',
      description: 'VPN empresarial completa para máxima segurança',
      price: "A consultar",
      features: [
        'Usuários Ilimitados',
        'Todas as Localizações',
        'Largura de Banda Ilimitada',
        'Criptografia AES-256',
        'Todos os Protocolos Suportados',
        'IPs Dedicados',
        'Suporte por Email e Chat',
        'Painel Administrativo Avançado',
        'Suporte 24/7 Prioritário',
      ],
      missingFeatures: [],
      buttonText: "Solicitar proposta"
    },
  ],
}

export function PricingSection() {
  const [category, setCategory] = useState<PricingCategory>('vps')
  
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute left-0 top-1/3 w-full h-1/3 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Soluções <span className="text-accent">personalizadas</span> para seu negócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos planos customizados que se adaptam perfeitamente às necessidades 
            específicas da sua empresa.
          </p>
          
          <div className="mt-10 flex flex-col items-center">
            <Tabs
              defaultValue="vps"
              className="w-full max-w-md"
              onValueChange={(value) => setCategory(value as PricingCategory)}
            >
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-card">
                <TabsTrigger 
                  value="vps"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Servidores VPS
                </TabsTrigger>
                <TabsTrigger 
                  value="vpn"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Redes VPN
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans[category].map((plan, index) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              missingFeatures={plan.missingFeatures}
              popular={plan.popular}
              buttonText={plan.buttonText}
              buttonAction={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Cada empresa tem necessidades únicas. Nossa equipe está pronta para desenvolver 
            uma solução personalizada que atenda perfeitamente aos seus requisitos.
            <a href="#contact" className="text-secondary ml-1 hover:underline">
              Entre em contato para uma consultoria gratuita.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}