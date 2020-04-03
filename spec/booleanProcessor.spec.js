
var bp = require("../code/booleanProcessor.js");

describe('Tests the getOpposite function', () => {
    it('Gets in true, returns false', () => {
        // arrange
        let bool = true;

        // act
        const result = bp.getOpposite(bool);

        // assert
        expect(result).toBe(false);
    })

    it('Gets in false, returns true', () => {
        // arrange
        let bool = false;

        // act
        const result = bp.getOpposite(bool);

        // assert
        expect(result).toBe(true);
    })
});