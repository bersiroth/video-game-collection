import 'module-alias/register';
import "reflect-metadata"
import express from 'express';
import config from 'config';
import router from 'tp-node/routes/router';
import {createConnection, Connection} from "typeorm";

const app = express();

let databaseConfig = config.util.toObject(config.get('database'));

createConnection(databaseConfig).then((): void => {
    app.use(express.json());
    app.use(router);
    app.listen(config.get('app.port'));
}).catch((error: Error): void => console.log(error));

export default app;
