import { assert } from 'chai';
import { add } from '../src/example.js';

// For now some random incomplete
describe('Hello World', () => {
    it('must say Hello World', () => {
        assert.strictEqual('hello world', 'hello world');
    })

    it('must say Hello Universe', () => {
        assert.strictEqual('hello universe', 'hello universe');
    })

    it('must add two numbers', () => {
        assert.strictEqual(add(2, 3), 5);
    })


})