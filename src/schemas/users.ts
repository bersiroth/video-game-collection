import Joi from '@hapi/joi';

const string = Joi.string().alphanum();

export default Joi.object().keys({
    firstname: string.min(3).max(30).required(),
    lastname: string.min(3).max(30).required(),
});
