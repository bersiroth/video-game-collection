// @flow
import express from 'express';
import user from 'routes/users';

const router = express.Router();

router.use(user);

export default router;
