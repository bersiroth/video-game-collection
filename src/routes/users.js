// @flow
import express from 'express';
import type { $Request, $Response } from 'express';
import UsersController from 'tp-node/controllers/users';
import Context from 'tp-node/context';
import Validator from 'tp-node/services/validator';

const router = express.Router();
const controller = new UsersController(new Validator());

router
  .get('/users', (req: $Request, res: $Response) => UsersController.get(new Context(req, res)))
  .post('/users', (req: $Request, res: $Response) => controller.create(new Context(req, res)));

export default router;
