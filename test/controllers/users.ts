import chai from 'chai';
import chaiHttp from 'chai-http';
import app from 'tp-node/app';

chai.use(chaiHttp);
const {expect, request} = chai;

describe('Controller users', (): void => {
    describe('get()', (): void => {
        it('should return a user', (): void => {
            request(app).get('/users').end((err, res): void => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
            });
        });
    });

    describe('create()', (): void => {
        it('should create a user', (): void => {

        });

        it('should create a user with error', (): void => {

        });
    });
});
