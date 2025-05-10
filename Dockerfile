# Estágio 1: Build
FROM node:18-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de manifesto de pacote e instala dependências
COPY package.json yarn.lock* ./
# Descomente a linha abaixo e comente a acima se você usar npm em vez de yarn
# COPY package.json package-lock.json* ./

RUN yarn install --frozen-lockfile
# Descomente a linha abaixo e comente a acima se você usar npm em vez de yarn
# RUN npm ci

# Copia o restante do código da aplicação
COPY . .

# Constrói a aplicação para produção
RUN yarn build
# Descomente a linha abaixo e comente a acima se você usar npm em vez de yarn
# RUN npm run build

# Estágio 2: Produção
FROM node:18-alpine

WORKDIR /app

# Define o ambiente para produção
ENV NODE_ENV=production

# Copia os artefatos de build do estágio anterior
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
# Se você tiver um server.js customizado, copie-o também
# COPY --from=builder /app/server.js ./server.js

# Expõe a porta que o Next.js usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]
# Descomente a linha abaixo e comente a acima se você usar npm em vez de yarn
# CMD ["npm", "start"] 