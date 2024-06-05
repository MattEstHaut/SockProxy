FROM node:22-bookworm

WORKDIR /proxy

COPY . .

RUN npm install

CMD ["npm", "start"]

EXPOSE 80 443
