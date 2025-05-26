#!/usr/bin/node
const arg1 = process.argv[2];
const arg2 = process.argv[3];

function add(a, b) {
  return a + b;
}

const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

console.log(add(num1, num2));
