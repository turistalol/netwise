"use client"

import { PricingCard } from '@/components/ui/pricing-card'

const plans = [
  {
    name: 'Startup',
    description: 'Perfeito para uso pessoal',
    price: 'A consultar',
    features: [
      '100GB de Armazenamento',
      'Backups Diários',
      'Histórico de 30 dias',
      'Painel de Controle',
      'Suporte por Email',
    ],
    missingFeatures: [
      'Backup em Tempo Real',
      'Suporte 24/7',
      'Integrações Avançadas'
    ],
    buttonText: 'Solicitar proposta'
  },
  {
    name: 'Business',
    description: 'Ideal para pequenas empresas',
    price: 'A consultar',
    features: [
      '1TB de Armazenamento',
      'Backups a cada hora',
      'Histórico de 90 dias',
      'Painel de Controle Avançado',
      'Suporte Prioritário',
      'Integrações Básicas'
    ],
    missingFeatures: [
      'Backup em Tempo Real',
      'Suporte 24/7'
    ],
    buttonText: 'Solicitar proposta',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'Para grandes organizações',
    price: 'Personalizado',
    features: [
      'Armazenamento Ilimitado',
      'Backup em Tempo Real',
      'Histórico Ilimitado',
      'Painel Personalizado',
      'Suporte 24/7',
      'Integrações Avançadas',
      'API Dedicada'
    ],
    buttonText: 'Solicitar proposta'
  }
]

export function BackupPricing() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos <span className="text-accent">transparentes</span> e flexíveis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Escolha o plano ideal para as necessidades de backup da sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              {...plan}
              delay={index * 0.1}
              buttonAction={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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