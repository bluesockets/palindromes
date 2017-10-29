const PalindromeApp = require('../app/PalindromeApp')


describe("Palindrome Count Suite", () => {

  it(`["one", "two", "three", "four"] returns 0`, () => {

    let words = ["one", "two", "three", "four"]
    expect(PalindromeApp.countPalindromes(words).count).toEqual(0)

  });

  it(`[] returns 0`, () => {

    let words = []
    expect(PalindromeApp.countPalindromes(words).count).toEqual(0)

  });

  it(`null returns 0`, () => {

    let words = null
    expect(PalindromeApp.countPalindromes(words).count).toEqual(0)

  });

  it(`["Gimli","Ilmig"] returns 2`, () => {

    let words = ["Gimli","Ilmig"]
    expect(PalindromeApp.countPalindromes(words).count).toEqual(2)

  });

  it(`["Gimli","Fili","Ilif","Ilmig","Mark"] returns 12`, () => {

    let words = ["Gimli","Fili","Ilif","Ilmig","Mark"]
    expect(PalindromeApp.countPalindromes(words).count).toEqual(12)

  });

  it(`["Gimli","Ilmig"] returns 2`, () => {

    let words = ["Gimli","Ilmig"]
    expect(PalindromeApp.countPalindromes(words).count).toEqual(2)

  });

  it(`["madam"] returns 1`, () => {

    let words = ["madam"]
    expect(PalindromeApp.countPalindromes(words).count).toEqual(0)

  });


});