// @flow
import userSchema from 'schemas/users';
import type { ContextInterface } from 'interfaces/context';
import type { ValidatorInterface } from 'interfaces/validator';

export default class Users {
  validator: ValidatorInterface;

  constructor(validator: ValidatorInterface) {
    this.validator = validator;
  }

  static async get(context: ContextInterface) {
    context.sendJson(200, { user: context.getBody() });
  }

  async create(context: ContextInterface) {
    this.validator.validate(context.getBody(), userSchema,
      (err: validatorError) => {
        if (err !== null) {
          context.sendJson(400, { error: err.message });
        } else {
          context.sendJson(201, { user: context.getBody() });
        }
      });
  }
}
