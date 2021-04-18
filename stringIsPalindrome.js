/**
 * Coding Challenge #4 - String Permutation is Palindrome?
 * 
 * Given a string, write a function that will return whether or not that string is a palindrome.
 * 
 * ?: A string is a palindrome if it reads the same backward as forward
 * 
 * @author 5antos#4876
 * @param {string} string String to check
 * @returns {boolean} Whether or not the provided string is a palindrome
 */

function isPalindrome(string) {
  return string.toLowerCase() === string.split('').reverse().join('').toLowerCase()
}
