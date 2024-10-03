# Étape 1 : Builder l'application Nuxt.js
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Installer les dépendances
COPY package*.json ./
RUN npm install

# Mettre à jour la base de données de browserslist
RUN npx browserslist@latest --update-db

# Copier le reste des fichiers et construire l'application
COPY . .
RUN npm run build

# Étape 2 : Image de production
FROM node:18-alpine

WORKDIR /usr/src/app

# Copier les fichiers construits depuis l'étape de build
COPY --from=builder /usr/src/app/.output ./

# Installer uniquement les dépendances de production
RUN npm install --production

# Exposer le port
EXPOSE 3002

# Démarrer l'application
CMD ["node", "server/index.mjs"]