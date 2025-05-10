import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="md:col-span-3 lg:col-span-2">
            <Link href="/servicos" className="inline-block mb-4">
              <img 
                className="h-20 w-auto"
                src="/images/logo.webp"
                alt="Netwise Empresas Logo"
              />
            </Link>
            <p className="text-muted-foreground text-sm mt-2 max-w-md">
            NET WISE - INFORMATICA LTDA, CNPJ: 02.728.850/0001-36. Endereço: Pr. Cel. Carlos Bernardes, 20 - Sala 106 - Centro, Lagoa da Prata - MG, CEP: 35590-030.

            </p>
            <div className="flex mt-6 space-x-6">
              <a href="https://www.facebook.com/netwiseinternet/" className="text-muted-foreground hover:text-icon">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/netwiseinternet/" className="text-muted-foreground hover:text-icon">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@netwiseinternet" className="text-muted-foreground hover:text-icon">
                <span className="sr-only">Youtube</span>
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/netwise-internet/" className="text-muted-foreground hover:text-icon">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Produtos
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-secondary">
                  VPS Empresarial
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-secondary">
                  VPN Dedicada
                </Link>
              </li>
              <li>
                <Link href="/backup" className="text-sm text-muted-foreground hover:text-secondary">
                  Backup em Nuvem
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Empresa
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="https://netwise.com.br/sobre-nos/" className="text-sm text-muted-foreground hover:text-secondary">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="https://netwise.com.br/blog-artigos/" className="text-sm text-muted-foreground hover:text-secondary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Suporte
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-secondary">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-secondary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Netwise Empresas. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap space-x-5">
              <Link href="https://netwise.com.br/politica-de-privacidade/" className="text-xs text-muted-foreground hover:text-secondary">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          Desenvolvido por{' '}
          <a
            href="https://f5.marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            f5.marketing
          </a>
        </p>
      </div>
    </footer>
  )
}