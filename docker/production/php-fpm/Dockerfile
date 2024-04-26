FROM php:8.2-fpm

ARG UID
ARG GID

ENV UID=${UID}
ENV GID=${GID}

# В Ubuntu группа staff имеет gid 20, как и dialout в alpine linux. Мы не используем dialout, поэтому удалим её.
RUN delgroup dialout

RUN addgroup --gid ${GID} laravel
RUN adduser --disabled-password --gecos '' --uid ${UID} --gid ${GID} laravel








WORKDIR /var/www/html

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer



#RUN sed -i "s/user = www-data/user = laravel/g" /usr/local/etc/php-fpm.d/www.conf
#RUN sed -i "s/group = www-data/group = laravel/g" /usr/local/etc/php-fpm.d/www.conf
#RUN echo "php_admin_flag[log_errors] = on" >> /usr/local/etc/php-fpm.d/www.conf


#RUN docker-php-ext-install pdo pdo_mysql


RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libjpeg-dev \
        libpng-dev \
        zlib1g-dev \
        libxml2-dev \
        libzip-dev \
        libonig-dev \
    libmagickwand-dev\
        graphviz \
    && docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install mysqli \
    && docker-php-ext-install zip \
    && docker-php-ext-install sockets \
    && docker-php-source delete \
    && curl -sS https://getcomposer.org/installer | php -- \
     --install-dir=/usr/local/bin --filename=composer \
    && apt-get install -y npm

RUN apt-get install -y libmagickwand-dev; \
    pecl install imagick; \
    docker-php-ext-enable imagick


RUN mkdir -p /usr/src/php/ext/redis \
    && curl -L https://github.com/phpredis/phpredis/archive/5.3.4.tar.gz | tar xvz -C /usr/src/php/ext/redis --strip 1 \
    && echo 'redis' >> /usr/src/php-available-exts \
    && docker-php-ext-install redis

RUN mkdir -p /var/www/html

RUN apt-get install -y supervisor

RUN mkdir -p /etc/supervisor/conf.d

ADD ./php-fpm/supervisor/conf.d/compilations-worker.conf /etc/supervisor/conf.d
COPY ./php-fpm/supervisor/start.sh /php-fpm/supervisor/start.sh



CMD ["php-fpm", "-y", "/usr/local/etc/php-fpm.conf", "-R"]

USER laravel
