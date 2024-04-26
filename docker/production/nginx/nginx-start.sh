#!/bin/sh

# Запускаем Nginx со стартовой конфигурацией, что слушает только порт 80
nginx

echo $APP_URL $DOMAIN_EMAIL

# Проверяем, существуют ли SSL сертификаты
if [ -f /etc/letsencrypt/live/$APP_URL/fullchain.pem ]; then
    echo "Сертификаты найдены."
#    cp /etc/nginx/conf.d/ssl.conf /etc/nginx/conf.d/default.conf
else
    echo "Сертификаты не обнаружены, запускаем Certbot..."
#    certbot certonly --standalone --non-interactive --redirect --agree-tos --email $DOMAIN_EMAIL --domains $APP_URL
    certbot --nginx --non-interactive --redirect --agree-tos --email $DOMAIN_EMAIL --domains $APP_URL
#    echo "Создание symlink"
#    mkdir -p /etc/nginx/certs/
#    ln -s /etc/letsencrypt/live/$APP_URL/fullchain.pem /etc/nginx/certs/cert.crt
#    ln -s /etc/letsencrypt/live/$APP_URL/privkey.pem /etc/nginx/certs/cert.key
    echo "Certbot завершил работу."
#    cp /etc/nginx/conf.d/ssl.conf /etc/nginx/conf.d/default.conf
fi

# Перезапускаем Nginx со новой конфигурацией
exec nginx -g "daemon off;"
