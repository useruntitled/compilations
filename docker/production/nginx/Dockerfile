FROM nginx:stable

ARG UID
ARG GID

ENV UID=${UID}
ENV GID=${GID}

# В Ubuntu группа staff имеет gid 20, как и dialout в alpine linux. Мы не используем dialout, поэтому удалим её.
RUN delgroup dialout

RUN addgroup --gid ${GID} laravel
RUN adduser --disabled-password --gecos '' --uid ${UID} --gid ${GID} laravel


ADD ./nginx/conf.d/default.conf /etc/nginx/conf.d/

RUN snap install --classic certbot && \
     ln -s /snap/bin/certbot /usr/bin/certbot && \
    certbot --nginx && \
    certbot certonly --nginx

RUN mkdir -p /var/www/html
