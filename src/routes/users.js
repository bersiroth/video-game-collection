// @flow
import express from 'express';
import type { $Request, $Response } from 'express';
import UsersController from 'controllers/users';
import Context from 'context';
import Validator from 'services/validator';

const router = express.Router();
const controller = new UsersController(new Validator());

router
  .get('/user', (req: $Request, res: $Response) => UsersController.get(new Context(req, res)))
  .post('/user', (req: $Request, res: $Response) => controller.create(new Context(req, res)));

export default router;
