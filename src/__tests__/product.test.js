global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const mongoose = require('mongoose');
const Doctor = require('../../server/models/Doctor')
const Patient = require('../../server/models/Patient')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const dbHandler = require('./db-handler');
const productService = require('../../server/api/controllers/Auth/AuthController');

const bodyParser = require("body-parser")



//const productModel = require('../src/models/product');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

/**
 * Product test suite.
 */
describe('product ', () => {

    /**
     * Tests that a valid product can be created through the productService without throwing any errors.
     */
    it('can be created correctly', async () => {
        expect(async () => await productService.create(productComplete))
            .not
            .toThrow();
    });
});


beforeAll((done /* Call it or you can remove it */ ) => {
    done(); // Calling it
  });