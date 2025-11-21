import { assert, expect } from 'chai';
import words from '../src/words.js';

// For now some random incomplete
describe('Testing words Function', () => {
    it('words() should exist', () => {
        assert.exists(words, 'words() Should Exists')
    });

    it('words() should be declared to accept 2 parameters', () => {
        // checks the function's declared arity (# of formal parameters)
        expect(words).to.have.lengthOf(2);
    });

    it('words() Basic ASCII sentence with punctuation', () => {
        expect(words('fred, barney, & pebbles')).to.deep.equal(['fred', 'barney', 'pebbles']);
    });

    it('words() String with only punctuation / spaces should return empty array', () => {
        expect(words(' , , ')).to.deep.equal([]);
    });

    it('words() Empty String should return empty array', () => {
        expect(words('')).to.deep.equal(['']);
    });

    it('words() string with numbers and letters', () => {
        expect(words('Order123 shipped')).to.deep.equal(['Order123', 'shipped']);
    });

    it('words() Unicode / accented characters', () => {
        expect(words('café latte')).to.deep.equal(['café', 'latte']);
        expect(words('привет мир')).to.deep.equal(['привет', 'мир']);

    });

    it('words() Emojis and special characters (ignore emojis)', () => {
        expect(words('Sale 🔥 today')).to.deep.equal(['Sale', 'today']);
    });

    it('words() missing input should return empty array', () => {
        expect(words()).to.deep.equal([]);
    });

    // With pattern
    it('words() Basic ASCII sentence with punctuation pattern regex', () => {
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
    });

    it('words() no matches pattern', () => {
        expect(words('no-matches-here', /\d+/g)).to.deep.equal([]);
    });

    it('words() Unicode with custom patterns', () => {
        expect(words('café au lait', /\S+/g)).to.deep.equal(['café', 'au', 'lait']);
    });

    // Input parameter number testing
    it('words() Should throw an error if too many arguments', () => {
        expect(words('word1 word2 word3', /\S+/g, 'Extra ARG')).to.throw("Error: Too many arguments");
    });

    it('words() Should throw an error if argument types are wrong', () => {
        expect(words(1, [])).to.throw("Error: Argument Types are wrong. Expected String and String/Regex");
    });
})
