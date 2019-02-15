let assert = require("assert");
let Phrase = require("../index.js");

describe ("Phrase", function() {
  describe("#palindrome", function() {
    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    })
    it("should return true for a palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    })
    it("should return true for a mixed-case palindrome", function() {
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    });
    it("should return true for a palindrome with punctuation", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    })
    it("should return false when all non alpha characters", function() {
      let nonAlpha = new Phrase("1234.56");
      assert(!nonAlpha.palindrome());
    })
  })
  describe("#letters", function() {
    it("should only return letters", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(),"MadamImAdam");
    })
    it("should return the empty string on no match", function() {
      let noLetters = new Phrase("1234.56");
      assert.strictEqual(noLetters.letters(), "");
    })
  })
})
