#!/bin/sh

# Запускаем Nginx со стартовой конфигурацией, что слушает только порт 80
nginx

# Проверяем, существуют ли SSL сертификаты
if [ -f /etc/letsencrypt/live/$DOMAIN_URL/fullchain.pem ]; then
    echo "Сертификаты уже существуют, обновление конфигурации nginx..."
    cp /etc/nginx/conf.d/ssl.conf /etc/nginx/conf.d/default.conf
else
    echo "Сертификатов не обнаружено, запускаем Certbot..."
    certbot --nginx --non-interactive --redirect --agree-tos --email $DOMAIN_EMAIL --domains $DOMAIN_URL
    echo "Certbot завершил работу, обновление конфигурации nginx..."
    cp /etc/nginx/conf.d/default.conf.ssl /etc/nginx/conf.d/default.conf
fi

# Перезапускаем Nginx со новой конфигурацией
nginx -s reload
