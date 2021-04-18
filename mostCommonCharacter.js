/**
 * Most Commonly Used Character in String
 * 
 * Write a function that takes a string, and returns the character that is most commonly used in the string.
 * 
 * @author 5antos#4876
 * @param {string} string String to check
 * @returns {string} The single character that shows up the most in the provided string
 */

function getMostCommonCharacter(string) {
  const chars = {}
  for(var i = 0; i < string.length; i++) {
    if (!chars[string[i]])
      chars[string[i]] = { char: string[i], count: 0 }
    chars[string[i]].count++
  }
  return Object.entries(chars).sort((a,b) => b[1].count - a[1].count)[0][1].char
}
