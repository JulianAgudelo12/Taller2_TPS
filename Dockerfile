# Usa una imagen oficial de Node.js
FROM node:18-alpine

# Crea y usa el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias primero
COPY package*.json ./

# Instala solo las dependencias de producción
RUN npm install 

# Copia todo el resto del código al contenedor
COPY . .

# Expone el puerto 3000 (ajusta si tu app usa otro)
EXPOSE 8080

# Comando para arrancar tu app
CMD ["node", "src/app.js"]

