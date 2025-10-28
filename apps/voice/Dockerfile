# apps/voice/Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm i --no-audit --no-fund
COPY . .
EXPOSE 8787
CMD ["npm","run","dev"]
