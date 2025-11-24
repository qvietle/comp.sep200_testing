// test/eq.spec.js
import { describe, it } from 'mocha'
import { expect } from 'chai'

import eq from '../src/eq.js' // <-- adjust path if needed

describe('AI CREATED eq TEST', () => {
    it('returns true when comparing the same object reference', () => {
        const object = { a: 1 }
        expect(eq(object, object)).to.equal(true)
    })

    it('returns false for different objects with same contents', () => {
        const object = { a: 1 }
        const other = { a: 1 }
        expect(eq(object, other)).to.equal(false)
    })

    it('returns true for equal primitive strings', () => {
        expect(eq('a', 'a')).to.equal(true)
    })

    it('distinguishes primitive string from String object', () => {
        expect(eq('a', Object('a'))).to.equal(false)
    })

    it('treats NaN as equal to NaN', () => {
        expect(eq(NaN, NaN)).to.equal(true)
    })

    it('treats 0 and -0 as equal (SameValueZero semantics)', () => {
        expect(eq(0, -0)).to.equal(true)
    })

    it('returns true for equal numbers', () => {
        expect(eq(42, 42)).to.equal(true)
        expect(eq(3.14, 3.14)).to.equal(true)
    })

    it('returns false for different numbers', () => {
        expect(eq(1, 2)).to.equal(false)
    })

    it('returns true for identical booleans', () => {
        expect(eq(true, true)).to.equal(true)
        expect(eq(false, false)).to.equal(true)
    })

    it('returns false for different booleans', () => {
        expect(eq(true, false)).to.equal(false)
    })

    it('treats null and undefined as not equal', () => {
        expect(eq(null, undefined)).to.equal(false)
    })

    it('returns true when both values are null or both undefined', () => {
        expect(eq(null, null)).to.equal(true)
        expect(eq(undefined, undefined)).to.equal(true)
    })
})
