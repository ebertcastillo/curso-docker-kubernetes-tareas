# -------- Stage 1: Build --------
FROM node:18-alpine AS build

LABEL org.opencontainers.image.source="mi-app-ecc"
WORKDIR /app


COPY package*.json ./
RUN npm install --omit=dev


COPY ./src ./src
COPY ./package.json ./

# -------- Stage 2: Producción --------
FROM node:18-alpine

LABEL maintainer="Ebert Castillo Cortez <ebert.castillo@endesyc.bo>" \
      version="1.0-optimizado" \
      description="Backend Node.js optimizado con seguridad y performance" \
      security.scan="trivy" \
      security.non-root="true"

# Crear usuario sin privilegios
RUN addgroup -g 1001 -S appgroup && \
    adduser -S -G appgroup -u 1001 appuser

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/src ./src
COPY --from=build /app/package.json ./package.json

RUN chown -R appuser:appgroup /app

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=30s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

USER appuser
ENV NODE_ENV=production
ENV PORT=3000

CMD ["node", "src/index.js"]
