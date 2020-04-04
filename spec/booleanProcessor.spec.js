
var bp = require("../code/booleanProcessor.js");

describe('Tests the getOpposite function', () => {
    it('Gets in true, returns false', () => {
        // arrange
        let bool = true;

        // act
        const result = bp.getOpposite(bool);

        // assert
        expect(result).toBe(false);
    });

    it('Gets in false, returns true', () => {
        // arrange
        let bool = false;

        // act
        const result = bp.getOpposite(bool);

        // assert
        expect(result).toBe(true);
    });
});

describe('Tests the isTrue function', () => {
    it('Gets in true, returns true', () => {
        let bool = true;
        const result = bp.isTrue(bool);
        expect(result).toBe(true);
    });

    it('Gets in false, returns false', () => {
        let bool = false;
        const result = bp.isTrue(bool);
        expect(result).toBe(false);
    });
});

describe('Tests the isFalse function', () => {
    it('Gets in true, returns false', () => {
        let bool = true;
        const result = bp.isFalse(bool);
        expect(result).toBe(false);
    });
    
    it('Gets in false, returns true', () => {
        let bool = false;
        const result = bp.isFalse(bool);
        expect(result).toBe(true);
    });
});