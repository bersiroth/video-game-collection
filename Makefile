.PHONY: test

ssh-node:
	docker-compose exec node bash

install:
	docker-compose exec node npm install

hard-install:
	docker-compose exec node rm -rf ./node_modules && npm install

npm-run:
	docker-compose exec node npm run --silent $(params)
