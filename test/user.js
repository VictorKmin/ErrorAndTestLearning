let app = require('../app');
const dataBase = require('../dataBase').getInstance();
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('LOGIN USER', () => {
    it('should return tokens', function (done) {
        const user = {
            userInfo: {
                email: 'hellow@gmail.com',
                password: '2222'
            }
        };

        chai.request(app)
            .post('/user/login')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.message.should.have.property('accessToken');
                // res.body.message.should.have.property('accessToken').eql('Some value');
                res.body.message.should.have.property('refreshToken');
                done();
            });
    });
})
