#!/bin/sh
supervisord -c /etc/supervisord.conf
supervisorctl reread
supervisorctl update
