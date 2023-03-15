FROM node:16.15.0

RUN mkdir -p /var/www/asaka-test-app
WORKDIR /var/www/asaka-test-app

COPY package*.json ./
RUN yarn

COPY . .

RUN yarn build

EXPOSE 4173

CMD [ "yarn", "start" ]