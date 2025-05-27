"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { PricingCard } from '@/components/ui/pricing-card'

const plans = [
  {
    name: 'Performance',
    id: 'performance',
    description: 'Solução robusta para aplicações críticas',
    price: "A consultar",
    features: [
      '16 vCPUs Intel Xeon',
      '64GB RAM DDR4',
      '1TB SSD NVMe',
      '10TB de Tráfego',
      'Backup Diário Automatizado',
      'Painel de Gestão Avançado',
      'Monitoramento 24/7',
      'IP Dedicado',
      'Firewall Corporativo',
      'Suporte por Email e Chat',
      'SLA 99.9% de Uptime',
    ],
    missingFeatures: [
      'Suporte Telefônico 24/7',
      'Compliance Especializado',
      'Disaster Recovery',
    ],
    buttonText: "Solicitar proposta"
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    description: 'Infraestrutura de alta disponibilidade para grandes empresas',
    price: "A consultar",
    popular: true,
    features: [
      '32 vCPUs Intel Xeon',
      '128GB RAM DDR4',
      '2TB SSD NVMe',
      '25TB de Tráfego',
      'Backup Contínuo com Versionamento',
      'Painel de Gestão Enterprise',
      'Monitoramento Proativo 24/7',
      'Multiple IPs Dedicados',
      'Firewall Avançado + WAF',
      'Suporte Prioritário 24/7',
      'Load Balancer Incluso',
      'SLA 99.95% de Uptime',
    ],
    missingFeatures: [
      'Arquiteto de Soluções Dedicado',
      'Compliance Certificado',
    ],
    buttonText: "Solicitar proposta"
  },
  {
    name: 'Mission Critical',
    id: 'mission-critical',
    description: 'Máxima performance e disponibilidade para operações críticas',
    price: "A consultar",
    features: [
      '64 vCPUs Intel Xeon',
      '256GB RAM DDR4',
      '4TB SSD NVMe',
      'Tráfego Ilimitado',
      'Backup Contínuo Multi-Regional',
      'Painel Corporativo Personalizado',
      'Monitoramento Dedicado 24/7',
      'Pool de IPs Dedicados',
      'Security Suite Completa',
      'Suporte Dedicado 24/7',
      'Load Balancer + Auto Scaling',
      'Disaster Recovery Automático',
      'Compliance LGPD/SOC2/ISO27001',
      'Arquiteto de Soluções Dedicado',
      'SLA 99.99% de Uptime',
    ],
    missingFeatures: [],
    buttonText: "Solicitar proposta"
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute left-0 top-1/3 w-full h-1/3 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Virtual Machines <span className="text-accent">Enterprise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Infraestrutura de alta performance desenvolvida para empresas que precisam de
            disponibilidade e continuidade em suas operações.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
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
            Cada infraestrutura é dimensionada para atender as necessidades específicas da sua operação. 
            Nossa equipe de especialistas desenvolve arquiteturas personalizadas com garantias de SLA 
            e suporte dedicado para sua empresa.
            <a href="#contact" className="text-secondary ml-1 hover:underline">
              Fale com nossos especialistas para uma consultoria técnica gratuita.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}