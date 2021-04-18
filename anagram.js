/**
 * Coding Challenge #3 - Two Strings Are Anagrams of Each Other
 * 
 * Create a function that takes in two strings as two parameters
 * and returns a boolean that indicates whether or not the first string is an anagram of the second string.
 * 
 * ?: An anagram is another word or phrase formed by rearranging letters of the first word or phrase.
 * 
 * @author 5antos#4876
 * @param {string} string1 First string
 * @param {string} string2 Second string
 * @returns {boolean} Whether or not the provided strings are anagrams of each other
 */

function areAnagram(string1, string2) {
  if (string1.length !== string2.length) return false

  return string1.split('').sort().join('').toLowerCase() === string2.split('').sort().join('').toLowerCase()
}
