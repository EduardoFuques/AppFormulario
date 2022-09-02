FROM node:12.22.9-alpine3.15

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000