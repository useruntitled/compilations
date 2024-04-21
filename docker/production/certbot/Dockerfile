# Dockerfile
FROM ubuntu:22.04

EXPOSE 6000 80

# читаем переменные среды из .env
ARG DOMAIN_EMAIL
ARG DOMAIN_URL

# устанавливаем переменные среды в переменные
ENV DOMAIN_EMAIL=$DOMAIN_EMAIL
ENV DOMAIN_URL=$DOMAIN_URL


# Копируем наш скрипт внутрь образа Docker
COPY ./certbot-start.sh /nginx-start.sh

# И даём права на его выполнение
RUN chmod +x /nginx-start.sh

WORKDIR /certbot
COPY . /certbot
WORKDIR /certbot

RUN apt-get update
RUN apt-get -y install certbot

# запускаем скрипт генерации
CMD ["sh", "generate-certificate.sh"]
