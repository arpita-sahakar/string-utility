// we will be using jest module for our testing

// This js file will contain all the tests for utility.js
const { expect } = require("@jest/globals");
const { SummaryReporter } = require("@jest/reporters");
const Utility = require("./../utility");

const utilityObj = new Utility();
//Categorization
//This represents all the tests (Test Suite) for Utility
describe("Utility", () => {
  //This represents all the tests for reverse function only
  describe("reverse", () => {
    //Test case 1 - Positive
    it("should return a reversed string if a non empty string is passed as input", () => {
      let inputString = "abcd";
      let expectedResult = "dcba";
      expect(utilityObj.reverse(inputString)).toEqual(expectedResult);
    });

    //Test case 2 - negative
    it("should return a empty string if a empty string is passed as input", () => {
      let inputString = "";
      let expectedResult = "";
      expect(utilityObj.reverse(inputString)).toEqual(expectedResult);
    });

    //Test case 3 - negative
    it("should return a space string if a space string is passed as input", () => {
      let inputString = " ";
      let expectedResult = " ";
      expect(utilityObj.reverse(inputString)).toEqual(expectedResult);
    });

    //Test case 4 - negative
    it("should return a reversed string if a negative number is passed as input", () => {
      let inputString = -123;
      let expectedResult = "321-";
      expect(utilityObj.reverse(inputString)).toEqual(expectedResult);
    });

    //Test case 5 - negative
    it("should return a null if a null string is passed as input", () => {
      let inputString = null;
      let expectedResult = null;
      expect(utilityObj.reverse(inputString)).toEqual(expectedResult);
    });
  });

  //This represents all the tests for isPalindrome function only
  describe("isPalindrome", () => {
    //Test case 1 - Positive
    it("should return true if abcba is passed as input", () => {
      let inputString = "abcba";
      let expectedResult = true;
      expect(utilityObj.isPalindrome(inputString)).toEqual(expectedResult);
    });

    //Test case 2 - Positive
    it("should return true if 1234321 is passed as input", () => {
      let inputString = 1234321;
      let expectedResult = true;
      expect(utilityObj.isPalindrome(inputString)).toEqual(expectedResult);
    });

    //Test case 3 - Negative
    it("should return false if abcb is passed as input", () => {
      let inputString = "abcb";
      let expectedResult = false;
      expect(utilityObj.isPalindrome(inputString)).toEqual(expectedResult);
    });

    //Test case 4 - Negative
    it("should return false if 1234 is passed as input", () => {
      let inputString = 1234;
      let expectedResult = false;
      expect(utilityObj.isPalindrome(inputString)).toEqual(expectedResult);
    });
    //Test case 5 - Positive
    it("should return a true if a space string is passed as input", () => {
      let inputString = " ";
      let expectedResult = true;
      expect(utilityObj.isPalindrome(inputString)).toEqual(expectedResult);
    });
    //Test case 6 - Positive
    it("should return a true if an empty string is passed as input", () => {
      let inputString = "";
      let expectedResult = true;
      expect(utilityObj.isPalindrome(inputString)).toEqual(expectedResult);
    });
    //Test case 7 - Negative
    it("should return a false if a null string is passed as input", () => {
      let inputString = null;
      let expectedResult = false;
      expect(utilityObj.isPalindrome(inputString)).toEqual(expectedResult);
    });
  });

  describe("sum", () => {
    //Test case 1 - Positive
    it("should return 18 if 5,6,7 is passed as input", () => {
      expect(utilityObj.sums(5, 6, 7)).toEqual(18);
    });

    //Test case 2 - Positive
    it("should return 6 if 5,-6,7 is passed as input", () => {
      expect(utilityObj.sums(5, -6, 7)).toEqual(6);
    });

    //Test case 3 - Positive
    it("should return 11.1 if 0.1, 5,6 is passed as input", () => {
      expect(utilityObj.sums(0.1, 5, 6)).toEqual(11.1);
    });

    //Test case 4 - Negative
    it("should throw an error -input is not a number if 5,6,7,a,b, is passed as input", () => {
      const cb = () => utilityObj.sums(5, 6, 7, "a", "b");
      const err = new Error("input is not a number");
      expect(cb).toThrowError(err);
    });
  });
});
