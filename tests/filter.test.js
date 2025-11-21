const assert = require('chai').assert;
const { expect } = require('chai');
const filter = require('../src/filter').default;

// For now some random incomplete
describe('Testing filter() Function', () => {
    it('filter() should exist', () => {
        assert.exists(filter, 'filter() Should Exist')
    });

    it('filter() should receive 2 arguments/parameters', () => {
        expect(filter).to.have.a.lengthOf(2)
    });

    it('filter() should return array of elements according to predicate', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(filter(arr, (elem) => { return elem && elem % 2 == 0 })).to.be.equals([2, 4, 6, 8, 10])
    });


    it('filter() should return a boolean even if given over/under 2 params/args', () => {
        expect(filter(1, 2, 3)).to.be.a('');
        expect(filter(1)).to.be.a('');
    });

})