const expect = require('chai').expect;
const request = require('supertest');
//const {Schema, model} = require('mongoose')
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const mongoose = require('mongoose');
const Doctor = require('../../server/models/Doctor')
const Patient = require('../../server/models/Patient')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const morgan = require("morgan")
const fileUpload = require('express-fileupload')
mongoose.Promise = require('bluebird');
//const app = require('../../server/server')

const Register = require('../../server/api/controllers/Auth/AuthController');
const conn = require('../../server/app');
//const Patient = require('../server/models/Patient');



describe('POST /user', () => {
  beforeAll((done) => {
    conn.connect()
      .then(() => done())
      .catch((err) => done(err));
  })
  afterAll((done) => {
    conn.close()
      .then(() => done())
      .catch((err) => done(err));
  })
  
  it('OK, creating a new user', (done) => {
    request(Register).post('/api/v1/auth/register')
      .send({ role: 'patient', email: "test@outlook.com", pasword:'12345678' })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('_id');
        expect(body).to.contain.property('email');
        expect(body).to.contain.property('password');
        done();
      })
    })
      .catch((err) => done(err));
  
  })