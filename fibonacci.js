/**
 * Fibonacci
 * 
 * Write a function that returns the nth entry in the Fibonacci sequence, where n is a number passed in as argument to the function.
 * 
 * ?: A Fibonacci sequence is an ordering of numbers where each number is the sum of the preceding two.
 *    For example, the first ten numbers of the Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * @author 5antos#4876
 * @param {number} n Entry number (index-based)
 * @returns {number} nth entry in the Fibonnaci sequence
 */

function fibonacci(n) {
  const entries = [0, 1]
  for (var i = 2; i < n; i++)
    entries[i] = entries[i-1] + entries[i-2]
  return entries[n]
}

// Recursive version (preferred)
function fibonacci(n) {
  return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2)
}
