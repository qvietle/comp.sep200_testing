import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('Testing reduce function', () => {
    describe('reduce() returns a correct value with proper collection, iteratee, and accumulator', () => {
        it('reduce() returns a correct value with proper collection', () => {
            const collection = [1,2,3,4,5]
            const iteratee = (sum, n) => {
                return sum + n
            }
            const accumulator = 0
            const result = reduce(collection, iteratee, accumulator)
            expect(result).to.equal(15)

            const collection5 = {'1' : 1, '2' : 2, '3' : 3, '4' : 4, '5' : 5}
            const result5 = reduce(collection5, iteratee, accumulator)
            expect(result5).to.equal(15)
            })

        it('reduce() returns a correct value with proper collection and iteratee', () => {
            const collection2 = [4, 8]
            const iteratee2 = (sum, n) => {
                return sum + 2*n
            }
            const accumulator2 = 5
            const result2 = reduce(collection2,iteratee2, accumulator2)

            expect(result2).to.equal(29)
        })

        it('reduce() returns a correct value with proper collection, iteratee, and accumulator', () => {
            const collection3 = [4,2,6]
            const iteratee3 = (sum, n) => {
                return sum*n
            }
            const accumulator3 = -10
            const result3 = reduce(collection3, iteratee3, accumulator3)
            expect(result3).to.equal(-480)

        })

        it('reduce() returns a correct value with an empty collection', () => {
            const collection4 = []
            const iteratee = (sum, n) => {
                return sum + n
            }
            const accumulator = 0
            const result4 = reduce(collection4, iteratee, accumulator)
            expect(result4).to.equal(0)
        })

    })

    describe('reduce() behaves correctly with improper collection, iteratee, or accumulator', () => {
        it('reduce() does nothing if collection is a single value', () => {
            const collection = 5
            const iteratee = (sum, n) => {
                return sum + n
            }
            const accumulator = 0
            const result = reduce(collection, iteratee, accumulator)
            expect(result).to.equal(0)
        })

        it('reduce() throws an error if iteratee is not a function', () => {
            const collection2 = [4, 8]
            const iteratee2 = 4
            const accumulator2 = 5
            expect(() => reduce(collection2,iteratee2, accumulator2)).to.throw(TypeError)
        })

        it('reduce() returns a NaN value if accumulator is not a number', () => {
            const collection3 = [4,2,6]
            const iteratee3 = (sum, n) => {
                return sum*n
            }
            const accumulator3 = 'accumulator'
            const result3 = reduce(collection3, iteratee3, accumulator3)
            expect(result3).to.be.NaN
        })
        

    })
})