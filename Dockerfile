FROM node:16 AS DEVELOPMENT

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16 AS PRODUCTION

WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Copy from development build
COPY --from=DEVELOPMENT  /app/dist ./dist

CMD ["node", "/app/dist/main.js"]





