// @flow
import express from 'express';
import router from 'tp-node/routes/router';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000);
