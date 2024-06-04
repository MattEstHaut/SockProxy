FROM node:22-bookworm

WORKDIR /proxy

COPY . .

CMD ["npm", "start"]

EXPOSE 80
