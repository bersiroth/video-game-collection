// @flow
import type { $Request, $Response } from 'express';

import express from 'express';
import user from './users';

const router = express.Router();

router.get('/', (req: $Request, res: $Response) => {
  res.send('router');
});

router.use(user);

export default router;
