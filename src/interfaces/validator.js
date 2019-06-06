// @flow
export type validatorError = {message: string} | null;
export type validatorValue = Object | null;
export type validatorCallback = (err: validatorError, value: validatorValue) => void;

export interface ValidatorInterface {
  validate(value: Object, schema: Object, callback: validatorCallback): void;
}
