import { assert, expect } from 'chai';
import add from '../src/add.js';

// For now some random incomplete
describe('Testing Add Function', () => {
    it('add() should exist', () => {
        assert.exists(add(1, 2), 'add() Should Exists')
    });

    it('add() should be declared to accept 2 parameters', () => {
        // checks the function's declared arity (# of formal parameters)
        expect(add).to.have.lengthOf(2);
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

    it('add() should return 0 or sum of 1 param + 0 if inputted under 2 params', () => {
        expect(add(1)).to.equal(1);
        expect(add()).to.equal(0);
    });

    it('add() should return a number (0) if inputted a wrong params types', () => {
        expect(add('a', 1)).to.be.a('number', 'expected the result of add() to be a number').and.to.equal(0);
        expect(add('a', 'b')).be.a('number', 'expected the result of add() to be a number').and.to.equal(0);
        expect(add([1, 2, 3], 1)).be.a('number', 'expected the result of add() to be a number').and.to.equal(0);
        expect(add({ 'a': b }, 1)).be.a('number', 'expected the result of add() to be a number').and.to.equal(0);
    });
})
