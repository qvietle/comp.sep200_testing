const assert = require('chai').assert;
const { expect } = require('chai');
const add = require('../src/add').default;

// For now some random incomplete
describe('Testing Functions', () => {
    console.log(add(1, 2))

    it('add() should exist', () => {
        assert.exists(add(1, 2), 'add() Should Exists')
    });

    it('add() should be declared to accept 2 parameters', () => {
        // checks the function's declared arity (# of formal parameters)
        expect(add).to.have.lengthOf(2);
    });
    it('add() should receive 2 (numerical type) paramaters', () => {
        // ensure example inputs are numbers
        expect(-5).to.be.a('number');
        expect(3).to.be.a('number');
    });

    it('add() should add 2 integer numbers', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('add() should add 2 float/double numbers', () => {
        expect(add(2.1, 3.4)).to.equal(5.5);
    });

    it('add() should add 2 opposite sign numbers', () => {
        expect(add(-2, 3)).to.equal(1);
    });

    it('add() should add 2 numbers to negative result', () => {
        expect(add(-5, 3)).to.equal(-2);
    });

    it('add() should return 0 if inputted over 2 params', () => {
        expect(add(1, 2, 3)).to.equal(0);
    });
})