import Joi from '@hapi/joi';
import {validatorCallback, ValidatorInterface} from 'tp-node/interfaces/validator';

export default class Validator implements ValidatorInterface {
    public validate(value: object, schema: object, callback: validatorCallback): void {
        Joi.validate(value, schema, { abortEarly: false }, callback);
    }
}
