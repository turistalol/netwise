# Dockerfile

# ---- Base ----
# Define a versão do Node.js a ser usada
ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine AS base

# Define o diretório de trabalho globalmente para os estágios que herdam
WORKDIR /app

# ---- Dependencies ----
# Copia os arquivos de manifesto e instala SOMENTE as dependências de PRODUÇÃO.
# O objetivo é ter uma camada separada para dependências que mudam menos frequentemente.
FROM base AS deps
COPY package.json yarn.lock* ./
# Para `output: standalone`, o `next build` já copia as dependências necessárias.
# A instalação de dependências de produção aqui pode ser redundante ou até causar problemas
# se o `standalone` não encontrar exatamente o que espera.
# Vamos confiar que o builder cuidará das dependências corretas para o standalone.
# RUN yarn install --production --frozen-lockfile

# ---- Builder ----
# Este estágio instala TODAS as dependências (incluindo devDependencies)
# e depois constrói a aplicação.
FROM base AS builder
# Copia os arquivos de manifesto primeiro
COPY package.json yarn.lock* ./
# Instala todas as dependências necessárias para o build
RUN yarn install --frozen-lockfile

# Copia o restante do código da aplicação
COPY . .

# Executa o build do Next.js. Com `output: 'standalone'` no next.config.js,
# isso criará a pasta .next/standalone.
RUN yarn build

# ---- Runner ----
# Este é o estágio final que cria a imagem de produção.
# Ele copia apenas os artefatos necessários do estágio builder.
FROM base AS runner 
ENV NODE_ENV production

# Copia a saída standalone do estágio builder
COPY --from=builder /app/.next/standalone ./
# Copia a pasta public do estágio builder
COPY --from=builder /app/public ./public
# Copia a pasta .next/static do estágio builder, que contém os assets estáticos otimizados.
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# O comando para iniciar a aplicação quando `output: 'standalone'` é usado.
CMD ["node", "server.js"] 