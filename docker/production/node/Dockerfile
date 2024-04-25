FROM node:21-alpine

WORKDIR /var/www/html

EXPOSE 5173

#CMD ["sh", "-c", "npm install && npm run build -- --host"]

ARG UID
ARG GID

ENV UID=${UID}
ENV GID=${GID}

# MacOS staff group's gid is 20, so is the dialout group in alpine linux. We're not using it, let's just remove it.
RUN delgroup dialout

RUN addgroup -g ${GID} --system laravel
RUN adduser -G laravel --system -D -s /bin/sh -u ${UID} laravel

RUN npm install && npm run build
