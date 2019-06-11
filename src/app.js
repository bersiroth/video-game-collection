// @flow
import express from 'express';
import router from 'tp-node/routes/router';

const config = import(`./../config/${process.env.NODE_ENV || 'development'}`).default;

const app = express();

app.use(express.json());
app.use(router);

app.listen(config.port);

export default app;
