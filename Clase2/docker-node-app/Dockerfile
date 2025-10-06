# ================================
# Stage 1: Build
# ================================
FROM node:18 AS build

# Metadata
LABEL maintainer="Ebert Castillo <tuemail@example.com>"
LABEL version="1.0"
LABEL description="Aplicación Node.js dockerizada con Multi-Stage Build"


WORKDIR /app

COPY package*.json ./

RUN npm install

# Copiar todo el código
COPY . .

# ================================
# Stage 2: Production
# ================================
FROM node:18-alpine

# Metadata
LABEL maintainer="Ebert Castillo <tuemail@example.com>"
LABEL version="1.0"
LABEL description="Aplicación Node.js dockerizada optimizada"

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=build /app .

RUN npm ci --only=production

USER appuser

# Puerto configurable 
ENV PORT=3000

# Documentar el puerto expuesto
EXPOSE 3000

# Healthcheck opcional para verificar estado
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --spider --quiet http://localhost:3000 || exit 1

# Comando por defecto para iniciar la aplicación
CMD ["node", "index.js"]