// @flow
import express from 'express';
import user from 'tp-node/routes/users';

const router = express.Router();

router.use(user);

export default router;
