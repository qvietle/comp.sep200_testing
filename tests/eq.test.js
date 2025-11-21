import { assert, expect } from 'chai';
import eq from '../src/eq.js';

// For now some random incomplete
describe('Testing eq() Function', () => {
    it('eq() should exist', () => {
        assert.exists(eq, 'eq() Should Exists')
    });

    it('eq() should receive 2 arguments/parameters', () => {
        expect(eq).to.have.a.lengthOf(2)
    });

    it('eq() should return true for same values', () => {
        expect(eq(1, 1)).to.be.true
        expect(eq('a', 'a')).to.be.true
        expect(eq(typeof 'a', typeof 'a')).to.be.true
        expect(eq(['a'], ['a']), "[] == [] expected to return true").to.be.true
        expect(eq([1, 2, 3], [1, 2, 3])).to.be.true
        expect(eq({ 'a': 1 }, { 'a': 1 })).to.be.true
    });

    it('eq() should return false for different values', () => {
        expect(eq(1, 2)).to.be.false
        expect(eq(typeof 1, typeof 'a')).to.be.false
        expect(eq('a', 'b')).to.be.false
        expect(eq(['a'], ['b']), "[] == [] expected to return False").to.be.false
        expect(eq([1, 2, 3], [1, 2, 4])).to.be.false
        expect(eq({ 'a': 1 }, { 'b': 2 })).to.be.false
    });

    it('eq() should return a boolean even if given over/under 2 params/args', () => {
        expect(eq(1, 2, 3)).to.be.a('boolean');
        expect(eq(1)).to.be.a('boolean');
    });

})