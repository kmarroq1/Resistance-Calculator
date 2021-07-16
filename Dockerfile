FROM node:14.17.3

WORKDIR /app

RUN npm install -g @angular/cli
RUN npm install -g http-server

CMD
