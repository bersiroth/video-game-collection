// @flow
import express from 'express';
import config from 'config';
import router from 'tp-node/routes/router';

const app = express();

app.use(express.json());
app.use(router);

app.listen(config.app.port);

export default app;
