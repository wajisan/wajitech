FROM node:17.0.1-alpine
RUN apk update && apk add bash
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/package.json
RUN npm install
EXPOSE 9444
