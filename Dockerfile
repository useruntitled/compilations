FROM ubuntu:latest
LABEL authors="user"

ENTRYPOINT ["top", "-b"]
RUN usermod -u 1000 www-data
