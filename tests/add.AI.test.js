// test/add.spec.js
import { describe, it } from 'mocha'
import { expect } from 'chai'

import add from '../src/add.js' // <-- adjust path if needed

describe('AI CREATED add TEST', () => {
    it('adds two positive integers', () => {
        expect(add(6, 4)).to.equal(10)
    })

    it('adds a positive and a negative number', () => {
        expect(add(6, -4)).to.equal(2)
        expect(add(-6, 4)).to.equal(-2)
    })

    it('adds two negative numbers', () => {
        expect(add(-6, -4)).to.equal(-10)
    })

    it('adds zero correctly', () => {
        expect(add(0, 5)).to.equal(5)
        expect(add(5, 0)).to.equal(5)
        expect(add(0, 0)).to.equal(0)
    })

    it('handles floating point numbers (within tolerance)', () => {
        expect(add(0.1, 0.2)).to.be.closeTo(0.3, 1e-10)
    })

    it('handles large numbers', () => {
        const a = Number.MAX_SAFE_INTEGER - 1
        const b = 1
        expect(add(a, b)).to.equal(Number.MAX_SAFE_INTEGER)
    })

    // These tests assume createMathOperation’s default value behavior (like lodash):
    it('returns the single argument if the other is undefined', () => {
        expect(add(5, undefined)).to.equal(5)
        expect(add(undefined, 5)).to.equal(5)
    })

    it('returns 0 when both arguments are undefined', () => {
        expect(add(undefined, undefined)).to.equal(0)
    })

    it('coerces numeric strings to numbers (if underlying implementation does)', () => {
        // If your implementation does NOT coerce, change this expectation accordingly.
        expect(add('6', '4')).to.equal(10)
    })
})
