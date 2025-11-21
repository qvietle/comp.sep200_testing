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

    // true cases
    it('eq() returns true for equal numbers', () => {
        expect(eq(1, 1)).to.be.true
    });

    it('eq() returns true for equal strings', () => {
        expect(eq('a', 'a')).to.be.true
    });

    it('eq() returns true for equal types', () => {
        expect(eq(typeof 'a', typeof 'a')).to.be.true
    });

    it('eq() returns true for equal single-element arrays', () => {
        expect(eq(['a'], ['a']), "[] == [] expected to return true").to.be.true
    });

    it('eq() returns true for equal numeric arrays', () => {
        expect(eq([1, 2, 3], [1, 2, 3])).to.be.true
    });

    it('eq() returns true for equal objects with same keys and values', () => {
        expect(eq({ 'a': 1 }, { 'a': 1 })).to.be.true
    });

    it('eq() returns true for equal boolean values', () => {
        expect(eq(true, true)).to.be.true
        expect(eq(false, false)).to.be.true
    });

    it('eq() returns true for equal NaNs', () => {
        expect(eq(NaN, NaN)).to.be.true
    });

    it('eq() returns true for 0 and -0 values', () => {
        expect(eq(0, -0)).to.be.true
    });


    // false cases
    it('eq() returns false for different boolean values', () => {
        expect(eq(false, true)).to.be.false
        expect(eq(true, false)).to.be.false
    });

    it("eq() returns false for Loose equality 0 and '0'", () => {
        expect(eq(0, '0')).to.be.false
    });

    it('eq() returns false for Primitive vs wrapper object', () => {
        expect(eq('a', Object('a'))).to.be.false
    });

    it('eq() returns false for different numbers', () => {
        expect(eq(1, 2)).to.be.false
    });

    it('eq() returns false for different types', () => {
        expect(eq(typeof 1, typeof 'a')).to.be.false
    });

    it('eq() returns false for different strings', () => {
        expect(eq('a', 'b')).to.be.false
    });

    it('eq() returns false for different single-element arrays', () => {
        expect(eq(['a'], ['b']), "[] == [] expected to return False").to.be.false
    });

    it('eq() returns false for different numeric arrays', () => {
        expect(eq([1, 2, 3], [1, 2, 4])).to.be.false
    });

    it('eq() returns false for different objects', () => {
        expect(eq({ 'a': 1 }, { 'b': 2 })).to.be.false
    });

    // argument count behavior
    it('eq() returns a boolean when given more than 2 arguments', () => {
        expect(eq(1, 2, 3)).to.be.a('boolean');
    });

    it('eq() returns a boolean when given only 1 argument', () => {
        expect(eq(1)).to.be.a('boolean');
    });

})