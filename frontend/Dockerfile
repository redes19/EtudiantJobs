# Utiliser une image Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Installer un serveur HTTP léger pour servir le frontend
RUN npm install -g serve

# Exposer le port (par exemple, 3000)
EXPOSE 3000

# Démarrer l'application
CMD ["serve", "-s", "dist"]

