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
ARG APP_URL

# устанавливаем переменные среды в переменные
ENV DOMAIN_EMAIL=$DOMAIN_EMAIL
ENV APP_URL=$APP_URL


## Копируем наш скрипт внутрь образа Docker
#COPY ./certbot-start.sh /certbot-start.sh

# И даём права на его выполнение
#RUN chmod +x /nginx-start.sh

COPY ./conf.d/default.conf.template /etc/nginx/conf.d/
RUN apk add gettext \
  && envsubst '\$APP_URL' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

RUN apk add certbot
RUN apk add certbot-nginx

COPY crontab /etc/cron.d/certbot-cron
RUN /usr/bin/crontab /etc/cron.d/certbot-cron

#ADD ./conf.d/default.conf /etc/nginx/conf.d/
#ADD ./conf.d/default.conf.ssl /etc/nginx/conf.d

COPY ./nginx-start.sh /nginx-start.sh
RUN chmod +x /nginx-start.sh

RUN mkdir -p /var/www/html
