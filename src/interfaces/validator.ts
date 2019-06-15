export interface ValidatorError {
    message: string | null;
}

export type validatorCallback = (err: ValidatorError, value: object | null) => void;

export interface ValidatorInterface {
    validate(value: object, schema: object, callback: validatorCallback): void;
}
