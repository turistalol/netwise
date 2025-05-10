"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Database, Github, Gitlab, Box } from "lucide-react"

export function BackupIntegrations() {
  const integrations = [
    {
      name: "Database Backup",
      icon: Database,
      description: "Backup automatizado para todos os principais sistemas de banco de dados"
    },
    {
      name: "GitHub Integration",
      icon: Github,
      description: "Integração perfeita com repositórios GitHub"
    },
    {
      name: "GitLab Integration",
      icon: Gitlab,
      description: "Solução completa de backup para projetos GitLab"
    },
    {
      name: "Storage Solutions",
      icon: Box,
      description: "Compatível com os principais provedores de armazenamento em nuvem"
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções <span className="text-accent">integradas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conecte-se com suas ferramentas favoritas e mantenha tudo protegido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-glow bg-card border-border text-center h-full group hover:bg-card/80 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                    <integration.icon className="w-6 h-6 text-icon" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {integration.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}