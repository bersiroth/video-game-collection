ssh-node:
	docker-compose exec node bash

install:
	docker-compose exec node npm install

hard-install:
	docker-compose exec node rm -rf ./node_modules && npm install

flow:
	docker-compose exec node npm run -S flow --quiet

eslint-fix:
	docker-compose exec node npm run -S eslint --fix src/**/*.js

eslint:
	docker-compose exec node npm run -S eslint src/**/*.js

prettier:
	docker-compose exec node npm run -S prettier --write src/**/*.js

test:
	docker-compose exec node npm run eslint:fix && npm run prettier
