'use strict';
process.env.NODE_ENV = 'TEST';

var chai = require('chai');
var chaihttp = require('chai-http');
var APIserver = require('../APIserver.js');
var app = APIserver;
chai.use(chaihttp);

// crenwick/sea-b24-simple-express-json-api was consulted on this code.
describe('Simple JSON API test', function () {
    it("/whattimeisit/ should get the time", function (done) {
        chai.request(app)
            .get('/whattimeisit')
            .end(function (err, res) {
                chai.expect(err).to.be.null;
                chai.expect(res.body.min).to.equal(
                    new Date().getMinutes());
                done();  // signals done
            });
    });

    it('/greetwithobject/:name should say Hello Name!', function (done) {
        chai.request(app)
            .post('/greetwithobject/:gadZooks')
            .end(function (err, res) {
                chai.expect(err).to.be.null;
                chai.expect(res.body.msg).to.equal('Hello GadZooks!');
                done();
            });
    });
});

