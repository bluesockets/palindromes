const PalindromeApp = require('../app/PalindromeApp')


describe("Palindrome Count Suite", () => {

  it(`["tom", "mot"] counts 2 `, () => {

    let list = ["tom", "mot"];
    expect(PalindromeApp.countPalindromes(list).count).toEqual(2)

  });

  it(`["tom", "mot", "harry"] counts 2 `, () => {

    let list = ["tom", "mot", "harry"];
    expect(PalindromeApp.countPalindromes(list).count).toEqual(2)

  });

  it(`["tom"] counts 0 `, () => {

    let list = ["tom"];
    expect(PalindromeApp.countPalindromes(list).count).toEqual(0)

  });

  it(`["tom", "mot", "madam"] counts 8 `, () => {

    let list = ["tom", "mot", "madam"];
    expect(PalindromeApp.countPalindromes(list).count).toEqual(4)

  });

  it(`["madam", "alula"] counts 0 `, () => {

    let list = ["madam", "alula"];
    expect(PalindromeApp.countPalindromes(list).count).toEqual(0)

  });


  it(`["madam","madam"] counts 2 `, () => {

    let list = ["madam","madam"];
    expect(PalindromeApp.countPalindromes(list).count).toEqual(2)

  });


  it(`["madam"] counts 0 `, () => {

    let list = ["madam"];
    expect(PalindromeApp.countPalindromes(list).count).toEqual(0)

  });

  it(`["madam"] counts 0 `, () => {

    let list = ["madam"];
    expect(PalindromeApp.countPalindromes(list).count).toEqual(0)

  });

  it(`[] counts 0 `, () => {

    let list = [];
    expect(PalindromeApp.countPalindromes(list).count).toEqual(0)

  });

  it(`null counts 0 `, () => {

    let list = null;
    expect(PalindromeApp.countPalindromes(list).count).toEqual(0)

  });


});