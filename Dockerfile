FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

# Node.js 22 (LTS) + npm
RUN apt-get update \
    && apt-get install -y --no-install-recommends curl ca-certificates gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y --no-install-recommends nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Render injeta a porta via $PORT; usamos 10000 como fallback local
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "run", "start"]
