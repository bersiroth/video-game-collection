// @flow
import Validator from 'tp-node/services/validator';
import userSchema from 'tp-node/schemas/users';
import { expect } from 'chai';
import type { validatorError, validatorValue } from 'tp-node/interfaces/validator';

describe('Service validator', () => {
  const validator = new Validator();

  describe('validate()', () => {
    it('should validate without error', () => {
      const user = {
        firstname: 'john',
        lastname: 'doe',
      };
      validator.validate(user, userSchema, (err: validatorError, val: validatorValue) => {
        expect(err).to.be.null;
        expect(val).to.deep.equal(user);
      });
    });

    it('should validate with error', () => {
      const user = {
        firstname: 'john',
      };
      validator.validate(user, userSchema, (err: validatorError) => {
        expect(err).to.be.not.null;
        expect(err.message).to.be.a.string;
      });
    });
  });
});
