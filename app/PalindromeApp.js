const bunyan = require('bunyan'),
  formatOut = require('bunyan-format')({outputMode: 'short'}),
  log = bunyan.createLogger({name: 'PalindromeApp', stream: formatOut, level: 'info'})

const Combinatorics = require('js-combinatorics'),

  PalindromeService = require('../services/PalindromeService')

const countPalindromes = (list) => {

  try {

    if(list === [] || list === null || list.length < 2) return {count: 0, combinations: []}

    let count = 0

    /**
     * ez-mode - use a library
     * useful for checking my work.
     */
    let cmb = Combinatorics.permutationCombination(list)
    let combinations = []

    /**
     * no one ever did this before mode. i could write a janky version myself that would work but would not approach the best
     * out there on the internet
     */
    cmb = permutationCombination(list)

    cmb.map((combination) => {
      // you must have at least one friend to count combinations
      const isAlphaPrime = PalindromeService.isAlphaCharPalindrome(combination.join(''))
      if (combination.length > 1 && isAlphaPrime) {
        combinations.push(combination)
        count++
      }
    })

    return {count,combinations}

  } catch (e) {
    // return negative count to indicate an error
    log.info(`Error: ${e}`)
    return {count: -1, combinations: []}
  }

}

/**
 * two step process w/conditional
 *  - construct a list of all possible permutations
 *  - for each permutations count the possible combinations
 *    - if the permutation is a palindrome, count++
 */
const permutationCombination = (list) => {
  let combinationWords = combinations(list)
  let results = []
  combinationWords.map((combination) => {
    let permutationWords = permutations(combination)
    permutationWords.map((permutation) => {
      results.push(permutation)
    })
  })

  return results
}

/**
 * adapted from:
 *    http://js-algorithms.tutorialhorizon.com/2015/10/23/combinations-of-an-array/
 * because it's a very interesting way to use bitwise operations and fun math, and not recursion
 */
const combinations = (words) => {

  let i, j, temp
  let result = []
  let arrLen = words.length
  let power = Math.pow
  let combinations = power(2, arrLen)

  for (i = 0; i < combinations;  i++) {
    temp = []

    for (j = 0; j < arrLen; j++) {
      if ((i & power(2, j))) {
        temp.push(words[j])
      }
    }

    result.push(temp)
  }
  return result
}

/**
 * borrowed from my stack overflow friends:
 *    https://stackoverflow.com/revisions/37580979/8
 * Of note is that this is heap's implementation which according to :
 *    http://homepage.math.uiowa.edu/~goodman/22m150.dir/2007/Permutation%20Generation%20Methods.pdf
 * offers among the best performance in terms of time and space complexity
 * Cool!
 */

const permutations = (permutation) =>  {
  let length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

module.exports = {
  countPalindromes,
  permutationCombination
}