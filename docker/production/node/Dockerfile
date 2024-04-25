FROM node:21-alpine

WORKDIR /var/www/html

# Change current user
USER node


EXPOSE 5173

#CMD ["sh", "-c", "npm install && npm run build -- --host"]

ARG UID
ARG GID

ENV UID=${UID}
ENV GID=${GID}

RUN delgroup dialout

RUN addgroup -g ${GID} --system laravel
RUN adduser -G laravel --system -D -s /bin/sh -u ${UID} laravel

RUN npm install && npm run build
