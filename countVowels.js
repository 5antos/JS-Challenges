/**
 * Find the Vowels
 * 
 * Write a function that takes a string as argument and returns the number of vowels contained in that string.
 * 
 * @author 5antos#4876
 * @param {string} string String to check
 * @returns {number} Number of vowels contained in the provided string
 */

function getVowelsCount(string) {
  return string.replace(/[^aeiou]/g, '').length
}
