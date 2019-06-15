import 'module-alias/register';
import express from 'express';
import config from 'config';
import router from 'tp-node/routes/router';

const app = express();

app.use(express.json());
app.use(router);

app.listen(config.get('app.port'));

export default app;
