"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  CalendarCheck
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    submitted: false,
    loading: false
  })
  
  const { toast } = useToast()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState(prev => ({ ...prev, loading: true }))
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        submitted: true,
        loading: false
      }))
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Nossa equipe entrará em contato em breve.",
        duration: 5000,
      })
    }, 1500)
  }
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Entre em <span className="text-accent">contato</span> conosco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos prontos para ajudar sua empresa a alcançar o próximo nível 
            com nossas soluções de infraestrutura de alta performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 md:p-8 border border-border h-full"
            >
              {!formState.submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        value={formState.name}
                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu.email@empresa.com.br"
                        value={formState.email}
                        onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        placeholder="(11) 98765-4321"
                        value={formState.phone}
                        onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        placeholder="Nome da sua empresa"
                        value={formState.company}
                        onChange={(e) => setFormState(prev => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Select
                      onValueChange={(value) => setFormState(prev => ({ ...prev, subject: value }))}
                    >
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Selecione um assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vps">Servidores VPS</SelectItem>
                        <SelectItem value="vpn">Redes VPN</SelectItem>
                        <SelectItem value="cloud">Cloud Computing</SelectItem>
                        <SelectItem value="support">Suporte Técnico</SelectItem>
                        <SelectItem value="sales">Vendas</SelectItem>
                        <SelectItem value="other">Outro Assunto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-accent hover:bg-secondary text-accent-foreground w-full"
                    disabled={formState.loading}
                  >
                    {formState.loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-accent-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensagem
                      </span>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <div className="w-16 h-16 bg-icon/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-icon" />
                  </div>
                  <h3 className="text-2xl font-semibold text-center mb-2">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-muted-foreground text-center max-w-md">
                    Obrigado por entrar em contato. Nossa equipe responderá sua 
                    mensagem em até 24 horas úteis.
                  </p>
                  <Button 
                    variant="outline"
                    className="mt-8 border-accent text-accent hover:bg-secondary hover:text-accent-foreground"
                    onClick={() => setFormState(prev => ({ 
                      ...prev, 
                      name: '',
                      email: '',
                      phone: '',
                      company: '',
                      subject: '',
                      message: '',
                      submitted: false
                    }))}
                  >
                    Enviar outra mensagem
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
          
          <div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-icon" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-muted-foreground mt-1">
                      Resposta em até 24 horas
                    </p>
                    <a href="mailto:contato@netwise.com.br" className="text-secondary hover:underline mt-2 block">
                      contato@netwise.com.br
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-icon" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Telefone</h3>
                    <p className="text-muted-foreground mt-1">
                      Seg-Sex, 8h às 18h
                    </p>
                    <a href="tel:+551130456789" className="text-secondary hover:underline mt-2 block">
                      +55 0800 095 3252
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-icon" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Endereço</h3>
                    <p className="text-muted-foreground mt-1">
                      Matriz em Lagoa da Prata
                    </p>
                    <address className="not-italic mt-2 text-foreground">
                      Pr. Cel. Carlos Bernardes, 20 - Sala 106<br />
                      Centro, Lagoa da Prata - MG<br />
                      CEP: 35590-030
                    </address>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Precisa de ajuda imediata?
                  </h3>
                  <p className="text-muted-foreground">
                    Nossa equipe de suporte está disponível 24/7 para clientes com planos Business e Enterprise.
                  </p>
                  <div className="space-y-3 pt-2">
                    <Button
                      onClick={() => window.open('https://wa.me/5508000953252?text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20da%20p%C3%A1gina%20Netwise%20Empresas%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20corporativas%20dispon%C3%ADveis.', '_blank')}
                      className="w-full bg-accent text-accent-foreground hover:bg-secondary"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Iniciar chat
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary-foreground"
                    >
                      <CalendarCheck className="mr-2 h-4 w-4" />
                      Agendar consulta
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}