#!/bin/sh

# Запускаем Nginx со стартовой конфигурацией, что слушает только порт 80
nginx

echo $DOMAIN_URL $DOMAIN_EMAIL

# Проверяем, существуют ли SSL сертификаты
if [ -f /etc/letsencrypt/live/$DOMAIN_URL/fullchain.pem ]; then
    echo "Сертификаты уже существуют, обновление конфигурации nginx..."
    cp /etc/nginx/conf.d/ssl.conf /etc/nginx/conf.d/default.conf
else
    echo "Сертификатов не обнаружено, запускаем Certbot..."
    certbot certonly --standalone --non-interactive --redirect --agree-tos --email $DOMAIN_EMAIL --domains $DOMAIN_URL
    echo "Создание symlink"
    mkdir -p /etc/nginx/certs/
    ln -s /etc/letsencrypt/live/$DOMAIN_URL/fullchain.pem /etc/nginx/certs/cert.crt
    ln -s /etc/letsencrypt/live/$DOMAIN_URL/privkey.pem /etc/nginx/certs/cert.key
    echo "Certbot завершил работу, обновление конфигурации nginx..."
    cp /etc/nginx/conf.d/ssl.conf /etc/nginx/conf.d/default.conf
fi

# Перезапускаем Nginx со новой конфигурацией
nginx -s reload
