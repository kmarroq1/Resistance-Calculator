FROM node:14.17.3

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g @angular/cli
RUN npm install -g http-server

CMD ./run.sh
