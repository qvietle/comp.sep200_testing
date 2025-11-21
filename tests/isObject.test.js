import { assert, expect } from 'chai';
import isObject from '../src/isObject.js';

// For now some random incomplete
describe('Testing isObject Function', () => {
    it('isObject() should exist', () => {
        assert.exists(isObject(1), 'isObject() Should Exists')
    });

    it('isObject() should be declared to accept 1 parameters', () => {
        // checks the function's declared arity (# of formal parameters)
        expect(isObject).to.have.lengthOf(1);
    });

    it('isObject() should be a plain object', () => {
        expect(isObject({ id: 1, username: "Pauler" })).to.be.true
    });

    it('isObject() should be array', () => {
        expect(isObject([1, 2, 3, 4])).to.be.true
    });

    it('isObject() should return True for Date Object', () => {
        expect(isObject(new Date())).to.be.true
    });

    it('isObject() should return True for /promo/i ', () => {
        expect(isObject(/promo/i)).to.be.true
    });

    it('isObject() should return true for New Number(0)', () => {
        expect(isObject(new Number(0))).to.be.true
    });

    it('isObject() should return True for new String("SKU")', () => {
        expect(isObject(new String('SKU'))).to.be.true
    });

    // Returning False
    it('isObject() should return False for null/undefined input', () => {
        expect(isObject(null)).to.be.false
        expect(isObject(undefined)).to.be.false
    });

    it('isObject() should return False for  primitive type variables', () => {
        expect(isObject(123)).to.be.false
        expect(isObject('text')).to.be.false
        expect(isObject(true)).to.be.false
        expect(isObject(Symbol('id'))).to.be.false
        expect(isObject(10n)).to.be.false
    });
})
