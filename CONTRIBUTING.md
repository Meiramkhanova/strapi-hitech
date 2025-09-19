# Prerequisites

- Docker installed on the machine
- Docker Desktop installed on the machine

# Как пушить докер образы

- Обновить проект
- в корневой папке вызвать команду `docker buildx build --platform linux/amd64 --tag blinkker/strapi-hi-tech:$(VERSION)-amd --file ./Dockerfile .` и вместо `$(VERSION)` подставить новую версию (текущую и прошлые версии можно посмотреть [тут](https://hub.docker.com/repository/docker/blinkker/hi-tech/general))
- после этого начнется процесс сборки образа. По его окончании будет собран образ. Его можно глянуть вызвав команду `docker image ls | grep strapi-hi-tech`
- далее нужно запушить образ в докер-репозитории. для этого вызвать эту компанду: docker push blinkker/strapi-hi-tech:$(VERSION)-amd и вместо `$(VERSION)` подставить созданную версию (текущую и прошлые версии можно посмотреть [тут](https://hub.docker.com/repository/docker/blinkker/
- убедиться что образ запушен и присутствует в репозитории
