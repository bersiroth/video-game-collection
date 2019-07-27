import 'module-alias/register';
import "reflect-metadata"
import express from 'express';
import config from 'config';
import router from 'tp-node/routes/router';
import {createConnection} from "typeorm";
import {Express} from "express-serve-static-core";

export default async (): Promise<Express> => {
    const databaseConfig = config.util.toObject(config.get('database'));
    await createConnection(databaseConfig);

    const app = express();

    app.use(express.json());
    app.use(router);
    app.listen(config.get('app.port'));

    return app;
}
