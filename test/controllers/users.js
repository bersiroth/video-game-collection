// @flow
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from 'tp-node/app';

chai.use(chaiHttp);
const { expect, request } = chai;

describe('Controller users', () => {
  describe('get()', () => {
    it('should return a user', () => {
      request(app).get('/users').end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      });
    });
  });

  describe('create()', () => {
    it('should create a user', () => {

    });

    it('should create a user with error', () => {

    });
  });
});
