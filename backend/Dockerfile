FROM node:18

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules

RUN npm install --include=dev

RUN npm install -g ts-node

RUN npm install bcrypt --build-from-source

COPY . .

EXPOSE 5000

CMD ["npx", "nodemon", "src/index.ts"]
