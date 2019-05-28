FROM node:12.3-alpine

WORKDIR /var/www

COPY package*.json ./
RUN npm ci
