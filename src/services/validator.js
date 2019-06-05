// @flow
import Joi from '@hapi/joi';
import type { ValidatorInterface } from 'interfaces/validator';

export default class Validator implements ValidatorInterface {
  static async validate(value: Object, schema: Object, callback: validatorCallback): void {
    Joi.validate(value, schema, { abortEarly: false }, callback);
  }
}
