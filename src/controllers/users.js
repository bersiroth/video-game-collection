// @flow
import userSchema from 'tp-node/schemas/users';
import type { ContextInterface } from 'tp-node/interfaces/context';
import type { ValidatorInterface, validatorError } from 'tp-node/interfaces/validator';

export default class Users {
  validator: ValidatorInterface;

  constructor(validator: ValidatorInterface) {
    this.validator = validator;
  }

  static get(context: ContextInterface) {
    context.sendJson(200, { user: context.getBody() });
  }

  create(context: ContextInterface) {
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
