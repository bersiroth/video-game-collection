// @flow
import express from 'express';
import type { $Request, $Response } from 'express';
import UsersController from '../controllers/users';
import Context from '../context';

const router = express.Router();

router
  .get('/user', (req: $Request, res: $Response) => UsersController.get(new Context(req, res)))
  .post('/user', (req: $Request, res: $Response) => UsersController.create(new Context(req, res)));

export default router;
