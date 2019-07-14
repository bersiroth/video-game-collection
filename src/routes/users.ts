import express from 'express';
import {Request, Response} from 'express';
import UsersController from 'tp-node/controllers/users';
import Context from 'tp-node/context';
import Validator from 'tp-node/services/validator';

const router = express.Router();
const controller = new UsersController(new Validator());

router
    .get('/users', (req: Request, res: Response): void => controller.get(new Context(req, res)))
    .post('/users', (req: Request, res: Response): void => controller.create(new Context(req, res)));

export default router;
