"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'

const navigation = [
  { name: 'Início', href: '/servicos' },
  { name: 'Soluções', href: '#features' },
  { name: 'Contato', href: '#contact' },
  { name: 'FAQ', href: '/faq' },
]

const solutions = [
  { name: 'Cloud e Virtual Machine', href: '/' },
  { name: 'Backup em Nuvem', href: '/backup' },

]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-lg shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/servicos" className="-m-1.5 p-1.5">
            <span className="sr-only">Netwise Empresas</span>
            <Image 
              className="h-20 w-auto"
              src="/images/logo.webp"
              alt="Netwise Empresas Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Menu className="h-6 w-6 text-icon" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            item.name === 'Soluções' ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-sm font-medium leading-6 text-foreground hover:text-secondary">
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="bg-card/95 backdrop-blur-sm border-muted">
                  {solutions.map((solution) => (
                    <DropdownMenuItem key={solution.name} asChild>
                      <Link
                        href={solution.href}
                        className="block py-2 px-3 text-sm hover:text-secondary"
                      >
                        {solution.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-foreground hover:text-secondary"
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            size="sm"
            className="bg-accent hover:bg-secondary text-accent-foreground"
          >
            Experimente Grátis
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="fixed top-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-black/60 px-6 py-6 max-h-screen sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/servicos" className="-m-1.5 p-1.5">
                <span className="sr-only">Netwise Empresas</span>
                <Image 
                  className="h-20 w-auto"
                  src="/images/logo.webp"
                  alt="Netwise Empresas Logo"
                  width={100}
                  height={100}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6 text-icon" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    item.name === 'Soluções' ? (
                      <div key={item.name}>
                        <button
                          onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-secondary"
                        >
                          {item.name}
                          <ChevronDown
                            className={cn(
                              'ml-1 h-5 w-5 transition-transform duration-200',
                              mobileSolutionsOpen ? 'rotate-180' : ''
                            )}
                          />
                        </button>
                        {mobileSolutionsOpen && (
                          <div className="mt-1 space-y-1 pl-6">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                href={solution.href}
                                className="block rounded-lg px-3 py-2 text-base font-normal text-foreground hover:bg-muted hover:text-secondary"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {solution.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-secondary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
                <div className="py-6">
                  <Button
                    className="w-full bg-accent hover:bg-secondary text-accent-foreground"
                  >
                    Experimente Grátis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}