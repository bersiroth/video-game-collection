ssh-node:
	docker-compose exec node bash

install:
	docker-compose exec node npm install

hard-install:
	docker-compose exec node rm -rf ./node_modules && npm install

flow:
	docker-compose exec node npm run --silent flow

eslint-fix:
	docker-compose exec node npm run --silent eslint:fix

eslint:
	docker-compose exec node npm run --silent eslint

launch-test:
	docker-compose exec node npm run --silent test
