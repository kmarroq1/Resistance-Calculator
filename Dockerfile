FROM node:lts

RUN apt update && apt install --no-install-recommends -y firefox-esr
