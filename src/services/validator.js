/* eslint-disable class-methods-use-this */
// @flow
import Joi from '@hapi/joi';
import type { ValidatorInterface, validatorCallback } from 'tp-node/interfaces/validator';

export default class Validator implements ValidatorInterface {
  validate(value: Object, schema: Object, callback: validatorCallback): void {
    Joi.validate(value, schema, { abortEarly: false }, callback);
  }
}
