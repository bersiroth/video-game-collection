// @flow
import Validator from 'tp-node/services/validator';
import userSchema from 'tp-node/schemas/users';
import { expect } from 'chai';

export default () => {
  const validator = new Validator();

  describe('validate()', () => {
    it('should validate without error', () => {
      const user = {
        firstname: 'bernard',
        lastname: 'bernard',
      };
      validator.validate(user, userSchema, (err) => {
        expect(err).to.be.null;
      });
    });

    it('should validate with error', () => {
      const user = {
        firstnamee: 'bernard',
        lastname: 'bernard',
      };
      validator.validate(user, userSchema, (err) => {
        expect(err).to.be.not.null;
      });
    });
  });
};
