import { assert, expect } from 'chai';
import filter from '../src/filter.js';

// For now some random incomplete
describe('Testing filter() Function', () => {
    it('filter() should exist', () => {
        assert.exists(filter, 'filter() Should Exist')
    });

    it('filter() should receive 2 arguments/parameters', () => {
        expect(filter).to.have.lengthOf(2)
    });

    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arr2 = ['a', 2.7, 'b', 4, 5, 'c', 7, 8, 'd', 10.4];
    const arr3 = [1.1, 2, "thisOne", 4, 5, 6, "thatOne", 8, 9.2, 10];
    const dict1 = [
        { 'a': true },
        { 'a': true },
        { 'a': false },
        { 'a': true },
        { 'a': false }
    ];

    it('filter() should return array with no mutations', () => {
        expect(filter(arr1, (elem) => elem)).to.deep.equal(arr1);
        expect(filter(arr2, (elem) => elem)).to.deep.equal(arr1);
        expect(filter(arr3, (elem) => elem)).to.deep.equal(arr1);
        expect(filter(dict1, (elem) => elem)).to.deep.equal(arr1);
    });
    it('filter() should return empty array when inputted an empty array', () => {
        expect(filter([], (elem) => elem)).to.deep.equal([arr1]);
    });

    it('filter() should point to the same references/objects are not cloned', () => {
        result = filter(arr1, (elem) => elem)
        expect(result[0]).to.equal(original[1])
    })

    it('filter() should return even numbers and truthy values for arr1', () => {
        expect(filter(arr1, (elem) => { return elem && elem % 2 == 0 })).to.deep.equal([2, 4, 6, 8, 10]);
        expect(filter(arr1, (elem) => { return elem })).to.deep.equal(arr1);
    });

    it('filter() should select strings, integers and non-integers from arr2', () => {
        expect(filter(arr2, (elem) => { return elem && typeof elem === 'string' })).to.deep.equal(['a', 'b', 'c', 'd']);
        expect(filter(arr2, (elem) => { return elem && typeof elem === 'number' && Number.isInteger(elem) })).to.deep.equal([4, 5, 7, 8]);
        expect(filter(arr2, (elem) => { return elem && typeof elem === 'number' && !Number.isInteger(elem) })).to.deep.equal([2.7, 10.4]);
    });

    it('filter() should find strings containing "One" in arr3', () => {
        expect(filter(arr3, (elem) => { return elem && typeof elem === 'string' && elem.includes('One') })).to.deep.equal(['thisOne', 'thatOne']);
    });

    it('filter() should filter object properties according to predicate', () => {
        expect(filter(dict1, ({ a }) => { return a && a === true })).to.deep.equal([
            { 'a': true }, { 'a': true }, { 'a': true }]);
    });
    it('filter() should return an empty arr', () => {
        expect(filter(arr1, (elem) => { return })).to.deep.equal([])
    });

    it('filter() should return an array even if given over/under 2 params/args', () => {
        expect(filter(1, 2, 3)).to.be.a('array');
        expect(filter(1)).to.be.a('array');
    });

    it('filter() should throw an error if not predicate is given', () => {
        expect(filter(arr1, null)).to.throw(Function, 'This functions expects a predicate');
    })

    it('filter() sparse arrays/holes', () => {
        expect(filter(arr2, (elem) => { return elem && elem !== undefined })).to.deep.equal(arr2);
    })

})