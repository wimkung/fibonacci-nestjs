FROM node:16 AS DEVELOPMENT

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY nx.json .
COPY workspace.json .

RUN npm install

COPY . .

RUN npx nx build comdocks-backend
RUN npx nx build-cli

