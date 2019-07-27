import chai from 'chai';
import chaiHttp from 'chai-http';
import app from 'tp-node/app';

chai.use(chaiHttp);
const {expect, request} = chai;

describe('Controller users', async(): Promise<void> => {

    before(async(): Promise<void> => {
        await app;
    });

    describe('get()', async (): Promise<void> => {
        it('should return a user', async(): Promise<void> => {
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
