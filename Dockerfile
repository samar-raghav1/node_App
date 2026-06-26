FROM node:20-alpine

COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 500

CMD ["npm", "start"]
