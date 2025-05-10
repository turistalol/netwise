"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Share2, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

// Definindo tipos para clareza
type FaqItem = {
  question: string;
  answer: string;
};

type FaqData = {
  [key: string]: FaqItem[]; // Permitindo indexação por string
  vps: FaqItem[];
  vpn: FaqItem[];
  backup: FaqItem[];
};

const faqData: FaqData = {
  vps: [
    {
      question: "O que é um Servidor VPS e como funciona?",
      answer: "Um Servidor VPS (Virtual Private Server) é um servidor virtual privado que funciona como uma partição dedicada dentro de um servidor físico. Cada VPS possui recursos dedicados (CPU, RAM, armazenamento) e opera de forma independente, oferecendo a experiência de um servidor dedicado com custo mais acessível."
    },
    {
      question: "Quais são os benefícios de usar um VPS em vez de hospedagem compartilhada?",
      answer: "VPS oferece recursos dedicados, maior controle e personalização, melhor desempenho, segurança reforçada e isolamento de outros usuários. Ideal para sites com tráfego moderado a alto, aplicações empresariais e projetos que necessitam de configurações específicas."
    },
    {
      question: "Como é feito o backup dos dados no VPS?",
      answer: "Realizamos backups automáticos diários com retenção configurável. Os dados são armazenados em localização geográfica diferente do servidor principal, garantindo redundância. Oferecemos também a opção de backups manuais e exportação dos dados."
    },
    {
      question: "Qual é o tempo de uptime garantido para servidores VPS?",
      answer: "Garantimos um SLA de 99.9% de uptime para todos os servidores VPS, com monitoramento 24/7 e sistema automatizado de detecção e resolução de problemas. Em planos empresariais, esse valor chega a 99.99%."
    },
    {
      question: "É possível aumentar os recursos do VPS depois?",
      answer: "Sim, oferecemos escalabilidade vertical (upgrade de recursos) e horizontal (adição de servidores) conforme sua necessidade. O processo de upgrade pode ser realizado com mínimo ou zero tempo de inatividade."
    }
  ],
  vpn: [
    {
      question: "Quais protocolos VPN são suportados?",
      answer: "Suportamos os principais protocolos VPN, incluindo OpenVPN, IKEv2/IPSec, WireGuard e SSTP. Cada protocolo é otimizado para diferentes necessidades, oferecendo o melhor equilíbrio entre segurança e performance."
    },
    {
      question: "Como é garantida a segurança da VPN?",
      answer: "Utilizamos criptografia AES-256, Perfect Forward Secrecy, kill switch automático e políticas de zero-log. Nossos servidores são auditados regularmente e seguimos as melhores práticas de segurança do mercado."
    },
    {
      question: "Qual é a velocidade média da conexão VPN?",
      answer: "Nossa infraestrutura otimizada oferece velocidades próximas à sua conexão original, com perda média inferior a 10%. Utilizamos servidores de alta performance e tecnologias de otimização de rota para garantir a melhor experiência."
    },
    {
      question: "É possível conectar múltiplos dispositivos simultaneamente?",
      answer: "Sim, dependendo do plano contratado. Planos básicos suportam até 5 conexões simultâneas, enquanto planos empresariais podem ter conexões ilimitadas e gerenciamento centralizado de acessos."
    },
    {
      question: "A VPN funciona em todos os dispositivos e sistemas operacionais?",
      answer: "Nossa VPN é compatível com Windows, macOS, Linux, iOS, Android e roteadores compatíveis. Oferecemos aplicativos nativos para todas as plataformas principais e guias de configuração detalhados."
    }
  ],
  backup: [
    {
      question: "Como funciona o sistema de backup em nuvem?",
      answer: "O backup em nuvem realiza cópias automáticas e criptografadas dos seus dados, armazenando-os em múltiplos data centers. O sistema utiliza backup incremental para otimizar o uso de banda e espaço, mantendo versões anteriores dos arquivos."
    },
    {
      question: "Qual é o nível de segurança aplicado aos backups?",
      answer: "Utilizamos criptografia AES-256 de ponta a ponta, autenticação multifator, e isolamento completo dos dados. Os backups são armazenados em data centers certificados ISO 27001, com redundância geográfica."
    },
    {
      question: "Quanto tempo leva para recuperar os dados?",
      answer: "O tempo de recuperação varia conforme o volume de dados e tipo de restauração. Arquivos individuais podem ser recuperados em minutos, enquanto restaurações completas dependem do volume total. Oferecemos opções de restauração priorizada para dados críticos."
    },
    {
      question: "Como é feito o controle de versões dos arquivos?",
      answer: "Mantemos múltiplas versões dos arquivos por um período configurável (padrão de 30 dias). Cada versão é indexada e pode ser facilmente localizada e restaurada através do painel de controle."
    },
    {
      question: "Existe limite de armazenamento para backups?",
      answer: "Os limites variam conforme o plano contratado. Oferecemos planos com armazenamento fixo ou flexível, com opção de expansão conforme necessidade. Planos empresariais podem ter armazenamento ilimitado."
    }
  ]
}

// Definindo a interface de props
interface FaqContentProps {
  searchTerm: string;
}

export function FaqContent({ searchTerm }: FaqContentProps) {
  const [activeCategory, setActiveCategory] = useState<keyof FaqData>('vps'); // Tipando activeCategory

  // Filtragem GLOBAL - busca em todas as categorias
  const globallyFilteredFaqs = Object.entries(faqData)
    .flatMap(([category, questions]) => // Mapeia para incluir categoria
      questions
        .filter(faq => 
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(faq => ({ ...faq, category })) // Adiciona a categoria ao item filtrado
    );

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 z-10">
        {/* Renderização Condicional: Abas ou Resultados Globais */}
        {searchTerm === '' ? (
          // -- MODO SEM BUSCA: Exibe Abas --
          <Tabs defaultValue="vps" className="w-full" onValueChange={(value) => setActiveCategory(value as keyof FaqData)}>
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card">
              <TabsTrigger value="vps" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Servidores VPS
              </TabsTrigger>
              <TabsTrigger value="vpn" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Redes VPN
              </TabsTrigger>
              <TabsTrigger value="backup" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Backup em Nuvem
              </TabsTrigger>
            </TabsList>

            {/* Renderiza o conteúdo da aba ativa com dados NÃO filtrados */}
            {Object.entries(faqData).map(([category, questions]) => (
              <TabsContent key={category} value={category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Accordion type="single" collapsible className="space-y-4">
                    {questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg overflow-hidden">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <span className="text-left">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="prose prose-invert max-w-none">
                            <p className="text-muted-foreground">{faq.answer}</p>
                            <div className="flex items-center justify-end mt-4 pt-4 border-t border-border">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-muted-foreground hover:text-foreground"
                                onClick={() => {
                                  navigator.clipboard.writeText(faq.question + "\n\n" + faq.answer)
                                }}
                              >
                                <Share2 className="h-4 w-4 mr-2" />
                                Compartilhar
                              </Button>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          // -- MODO COM BUSCA: Exibe Resultados Globais --
          <motion.div 
            key="search-results" // Add key for animation consistency
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-0" // Pode ajustar a margem conforme necessário
          >
            {globallyFilteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {globallyFilteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <span className="text-left flex items-center">
                        {faq.question}
                        <span className="ml-2 text-xs bg-accent text-accent-foreground px-1.5 py-0.5 rounded">
                          {faq.category.toUpperCase()}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="prose prose-invert max-w-none">
                        <p className="text-muted-foreground">{faq.answer}</p>
                        <div className="flex items-center justify-end mt-4 pt-4 border-t border-border">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground"
                            onClick={() => {
                              navigator.clipboard.writeText(faq.question + "\n\n" + faq.answer)
                            }}
                          >
                            <Share2 className="h-4 w-4 mr-2" />
                            Compartilhar
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              // Mensagem quando a busca não encontra nada
              <div className="text-center py-16 text-muted-foreground">
                Nenhuma pergunta encontrada para "{searchTerm}".
              </div>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
          <p className="text-muted-foreground mb-8">
            Nossa equipe está pronta para ajudar com qualquer questão adicional sobre nossos serviços.
          </p>
          <Link href="https://wa.me/5508000953252?text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20da%20p%C3%A1gina%20Netwise%20Empresas%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20corporativas%20dispon%C3%ADveis.">
          <Button
            size="lg"
            className="bg-accent hover:bg-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar com Especialista
          </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}