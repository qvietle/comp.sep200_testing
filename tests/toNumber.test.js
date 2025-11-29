import { expect } from 'chai' 
import toNumber from '../src/toNumber.js'

describe('Testing toNumber function', () => {
    it('toNumber() returns a correct value for number strings', () => {
        const number = toNumber('123')
        expect(number).to.be.a('number')
        expect(number).to.equal(123)

        const number2 = toNumber('00400')
        expect(number2).to.be.a('number')
        expect(number2).to.equal(400)

        const number3 = toNumber('5')
        expect(number3).to.be.a('number')
        expect(number3).to.equal(5)

        const number4 = toNumber('000000')
        expect(number4).to.be.a('number')
        expect(number4).to.equal(0)

        const number5 = toNumber('000.5')
        expect(number5).to.be.a('number')
        expect(number5).to.equal(0.5)

        const number6 = toNumber('0152.002000')
        expect(number6).to.be.a('number')
        expect(number6).to.equal(152.002)

        const number7 = toNumber('1e-5')
        expect(number7).to.be.a('number')
        expect(number7).to.equal(0.00001)
    })
    it('toNumber() returns correct values for non number strings', () => {
        const number1 = toNumber('')
        expect(number1).to.be.a('number')
        expect(number1).to.equal(0)

        const number2 = toNumber('one')
        expect(number2).to.be.NaN

        const number3 = toNumber('24i12')
        expect(number3).to.be.a('number')
        expect(number3).to.be.NaN
    
        const number4 = toNumber('0,1')
        expect(number4).to.be.a('number')
        expect(number4).to.be.NaN
    })

    it('toNumber() returns correct values for other data types', () => {
        const number1 = toNumber({'2': 3})
        expect(number1).to.be.a('number')
        expect(number1).to.be.NaN

        const number2 = toNumber(true)
        expect(number2).to.be.a('number')
        expect(number2).to.equal(1)

        const number3 = toNumber(false)
        expect(number3).to.be.a('number')
        expect(number3).to.equal(0)

        const number4 = toNumber(Symbol())
        expect(number4).to.be.a('number')
        expect(number4).to.be.NaN

        const number5 = toNumber(1020)
        expect(number5).to.be.a('number')
        expect(number5).to.equal(1020)

        
    })
})