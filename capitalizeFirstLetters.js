/**
 * Coding Challenge #11 - Capitalize First Letters
 * 
 * Write a function that takes a string as argument and returns that string with the first letter of every word capitalized.
 * 
 * @author 5antos#4876
 * @param {number} string String
 * @returns {number} String with the first letter of every word capitalized
 */

 function capitalizeFirstLetters(string) {
  return (' '+string).replace(/\s[a-z]/gi, r => r.toUpperCase()).trimStart()
}
