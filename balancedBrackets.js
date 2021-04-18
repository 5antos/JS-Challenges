/**
 * Coding Challenge #5 - Balanced Brackets
 * 
 * Given a string possibly containing three types of braces ({}, [], ()),
 * write a function that returns a Boolean indicating whether the given string contains a valid nesting of braces.
 * 
 * !: A string is considered balanced if it has as many opening brackets of a given type as it has closing brackets of that same type.
 *    No bracket can be left unmatched.
 *    A closing bracket also cannot match a corresponding opening bracket that comes after it.
 *    Brackets also cannot overlap each other.
 * 
 * @author 5antos#4876
 * @param {string} string String to check
 * @returns {boolean} Whether or not the provided string has balanced brackets
 */

function hasBalancedBrackets(string) {
  const brackets = { '}': '{', ']': '[', ')': '(' }
  let stack = []

  for (var i = 0; i < string.length; i++) {
    if (Object.values(brackets).includes(string[i]))
      stack.push(string[i])
    else if (Object.keys(brackets).includes(string[i])) {
      if (stack[stack.length-1] !== brackets[string[i]])
        return false
      stack = stack.slice(0, stack.length-1)
    }
  }
  return stack.length === 0
}
