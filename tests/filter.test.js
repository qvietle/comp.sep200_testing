const assert = require('chai').assert;
const { expect } = require('chai');
const filter = require('../src/filter').default;

// For now some random incomplete
describe('Testing filter() Function', () => {
    it('filter() should exist', () => {
        assert.exists(filter, 'filter() Should Exist')
    });

    it('filter() should receive 2 arguments/parameters', () => {
        expect(filter).to.have.lengthOf(2)
    });

    it('filter() should return array according to predicate', () => {
        const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const arr2 = ['a', 2.7, 'b', 4, 5, 'c', 7, 8, 'd', 10.4]
        const arr3 = [1.1, 2, "thisOne", 4, 5, 6, "thatOne", 8, 9.2, 10]
        const dict1 = {
            'a': 1,
            'b': 2,
            'c': 3,
            'd': 4,
            'e': 5
        }


        expect(filter(arr1, (elem) => { return elem && elem % 2 == 0 })).to.deep.equal([2, 4, 6, 8, 10])
        expect(filter(arr2, (elem) => { return elem && typeof elem == typeof "" })).to.deep.equal(['a', 'b', 'c', 'd'])
        expect(filter(arr2, (elem) => { return elem && typeof elem === 'number' && Number.isInteger(elem) })).to.deep.equal([4, 5, 7, 8])
        expect(filter(arr2, (elem) => { return elem && typeof elem === 'number' && !Number.isInteger(elem) })).to.deep.equal([2.7, 10.4])

    });


    it('filter() should return an array even if given over/under 2 params/args', () => {
        expect(filter(1, 2, 3)).to.be.a('array');
        expect(filter(1)).to.be.a('array');
    });

})