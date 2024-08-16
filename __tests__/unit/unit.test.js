// Import the modules or functions to be tested, and also all the needed dependencies
import gcd from '../../src/modules/calculation/util/gcd.js';
import exp from '../../src/modules/calculation/util/exp.js';
import percentage from '../../src/modules/calculation/util/percentage.js';

/* Create a test suite using the "describe" keyword. Each test can be declared by using the "it" keyword.
Use the expect function to check the value returned from the function under test and compare the actual
value with the expected*/
describe("Unit Tests for the gcd module", () => {
    it("should return 4 for gcd(12, 8)", () => {
        expect(gcd(12, 8)).toBe(4)
    })

    it("should return 4 for gcd(-12, 8)", () => {
        expect(gcd(-12, 8)).toBe(4)
    })

    it("should return 1 for gcd(6, 5)", () => {
        expect(gcd(6, 5)).toBe(1)
    })
});

describe("Unit Tests for the exp module", () => {
    it("should return 8 for exp(2, 3)", () => {
        expect(exp(2, 3)).toBe(8)
    })

    it("should return 0 for exp(0, 8)", () => {
        expect(exp(0, 8)).toBe(0)
    })

    it("should return 1 for exp(8, 0)", () => {
        expect(exp(8, 0)).toBe(1)
    })

    it("should return 1 for exp(1, 100)", () => {
      expect(exp(1, 100)).toBe(1)
    })

    it("should return 0.25 for exp(0.5, 2)", () => {
      expect(exp(0.5, 2)).toBe(0.25)
    })
});

describe("Unit Tests for the percentage module", () => {
  it("should return 50 for gcd(30, 60)", () => {
      expect(percentage(30, 60)).toBe(50)
  })

  it("should return 0 for gcd(0, 100)", () => {
      expect(percentage(0, 100)).toBe(0)
  })

  it("should return 'Infinity' for gcd(1, 0)", () => {
      expect(percentage(1, 0)).toBe(Infinity)
  })
});