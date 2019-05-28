// @flow
import express from 'express';
import { getUser, postUser } from '../controllers/users';

const router = express.Router();

router
  .route('/user')
  .get(getUser)
  .post(postUser);

export default router;
