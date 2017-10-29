
let isAlphaCharPalindrome = (word) => {
  return (word.match(/^[A-Za-z]+$/) !== null && isPalindrome(word))
}

let isPalindrome = (word) => {
  try {
    if(word.length === 0) return false
    let reverse = word.toLowerCase().split("").reverse().join("")
    return word.toLowerCase() === reverse
  } catch(e) {
    // if word is not a conforming data structure like a String, then it's not a palindrome.
    // this could be made generic and assess if ANY array is also a palindrome, but given the domain space i'm okay with that tech debt.
    return false
  }

}

module.exports = {
  isPalindrome,
  isAlphaCharPalindrome
}