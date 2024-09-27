# Etapa 1: Usar uma imagem base do Node.js
FROM node:18-alpine

# Etapa 2: Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Etapa 3: Copiar os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Etapa 4: Instalar as dependências do projeto
RUN npm install --production

# Etapa 5: Copiar o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Etapa 6: Expor a porta que o servidor vai rodar (porta 8080 neste caso)
EXPOSE 3000

# Etapa 7: Comando para iniciar a aplicação
CMD ["node", "server.js"]
