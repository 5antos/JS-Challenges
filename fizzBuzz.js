/**
 * Fizz buzz
 * 
 * Write a function that logs the numbers from 1 to n, where n is the integer the function takes as its parameter.
 * Logs fizz instead of the number for multiples of 3.
 * Logs buzz instead of the number for multiples of 5.
 * Logs fizzbuzz for numbers that are multiples of both 3 and 5.
 * 
 * @author 5antos#4876
 * @param {number} n Range
 * @returns {void}
 */

function fizzBuzz(n) {
  for (var i = 1; i <= n; i++)
    console.log((i % 3 === 0 ? 'fizz':'') + (i % 5 === 0 ? 'buzz':'') || i)
}
