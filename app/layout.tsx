import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { FloatingCTA } from '@/components/conversion/floating-cta';

const nexa = localFont({
  src: [
    {
      path: './fonts/nexa-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/nexa-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/nexa-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/nexa-heavy.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-nexa',
});

export const metadata: Metadata = {
  title: 'Netwise Empresas | Soluções de Cloud e Virtual Machine de Alta Performance',
  description: 'Soluções empresariais de Cloud e Virtual Machine com alto desempenho, segurança avançada e suporte técnico 24/7 para sua empresa.',
  keywords: 'Cloud, Virtual Machine, servidores virtuais, redes privadas, cloud computing, hospedagem, segurança de dados',
  authors: [{ name: 'Netwise Empresas' }],
  icons: {
    icon: '/images/logo.webp',
  },
  openGraph: {
    title: 'Netwise Empresas | Soluções de Cloud e Virtual Machine de Alta Performance',
    description: 'Soluções empresariais de Cloud e Virtual Machine com alto desempenho, segurança avançada e suporte técnico 24/7 para sua empresa.',
    url: 'https://netwise.com.br',
    siteName: 'Netwise Empresas',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${nexa.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="netwise-theme"
        >
          {children}
          <FloatingCTA />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}