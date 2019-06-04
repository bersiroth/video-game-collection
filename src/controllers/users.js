// @flow
import Joi from '@hapi/joi';
import userSchema from '../schemas/users';
import type contextType from '../context';

export default class usersController {
  static async get(context: contextType) {
    context.sendJson(200, { user: context.getBody() });
  }

  static async create(context: contextType) {
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
