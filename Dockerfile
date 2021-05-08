FROM node:16-alpine3.11

RUN apk add git \
    && git clone https://github.com/Licege/adminPanelTX.git \
    && cd adminPanelTX

WORKDIR /var/www/app

EXPOSE 3001

CMD env ${cat env} npm run start