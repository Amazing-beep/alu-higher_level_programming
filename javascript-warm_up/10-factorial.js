#!/usr/bin/node
const arg = process.argv[2];
const num = parseInt(arg);

function factorial(n) {
  // Base case: Factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  // Recursive step for positive n
  return n * factorial(n - 1);
}

if (isNaN(num)) {
  console.log(1); // Factorial of NaN is 1
} else if (num < 0) {
  // For negative numbers, do nothing (no output as per example)
} else {
  // For non-negative integers, compute and print factorial
  console.log(factorial(num));
}
