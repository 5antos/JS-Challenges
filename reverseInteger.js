/**
 * Coding Challenge #10 - Reverse Integers
 * 
 * Write a function that takes an integer as argument and returns that integer but reversed.
 * 
 * @author 5antos#4876
 * @param {number} num Number to reverse
 * @returns {number} Reversed number
 */

function reverseInt(num) {
  return (''+num).split('').reduce((acc, curr, i, arr) => acc + (+curr)*(10**i), 0)
}
