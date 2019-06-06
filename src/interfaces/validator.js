// @flow
export type validatorError = {message: string};
export type validatorCallback = (err: ?validatorError, value: ?Object) => void;

export interface ValidatorInterface {
  validate(value: Object, schema: Object, callback: validatorCallback): void;
}
