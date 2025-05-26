#!/usr/bin/node
const args = process.argv.slice(2);

if (args.length <= 1) {
  console.log(0);
} else {
  const numbers = args.map(arg => parseInt(arg));
  // Sort in descending order to easily find the second largest
  numbers.sort((a, b) => b - a);
  // The second element in the sorted array is the second biggest
  console.log(numbers[1]);
}
