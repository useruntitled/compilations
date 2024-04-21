FROM nginx:stable-alpine

ARG UID
ARG GID

ENV UID=${UID}
ENV GID=${GID}

RUN delgroup dialout

RUN addgroup -g ${GID} --system laravel
RUN adduser -G laravel --system -D -s /bin/sh -u ${UID} laravel
RUN sed -i "s/user  nginx/user laravel/g" /etc/nginx/nginx.conf

# читаем переменные среды из .env
ARG DOMAIN_EMAIL
ARG DOMAIN_URL

# устанавливаем переменные среды в переменные
ENV DOMAIN_EMAIL=$DOMAIN_EMAIL
ENV DOMAIN_URL=$DOMAIN_URL


## Копируем наш скрипт внутрь образа Docker
#COPY ./certbot-start.sh /certbot-start.sh

# И даём права на его выполнение
#RUN chmod +x /nginx-start.sh

RUN apk add certbot
RUN apk add certbot-nginx

ADD ./conf.d/default.conf /etc/nginx/conf.d/
ADD ./conf.d/default.conf.ssl /etc/nginx/conf.d

COPY ./nginx-start.sh /nginx-start.sh
RUN chmod +x /nginx-start.sh

RUN mkdir -p /var/www/html
