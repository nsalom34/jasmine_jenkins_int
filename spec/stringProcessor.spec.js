
var sp = require("../code/stringProcessor.js");

describe('Test suite for the firstChar function', () => {
    it('Return a', () => {
        // arrange
        let str = "Avadakedabra";

        // act
        const result = sp.firstChar(str);

        // assert
        expect(result).toBe("A");
    });
});
describe('Test suite for the stringLength function', () => {
    it('Returns 5', () => {
        // arrange
        let str = "Qwert";

        // act
        const result = sp.stringLength(str);

        // assert
        expect(result).toBe(5);
    });
});