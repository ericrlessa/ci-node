FROM node:19

WORKDIR /usr/src/app

COPY ./src .

RUN npm install express
RUN npm install mongoose
RUN npm install chai
RUN npm install chai-http

EXPOSE 3000

ENTRYPOINT [ "node", "server.js" ]