import { describe, it } from 'mocha'
import { expect } from 'chai'
import castArray from '../src/castArray.js'

describe('Testing castArray function', () => {
    it('castArray() should return an array for a number', () => {
        const result = castArray(1)
        expect(result).to.be.an('array')
        expect(result).to.deep.equal([1])
    })

    it('castArray() should return an array for a string', () => {
        const result = castArray('something')
        expect(result).to.be.an('array')
        expect(result).to.deep.equal(['something'])
    })

    it('castArray() should return an array for a boolean', () => {
        const result = castArray(true)
        expect(result).to.be.an('array')
        expect(result).to.deep.equal([true])
    })

    it('castArray() should return an array for null', () => {
        const result = castArray(null)
        expect(result).to.be.an('array')
        expect(result).to.deep.equal([null])
    })

    it('castArray() should return an array for undefined', () => {
        const result = castArray(undefined)
        expect(result).to.be.an('array')
        expect(result).to.deep.equal([undefined])
    })

    it('castArray() should return an array for an object', () => {
        const result = castArray({'a' : 1})
        expect(result).to.be.an('array')
        expect(result).to.deep.equal([{'a' : 1}])
    })

    it('castArray() should return an array  with too many parameters', () => {
        const result = castArray(1,2,3,4,5,6,7,8,9,10)
        expect(result).to.be.an('array')
        expect(result).to.deep.equal([1])
    })

    it('castArray() should return an empty array with no parameters', () => {
        const result = castArray()
        console.log(result)
        expect(result).to.be.an('array')
        expect(result).to.deep.equal([])
    })

})