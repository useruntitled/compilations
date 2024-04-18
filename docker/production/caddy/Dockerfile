FROM caddy:2.7.6-alpine

ARG UID
ARG GID
ARG DOMAIN

ENV UID=${UID}
ENV GID=${GID}
ENV DOMAIN=${DOMAIN}

ENV UID=${UID}
ENV GID=${GID}

RUN delgroup dialout

RUN addgroup -g ${GID} --system laravel
RUN adduser -G laravel --system -D -s /bin/sh -u ${UID} laravel
RUN #sed -i "s/user  nginx/user laravel/g" /etc/nginx/nginx.conf



ADD ./caddy/Caddyfile /etc/caddy/CaddyFile

RUN sed -i "s/:8876/${DOMAIN}/g" /etc/caddy/Caddyfile

RUN mkdir -p /var/www/html
