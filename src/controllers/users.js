// @flow
import Joi from '@hapi/joi';
import userSchema from '../schemas/users';
import type { ContextInterface } from '../interfaces/context';

export default class UsersController {
  static async get(context: ContextInterface) {
    context.sendJson(200, { user: context.getBody() });
  }

  static async create(context: ContextInterface) {
    Joi.validate(context.getBody(), userSchema, { abortEarly: false },
      (err: ValidationError) => {
        if (err !== null) {
          context.sendJson(400, { error: err.message });
        } else {
          context.sendJson(201, { user: context.getBody() });
        }
      });
  }
}
