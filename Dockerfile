FROM node:22-bookworm-slim AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build:pages


FROM httpd:2.4-alpine

RUN mkdir -p /usr/local/apache2/htdocs/dt-diorama

COPY --from=build /app/out/ \
    /usr/local/apache2/htdocs/dt-diorama/

EXPOSE 80
