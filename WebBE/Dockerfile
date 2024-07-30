FROM node:20.13.1-alpine AS base

WORKDIR /wsv/backend

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]