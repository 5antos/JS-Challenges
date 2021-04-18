/**
 * Armstrong Numbers
 * 
 * An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits.
 * Determine if the input number is an Armstrong number.
 * Return either true or false.
 * 
 * *: Generic: aⁿ + bⁿ + cⁿ + dⁿ = abcd, where n = number of digits
 * *: Example: 1³ + 5³ + 3³ = 153, n = 3
 * 
 * @author 5antos#4876
 * @param {number} num Number to check
 * @returns {boolean} Whether or not the provided number is an Armstrong number
 */

function isArmstrongNumber(num) {
  const str = ''+num
  const { length } = str
  return num === str.split('').reduce((acc, curr) => acc + (+curr)**length, 0)
}
