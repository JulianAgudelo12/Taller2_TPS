# Minimal Dockerfile for your current app

FROM node:18-alpine

WORKDIR /app

# Copy dependency definitions and install them
COPY package*.json ./
RUN npm install --production

# Copy the rest of the code
COPY . .

# Expose the port used in app.js
EXPOSE 3000

# Start the server
CMD ["node", "src/app.js"]
