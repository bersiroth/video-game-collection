import userSchema from 'tp-node/schemas/users';
import {ContextInterface} from 'tp-node/interfaces/context';
import {ValidatorInterface, ValidatorError} from 'tp-node/interfaces/validator';

export default class Users {
    private validator: ValidatorInterface;

    public constructor(validator: ValidatorInterface) {
        this.validator = validator;
    }

    public static get(context: ContextInterface): void {
        context.sendJson(200, { user: context.getBody() });
    }

    public create(context: ContextInterface): void  {
        this.validator.validate(context.getBody(), userSchema,
            (err: ValidatorError): void  => {
                if (err !== null) {
                    context.sendJson(400, { error: err.message });
                } else {
                    context.sendJson(201, { user: context.getBody() });
                }
            });
    }
}
