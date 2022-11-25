//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let server = require('./index.js');

let mongoose = require("mongoose");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();


chai.use(chaiHttp);

describe('Calculator', () => {
   
  describe('/GET sum', () => {
      it('it should sum a + b', (done) => {
        chai.request(server)
            .get('/sum?a=10&b=98')
            .end((err, res) => {
                res.status.should.be.equal(200);
                res.body.should.be.a('object');
                res.body.should.have.property('result').eql(108);
              done();
            });
      });
  });

  describe('/GET sub', () => {
      it('it should sub a - b', (done) => {
        chai.request(server)
            .get('/sub?a=100&b=98')
            .end((err, res) => {
                res.status.should.be.equal(200);
                res.body.should.be.a('object');
                res.body.should.have.property('result').eql(2);
              done();
            });
      });
  });
 
  describe('/GET times', () => {
      it('it should sub a - b', (done) => {
        chai.request(server)
            .get('/times?a=10&b=4')
            .end((err, res) => {
                res.status.should.be.equal(200);
                res.body.should.be.a('object');
                res.body.should.have.property('result').eql(40);
              done();
            });
      });
  });
 
  describe('/GET squared', () => {
      it('it should sub a ^ 2', (done) => {
        chai.request(server)
            .get('/squared?a=3')
            .end((err, res) => {
                res.status.should.be.equal(200);
                res.body.should.be.a('object');
                res.body.should.have.property('result').eql(9);
              done();
            });
      });
  });

});