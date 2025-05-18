FROM node:lts-alpine3.20 as server
WORKDIR /app
COPY package.json .
RUN npm install typescript
RUN npm install --force
COPY . . 
RUN npm run build
COPY .env ./dist
EXPOSE 8080
CMD npm run start
