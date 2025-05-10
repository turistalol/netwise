"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { BarChart, LineChart, ResponsiveContainer, XAxis, YAxis, Bar, Line, Tooltip, CartesianGrid } from 'recharts'
import { cn } from '@/lib/utils'

const performanceData = [
  { name: 'Jan', valor: 94.2 },
  { name: 'Fev', valor: 95.8 },
  { name: 'Mar', valor: 97.1 },
  { name: 'Abr', valor: 99.3 },
  { name: 'Mai', valor: 98.7 },
  { name: 'Jun', valor: 99.5 },
  { name: 'Jul', valor: 99.8 },
  { name: 'Ago', valor: 99.9 },
  { name: 'Set', valor: 99.9 },
  { name: 'Out', valor: 99.9 },
  { name: 'Nov', valor: 99.9 },
  { name: 'Dez', valor: 99.9 },
]

const latencyData = [
  { name: 'São Paulo', valor: 5 },
  { name: 'Rio de Janeiro', valor: 12 },
  { name: 'Brasília', valor: 18 },
  { name: 'Salvador', valor: 25 },
  { name: 'Porto Alegre', valor: 30 },
  { name: 'Recife', valor: 35 },
  { name: 'Manaus', valor: 45 },
]

// Componente para tick customizado do eixo X
const CustomizedAxisTick = (props: any) => {
  const { x, y, stroke, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={20} textAnchor="end" fill="rgba(255,255,255,0.5)" transform="rotate(-45)" fontSize="11px">
        {payload.value}
      </text>
    </g>
  );
};

const metrics = [
  { 
    id: 'uptime', 
    label: 'Uptime', 
    value: 99.99, 
    unit: '%', 
    description: 'Disponibilidade média dos nossos servidores nos últimos 12 meses',
    color: 'text-icon'
  },
  { 
    id: 'speed', 
    label: 'Velocidade', 
    value: 10, 
    unit: 'Gbps', 
    description: 'Largura de banda disponível em nossa rede de alto desempenho',
    color: 'text-icon'
  },
  { 
    id: 'latency', 
    label: 'Latência', 
    value: 5, 
    unit: 'ms', 
    description: 'Tempo médio de resposta para clientes em São Paulo',
    color: 'text-icon'
  },
  { 
    id: 'security', 
    label: 'Segurança', 
    value: 100, 
    unit: '%', 
    description: 'Nível de proteção contra ameaças com nosso sistema de segurança',
    color: 'text-icon'
  },
]

export function PerformanceSection() {
  return (
    <section id="performance" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl opacity-30" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Desempenho <span className="text-accent">incomparável</span> a seu dispor
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nossa infraestrutura foi desenvolvida para oferecer velocidade, confiabilidade
            e segurança excepcionais para os seus negócios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <CountUpMetric
              key={metric.id}
              metric={metric}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-xl font-semibold mb-6">Disponibilidade Mensal</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData} margin={{ top: 5, right: 20, bottom: 40, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="name" 
                    stroke="rgba(255,255,255,0.5)" 
                    tick={{ fill: 'rgba(255,255,255,0.5)' }}
                  />
                  <YAxis 
                    domain={[90, 100]} 
                    stroke="rgba(255,255,255,0.5)" 
                    tick={{ fill: 'rgba(255,255,255,0.5)' }}
                  />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 17, 17, 0.8)', 
                      border: 'none',
                      borderRadius: '4px',
                      color: '#fff'
                    }}
                    labelStyle={{ fontWeight: 'bold', color: '#fff' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="valor" 
                    name="Uptime (%)"
                    stroke="hsl(var(--accent))"
                    strokeWidth={3}
                    dot={{ r: 4, fill: 'hsl(var(--accent))' }}
                    activeDot={{ r: 6, fill: 'hsl(var(--accent))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-xl font-semibold mb-6">Latência por Região (ms)</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={latencyData} margin={{ top: 5, right: 20, bottom: 50, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis 
                    dataKey="name" 
                    stroke="rgba(255,255,255,0.5)" 
                    tick={<CustomizedAxisTick />}
                    interval={0}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.5)" 
                    tick={{ fill: 'rgba(255,255,255,0.5)' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 17, 17, 0.8)', 
                      border: 'none',
                      borderRadius: '4px',
                      color: '#fff'
                    }}
                    labelStyle={{ fontWeight: 'bold', color: '#fff' }}
                  />
                  <Bar 
                    dataKey="valor" 
                    name="Latência (ms)"
                    fill="hsl(var(--accent))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface CountUpMetricProps {
  metric: {
    id: string;
    label: string;
    value: number;
    unit: string;
    description: string;
    color: string;
  };
  index: number;
}

function CountUpMetric({ metric, index }: CountUpMetricProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameDuration);
      let frame = 0;
      
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(metric.value * progress * 100) / 100;
        
        setCount(currentCount);
        
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    }
  }, [isInView, metric.value]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg p-6 text-center card-glow"
    >
      <div className={cn("text-4xl font-bold flex items-end justify-center", metric.color)}>
        {count.toFixed(metric.id === 'uptime' ? 2 : 0)}
        <span className="text-lg ml-1">{metric.unit}</span>
      </div>
      <h3 className="text-lg font-semibold mt-2">{metric.label}</h3>
      <p className="text-sm text-muted-foreground mt-2">{metric.description}</p>
    </motion.div>
  )
}