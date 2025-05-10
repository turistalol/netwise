"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  name: string
  description: string
  price: string
  features: string[]
  missingFeatures?: string[]
  popular?: boolean
  buttonText?: string
  buttonAction?: () => void
  className?: string
  delay?: number
}

export function PricingCard({
  name,
  description,
  price,
  features,
  missingFeatures = [],
  popular = false,
  buttonText = "Solicitar proposta",
  buttonAction,
  className,
  delay = 0
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "rounded-2xl overflow-hidden flex flex-col h-full",
        popular ? "relative ring-2 ring-accent shadow-lg shadow-accent/20" : "border border-border",
        className
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
          Mais popular
        </div>
      )}
      
      <div className="p-6 md:p-8 bg-card">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        
        <div className="mt-4">
          <div className="text-2xl font-bold">{price === "Personalizado" ? "A consultar" : price}</div>
        </div>
        
        <Button
          className={cn(
            "mt-6 w-full",
            popular 
              ? "bg-accent hover:bg-accent/90 text-accent-foreground"
              : "bg-primary hover:bg-primary/90"
          )}
          onClick={buttonAction}
        >
          {buttonText}
        </Button>
      </div>
      
      <div className="p-6 md:p-8 bg-card border-t border-border flex-grow">
        <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-muted-foreground">
          O que está incluído
        </h4>
        
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="h-5 w-5 text-icon mr-3 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
          
          {missingFeatures.map((feature) => (
            <li key={feature} className="flex items-start text-muted-foreground">
              <X className="h-5 w-5 mr-3 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}