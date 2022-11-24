FROM node:19

WORKDIR /usr/src/app

COPY ./src .

EXPOSE 3000