import { assert, expect } from 'chai';
import get from '../src/get.js';

describe('Testing get function', () => {
    it('get() returns a correct value', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a[0].b.c')).to.deep.equal(3)

        const object2 = {'shirt': {'color' : 'black', 'price' : {'normal' : 100, 'sale' : 50} }}
        expect(get(object2, 'shirt.color')).to.equal('black')
        expect(get(object2, 'shirt.price.normal')).to.equal(100)
        expect(get(object2, 'shirt.price.sale')).to.equal(50)
    })

    it('get() returns undefined for undefined paths with no default value ', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a[0].b.d')).to.deep.equal(undefined)

        const object2 = {'shirt': {'color' : 'black', 'price' : {'normal' : 100, 'sale' : 50} }}
        expect(get(object2, 'shirt.colour')).to.equal(undefined)
        expect(get(object2, 'shirt.price.inflation')).to.equal(undefined)
        expect(get(object2, 'shirt.bird.first')).to.equal(undefined)
    })

    it('get() returns undefined for undefined paths with no default value ', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a[0].b.d')).to.deep.equal(undefined)

        const object2 = {'shirt': {'color' : 'black', 'price' : {'normal' : 100, 'sale' : 50} }}
        expect(get(object2, 'shirt.colour')).to.equal(undefined)
        expect(get(object2, 'shirt.price.inflation')).to.equal(undefined)
        expect(get(object2, 'shirt.bird.first')).to.equal(undefined)
    })

    it('get() returns default values for undefined paths with a default value ', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a[0].b.d', 6)).to.deep.equal(6)

        const object2 = {'shirt': {'color' : 'black', 'price' : {'normal' : 100, 'sale' : 50} }}
        expect(get(object2, 'shirt.colour', 'white')).to.equal('white')
        expect(get(object2, 'shirt.price.inflation', 0)).to.equal(0)
        expect(get(object2, 'shirt.bird.first','default')).to.equal('default')
    })
})