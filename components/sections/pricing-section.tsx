"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { PricingCard } from '@/components/ui/pricing-card'

const plans = [
  {
    name: 'Starter',
    id: 'small',
    description: 'Plano ideal para começar',
    price: "A consultar",
    features: [
      '1 vCPU',
      '1GB RAM',
      '40GB SSD',
      '1TB de Tráfego',
      'Painel de Controle',
      'Backup Semanal',
      'Suporte por Email',
      'SLA 99.5% de Uptime',
    ],
    missingFeatures: [
      'IP Dedicado',
      'Suporte 24/7',
      'Backup Diário',
    ],
    buttonText: "Contratar agora"
  },
  {
    name: 'Growth',
    id: 'medium',
    description: 'Plano ideal para crescer',
    price: "A consultar",
    popular: true,
    features: [
      '2 vCPUs',
      '8GB RAM',
      '80GB SSD',
      '3TB de Tráfego',
      'Painel de Controle Avançado',
      'Backup Diário',
      'Suporte por Email e Chat',
      'SLA 99.7% de Uptime',
    ],
    missingFeatures: [
      'IP Dedicado',
      'Suporte Telefônico',
      'Firewall Avançado',
    ],
    buttonText: "Contratar agora"
  },
  {
    name: 'Enterprise',
    id: 'large',
    description: 'Plano ideal de alta performance',
    price: "A consultar",
    features: [
      '4 vCPUs',
      '16GB RAM',
      '160GB SSD',
      '5TB de Tráfego',
      'Painel de Gestão Completo',
      'Backup Diário Automatizado',
      'IP Dedicado',
      'Suporte 24/7',
      'Firewall Básico',
      'SLA 99.8% de Uptime',
    ],
    missingFeatures: [
      'Load Balancer',
      'Firewall Avançado',
      'Compliance',
    ],
    buttonText: "Contratar agora"
  },
  {
    name: 'Enterprise Plus',
    id: 'xlarge',
    description: 'Plano ideal para empresas que precisam de disponibilidade e continuidade',
    price: "A consultar",
    features: [
      '8 vCPUs',
      '32GB RAM',
      '320GB SSD',
      '10TB de Tráfego',
      'Painel Enterprise',
      'Backup Contínuo',
      'IP Dedicado',
      'Suporte Prioritário 24/7',
      'Firewall Avançado',
      'Monitoramento 24/7',
      'SLA 99.9% de Uptime',
    ],
    missingFeatures: [
      'Disaster Recovery',
      'Compliance Certificado',
    ],
    buttonText: "Contratar agora"
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
        
        <div className="grid md:grid-cols-4 gap-4">
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