// @flow
declare type validatorCallback = (err: validatorError | null, value: Object | null) => void;
declare type validatorError = {message: string};

export interface ValidatorInterface {
  validate(value: Object, schema: Object, callback: validatorCallback): void;
}
