
FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

ADD src src
ADD public public

EXPOSE 3000
RUN npm run build

CMD ["npm","start"]