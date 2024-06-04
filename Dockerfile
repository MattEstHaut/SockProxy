FROM node:22-bookworm

WORKDIR /proxy

COPY . .

CMD ["node", "proxy.js"]

EXPOSE 80
