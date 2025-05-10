"use client"

import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const vpsSpecs = [
  {
    category: "Processamento",
    specs: [
      { name: "CPU", value: "Intel Xeon / AMD EPYC (última geração)" },
      { name: "vCPUs", value: "Até 32 cores dedicados" },
      { name: "Arquitetura", value: "64-bit compatível com todas aplicações modernas" },
    ]
  },
  {
    category: "Memória",
    specs: [
      { name: "RAM", value: "Até 128GB DDR4 ECC" },
      { name: "Swap", value: "Configurável conforme necessidade" },
      { name: "Cache", value: "Aceleração com NVMe para máximo desempenho" },
    ]
  },
  {
    category: "Armazenamento",
    specs: [
      { name: "Tipo", value: "SSD NVMe Enterprise" },
      { name: "Capacidade", value: "Até 4TB por servidor" },
      { name: "IOPS", value: "Até 120.000 IOPS para operações aleatórias" },
      { name: "Redundância", value: "RAID configurável para alta disponibilidade" },
    ]
  },
  {
    category: "Rede",
    specs: [
      { name: "Uplink", value: "10 Gbps dedicados com redundância" },
      { name: "Tráfego", value: "Ilimitado em planos premium (sujeito a fair use)" },
      { name: "Anti-DDoS", value: "Proteção sempre ativa contra ataques" },
      { name: "IPs", value: "IPv4 dedicados e suporte completo para IPv6" },
    ]
  },
]

const vpnSpecs = [
  {
    category: "Protocolos",
    specs: [
      { name: "Suportados", value: "OpenVPN, WireGuard, IPSec/IKEv2, SSTP" },
      { name: "Criptografia", value: "AES-256, ChaCha20, 4096-bit RSA" },
      { name: "Handshake", value: "TLS 1.3 com Perfect Forward Secrecy" },
    ]
  },
  {
    category: "Rede",
    specs: [
      { name: "Backbone", value: "Rede privada multi-gigabit entre data centers" },
      { name: "Tráfego", value: "Ilimitado sem throttling" },
      { name: "Latência", value: "Otimizada através de roteamento inteligente" },
      { name: "Multi-hop", value: "Conexões encadeadas para maior segurança" },
    ]
  },
  {
    category: "Segurança",
    specs: [
      { name: "Kill Switch", value: "Proteção contra desconexões inesperadas" },
      { name: "Split Tunneling", value: "Direcionamento seletivo de tráfego" },
      { name: "MFA", value: "Autenticação de múltiplos fatores" },
      { name: "Auditoria", value: "Logs detalhados com controle de privacidade" },
    ]
  },
  {
    category: "Compatibilidade",
    specs: [
      { name: "Plataformas", value: "Windows, macOS, Linux, iOS, Android" },
      { name: "Roteadores", value: "DD-WRT, Tomato, pfSense, OPNsense" },
      { name: "Enterprise", value: "Integração com AD, RADIUS e LDAP" },
      { name: "Dispositivos", value: "Sem limite de dispositivos por usuário" },
    ]
  },
]

export function SpecsSection() {
  return (
    <section id="specs" className="py-24 relative overflow-hidden bg-card">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Especificações <span className="text-accent">técnicas</span> detalhadas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça os detalhes técnicos por trás de nossas soluções de alta performance.
          </p>
        </div>
        
        <Tabs defaultValue="vps" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-background">
              <TabsTrigger 
                value="vps" 
                className="text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Servidores VPS
              </TabsTrigger>
              <TabsTrigger 
                value="vpn" 
                className="text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Redes VPN
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="vps" className="mt-0">
            <SpecsGrid specs={vpsSpecs} />
          </TabsContent>
          
          <TabsContent value="vpn" className="mt-0">
            <SpecsGrid specs={vpnSpecs} />
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Nossas soluções são personalizáveis para atender necessidades específicas.
            <a href="#contact" className="ml-1 text-secondary inline-flex items-center hover:underline">
              Consulte nossos especialistas
              <ChevronRight className="h-4 w-4 ml-1 text-icon" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function SpecsGrid({ specs }: { specs: typeof vpsSpecs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {specs.map((specGroup, groupIndex) => (
        <motion.div
          key={specGroup.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-background rounded-xl p-6 border border-border"
        >
          <h3 className="text-xl font-semibold mb-4">
            {specGroup.category}
          </h3>
          
          <div className="space-y-4">
            {specGroup.specs.map((spec) => (
              <div key={spec.name} className="flex">
                <div className="w-1/3 text-muted-foreground font-medium">
                  {spec.name}
                </div>
                <div className="w-2/3">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}