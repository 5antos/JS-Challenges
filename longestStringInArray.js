/**
 * Longest String in Array
 * 
 * Write a function that accepts an array of strings.
 * Return the longest string.
 * 
 * @author 5antos#4876
 * @param {string[]} strings Array of strings
 * @returns {string} Longest string from the provided array
 */

function getLongestString(strings) {
  let longest = '';
  for (var i = 0; i < strings.length; i++)
    if (strings[i].length > longest.length)
      longest = strings[i]
  return longest
}
