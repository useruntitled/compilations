#!/bin/bash
set -e  # If a command fails, stop the script

until [ -f /etc/letsencrypt/live/$DOMAIN_URL/fullchain.pem ]
do
  echo "Waiting for Certbot to create the certificate..."
  sleep 10  # Wait for 10 seconds before checking again
done

echo "Certificate found, updating Nginx configuration."

# Replace placeholders in Nginx's configuration with values
envsubst '${DOMAIN_NAME}' < /etc/nginx/conf.d/yourdomain.template > /etc/nginx/conf.d/default.conf

echo "Starting Nginx."
exec nginx -g 'daemon off;'
