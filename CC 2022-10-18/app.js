// **The Fibbonacci numbers, commonly denoted F(n), form a sequence, called the Fibbonacci sequence, such that each num is the sum of the two preceding ones, starting from 0 and 1. That is,

//F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n-2), for n > 1.
// Given n, calculate F(n).

// n = 5 => (5-1) + (5-2) => 7
// Fib(5) = the 4th number in the fib sequence + the 3rd number in the fib sequence
// n = 98 => (98-1) + (98-2) => 193
// n = 859 => (859-1) + (859-2) => 1715

// We will be given a number n. We want to start with the numbers above 1 (n > 1). We'll want to say that if n = 1, return 1, and if n = 0, return 0.

function fibb(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
//i is the current index of the array you are setting, it creates arr[2] by adding arr[1] and arr[0] then creates arr[3] by adding arr[2] and arr[1] up to arr[n]

function fibb(n) {
  let num1 = 0;
  let num2 = 1;
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }
  return result;
}

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,

//Don't understand this literally at all woof

// Second attempt
