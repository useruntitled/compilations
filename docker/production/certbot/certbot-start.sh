#!/bin/bash
set -e  # If a command fails, stop the script

echo "Running Certbot."
certbot certonly --standalone --non-interactive --agree-tos --email $DOMAIN_EMAIL --domains $DOMAIN_URL

echo "Certbot has finished, renewing the certificate daily from now on."
while true; do  # Infinite loop
  sleep 12h  # Wait for half a day
  certbot renew
done
