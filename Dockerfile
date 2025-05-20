# Usa una imagen oficial de Node.js
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

# Copia archivo de variables de entorno
COPY .env .env

# Copia el resto del código
COPY . .

EXPOSE 80

CMD ["node", "src/app.js"]
