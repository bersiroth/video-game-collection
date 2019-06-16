.PHONY: test

ssh-node:
	docker-compose exec node bash

install:
	docker-compose exec node npm install

hard-install:
	docker-compose exec node rm -rf ./node_modules && npm install

start:
	docker-compose exec node npm run --silent start

watch:
	docker-compose exec node npm run --silent watch

eslint-fix:
	docker-compose exec node npm run --silent eslint:fix

eslint:
	docker-compose exec node npm run --silent eslint

build:
	docker-compose exec node npm run --silent build

test:
	docker-compose exec node npm run --silent test
