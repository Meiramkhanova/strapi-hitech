VERSION=0.0.2

# linux
build-amd:
	docker buildx build --platform linux/amd64 --tag blinkker/strapi-hi-tech:$(VERSION)-amd --file ./Dockerfile .

push-amd:
	docker push blinkker/strapi-hi-tech:$(VERSION)-amd
