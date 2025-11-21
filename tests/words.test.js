import { assert, expect } from 'chai';
import words from '../src/words.js';

// For now some random incomplete
describe('Testing words Function', () => {
    it('words() should exist', () => {
        assert.exists(words, 'words() Should Exists')
    });

    it('words() should be declared to accept 2 parameters', () => {
        // checks the function's declared arity (# of formal parameters)
        expect(words).to.have.lengthOf(2);
    });

})
