import 'module-alias/register';
import "reflect-metadata"
import express from 'express';
import config from 'config';
import router from 'tp-node/routes/router';
import {createConnection} from "typeorm";
import {Server} from "http";

async function start(): Promise<Server> {
    await createConnection(config.get('database.connection'));
    const app = express();

    app.use(express.json());
    app.use(router);
    return app.listen(config.get('app.port'));
}

export default start();
