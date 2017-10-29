const PalindromeService = require('../services/PalindromeService')


describe("Palindrome Suite", () => {

  it(`"madam" is a palindrome`, () => {

    let word = "madam";
    expect(PalindromeService.isPalindrome(word)).toEqual(true)

  });

  it(`"madam" is a letter only palindrome`, () => {

    let word = "madam";
    expect(PalindromeService.isAlphaCharPalindrome(word)).toEqual(true)

  });

  it(`"ma;am" is not a letter only palindrome`, () => {

    let word = "ma;am";
    expect(PalindromeService.isAlphaCharPalindrome(word)).toEqual(false)

  });

  it(`"ma;am" is a palindrome`, () => {

    let word = "ma;am";
    expect(PalindromeService.isPalindrome(word)).toEqual(true)

  });

  it(`"Saippuakivikauppias" is a palindrome`, () => {

    let word = "Saippuakivikauppias";
    expect(PalindromeService.isPalindrome(word)).toEqual(true)

  });

  it(`"123321" is a palindrome`, () => {

    let word = "123321";
    expect(PalindromeService.isPalindrome(word)).toEqual(true)

  });

  it(`"1234321" is a palindrome`, () => {

    let word = "1234321";
    expect(PalindromeService.isPalindrome(word)).toEqual(true)

  });

  it(`"123421" is not a palindrome`, () => {

    let word = "123421";
    expect(PalindromeService.isPalindrome(word)).toEqual(false)

  });

  it(`"name" is not a palindrome`, () => {

    let word = "name";
    expect(PalindromeService.isPalindrome(word)).toEqual(false)

  });

  it(`"" is not a palindrome`, () => {

    let word = "";
    expect(PalindromeService.isPalindrome(word)).toEqual(false)

  });

  it(`{'name':'randomObject'} is not a palindrome`, () => {

    let word = {'name':'randomObject'};
    expect(PalindromeService.isPalindrome(word)).toEqual(false)

  });

  it(`"" is not a palindrome`, () => {

    let word = {'name':'randomObject'};
    expect(PalindromeService.isPalindrome(word)).toEqual(false)

  });


});