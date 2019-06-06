// @flow
import Validator from 'tp-node/services/validator';
import chai from 'chai';

const { expect } = chai;

export default () => {
  const validator = new Validator();

  describe('validate()', () => {
    it('should validate', () => {
      expect(validator.validate('test')).to.be.a('string');
    });
  });
};
