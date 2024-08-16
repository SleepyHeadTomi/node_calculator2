// Import the module or function to be tested, and also all the needed dependencies
import numberCruncher from "../../src/modules/calculation/numberCruncher.js";


/* Create a test suite by using the "decribe" keyword. Each test can be declared with the "it" keyword.
As with the unit tests, you'll be using the expect function to compare the actual value (the calculatons 
done in numberCruncher) and the expected value.
Even though this is an test for integration, some unit test will also be performed.*/
describe("Integration Tests for the numberCruncher module", () => {
  it("should add 2 and 3 and return 5", () => {
    const calc = {numOne: "2", numTwo: "3", operator: "add"};
    expect(numberCruncher(calc)).toBe(5);
  })

  it("should subtract 5 and 3 and return 2", () => {
    const calc = {numOne: "5", numTwo: "3", operator: "subtract"};
    expect(numberCruncher(calc)).toBe(2);
  })

  it("should multiply 5 and 3 and return 15", () => {
    const calc = {numOne: "5", numTwo: "3", operator: "multiply"};
    expect(numberCruncher(calc)).toBe(15);
  })

  it("should divide 9 and 3 and return 3", () => {
    const calc = {numOne: "9", numTwo: "3", operator: "divide"};
    expect(numberCruncher(calc)).toBe(3);
  })

  it("should return 4 when using gcd on 12 and 8", () => {
    const calc = {numOne: "12", numTwo: "8", operator: "gcd"};
    expect(numberCruncher(calc)).toBe(4);
  })

  it("should return 8 when using exp on 2 and 3", () => {
    const calc = {numOne: "2", numTwo: "3", operator: "exponent"};
    expect(numberCruncher(calc)).toBe(8);
  })

  it("should return 50 when using percentage on 3 and 6", () => {
    const calc = {numOne: "3", numTwo: "6", operator: "percentage"};
    expect(numberCruncher(calc)).toBe(50);
  })
});