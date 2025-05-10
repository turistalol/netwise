// lib/data/testimonials.ts

// Tipo para cada item de depoimento
export interface TestimonialItem {
  content: string;
  author: string;
  title: string;
  image: string;
  logo: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    content: "Desde que migramos para os servidores VPS da Netwise, nosso site teve uma melhora de 40% no tempo de carregamento. O suporte técnico é rápido e eficiente.",
    author: "Maria Silva",
    title: "CTO, TechBrasil Soluções",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    logo: "https://images.pexels.com/photos/7963572/pexels-photo-7963572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "A segurança da VPN da Netwise é excepcional. Conseguimos conectar todas as nossas filiais com total privacidade e sem quedas de conexão.",
    author: "Carlos Mendes",
    title: "Diretor de Infraestrutura, Grupo Conexão",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    logo: "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "O custo-benefício dos serviços da Netwise é imbatível. Temos acesso a uma infraestrutura de ponta por um preço justo e sem surpresas na fatura.",
    author: "Ana Costa",
    title: "Gerente de TI, Loja Virtual Express",
    image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    logo: "https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "A migração para os serviços Netwise aconteceu sem nenhum tempo de inatividade. Nossa equipe ficou impressionada com a eficiência e profissionalismo.",
    author: "Roberto Almeida",
    title: "CEO, Sistemas Integrados Brasil",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    logo: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "O painel de controle da Netwise é extremamente intuitivo. Conseguimos gerenciar todos os recursos sem precisar de conhecimentos técnicos avançados.",
    author: "Gabriela Torres",
    title: "Diretora de Marketing, Agência Digital Ponto",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    logo: "https://images.pexels.com/photos/5801253/pexels-photo-5801253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
]; 