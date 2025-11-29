import { assert, expect } from 'chai';
import map from '../src/map.js';

describe('Testing map function', () => {
    it ('map() should transform an array with proper iteratee ', () => {
        function square(n){
            return n*n
        }

        function nothing(n){
            return n
        }

        expect(map([1,2,3,4,5], square)).to.deep.equal([1,4,9,16,25])
        expect(map([1,2,3,4,5], nothing)).to.deep.equal([1,2,3,4,5])
        expect(map(map([1,2,3,4,5], square), nothing)).to.deep.equal([1,4,9,16,25])
    })

    it ('map() should transform an array with proper iteratee and indeces ', () => {
        function square(n, i){
            return n*n+i
        }
        expect(map([1,2,3,4,5], square)).to.deep.equal([1,5,11,19,29])
    })

    it ('map() should transform an array with proper iteratee, indeces, and array', () => {

        function square(n, i, array){
            return n*n+i+array.length
        }
        expect(map([1,2,3,4,5],square)).to.deep.equal([6,10,16,24,34])
    })

    it ('map() should return the same array with no proper iteratee', () => {
        expect(() => map([1,2,3,4,5])).to.throw(TypeError)
        expect(() => map([1,2,3,4,5]), 'function').to.throw(TypeError)
    })

    it ('map() should return the same array with no proper iteratee', () => {
        expect(() => map([1,2,3,4,5])).to.throw(TypeError)
        expect(() => map([1,2,3,4,5]), 'function').to.throw(TypeError)
    })
    
    it ('map() should return an empty array for mapping over an empty array', () => {
        
        function square(n){
            return n*n
        }
        expect(map([], square)).to.deep.equal([])
    })
    
})