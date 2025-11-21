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


})
